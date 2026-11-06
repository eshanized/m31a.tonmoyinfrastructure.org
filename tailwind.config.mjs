/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './content/**/*.{js,jsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: withOpacity('--background'),
          soft: withOpacity('--background-soft'),
          dark: '#0d0f12',
        },
        surface: {
          DEFAULT: withOpacity('--surface'),
          muted: withOpacity('--surface-muted'),
          subtle: withOpacity('--surface-subtle'),
          dark: withOpacity('--surface-dark'),
          card: withOpacity('--surface-card'),
        },
        foreground: {
          DEFAULT: withOpacity('--foreground'),
          muted: withOpacity('--foreground-muted'),
          subtle: withOpacity('--foreground-subtle'),
          inverse: withOpacity('--foreground-inverse'),
        },
        border: {
          DEFAULT: withOpacity('--border'),
          strong: withOpacity('--border-strong'),
          subtle: withOpacity('--border-subtle'),
          dark: withOpacity('--border-dark'),
        },
        accent: {
          DEFAULT: withOpacity('--accent'),
          hover: withOpacity('--accent-hover'),
          subtle: withOpacity('--accent-subtle'),
          foreground: '#ffffff',
          crimson: withOpacity('--accent-crimson'),
        },
      },
      borderRadius: {
        small: '10px',
        medium: '18px',
        large: '28px',
      },
      fontFamily: {
        sans: [
          'var(--font-dosis)',
          'Dosis',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'Geist Mono',
          'SFMono-Regular',
          'monospace',
        ],
      },
      maxWidth: {
        container: '1240px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'laser': 'laser 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(16px)' },
          '50%': { opacity: '0.85', filter: 'blur(24px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        laser: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
