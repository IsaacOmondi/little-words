/**
 * Application Coordinator & Main Entry Point
 * Orchestrates views, state management, guardian toolbar, and audio lifecycle
 */

import { CATEGORIES, LEARNING_ITEMS } from './data/content.js';
import { synthesizer } from './audio/synthesizer.js';
import { speechManager } from './audio/speech.js';
import { FlashcardComponent } from './components/flashcard.js';
import { QuizComponent } from './components/quiz.js';
import { confettiEngine } from './components/confetti.js';
import { ToddlerKeyboardHandler } from './utils/keyboard.js';

class ToddlerApp {
  constructor() {
    this.state = {
      activeCategory: 'letters',
      activeMode: 'learn', // 'learn' | 'quiz'
      currentIndex: 0,
      starsCount: 0,
      soundEnabled: true,
      speechEnabled: true
    };

    this.flashcard = new FlashcardComponent('flashcard-view', {
      onNext: () => this.nextItem(),
      onPrev: () => this.prevItem()
    });

    this.quiz = new QuizComponent('quiz-view', {
      onScore: () => this.incrementStars()
    });
    this.quiz.setOnAdvance(() => this.nextQuizRound());

    this.keyboard = new ToddlerKeyboardHandler(this);

    this.init();
  }

  init() {
    this.renderCategoryNav();
    this.attachHeaderEvents();
    this.attachWelcomeOverlay();
    this.updateView();
  }

  // Get filtered items for currently selected category
  getCurrentCategoryItems() {
    return LEARNING_ITEMS.filter(item => item.categoryId === this.state.activeCategory);
  }

  // Get currently active item in flashcard mode
  getCurrentItem() {
    const items = this.getCurrentCategoryItems();
    return items[this.state.currentIndex] || items[0];
  }

