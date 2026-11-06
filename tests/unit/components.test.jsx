import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import CodeBlock from '@/components/ui/CodeBlock';
import ThemeToggle from '@/components/ui/ThemeToggle';
import QuickInstallPill from '@/components/hero/QuickInstallPill';
import { siteConfig } from '@/lib/site-config';

describe('UI Primitives & Presentation Components', () => {
  it('renders Button as button and handles click', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Run Command</Button>);

    const btn = screen.getByRole('button', { name: /run command/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders Button as link when href is supplied', () => {
    render(<Button href="/features">Get Started</Button>);
    const link = screen.getByRole('link', { name: /get started/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/features');
  });

  it('renders Badge with custom variants', () => {
    render(<Badge variant="accent">39 Crates</Badge>);
    expect(screen.getByText('39 Crates')).toBeInTheDocument();
  });

  it('renders Card with content and variant styles', () => {
    render(<Card variant="terminal">Terminal Output</Card>);
    expect(screen.getByText('Terminal Output')).toBeInTheDocument();
  });

  it('renders Container with children and size classes', () => {
    render(<Container size="wide"><span>Container Body</span></Container>);
    expect(screen.getByText('Container Body')).toBeInTheDocument();
  });

  it('renders CodeBlock and handles copy action', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(<CodeBlock code="cargo install m31a-cli" language="bash" filename="terminal.sh" />);
    expect(screen.getByText('terminal.sh')).toBeInTheDocument();
    expect(screen.getByText('cargo install m31a-cli')).toBeInTheDocument();

    const copyBtn = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('cargo install m31a-cli');
  });

  it('renders ThemeToggle and allows toggling theme', () => {
    render(<ThemeToggle showLabel />);
    const toggleBtn = screen.getByRole('button', { name: /theme/i });
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(localStorage.getItem('m31a-theme')).toBeTruthy();
  });

  it('renders QuickInstallPill with default curl command and copies to clipboard', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(<QuickInstallPill />);
    expect(screen.getByText(siteConfig.installCommand)).toBeInTheDocument();

    const pillBtn = screen.getByRole('button', { name: /click to copy install command/i });
    fireEvent.click(pillBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(siteConfig.installCommand);
  });
});
