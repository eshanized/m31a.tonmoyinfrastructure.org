'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('system'); // 'light' | 'dark' | 'system'
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem('m31a-theme');
      if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
        setTheme(storedTheme);
      } else {
        setTheme('system');
      }
    } catch {
      // In case localStorage is blocked
    }
  }, []);

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('m31a-theme', newTheme);
    } catch {
      // Ignore localStorage errors
    }

    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = newTheme === 'dark' || (newTheme === 'system' && isSystemDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }

    // Notify any canvas or graphical components of the theme change
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme: newTheme, isDark: shouldBeDark } }));
  };

  // Listen to system preference changes when in 'system' mode
  useEffect(() => {
    if (!mounted) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const current = localStorage.getItem('m31a-theme') || 'system';
      if (current === 'system') {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
        window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme: 'system', isDark: e.matches } }));
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  // Quick toggle between light and dark
  const handleQuickToggle = () => {
    if (theme === 'dark') {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }
  };

  // While mounting on server, render a stable placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full border border-border bg-surface-muted/50 ${className}`} aria-hidden="true" />
    );
  }

  const isDarkActive =
    theme === 'dark' ||
    (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Quick Toggle Button */}
      <button
        type="button"
        onClick={handleQuickToggle}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-label={`Current theme: ${theme}. Click to switch to ${isDarkActive ? 'light' : 'dark'} mode.`}
        title={`Theme: ${theme.toUpperCase()} (Click to toggle, right click for menu)`}
        className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-muted/80 hover:bg-surface border border-border hover:border-border-strong text-foreground-muted hover:text-foreground transition-all duration-200 btn-magnetic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="sr-only">Toggle theme</span>
        {isDarkActive ? (
          <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 rotate-0 scale-100 transition-transform duration-300" />
        )}
      </button>

      {showLabel && (
        <span className="ml-2 text-xs font-medium text-foreground-muted capitalize">
          {theme} mode
        </span>
      )}

      {/* Dropdown Options Menu for explicit selection */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-2 z-50 w-36 rounded-medium bg-surface border border-border shadow-xl p-1.5 animate-fade-in flex flex-col gap-1">
            <button
              type="button"
              onClick={() => {
                applyTheme('light');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-small font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-accent/10 text-accent font-semibold'
                  : 'text-foreground-muted hover:text-foreground hover:bg-surface-muted'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => {
                applyTheme('dark');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-small font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-accent/10 text-accent font-semibold'
                  : 'text-foreground-muted hover:text-foreground hover:bg-surface-muted'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Dark</span>
            </button>
            <button
              type="button"
              onClick={() => {
                applyTheme('system');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-small font-medium transition-colors ${
                theme === 'system'
                  ? 'bg-accent/10 text-accent font-semibold'
                  : 'text-foreground-muted hover:text-foreground hover:bg-surface-muted'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>System</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
