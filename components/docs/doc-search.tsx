'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, FileText, Terminal, ArrowRight } from 'lucide-react';
import { DOCS } from '@/lib/m31a/product';

interface SearchResult {
  slug: string;
  title: string;
  description: string;
  section: string;
}

export function DocSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredDocs: SearchResult[] = query.trim() === ''
    ? []
    : DOCS.filter((doc) => {
        const q = query.toLowerCase();
        return (
          doc.title.toLowerCase().includes(q) ||
          doc.description.toLowerCase().includes(q) ||
          doc.slug.toLowerCase().includes(q) ||
          doc.section.toLowerCase().includes(q)
        );
      });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    router.push(`/docs/${slug}`);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (filteredDocs.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredDocs.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredDocs.length) % filteredDocs.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(filteredDocs[selectedIndex].slug);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-border/80 bg-secondary/40 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Search documentation...</span>
        </div>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-background/80 backdrop-blur-sm">
          <div
            className="fixed inset-0 bg-transparent"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-xl rounded-xl border border-border bg-[#0d1016] shadow-2xl overflow-hidden z-10">
            {/* Input field */}
            <div className="flex items-center gap-3 border-b border-border/70 px-4 py-3">
              <Search className="h-4 w-4 text-primary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search topics, architecture, tools, CLI commands..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results list */}
            <div className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
              {query.trim() === '' ? (
                <div className="p-4 text-center text-xs text-muted-foreground">
                  Type a keyword to search documentation topics, tools, and CLI subcommands.
                </div>
              ) : filteredDocs.length === 0 ? (
                <div className="p-4 text-center text-xs text-muted-foreground">
                  No documentation matches found for &quot;<span className="text-foreground">{query}</span>&quot;.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredDocs.map((doc, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <button
                        key={doc.slug}
                        type="button"
                        onClick={() => handleSelect(doc.slug)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full text-left p-3 rounded-lg flex items-center justify-between gap-3 text-xs transition-colors ${
                          isSelected
                            ? 'bg-primary/10 border border-primary/30 text-foreground'
                            : 'hover:bg-secondary/40 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <FileText className={`h-4 w-4 mt-0.5 shrink-0 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                          <div className="min-w-0">
                            <div className="font-semibold text-foreground text-sm truncate flex items-center gap-2">
                              <span>{doc.title}</span>
                              <span className="font-mono text-[10px] uppercase text-muted-foreground px-1.5 py-0.5 rounded bg-secondary">
                                {doc.section}
                              </span>
                            </div>
                            <p className="text-muted-foreground line-clamp-1 mt-0.5">{doc.description}</p>
                          </div>
                        </div>
                        <ArrowRight className={`h-4 w-4 shrink-0 ${isSelected ? 'text-primary' : 'opacity-0'}`} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="border-t border-border/60 bg-[#090b0e] px-4 py-2 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
              </div>
              <span>Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
