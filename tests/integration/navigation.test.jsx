import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationDropdown from '@/components/navigation/NavigationDropdown';
import ThemeToggle from '@/components/ui/ThemeToggle';

describe('Navigation & Dropdown Integration', () => {
  it('opens NavigationDropdown on toggle and displays submenu links', () => {
    const items = [
      { name: 'CLI Reference', href: 'https://github.com/eshanized/M31A/tree/main/docs', description: '54 commands' },
      { name: 'Architecture', href: '/architecture', description: '39-crate system' },
    ];

    render(<NavigationDropdown label="Resources" items={items} href="/architecture" />);

    const toggleBtn = screen.getByRole('button', { name: /toggle resources menu/i });
    expect(toggleBtn).toBeInTheDocument();

    // Open dropdown
    fireEvent.click(toggleBtn);
    expect(screen.getByRole('menu', { name: /resources submenu/i })).toBeInTheDocument();
    expect(screen.getByText('CLI Reference')).toBeInTheDocument();
    expect(screen.getByText('Architecture')).toBeInTheDocument();

    // Close dropdown
    fireEvent.click(toggleBtn);
    expect(screen.queryByRole('menu', { name: /resources submenu/i })).not.toBeInTheDocument();
  });

  it('renders ThemeToggle and supports changing theme options', () => {
    render(<ThemeToggle showLabel />);

    const toggleBtn = screen.getByRole('button', { name: /theme/i });
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
