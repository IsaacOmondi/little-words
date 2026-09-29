/**
 * Flashcard / Explore View Component
 * Renders the main learning card with tactile squish physics and pronunciation
 */

import { getSVG } from '../data/svgs.js';
import { synthesizer } from '../audio/synthesizer.js';
import { speechManager } from '../audio/speech.js';

export class FlashcardComponent {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.onNext = options.onNext || (() => {});
    this.onPrev = options.onPrev || (() => {});
    this.currentItem = null;
  }

  // Render a specific learning item on the hero card
  render(item, direction = 'none') {
    if (!this.container || !item) return;
    this.currentItem = item;

    const svgContent = getSVG(item.svgKey, item.themeColor);

    // Dynamic animation class based on swipe/arrow direction
    let animClass = 'animate-bounce-in';
    if (direction === 'next') animClass = 'slide-in-right';
    if (direction === 'prev') animClass = 'slide-in-left';

    this.container.innerHTML = `
      <div class="flashcard-stage">
        <!-- Previous Button -->
        <button type="button" class="nav-arrow-btn" id="btn-card-prev" title="Previous Item" aria-label="Previous Item">
          <span>👈</span>
        </button>

        <!-- Main Hero Card -->
        <div class="flashcard ${animClass}" id="hero-card" style="border-color: ${item.themeColor}33;">
          <!-- Category / Type Badge -->
          <div class="card-badge" style="background: ${item.themeColor}15; color: ${item.themeColor};">
            <span>${item.categoryId}</span>
          </div>

          <!-- Vector Graphic -->
          <div class="card-graphic">
            <div class="card-svg-container">
              ${svgContent}
            </div>
          </div>

          <!-- Card Typography -->
          <div class="card-text-container">
            <h2 class="card-title" style="color: ${item.themeColor};">${item.label}</h2>
            <p class="card-subtitle">${item.subLabel}</p>
            ${item.phonics ? `<span class="card-phonics">${item.phonics}</span>` : ''}
          </div>

          <!-- Tap to Speak Prompt -->
          <div class="card-action-prompt">
            <span>🔊</span>
            <span>Tap to hear!</span>
          </div>
        </div>

        <!-- Next Button -->
        <button type="button" class="nav-arrow-btn" id="btn-card-next" title="Next Item" aria-label="Next Item">
          <span>👉</span>
        </button>
      </div>
    `;

    this.attachEvents();
  }

  // Attach interactive click and touch listeners
  attachEvents() {
    const heroCard = document.getElementById('hero-card');
    const btnPrev = document.getElementById('btn-card-prev');
    const btnNext = document.getElementById('btn-card-next');

    if (heroCard) {
      heroCard.addEventListener('pointerdown', () => this.handleCardInteraction());
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        synthesizer.playBubble();
        this.onPrev();
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        synthesizer.playBubble();
        this.onNext();
      });
    }
  }

  // Handle tap on the main hero card
  handleCardInteraction() {
    if (!this.currentItem) return;

    const heroCard = document.getElementById('hero-card');
    if (heroCard) {
      // Re-trigger squish bounce animation
      heroCard.classList.remove('animate-squish', 'animate-bounce-in', 'slide-in-right', 'slide-in-left');
      void heroCard.offsetWidth; // Force CSS reflow
      heroCard.classList.add('animate-squish');
    }

    // Play procedural SFX
    synthesizer.play(this.currentItem.sfx || 'pop');

    // Pronounce text with Speech Synthesis
    speechManager.speak(this.currentItem.speechText || this.currentItem.label);
  }
}
