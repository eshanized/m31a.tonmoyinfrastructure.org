import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FEATURES } from '@/lib/m31a/product';
import { Container, StatusBadge } from '@/components/site/section';

const GROUPS: Record<string, typeof FEATURES> = {};
for (const f of FEATURES) {
  (GROUPS[f.category] ??= []).push(f);
}

export default function FeaturesPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            FEATURES &amp; CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            What the Runtime Owns.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            Every feature below is implemented and governed by the Rust runtime. Subsystem boundaries
            are strictly enforced; authority never leaks to upstream models.
          </p>
        </Container>
      </div>

      <Container>
        <div className="space-y-16">
          {Object.entries(GROUPS).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#222226]">
                <h2 className="text-xl font-bold text-[#F0EDE8] tracking-tight">
                  {category}
                </h2>
                <span className="text-xs font-mono text-[#6B6965]">
                  ({items.length} features)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((feature) => (
                  <div
                    key={feature.id}
                    className="p-6 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#2C2C31] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-base font-bold text-[#F0EDE8] tracking-tight">
                          {feature.title}
                        </h3>
                        <StatusBadge status={feature.status} />
                      </div>

                      <p className="text-sm text-[#A3A09B] leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      {feature.details && (
                        <p className="text-xs text-[#6B6965] leading-relaxed border-t border-[#222226] pt-3">
                          {feature.details}
                        </p>
                      )}
                    </div>

                    {feature.sourceRef && (
                      <div className="mt-4 pt-3 border-t border-[#222226]/50 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#6B6965]">Source Module</span>
                        <span className="text-[#F0EDE8]">{feature.sourceRef}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/architecture"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>Explore Runtime Architecture L0–L9</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>Open Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
