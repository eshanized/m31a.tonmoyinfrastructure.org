'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A3A09B] mb-2 px-2">
                {section.label}
              </h3>
              <ul className="space-y-1">
                {section.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/docs/${page.slug}`}
                      onClick={() => setMobileOpen(false)}
                      aria-current={currentSlug === page.slug ? 'page' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                        currentSlug === page.slug
                          ? 'bg-[#E8523F]/10 text-[#E8523F] font-semibold'
                          : 'text-[#A3A09B] hover:bg-[#18181B] hover:text-[#F0EDE8]'
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
        className="fixed left-4 top-20 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-[#2C2C31] bg-[#111113] text-[#F0EDE8] md:hidden shadow-lg"
        aria-label="Toggle docs navigation"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 overflow-y-auto border-r border-[#222226] pr-4 md:block">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="fixed inset-y-0 left-0 w-72 overflow-y-auto border-r border-[#222226] bg-[#0A0A0B] p-4 pt-20"
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
    <div className="mt-14 flex items-center justify-between border-t border-[#222226] pt-6">
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="group flex max-w-[45%] flex-col text-left">
          <span className="text-xs font-mono text-[#6B6965] group-hover:text-[#E8523F]">← PREVIOUS</span>
          <span className="mt-1 truncate text-sm font-semibold text-[#A3A09B] group-hover:text-[#F0EDE8]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/docs/${next.slug}`} className="group flex max-w-[45%] flex-col text-right">
          <span className="text-xs font-mono text-[#6B6965] group-hover:text-[#E8523F]">NEXT →</span>
          <span className="mt-1 truncate text-sm font-semibold text-[#A3A09B] group-hover:text-[#F0EDE8]">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
