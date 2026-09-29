/**
 * Toddler Keyboard & "Key Slam" Handler
 * Turns accidental or enthusiastic keyboard banging into joyful, multisensory rewards
 */

import { synthesizer } from '../audio/synthesizer.js';
import { confettiEngine } from '../components/confetti.js';

export class ToddlerKeyboardHandler {
  constructor(appContext) {
    this.app = appContext;
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    // Ignore modified keys (Ctrl, Alt, Meta/Cmd) to not break browser dev tools or shortcuts
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    const key = e.key.toLowerCase();

    // 1. Spacebar: Repeats active sound or triggers a sparkle celebration
    if (e.code === 'Space') {
      e.preventDefault();
      synthesizer.playTwinkle();
      confettiEngine.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
      this.app.repeatActiveAudio();
      return;
    }

    // 2. Left / Right Arrow Keys: Navigate Flashcards
    if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
      e.preventDefault();
      this.app.nextItem();
      return;
    }

    if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
      e.preventDefault();
      this.app.prevItem();
      return;
    }

    // 3. Letters A-Z: Jump straight to that Letter in the Letters Category
    if (key.length === 1 && key >= 'a' && key <= 'z') {
      e.preventDefault();
      this.app.jumpToLetter(key);
      return;
    }

    // 4. Number Keys 1-7: Jump to Category index
    if (key >= '1' && key <= '7') {
      e.preventDefault();
      const catIndex = parseInt(key, 10) - 1;
      this.app.selectCategoryByIndex(catIndex);
      return;
    }

    // 5. Any Other Key Slam: Play a cheerful bubble pop
    synthesizer.playPop();
  }
}
