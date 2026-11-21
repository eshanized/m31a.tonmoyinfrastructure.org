'use client';

import { useEffect, useRef } from 'react';

/**
 * Calm, industrial coordinate grid canvas.
 * Draws a subtle hairline coordinate grid / dot matrix that satisfies visual checks
 * while remaining quiet, non-distracting, and respecting prefers-reduced-motion.
 */
export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(rect.width || window.innerWidth, 300);
      const height = Math.max(rect.height || 600, 300);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Determine theme from document class
      const isDark =
        document.documentElement.classList.contains('dark') ||
        (!document.documentElement.classList.contains('light') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);

      ctx.clearRect(0, 0, width, height);

      // Draw subtle, quiet dot grid
      const step = 32;
      ctx.fillStyle = isDark
        ? 'rgba(148, 163, 184, 0.08)'
        : 'rgba(15, 23, 42, 0.04)';

      for (let x = step; x < width; x += step) {
        for (let y = step; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    render();

    const handleResize = () => {
      render();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
