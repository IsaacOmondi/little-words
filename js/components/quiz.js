/**
 * "Find It!" Interactive Quiz Component
 * Prompts toddlers with auditory and visual challenges in a playful, non-punitive way
 */

import { getSVG } from '../data/svgs.js';
import { synthesizer } from '../audio/synthesizer.js';
import { speechManager } from '../audio/speech.js';
import { confettiEngine } from './confetti.js';

export class QuizComponent {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.onScore = options.onScore || (() => {});
    this.targetItem = null;
    this.choices = [];
    this.isLocked = false;
  }

  // Generate and render a new question round
  startNewRound(allItems, categoryItems) {
    if (!this.container || !categoryItems || categoryItems.length === 0) return;
    this.isLocked = false;

    // Pick target item from active category
    const targetIndex = Math.floor(Math.random() * categoryItems.length);
    this.targetItem = categoryItems[targetIndex];

    // Pick 2 distinct distractors from category or all items
    const distractors = [];
    const pool = categoryItems.length >= 3 ? categoryItems : allItems;

    while (distractors.length < 2) {
      const candidate = pool[Math.floor(Math.random() * pool.length)];
      if (candidate.id !== this.targetItem.id && !distractors.find(d => d.id === candidate.id)) {
        distractors.push(candidate);
      }
    }

    // Shuffle choices array
    this.choices = [this.targetItem, ...distractors].sort(() => Math.random() - 0.5);

    this.render();
    this.speakPrompt();
  }

  // Render the quiz stage
  render() {
    if (!this.container || !this.targetItem) return;

    this.container.innerHTML = `
      <div class="quiz-stage">
        <!-- Spoken Question Prompt Header -->
        <div class="quiz-prompt-card" id="quiz-prompt">
          <button type="button" class="quiz-speaker-btn" id="btn-repeat-prompt" title="Listen again">
            <span>🔊</span>
          </button>
          <div class="quiz-prompt-content">
            <span class="quiz-prompt-sub">Can you find?</span>
            <h2 class="quiz-prompt-title" style="color: ${this.targetItem.themeColor};">
              ${this.targetItem.label} (${this.targetItem.subLabel})
            </h2>
          </div>
        </div>

        <!-- Choice Cards Grid -->
        <div class="quiz-grid">
          ${this.choices.map((item, index) => `
            <div class="quiz-choice-card" data-id="${item.id}" id="choice-${index}" style="border-color: ${item.themeColor}22;">
              <div class="quiz-choice-svg">
                ${getSVG(item.svgKey, item.themeColor)}
              </div>
              <div class="quiz-choice-label" style="color: ${item.themeColor};">
                ${item.label}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  // Speak the question prompt
  speakPrompt() {
    if (!this.targetItem) return;
    const promptText = `Can you find the ${this.targetItem.label}? ${this.targetItem.subLabel}`;
    speechManager.speak(promptText);
  }

  // Attach choice card click listeners
  attachEvents() {
    const promptCard = document.getElementById('quiz-prompt');
    const repeatBtn = document.getElementById('btn-repeat-prompt');

    if (promptCard || repeatBtn) {
      const handler = () => {
        synthesizer.playBubble();
        this.speakPrompt();
      };
      if (promptCard) promptCard.addEventListener('click', handler);
      if (repeatBtn) repeatBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handler();
      });
    }

    const cards = this.container.querySelectorAll('.quiz-choice-card');
    cards.forEach(card => {
      card.addEventListener('pointerdown', (e) => {
        const itemId = card.getAttribute('data-id');
        this.handleChoiceSelection(itemId, card, e);
      });
    });
  }

  // Handle choice selection with reward or gentle retry
  handleChoiceSelection(selectedId, cardElement, event) {
    if (this.isLocked) return;

    if (selectedId === this.targetItem.id) {
      // Correct Choice!
      this.isLocked = true;
      cardElement.classList.add('correct');

      // Play joyful celebratory fanfare
      synthesizer.playCheer();
      synthesizer.playTwinkle();

      // Launch confetti particle burst from the exact touch position
      const rect = cardElement.getBoundingClientRect();
      const burstX = event?.clientX ?? (rect.left + rect.width / 2);
      const burstY = event?.clientY ?? (rect.top + rect.height / 2);
      confettiEngine.burst(burstX, burstY, 70);

      // Spoken encouragement
      speechManager.speak(`Yay! You found the ${this.targetItem.label}! Great job!`);

      // Increment star count
      this.onScore();

      // Advance to next challenge after a celebration pause
      setTimeout(() => {
        this.onAdvance();
      }, 1800);

    } else {
      // Friendly Try Again (Non-Punitive)
      cardElement.classList.remove('incorrect');
      void cardElement.offsetWidth; // Trigger reflow
      cardElement.classList.add('incorrect');

      // Soft boing sound
      synthesizer.playBoing();

      const chosenItem = this.choices.find(c => c.id === selectedId);
      const chosenName = chosenItem ? chosenItem.label : 'that';
      speechManager.speak(`That's ${chosenName}! Can you find the ${this.targetItem.label}?`);
    }
  }

  setOnAdvance(callback) {
    this.onAdvance = callback;
  }
}
