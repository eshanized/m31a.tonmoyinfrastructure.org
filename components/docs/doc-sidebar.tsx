'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DOC_SECTIONS, DOCS } from '@/lib/m31a/product';
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
      <nav className="space-y-6" aria-label="Documentation sections">
        {grouped.map((section) => {
          if (section.pages.length === 0) return null;
          return (
            <div key={section.id}>
              <h3 className="meta mb-2 px-2 !text-[#FF6B4A]">
                {section.label}
              </h3>
              <ul className="space-y-0.5">
                {section.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/docs/${page.slug}`}
                      onClick={() => setMobileOpen(false)}
                      aria-current={currentSlug === page.slug ? 'page' : undefined}
                      className={cn(
                        'block rounded-[2px] border-l-2 px-2.5 py-1.5 font-mono text-xs transition-colors',
                        currentSlug === page.slug
                          ? 'border-[#FF4B2C] bg-[#FF4B2C]/[.07] font-semibold text-white'
                          : 'border-transparent text-[#A8A198] hover:bg-[#1B1A17] hover:text-[#ECE7DC]'
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
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-24 z-40 flex h-9 w-9 items-center justify-center rounded-[2px] border border-[#3B362C] bg-[#141311] text-[#ECE7DC] md:hidden"
        aria-label="Toggle docs navigation"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 overflow-y-auto border-r border-[#2A2721] pr-4 md:block">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="fixed inset-y-0 left-0 w-72 overflow-y-auto border-r border-[#2A2721] bg-[#0D0C0A] p-4 pt-20"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Documentation navigation"
          >
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
    <div className="mt-14 flex items-center justify-between border-t border-[#2A2721] pt-6">
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="group flex max-w-[45%] flex-col text-left">
          <span className="meta group-hover:text-[#FF6B4A]">← PREV</span>
          <span className="mt-1 truncate text-sm font-semibold text-[#ECE7DC] group-hover:text-white">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/docs/${next.slug}`} className="group flex max-w-[45%] flex-col text-right">
          <span className="meta group-hover:text-[#FF6B4A]">NEXT →</span>
          <span className="mt-1 truncate text-sm font-semibold text-[#ECE7DC] group-hover:text-white">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
