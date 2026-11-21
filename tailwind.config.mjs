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
          dark: '#0b0d13',
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
        small: '6px',
        medium: '10px',
        large: '14px',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'SFMono-Regular',
          'monospace',
        ],
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
