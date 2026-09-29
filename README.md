# 🎈 Little Words: Toddler Learning & Practice Web App

A playful, vivid, and multisensory web application designed for toddlers (ages 1–4) and their guardians to learn and practice vocabulary, phonics, colors, shapes, animals, everyday objects, body parts, and social greetings.

---

## 🚀 How to Run

### Method 1: Local Web Server (Recommended)
This runs the clean, modular version (`index.html`) using standard ES6 JavaScript modules.

1. Open your terminal and navigate to the project folder:
   ```bash
   cd /path/to/toddler-learning
   ```
2. Start the local server:
   - **Using Python** (built-in on macOS & Linux):
     ```bash
     python3 -m http.server 8080
     ```
   - **Or using Node.js**:
     ```bash
     npx serve .
     ```
3. Open **[http://localhost:8080](http://localhost:8080)** in your web browser.

---

### Method 2: Standalone File (Zero Setup / Offline)
If you want to send someone a single file to double-click and open directly without needing a terminal or web server:
- Open **`artifact.html`** directly in Chrome, Safari, Edge, or Firefox.
- All styles, vector SVGs, audio synthesis, and logic are 100% inlined with zero external dependencies and no CORS restrictions.

---

## ✨ Features

- **7 Core Learning Categories**:
  - 🔤 **Letters & Phonics**: A to Z with uppercase/lowercase letters, phonetic words, and illustrations.
  - 🎨 **Colors**: 10 distinct, vibrant colors with real-world associations.
  - 🔷 **Shapes**: 8 geometric shapes with smiling kawaii expressions.
  - 🐶 **Animals**: 12 friendly creatures with onomatopoeia sounds (*"Woof woof!"*, *"Moo moo!"*).
  - 🧸 **Everyday Objects**: Familiar household items (Cup, Spoon, Shoes, Ball, Car, etc.).
  - 👀 **Body Parts**: Interactive cues for eyes, nose, mouth, hands, tummy, and more.
  - 💬 **Greetings**: Essential polite phrases (*Hello*, *Bye-bye*, *Please*, *Thank You*).
- **Two Interactive Modes**:
  - **👀 Explore Mode**: Large, tactile flashcards with bounce/squish spring animations, sound effects, and pronunciation.
  - **🎯 Find It! Game**: Gentle 3-choice auditory recognition game with celebratory confetti bursts, fanfare, and non-punitive wiggles.
- **👶 Toddler Keyboard Slam Support**:
  - Pressing **A–Z** automatically jumps straight to that letter card.
  - Pressing **Spacebar** repeats the sound or triggers a sparkling celebration.
  - Pressing **Arrow Keys** (Left/Right/Up/Down) navigates cards.
  - Banging any random key produces cheerful bubble pops without breaking the app.
- **🛡️ Guardian Controls**:
  - Toggle **Sound FX** (Web Audio synthesized pops, chimes, twinkles, and bubbles).
  - Toggle **Voice Speech** (browser speech synthesis with toddler pacing; guardians can turn it off to speak the words themselves).
  - **Fullscreen button** for distraction-free toddler play.
- **Zero Assets & Zero Dependencies**: 100% vector SVGs and procedural Web Audio API synthesis—no external image or MP3 downloads required!

---

## 🎮 How to Play with Your Toddler

1. **Unlock Audio**: Click **"Start Playing! 🚀"** on the welcome screen to initialize browser sound.
2. **Explore Together**:
   - Tap any card to hear the sound effect and pronunciation.
   - Use the category bar at the top to jump between topics anytime.
3. **Play "Find It!"**:
   - Switch to the **Find It!** tab.
   - The app asks a question (e.g., *"Can you find the Red Circle?"*).
   - Let your child tap the matching card to trigger confetti showers and collect stars ⭐!
4. **Keyboard Play**: Place your laptop in front of your toddler and let them press letter keys or spacebar for instant multisensory feedback.

---

## 🛠️ Project Structure

```text
toddler-learning/
├── index.html              # Main HTML entry point (runs via local server)
├── artifact.html           # Standalone bundle (runs standalone / offline)
├── README.md               # Documentation & usage guide
├── css/
│   ├── main.css            # Layout, typography, color tokens & guardian toolbar
│   ├── animations.css      # Spring physics, squish, wiggle, and celebration keyframes
│   └── components.css      # Flashcard hero, quiz grid, and navigation styling
└── js/
    ├── app.js              # Application coordinator & state manager
    ├── data/
    │   ├── content.js      # Full catalog of learning items across all 7 categories
    │   └── svgs.js         # Scalable vector graphics library
    ├── audio/
    │   ├── synthesizer.js  # Procedural Web Audio API sound effects (pops, fanfare, sparkles)
    │   └── speech.js       # Web Speech API wrapper with toddler articulation pacing
    ├── components/
    │   ├── flashcard.js    # Flashcard view renderer & touch handlers
    │   └── quiz.js         # "Find It!" game engine
    └── utils/
        └── keyboard.js     # Toddler keyboard slam & shortcut handler
```

---

## 📱 Device Compatibility

- **Desktop & Laptop**: Mac, Windows, Linux, Chromebooks.
- **Tablets & iPads**: Touch-friendly with large buttons (≥64px touch targets).
- **Mobile Phones**: Responsive layouts adapted for phone screens (minimum width ~400px).
- **Browsers**: Chrome, Safari, Edge, Firefox, Brave, and Chromium-based mobile browsers.

---

## 📄 License

MIT License — Feel free to use, customize, and share this with other parents, educators, and kids!
