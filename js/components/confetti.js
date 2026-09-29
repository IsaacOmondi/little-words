/**
 * Confetti Particle Engine
 * High-performance HTML5 Canvas celebration particles
 */

class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.isRunning = false;
    this.animationId = null;

    if (this.canvas) {
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  // Create a particle with random physics properties
  createParticle(x, y) {
    const colors = [
      '#EF4444', '#F59E0B', '#22C55E', '#3B82F6',
      '#A855F7', '#EC4899', '#06B6D4', '#F97316',
      '#FFD93D', '#6BCB77'
    ];
    const shapes = ['circle', 'square', 'star'];

    return {
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      size: Math.random() * 8 + 5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.25,
      drag: 0.98,
      opacity: 1,
      fadeSpeed: Math.random() * 0.015 + 0.005,
      life: 180
    };
  }

  // Launch a burst of confetti particles from a point
  burst(x = null, y = null, count = 60) {
    if (!this.canvas || !this.ctx) return;

    const centerX = x ?? this.canvas.width / 2;
    const centerY = y ?? this.canvas.height / 3;

    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(centerX, centerY));
    }

    if (!this.isRunning) {
      this.isRunning = true;
      this.animate();
    }
  }

  // Draw individual particle shape
  drawParticle(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;

    switch (p.shape) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'square':
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        break;
      case 'star':
        this.drawStar(ctx, 0, 0, 5, p.size, p.size / 2);
        break;
    }

    ctx.restore();
  }

  // Draw a five-pointed star
  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      let x = cx + Math.cos(rot) * outerRadius;
      let y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  // Animation loop
  animate() {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw each particle
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      // Physics update
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.fadeSpeed;
      p.life--;

      // Remove dead particles
      if (p.opacity <= 0 || p.life <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.drawParticle(p);
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.animate());
    } else {
      this.isRunning = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

export const confettiEngine = new ConfettiEngine('confetti-canvas');
