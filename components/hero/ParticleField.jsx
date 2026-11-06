'use client';

import { useEffect, useRef } from 'react';

/**
 * Antigravity-inspired Custom Canvas Particle Field with Cursor Micro-Interaction
 *
 * Implements an organic, elliptical particle flow with device-pixel-ratio scaling,
 * dark/light mode dynamic adaptation, atmospheric variations, mouse gravitational repulsion,
 * reduced-motion compliance, and clean RAF lifecycle management.
 */
export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];
    const PARTICLE_COUNT = 85;

    // Interactive mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      active: false,
    };

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lightColors = [
      { r: 100, g: 87, b: 232 },   // M31A purple accent
      { r: 105, g: 110, b: 120 },  // Muted slate
      { r: 229, g: 72, b: 77 },    // Crimson accent
      { r: 150, g: 155, b: 165 },  // Light slate
    ];

    const darkColors = [
      { r: 135, g: 125, b: 255 },  // Luminous violet
      { r: 160, g: 175, b: 215 },  // Cool starlight
      { r: 255, g: 90, b: 100 },   // Luminous crimson
      { r: 110, g: 180, b: 255 },  // Electric azure
    ];

    let isDark = document.documentElement.classList.contains('dark');

    const getColors = () => (isDark ? darkColors : lightColors);

    class Particle {
      constructor(w, h, staticOnly = false) {
        this.reset(w, h, true, staticOnly);
      }

      reset(w, h, initial = false, staticOnly = false) {
        this.w = w;
        this.h = h;
        // Concentrate in an elliptical central band
        const angle = Math.random() * Math.PI * 2;
        const radiusX = (Math.random() * 0.44 + 0.08) * w;
        const radiusY = (Math.random() * 0.36 + 0.05) * h;

        this.x = w / 2 + Math.cos(angle) * radiusX;
        this.y = h / 2 + Math.sin(angle) * radiusY;

        this.baseX = this.x;
        this.baseY = this.y;

        this.radius = Math.random() * 2.4 + 0.8;
        const currentColors = getColors();
        this.color = currentColors[Math.floor(Math.random() * currentColors.length)];
        this.alpha = Math.random() * 0.45 + 0.15;
        this.targetAlpha = this.alpha;

        // Motion parameters
        this.vx = (Math.random() - 0.5) * (staticOnly ? 0 : 0.4);
        this.vy = (Math.random() - 0.5) * (staticOnly ? 0 : 0.35);
        this.pulseSpeed = Math.random() * 0.015 + 0.005;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      refreshColor() {
        const currentColors = getColors();
        this.color = currentColors[Math.floor(Math.random() * currentColors.length)];
      }

      update() {
        if (prefersReducedMotion) return;

        this.x += this.vx;
        this.y += this.vy;

        // Cursor micro-interaction: gentle repulsion when mouse is near
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = (dx / distance) * force * 2.5;
            const directionY = (dy / distance) * force * 2.5;
            this.x += directionX;
            this.y += directionY;
          }
        }

        // Boundary wrap
        if (this.x < -20) this.x = this.w + 20;
        if (this.x > this.w + 20) this.x = -20;
        if (this.y < -20) this.y = this.h + 20;
        if (this.y > this.h + 20) this.y = -20;

        // Gentle breathing pulsation
        this.pulseAngle += this.pulseSpeed;
        this.currentAlpha = this.alpha + Math.sin(this.pulseAngle) * 0.14;
      }

      draw(context) {
        const a = Math.max(0.05, Math.min(isDark ? 0.85 : 0.7, this.currentAlpha || this.alpha));
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${a})`;
        context.fill();
      }
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(width, height, prefersReducedMotion));
      }

      if (prefersReducedMotion) {
        render();
      }
    }

    function updateTheme(darkState) {
      isDark = darkState;
      particles.forEach((p) => p.refreshColor());
      if (prefersReducedMotion) render();
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting strands between nearby particles
      const maxDistance = 115;
      const strandColor = isDark ? '135, 125, 255' : '100, 87, 232';
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.2 : 0.14);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${strandColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
    }

    function loop() {
      render();
      animationFrameId = requestAnimationFrame(loop);
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Watch for class changes on <html> to update particle colors on theme toggle
    const observer = new MutationObserver(() => {
      const currentDark = document.documentElement.classList.contains('dark');
      if (currentDark !== isDark) {
        updateTheme(currentDark);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const handleCustomThemeChange = (e) => {
      if (e.detail && typeof e.detail.isDark === 'boolean') {
        updateTheme(e.detail.isDark);
      }
    };
    window.addEventListener('theme-change', handleCustomThemeChange);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', resize, { passive: true });

    resize();

    if (!prefersReducedMotion) {
      loop();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('theme-change', handleCustomThemeChange);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 ${className}`}
    />
  );
}
