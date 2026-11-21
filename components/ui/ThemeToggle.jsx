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

    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme: newTheme, isDark: shouldBeDark } }));
  };

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

  const handleQuickToggle = () => {
    if (theme === 'dark') {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }
  };

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-md border border-border bg-surface-muted/50 ${className}`} aria-hidden="true" />
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
        title={`Theme: ${theme.toUpperCase()} (Click to toggle, right-click for menu)`}
        className="w-8 h-8 rounded-md flex items-center justify-center bg-surface-muted hover:bg-surface border border-border hover:border-border-strong text-foreground-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <span className="sr-only">Toggle theme</span>
        {isDarkActive ? (
          <Sun className="w-3.5 h-3.5 text-foreground-muted" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-foreground-muted" />
        )}
      </button>

      {showLabel && (
        <span className="ml-2 text-xs font-medium text-foreground-muted capitalize">
          {theme} mode
        </span>
      )}

      {/* Dropdown Options Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-1.5 z-50 w-32 rounded-lg bg-surface border border-border shadow-md p-1 animate-fade-in flex flex-col gap-0.5">
            <button
              type="button"
              onClick={() => {
                applyTheme('light');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2 py-1 text-xs rounded-md font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-accent/10 text-accent font-semibold'
                  : 'text-foreground-muted hover:text-foreground hover:bg-surface-muted'
              }`}
            >
              <Sun className="w-3 h-3" />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => {
                applyTheme('dark');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2 py-1 text-xs rounded-md font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-accent/10 text-accent font-semibold'
                  : 'text-foreground-muted hover:text-foreground hover:bg-surface-muted'
              }`}
            >
              <Moon className="w-3 h-3" />
              <span>Dark</span>
            </button>
            <button
              type="button"
              onClick={() => {
                applyTheme('system');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-2 py-1 text-xs rounded-md font-medium transition-colors ${
                theme === 'system'
                  ? 'bg-accent/10 text-accent font-semibold'
                  : 'text-foreground-muted hover:text-foreground hover:bg-surface-muted'
              }`}
            >
              <Monitor className="w-3 h-3" />
              <span>System</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
