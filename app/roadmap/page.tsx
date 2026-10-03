import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { ROADMAP_ITEMS } from '@/lib/m31a/product';

const STATUS_GROUPS = ['Completed', 'In Progress', 'Planned', 'Future'] as const;

export default function RoadmapPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            ENGINEERING ROADMAP
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            Completed is Distinct from Planned.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            Engineering objectives, milestones, and architectural roadmap items. Statuses are reported
            honestly based on verified runtime evidence.
          </p>
        </Container>
      </div>

      <Container>
        <div className="space-y-16">
          {STATUS_GROUPS.map((status) => {
            const items = ROADMAP_ITEMS.filter((item) => item.status === status);
            if (items.length === 0) return null;

            return (
              <div key={status}>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#222226]">
                  <h2 className="text-xl font-bold text-[#F0EDE8] tracking-tight">
                    {status}
                  </h2>
                  <span className="text-xs font-mono text-[#6B6965]">
                    ({items.length} items)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#2C2C31] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-base font-bold text-[#F0EDE8] tracking-tight">
                            {item.title}
                          </h3>
                          <StatusBadge status={item.status} />
                        </div>

                        <p className="text-sm text-[#A3A09B] leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      {item.reference && (
                        <div className="mt-4 pt-3 border-t border-[#222226]/50 flex items-center justify-between text-xs font-mono">
                          <span className="text-[#6B6965]">Specification</span>
                          <span className="text-[#F0EDE8]">{item.reference}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>View Release Changelog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://github.com/eshanized/M31A/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>Propose Work via GitHub Issues</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </div>
  );
}
