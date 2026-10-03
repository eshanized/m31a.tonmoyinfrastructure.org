'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  title: string;
}

export function DocToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = items.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </div>
      <nav className="space-y-1 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block py-1 pl-2 transition-colors border-l ${
                isActive
                  ? 'border-primary text-primary font-medium'
                  : 'border-border/60 text-muted-foreground hover:text-foreground hover:border-border'
              }`}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
