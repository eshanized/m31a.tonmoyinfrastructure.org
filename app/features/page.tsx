import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { FEATURES } from '@/lib/m31a/product';
import { Container, StatusBadge } from '@/components/site/section';

const GROUPS: Record<string, typeof FEATURES> = {};
for (const f of FEATURES) {
  (GROUPS[f.category] ??= []).push(f);
}

export default function FeaturesPage() {
  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      {/* ── Atmospheric Radial Lighting & CAD Tech Grid ── */}
      <div 
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.12)_0%,rgba(14,14,18,0.3)_45%,transparent_70%)] blur-3xl opacity-80"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#F4F4F6_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      {/* Top Precision Laser Edge Accent */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8523F]/50 to-transparent"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="border-b border-[#222227] pb-12 sm:pb-16 mb-16 relative z-10">
        <Container>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8523F]/35 bg-[#161214] text-xs font-mono text-[#E8523F] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F] animate-pulse" />
            <span>FEATURES &amp; CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F4F6] max-w-3xl leading-tight">
            What the Runtime{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              Owns.
            </span>
          </h1>

          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed max-w-2xl">
            Every feature below is implemented and governed by the Rust runtime. Subsystem boundaries
            are strictly enforced; authority never leaks to upstream models.
          </p>
        </Container>
      </div>

      <Container className="relative z-10">
        <div className="space-y-16">
          {Object.entries(GROUPS).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#222227]">
                <h2 className="text-xl font-bold text-[#F4F4F6] tracking-tight">
                  {category}
                </h2>
                <span className="text-xs font-mono text-[#65656E]">
                  ({items.length} features)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((feature) => (
                  <div
                    key={feature.id}
                    className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/35 transition-all flex flex-col justify-between shadow-sm hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-base font-bold text-[#F4F4F6] tracking-tight">
                          {feature.title}
                        </h3>
                        <StatusBadge status={feature.status} />
                      </div>

                      <p className="text-sm text-[#9E9EA8] leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      {feature.details && (
                        <p className="text-xs text-[#65656E] leading-relaxed border-t border-[#222227] pt-3">
                          {feature.details}
                        </p>
                      )}
                    </div>

                    {feature.sourceRef && (
                      <div className="mt-4 pt-3 border-t border-[#222227]/60 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#65656E]">Source Module</span>
                        <span className="text-[#F4F4F6]">{feature.sourceRef}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 mt-16 border-t border-[#222227] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/architecture"
            className="inline-flex items-center gap-2 font-medium text-[#F4F4F6] hover:text-[#E8523F] transition-colors group"
          >
            <span>Explore 10-Layer Architecture (L0–L9)</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(232,82,63,0.3)]"
          >
            <span>Download M31A Binary</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
