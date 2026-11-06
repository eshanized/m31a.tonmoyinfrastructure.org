'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function NavigationDropdown({ label, items = [], href = '#' }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center">
        {href.startsWith('http') ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors py-2 px-1 focus-visible:outline-none focus-visible:text-foreground"
          >
            {label}
          </a>
        ) : (
          <Link
            href={href}
            className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors py-2 px-1 focus-visible:outline-none focus-visible:text-foreground"
          >
            {label}
          </Link>
        )}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Toggle ${label} menu`}
          className="p-1 text-foreground-subtle hover:text-foreground transition-colors focus-visible:outline-none"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-foreground' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && (
        <div
          role="menu"
          aria-label={`${label} submenu`}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[340px] p-2 bg-surface rounded-medium border border-border shadow-xl z-50 animate-fade-in"
        >
          <div className="grid grid-cols-1 gap-1">
            {items.map((item) => {
              if (item.external || item.href.startsWith('http')) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                    className="group block p-2.5 rounded-small hover:bg-surface-muted transition-colors text-left"
                  >
                    <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{item.name}</span>
                      <ExternalLink className="w-3 h-3 text-foreground-subtle group-hover:text-foreground" />
                    </div>
                    {item.description && (
                      <p className="text-xs text-foreground-subtle line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="group block p-2.5 rounded-small hover:bg-surface-muted transition-colors text-left"
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </div>
                  {item.description && (
                    <p className="text-xs text-foreground-subtle line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
