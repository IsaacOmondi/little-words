/**
 * Web Speech API Manager
 * Provides clear, toddler-friendly pronunciation with automatic voice selection
 */

class SpeechManager {
  constructor() {
    this.synth = window.speechSynthesis;
    this.enabled = true;
    this.currentUtterance = null;
    this.preferredVoice = null;
    this.rate = 0.85; // Slightly slower for toddler comprehension
    this.pitch = 1.15; // Slightly higher for friendly warmth
    this.volume = 1.0;

    // Wait for voices to load
    if (this.synth) {
      this.synth.addEventListener('voiceschanged', () => this.selectBestVoice());
      this.selectBestVoice();
    }
  }

  // Automatically select the best child-friendly voice
  selectBestVoice() {
    const voices = this.synth.getVoices();
    if (voices.length === 0) return;

    // Priority order for voice selection
    const preferredNames = [
      'Samantha', 'Karen', 'Victoria', // Apple natural voices
      'Google US English', 'Google UK English Female',
      'Microsoft Zira', 'Microsoft David'
    ];

    // Try to find a preferred voice
    for (const name of preferredNames) {
      const voice = voices.find(v => v.name.includes(name));
      if (voice) {
        this.preferredVoice = voice;
        return;
      }
    }

    // Fallback: first en-US or en-GB female voice
    this.preferredVoice = voices.find(v =>
      (v.lang.startsWith('en-US') || v.lang.startsWith('en-GB')) &&
      (v.name.toLowerCase().includes('female') || !v.name.toLowerCase().includes('male'))
    ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled && this.synth) {
      this.synth.cancel();
    }
  }

  // Cancel current speech (for rapid tapping)
  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  // Speak text with toddler-friendly settings
  speak(text, onEnd = null) {
    if (!this.enabled || !this.synth || !text) return;

    // Cancel any ongoing speech to prevent queue buildup
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.preferredVoice;
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    utterance.volume = this.volume;

    if (onEnd) {
      utterance.onend = onEnd;
    }

    utterance.onerror = (error) => {
      console.warn('Speech synthesis error:', error);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }
}

export const speechManager = new SpeechManager();
