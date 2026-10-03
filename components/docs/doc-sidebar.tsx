'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DOC_SECTIONS, DOCS, type DocTopic } from '@/lib/m31a/product';
import { DocSearch } from '@/components/docs/doc-search';
import { cn } from '@/lib/utils';

interface DocSidebarProps {
  currentSlug: string;
}

export function DocSidebar({ currentSlug }: DocSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const grouped = DOC_SECTIONS.map((section) => ({
    ...section,
    pages: DOCS.filter((d) => d.section === section.id).sort((a, b) => a.order - b.order),
  }));

  const sidebarContent = (
    <div className="space-y-6">
      <DocSearch />

      <nav className="space-y-6">
        {grouped.map((section) => {
          if (section.pages.length === 0) return null;
          return (
            <div key={section.id}>
              <h3 className="mb-2 px-2 font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                {section.label}
              </h3>
              <ul className="space-y-0.5">
                {section.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/docs/${page.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block rounded-md px-2.5 py-1.5 text-xs transition-colors',
                        currentSlug === page.slug
                          ? 'bg-primary/10 font-semibold text-primary'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-20 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-[#0e1117] text-foreground md:hidden shadow-lg"
        aria-label="Toggle docs navigation"
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {/* Desktop sidebar */}
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto border-r border-border/40 pr-4 md:block scrollbar-thin">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 w-72 bg-[#0c0e12] border-r border-border p-4 overflow-y-auto pt-16">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}

export function DocPagination({ currentSlug }: { currentSlug: string }) {
  const currentIndex = DOCS.findIndex((d) => d.slug === currentSlug);
  const prev = currentIndex > 0 ? DOCS[currentIndex - 1] : null;
  const next = currentIndex < DOCS.length - 1 ? DOCS[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="mt-14 flex items-center justify-between border-t border-border/40 pt-6">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex flex-col text-left"
        >
          <span className="font-mono text-xs text-muted-foreground flex items-center gap-1 group-hover:text-primary">
            ← Previous
          </span>
          <span className="text-sm font-semibold text-foreground group-hover:text-primary mt-1">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex flex-col text-right"
        >
          <span className="font-mono text-xs text-muted-foreground flex items-center justify-end gap-1 group-hover:text-primary">
            Next →
          </span>
          <span className="text-sm font-semibold text-foreground group-hover:text-primary mt-1">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
