'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsNav } from '@/content/architecture';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6" aria-label="Documentation navigation">
      {docsNav.map((section) => (
        <div key={section.section}>
          <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {section.section}
          </h3>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href || pathname === `${href}/`;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    className={cn(
                      'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors',
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                    )}
                  >
                    {active && <ChevronRight className="h-3 w-3 shrink-0" />}
                    <span className={cn(!active && 'pl-[18px]')}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
