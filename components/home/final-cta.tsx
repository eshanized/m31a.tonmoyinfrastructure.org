'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight, ShieldCheck, Cpu, GitBranch } from 'lucide-react';
import { Container } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { GithubMark } from '@/components/site/logo';

export function FinalCta() {
  return (
    <section className="py-28 sm:py-36 bg-[#060608] border-b border-[#222227] text-center relative overflow-hidden select-none">
      {/* ── Ambient Radial Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.16)_0%,rgba(14,14,18,0.3)_45%,transparent_70%)] blur-3xl opacity-80"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F4F4F6_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      {/* Top Precision Laser Flare Accent */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8523F]/50 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8523F]/35 bg-[#161214] text-xs font-mono text-[#E8523F] mb-6 shadow-[0_0_20px_rgba(232,82,63,0.12)]">
            <span className="w-2 h-2 rounded-full bg-[#E8523F] animate-pulse" />
            <span className="font-semibold text-[#F4F4F6]">READY FOR SERIOUS ENGINEERING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F6] leading-[1.08] mb-6 text-balance">
            An autonomous runtime built{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              for real repositories.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9E9EA8] max-w-xl leading-relaxed mb-10 text-balance">
            M31A is an autonomous engineering runtime with a coding agent on top — not a chatbot with shell access.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="#install"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white font-semibold text-base transition-all shadow-[0_0_25px_rgba(232,82,63,0.4)] hover:shadow-[0_0_35px_rgba(232,82,63,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-5 h-5" />
              <span>Install M31A</span>
            </Link>

            <a
              href={PRODUCT.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg border border-[#2C2C34] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#383842] text-[#F4F4F6] font-semibold text-base transition-all shadow-sm group"
            >
              <GithubMark className="w-5 h-5 text-[#9E9EA8] group-hover:text-white transition-colors" />
              <span>View GitHub</span>
              <span className="ml-1 text-xs font-mono text-[#E8523F] bg-[#E8523F]/10 px-2 py-0.5 rounded border border-[#E8523F]/20">
                ★ 10
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#65656E] pt-6 border-t border-[#222227]/80 w-full max-w-lg">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
              <span>MIT / Apache-2.0</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#E8523F]" />
              <span>Single Rust Crate</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span>Linux x86_64 Qualified</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
