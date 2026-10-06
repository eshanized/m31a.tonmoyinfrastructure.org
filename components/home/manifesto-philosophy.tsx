'use client';

import React from 'react';
import { Container } from '@/components/site/section';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export function ManifestoPhilosophy() {
  return (
    <section className="py-32 sm:py-48 border-b border-[#222227] bg-[#060608] relative overflow-hidden select-none">
      {/* ── Signature Atmospheric Backglow ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.14)_0%,rgba(14,14,18,0.3)_45%,transparent_75%)] blur-3xl opacity-80"
        aria-hidden="true" 
      />

      {/* Subtle CAD Tech Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F4F4F6_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      {/* Top & Bottom Precision Laser Flare Accent */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8523F]/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#27272E] bg-[#111114]/90 backdrop-blur-md text-xs font-mono text-[#9E9EA8] mb-12 shadow-[0_0_20px_rgba(232,82,63,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#E8523F] animate-pulse" />
            <span className="font-semibold text-[#F4F4F6]">M31A MANIFESTO</span>
            <span className="text-[#65656E]">/</span>
            <span className="text-[#9E9EA8]">SYSTEM DESIGN PHILOSOPHY</span>
          </div>

          {/* Signature Dramatic Headline */}
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#F4F4F6] leading-[1.02] mb-12">
            THE MODEL PROPOSES.
            <br />
            <span className="bg-gradient-to-r from-[#E8523F] via-[#FF6955] to-[#E8523F] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(232,82,63,0.3)]">
              THE RUNTIME DECIDES.
            </span>
          </h2>

          {/* Editorial Core */}
          <div className="space-y-6 text-xl sm:text-2xl text-[#9E9EA8] font-light leading-relaxed max-w-3xl">
            <p>
              Models are probabilistic.
              <br />
              <strong className="text-[#F4F4F6] font-semibold tracking-tight">Execution is not.</strong>
            </p>
            <p className="text-base sm:text-xl text-[#9E9EA8] font-normal leading-relaxed">
              M31A separates intelligence from authority by putting a deterministic runtime between
              model intent and real system effects.
            </p>
          </div>

          {/* Three Foundational Laws Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#222227]">
            <div className="p-6 rounded-2xl border border-[#27272E] bg-[#0E0E12]/80 backdrop-blur-md flex flex-col gap-3 transition-all hover:border-[#E8523F]/40 hover:shadow-[0_0_25px_rgba(232,82,63,0.1)] group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#E8523F] font-bold tracking-wider">
                  LAW 01
                </span>
                <ShieldCheck className="w-4 h-4 text-[#E8523F] opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                INTELLIGENCE IS NOT AUTHORITY.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                The model can suggest any refactor, but it never possesses ambient permissions or direct shell access.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#27272E] bg-[#0E0E12]/80 backdrop-blur-md flex flex-col gap-3 transition-all hover:border-[#E8523F]/40 hover:shadow-[0_0_25px_rgba(232,82,63,0.1)] group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#E8523F] font-bold tracking-wider">
                  LAW 02
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                COMPLETION REQUIRES EVIDENCE.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                Claims of success are rejected until passing test suites produce matching cryptographic SHA-256 digests.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#27272E] bg-[#0E0E12]/80 backdrop-blur-md flex flex-col gap-3 transition-all hover:border-[#E8523F]/40 hover:shadow-[0_0_25px_rgba(232,82,63,0.1)] group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#E8523F] font-bold tracking-wider">
                  LAW 03
                </span>
                <Lock className="w-4 h-4 text-[#E8523F] opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                FAIL-CLOSED BY CONSTRUCTION.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                Any ambiguity, sandbox escape attempt, or unhandled crash halts execution safely with clean rollback seams.
              </p>
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-12 flex items-center gap-4">
            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#E8523F] hover:underline group"
            >
              <span>Inspect the 11-stage policy gate specification</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