  // Render Category Navigation Bar Buttons
  renderCategoryNav() {
    const nav = document.getElementById('category-nav');
    if (!nav) return;

    nav.innerHTML = CATEGORIES.map(cat => {
      const isActive = cat.id === this.state.activeCategory;
      return `
        <button type="button"
                class="cat-btn ${isActive ? 'active' : ''}"
                data-id="${cat.id}"
                style="${isActive ? `background: ${cat.themeColor}; box-shadow: 0 8px 20px ${cat.themeColor}55;` : ''}">
          <span class="cat-icon">${cat.icon}</span>
          <span class="cat-label">${cat.label}</span>
        </button>
      `;
    }).join('');

    // Attach click events to category pills
    nav.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId = btn.getAttribute('data-id');
        this.selectCategory(catId);
      });
    });
  }

  // Switch Category
  selectCategory(catId) {
    if (this.state.activeCategory === catId) return;

    synthesizer.playBubble();
    this.state.activeCategory = catId;
    this.state.currentIndex = 0;

    const catObj = CATEGORIES.find(c => c.id === catId);
    if (catObj && this.state.speechEnabled) {
      speechManager.speak(`Let's explore ${catObj.label}!`);
    }

    this.renderCategoryNav();
    this.updateView();
  }

  // Select Category by numeric index (for keyboard shortcut 1-7)
  selectCategoryByIndex(index) {
    if (index >= 0 && index < CATEGORIES.length) {
      this.selectCategory(CATEGORIES[index].id);
    }
  }

  // Next Item in Flashcard Mode
  nextItem() {
    const items = this.getCurrentCategoryItems();
    this.state.currentIndex = (this.state.currentIndex + 1) % items.length;
    this.updateView('next');
  }

  // Previous Item in Flashcard Mode
  prevItem() {
    const items = this.getCurrentCategoryItems();
    this.state.currentIndex = (this.state.currentIndex - 1 + items.length) % items.length;
    this.updateView('prev');
  }

  // Jump to specific letter (for A-Z keyboard smash)
  jumpToLetter(char) {
    if (this.state.activeCategory !== 'letters') {
      this.state.activeCategory = 'letters';
      this.renderCategoryNav();
    }

    const items = this.getCurrentCategoryItems();
    const index = items.findIndex(item => item.id === `letter-${char}`);

    if (index !== -1) {
      this.state.currentIndex = index;
      this.setMode('learn');
      this.updateView();
      this.flashcard.handleCardInteraction();
    }
  }

  // Repeat Audio for current card (Spacebar)
  repeatActiveAudio() {
    if (this.state.activeMode === 'learn') {
      this.flashcard.handleCardInteraction();
    } else {
      this.quiz.speakPrompt();
    }
  }

  // Next Quiz Round
  nextQuizRound() {
    const categoryItems = this.getCurrentCategoryItems();
    this.quiz.startNewRound(LEARNING_ITEMS, categoryItems);
  }

  // Increment Star Counter with Animation
  incrementStars() {
    this.state.starsCount += 1;
    const numEl = document.getElementById('star-count-num');
    const counterEl = document.getElementById('stars-counter');

    if (numEl) numEl.textContent = this.state.starsCount;
    if (counterEl) {
      counterEl.classList.remove('pulse');
      void counterEl.offsetWidth; // Reflow
      counterEl.classList.add('pulse');
    }
  }

  // Switch between "Explore" and "Find It!" modes
  setMode(mode) {
    if (this.state.activeMode === mode) return;

    synthesizer.playBubble();
    this.state.activeMode = mode;

    // Update Mode Buttons UI
    const btnLearn = document.getElementById('btn-mode-learn');
    const btnQuiz = document.getElementById('btn-mode-quiz');

    if (btnLearn && btnQuiz) {
      btnLearn.classList.toggle('active', mode === 'learn');
      btnLearn.setAttribute('aria-selected', mode === 'learn');
      btnQuiz.classList.toggle('active', mode === 'quiz');
      btnQuiz.setAttribute('aria-selected', mode === 'quiz');
    }

    const flashcardView = document.getElementById('flashcard-view');
    const quizView = document.getElementById('quiz-view');

    if (mode === 'learn') {
      flashcardView?.classList.remove('hidden');
      quizView?.classList.add('hidden');
      this.updateView();
    } else {
      flashcardView?.classList.add('hidden');
      quizView?.classList.remove('hidden');
      this.nextQuizRound();
    }
  }

  // Update Active Stage View
  updateView(direction = 'none') {
    if (this.state.activeMode === 'learn') {
      const item = this.getCurrentItem();
      this.flashcard.render(item, direction);
    } else {
      this.nextQuizRound();
    }
  }

  // Attach Guardian Controls & Header Toolbar Events
  attachHeaderEvents() {
    // Mode Switcher Buttons
    document.getElementById('btn-mode-learn')?.addEventListener('click', () => this.setMode('learn'));
    document.getElementById('btn-mode-quiz')?.addEventListener('click', () => this.setMode('quiz'));

    // Sound FX Toggle Button
    const btnSfx = document.getElementById('btn-toggle-sfx');
    const sfxIcon = document.getElementById('sfx-icon');
    btnSfx?.addEventListener('click', () => {
      this.state.soundEnabled = !this.state.soundEnabled;
      synthesizer.setEnabled(this.state.soundEnabled);

      btnSfx.classList.toggle('active', this.state.soundEnabled);
      btnSfx.classList.toggle('muted', !this.state.soundEnabled);
      btnSfx.setAttribute('aria-pressed', this.state.soundEnabled);
      if (sfxIcon) sfxIcon.textContent = this.state.soundEnabled ? '🔔' : '🔕';

      if (this.state.soundEnabled) synthesizer.playPop();
    });

    // Voice Speech Toggle Button
    const btnSpeech = document.getElementById('btn-toggle-speech');
    const speechIcon = document.getElementById('speech-icon');
    btnSpeech?.addEventListener('click', () => {
      this.state.speechEnabled = !this.state.speechEnabled;
      speechManager.setEnabled(this.state.speechEnabled);

      btnSpeech.classList.toggle('active', this.state.speechEnabled);
      btnSpeech.classList.toggle('muted', !this.state.speechEnabled);
      btnSpeech.setAttribute('aria-pressed', this.state.speechEnabled);
      if (speechIcon) speechIcon.textContent = this.state.speechEnabled ? '🗣️' : '🤫';

      if (this.state.speechEnabled) {
        speechManager.speak("Voice is on!");
      }
    });

    // Fullscreen Toggle Button
    document.getElementById('btn-toggle-fullscreen')?.addEventListener('click', () => {
      synthesizer.playBubble();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // Unlock audio and hide welcome modal on initial user interaction
  attachWelcomeOverlay() {
    const overlay = document.getElementById('welcome-overlay');
    const btnStart = document.getElementById('btn-start');

    const unlockAndStart = () => {
      synthesizer.init();
      synthesizer.playTwinkle();
      confettiEngine.burst(window.innerWidth / 2, window.innerHeight / 2, 80);

      if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => overlay.remove(), 500);
      }

      if (this.state.speechEnabled) {
        speechManager.speak("Welcome! Let's learn words together!");
      }
    };

    btnStart?.addEventListener('click', unlockAndStart);
    overlay?.addEventListener('pointerdown', (e) => {
      if (e.target === overlay) unlockAndStart();
    });
  }
}

// Bootstrap application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.toddlerApp = new ToddlerApp();
});
