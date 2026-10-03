import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Tag } from 'lucide-react';
import { Container } from '@/components/site/section';
import { CHANGELOG_ENTRIES } from '@/lib/m31a/product';

export default function ChangelogPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            RELEASE HISTORY
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            Changelog &amp; Release Records.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            Authoritative release notes for all published versions of the M31A runtime.
          </p>
        </Container>
      </div>

      <Container className="max-w-4xl">
        <div className="space-y-16">
          {CHANGELOG_ENTRIES.map((entry) => (
            <article
              key={entry.version}
              className="rounded-2xl border border-[#222226] bg-[#111113] p-8 sm:p-10"
            >
              {/* Release Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#222226] pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#E8523F]/10 border border-[#E8523F]/30 text-sm font-mono font-bold text-[#E8523F]">
                    v{entry.version}
                  </span>
                  <span className="text-sm font-mono text-[#6B6965]">
                    Released on {entry.date}
                  </span>
                </div>

                <a
                  href={entry.tagUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A3A09B] hover:text-[#E8523F] transition-colors"
                >
                  <span>Release Tag on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Summary */}
              <p className="text-base text-[#F0EDE8] font-medium leading-relaxed mb-8">
                {entry.summary}
              </p>

              {/* Changelog Sections */}
              <div className="space-y-8">
                {entry.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-mono uppercase tracking-wider text-[#A3A09B] mb-3 font-semibold">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#A3A09B] leading-relaxed">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>View Future Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/download"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>Get Current Release</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
