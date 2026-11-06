'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function MobileNavigation({ navigation, siteConfig, repoMetrics }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* Theme Toggle */}
      <ThemeToggle />

      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="p-2 text-foreground-muted hover:text-foreground transition-colors"
      >
        <GithubIcon className="w-5 h-5" aria-hidden="true" />
      </Link>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-foreground-muted hover:text-foreground focus-visible:outline-none"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[65px] bg-surface/98 backdrop-blur-xl z-50 flex flex-col p-6 overflow-y-auto border-t border-border animate-fade-in"
        >
          <div className="flex flex-col space-y-4 py-4 flex-1">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-border-subtle pb-3">
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-foreground hover:text-accent py-1"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-4 h-4 text-foreground-subtle" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-foreground hover:text-accent py-1"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-foreground-subtle" />
                  </Link>
                )}

                {item.children && (
                  <div className="mt-2 pl-3 space-y-2 border-l border-border">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-foreground-muted hover:text-foreground py-1"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 pb-2 border-t border-border flex items-center justify-between">
            <span className="text-sm font-medium text-foreground-muted">Theme Mode</span>
            <ThemeToggle showLabel />
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-3 pb-8">
            <Button
              href="/features"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
            <Button
              href={siteConfig.links.github}
              variant="outline"
              size="lg"
              icon={GithubIcon}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub ({repoMetrics.stargazers_count})
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
