/**
 * Procedural Sound FX Synthesizer using Web Audio API
 * Zero external assets - all sounds generated mathematically in real-time
 */

class SoundSynthesizer {
  constructor() {
    this.audioContext = null;
    this.enabled = true;
    this.masterVolume = 0.3;
  }

  // Initialize AudioContext on first user interaction (browser autoplay policy)
  init() {
    if (this.audioContext) return;

    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Resume context if suspended (Safari/Chrome autoplay policy)
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }

  // Helper to create gain node with envelope
  createGainNode(attackTime, decayTime, sustainLevel, releaseTime) {
    if (!this.audioContext) return null;

    const gainNode = this.audioContext.createGain();
    const now = this.audioContext.currentTime;

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume, now + attackTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel * this.masterVolume, now + attackTime + decayTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + attackTime + decayTime + releaseTime);

    return gainNode;
  }

  // Pop Sound - Quick downward pitch sweep (button tap, card tap)
  playPop() {
    if (!this.enabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.createGainNode(0.001, 0.01, 0.5, 0.06);

    if (!gainNode) return;

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(500, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.08);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }

  // Twinkle / Sparkle Sound - Ascending pentatonic arpeggio (correct answer, star achievement)
  playTwinkle() {
    if (!this.enabled || !this.audioContext) return;

    const notes = [523.25, 659.25, 783.99, 987.77]; // C5, E5, G5, B5
    const baseTime = this.audioContext.currentTime;

    notes.forEach((freq, i) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.value = freq;

      const startTime = baseTime + (i * 0.05);
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.5, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.2);
    });
  }

  // Boing Sound - Triangle wave with vibrato (playful bounce, wiggle)
  playBoing() {
    if (!this.enabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.createGainNode(0.001, 0.02, 0.6, 0.25);

    if (!gainNode) return;

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(150, this.audioContext.currentTime + 0.3);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.35);
  }

  // Bubble Sound - Fast upward frequency sweep (navigation, category switch)
  playBubble() {
    if (!this.enabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.createGainNode(0.001, 0.01, 0.4, 0.08);

    if (!gainNode) return;

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(900, this.audioContext.currentTime + 0.08);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }

  // Cheer / Fanfare Sound - Harmonized major chord progression (quiz completion, big win)
  playCheer() {
    if (!this.enabled || !this.audioContext) return;

    const chords = [
      [261.63, 329.63, 392.00], // C major
      [329.63, 415.30, 493.88], // E major
      [392.00, 493.88, 587.33]  // G major
    ];
    const baseTime = this.audioContext.currentTime;

    chords.forEach((chord, i) => {
      const chordTime = baseTime + (i * 0.12);

      chord.forEach(freq => {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = freq;

        gainNode.gain.setValueAtTime(0, chordTime);
        gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.25, chordTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, chordTime + 0.4);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.start(chordTime);
        oscillator.stop(chordTime + 0.45);
      });
    });
  }

  // Play sound effect by name
  play(sfxName) {
    switch (sfxName) {
      case 'pop':
        this.playPop();
        break;
      case 'twinkle':
        this.playTwinkle();
        break;
      case 'boing':
        this.playBoing();
        break;
      case 'bubble':
        this.playBubble();
        break;
      case 'cheer':
        this.playCheer();
        break;
      default:
        this.playPop();
    }
  }
}

export const synthesizer = new SoundSynthesizer();
