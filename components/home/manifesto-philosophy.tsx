'use client';

import React from 'react';
import { Container } from '@/components/site/section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ManifestoPhilosophy() {
  return (
    <section className="py-32 sm:py-48 border-b border-[#222227] bg-[#070709] relative overflow-hidden select-none">
      {/* Subtle background architectural line */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #F4F4F6 1px, transparent 1px), linear-gradient(to bottom, #F4F4F6 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#27272E] bg-[#111114] text-xs font-mono text-[#9E9EA8] mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F]" />
            <span>M31A MANIFESTO</span>
            <span className="text-[#65656E]">/</span>
            <span className="text-[#F4F4F6]">SYSTEM DESIGN PHILOSOPHY</span>
          </div>

          {/* Signature Headline */}
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#F4F4F6] leading-[1.02] mb-12">
            THE MODEL PROPOSES.
            <br />
            <span className="text-[#E8523F]">THE RUNTIME DECIDES.</span>
          </h2>

          {/* Editorial Core */}
          <div className="space-y-6 text-xl sm:text-2xl text-[#9E9EA8] font-light leading-relaxed max-w-3xl">
            <p>
              Models are probabilistic.
              <br />
              <strong className="text-[#F4F4F6] font-semibold">Execution is not.</strong>
            </p>
            <p className="text-base sm:text-xl text-[#9E9EA8] font-normal leading-relaxed">
              M31A separates intelligence from authority by putting a deterministic runtime between
              model intent and real system effects.
            </p>
          </div>

          {/* Three Foundational Laws Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#222227]">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#E8523F] font-bold tracking-wider">
                PRINCIPLE 01
              </span>
              <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                INTELLIGENCE IS NOT AUTHORITY.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                The model can suggest any refactor, but it never possesses ambient permissions or shell privileges.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#E8523F] font-bold tracking-wider">
                PRINCIPLE 02
              </span>
              <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                COMPLETION REQUIRES EVIDENCE.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                Claims of success are rejected until passing test suites produce matching cryptographic SHA-256 digests.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#E8523F] font-bold tracking-wider">
                PRINCIPLE 03
              </span>
              <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                FAIL-CLOSED BY CONSTRUCTION.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                Any ambiguity, sandbox escape attempt, or unhandled crash halts execution safely with clean rollback seams.
              </p>
            </div>
          </div>

          {/* Subtle CTA */}
          <div className="mt-12 flex items-center gap-4">
            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#E8523F] hover:underline"
            >
              <span>Inspect the 11-stage policy gate specification</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
