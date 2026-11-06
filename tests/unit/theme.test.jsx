import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { siteConfig } from '@/lib/site-config';

describe('Theme Toggle & Site Configuration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('validates siteConfig metadata and external links', () => {
    expect(siteConfig.name).toBe('M31A');
    expect(siteConfig.version).toBe('0.1.13');
    expect(siteConfig.links.github).toBe('https://github.com/eshanized/M31A');
    expect(siteConfig.links.docs).toBe('https://github.com/eshanized/M31A/tree/main/docs');

    const navNames = siteConfig.navigation.map((n) => n.name);
    expect(navNames).toContain('Features');
    expect(navNames).toContain('Architecture');
    expect(navNames).toContain('Announcements');
    expect(navNames).toContain('Changelog');
    expect(navNames).toContain('Community');
  });

  it('toggles dark mode class on document element when clicked', () => {
    render(<ThemeToggle />);
    const toggleBtn = screen.getByRole('button', { name: /theme/i });

    // Initial click should toggle from system/light to dark
    fireEvent.click(toggleBtn);
    expect(localStorage.getItem('m31a-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Second click should toggle from dark to light
    fireEvent.click(toggleBtn);
    expect(localStorage.getItem('m31a-theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('opens context menu to select system theme', () => {
    render(<ThemeToggle />);
    const toggleBtn = screen.getByRole('button', { name: /theme/i });

    // Right-click to open options dropdown
    fireEvent.contextMenu(toggleBtn);

    const systemBtn = screen.getByRole('button', { name: /^system$/i });
    expect(systemBtn).toBeInTheDocument();

    fireEvent.click(systemBtn);
    expect(localStorage.getItem('m31a-theme')).toBe('system');
  });
});
