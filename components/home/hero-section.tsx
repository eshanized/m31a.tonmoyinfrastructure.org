'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ExternalLink, Terminal, Copy, Check, ShieldCheck, Layers, GitBranch, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/site/section';
import { HeroTerminal } from '@/components/home/hero-terminal';
import { PRODUCT } from '@/lib/m31a/product';
import { GithubMark } from '@/components/site/logo';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function HeroSection() {
  const { displayVersion } = useLatestVersion();
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText(PRODUCT.installCurl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[#222227] overflow-hidden">
      <Container>
        {/* ── Top Hero Editorial & CTAs ── */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-14 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#27272E] bg-[#111114] text-xs font-mono text-[#9E9EA8] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8523F] animate-pulse" />
            <span className="font-semibold text-[#F4F4F6]">M31A</span>
            <span className="text-[#65656E]">/</span>
            <span>M31 AUTONOMOUS</span>
            <span className="text-[#65656E]">/</span>
            <span className="text-[#E8523F] font-semibold">{displayVersion}</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F4F6] leading-[1.08] text-balance mb-6">
            The autonomous coding agent for serious engineering.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-[#9E9EA8] max-w-2xl leading-relaxed font-normal mb-10 text-balance">
            M31A takes engineering goals, turns them into executable plans, works through the repository,
            verifies its changes, and recovers from failure — directly from the terminal.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="#install"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Install M31A</span>
            </Link>

            <a
              href={PRODUCT.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#383842] text-[#F4F4F6] font-semibold text-sm transition-all shadow-sm"
            >
              <GithubMark className="w-4 h-4" />
              <span>View GitHub</span>
            </a>

            <Link
              href="/architecture"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-[#9E9EA8] hover:text-[#E8523F] transition-colors"
            >
              <span>Explore architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Copy One-Liner Install Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-[#27272E] bg-[#0E0E12] font-mono text-xs text-[#9E9EA8] max-w-full overflow-hidden">
            <span className="text-[#E8523F] font-bold select-none">$</span>
            <span className="truncate max-w-[280px] sm:max-w-md select-all text-[#F4F4F6]">
              {PRODUCT.installCurl}
            </span>
            <button
              onClick={handleCopyInstall}
              className="ml-1 p-1 hover:text-[#F4F4F6] transition-colors shrink-0"
              title="Copy one-liner install script"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#3ECF8E]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Baseline Architectural Invariants Badges */}
          <div className="mt-8 pt-6 border-t border-[#222227] w-full max-w-xl grid grid-cols-3 gap-4 text-xs font-mono text-[#65656E]">
            <div>
              <span className="block text-[#9E9EA8] font-semibold">FOUNDATION</span>
              <span className="mt-0.5 block">Rust {PRODUCT.rustVersion}</span>
            </div>
            <div>
              <span className="block text-[#9E9EA8] font-semibold">QUALIFIED</span>
              <span className="mt-0.5 block">Linux x86_64</span>
            </div>
            <div>
              <span className="block text-[#9E9EA8] font-semibold">RUNTIME</span>
              <span className="mt-0.5 block">Deterministic Gates</span>
            </div>
          </div>
        </div>

        {/* ── Centerpiece: Highly Polished Terminal / TUI Experience ── */}
        <div className="w-full max-w-5xl mx-auto">
          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}
