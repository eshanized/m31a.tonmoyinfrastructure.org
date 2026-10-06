'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  Terminal,
  Copy,
  Check,
  ShieldCheck,
  Cpu,
  GitBranch,
  Lock,
  CheckCircle2,
  Sparkles,
  Command,
} from 'lucide-react';
import { Container } from '@/components/site/section';
import { HeroTerminal } from '@/components/home/hero-terminal';
import { PRODUCT } from '@/lib/m31a/product';
import { GithubMark } from '@/components/site/logo';
import { useLatestVersion } from '@/hooks/use-latest-version';

type InstallMethod = 'curl' | 'powershell' | 'cargo';

export function HeroSection() {
  const { displayVersion } = useLatestVersion();
  const [installMethod, setInstallMethod] = useState<InstallMethod>('curl');
  const [copied, setCopied] = useState(false);

  const installCommands: Record<InstallMethod, { cmd: string; label: string; prefix: string }> = {
    curl: {
      label: 'curl (macOS & Linux)',
      prefix: '$ curl -fsSL',
      cmd: 'curl -fsSL https://raw.githubusercontent.com/eshanized/M31A/master/scripts/install.sh | bash',
    },
    powershell: {
      label: 'PowerShell (Windows)',
      prefix: '> irm',
      cmd: 'irm https://raw.githubusercontent.com/eshanized/M31A/master/scripts/install.ps1 | iex',
    },
    cargo: {
      label: 'cargo (crates.io)',
      prefix: '$ cargo',
      cmd: 'cargo install m31a',
    },
  };

  const currentInstall = installCommands[installMethod];

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText(currentInstall.cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="relative pt-14 pb-20 sm:pt-24 sm:pb-32 border-b border-[#222227] overflow-hidden">
      {/* ── Atmospheric Ambient Depth & Precision CAD Grid ── */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.18)_0%,rgba(14,14,18,0.45)_50%,transparent_75%)] blur-3xl opacity-80"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#F4F4F6_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_50%_35%,black_35%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Top Precision Laser Flare */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8523F]/50 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ── Top Hero Editorial & CTAs ── */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16 sm:mb-20">
          {/* Eyebrow Pill */}
          <Link
            href="/download"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E8523F]/35 bg-[#161214]/90 backdrop-blur-md text-xs font-mono text-[#F4F4F6] mb-8 shadow-[0_0_20px_rgba(232,82,63,0.14)] hover:border-[#E8523F]/60 hover:shadow-[0_0_25px_rgba(232,82,63,0.25)] transition-all group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8523F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8523F]" />
            </span>
            <span className="font-semibold text-[#F4F4F6]">M31A</span>
            <span className="text-[#65656E]">/</span>
            <span className="text-[#9E9EA8] group-hover:text-[#F4F4F6] transition-colors">M31 AUTONOMOUS</span>
            <span className="text-[#65656E]">/</span>
            <span className="text-[#E8523F] font-semibold">{displayVersion}</span>
            <ArrowRight className="w-3 h-3 text-[#E8523F] group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Large Confident Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F4F6] leading-[1.04] text-balance mb-6">
            The autonomous coding agent{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              for serious engineering.
            </span>
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
              className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(232,82,63,0.4)] hover:shadow-[0_0_35px_rgba(232,82,63,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Install M31A</span>
            </Link>

            <a
              href={PRODUCT.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#2C2C34] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#383842] text-[#F4F4F6] font-semibold text-sm transition-all shadow-sm group"
            >
              <GithubMark className="w-4 h-4 text-[#9E9EA8] group-hover:text-white transition-colors" />
              <span>View GitHub</span>
              <span className="ml-1 text-[11px] font-mono text-[#E8523F] bg-[#E8523F]/10 px-1.5 py-0.5 rounded border border-[#E8523F]/20">
                ★ 10
              </span>
            </a>

            <Link
              href="/architecture"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-[#9E9EA8] hover:text-[#E8523F] transition-colors group"
            >
              <span>Explore architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Multi-Platform One-Liner Install Strip */}
          <div className="w-full max-w-xl rounded-xl border border-[#2C2C34] bg-[#0E0E12]/95 backdrop-blur-md shadow-xl overflow-hidden hover:border-[#3A3A44] transition-all">
            {/* Platform Selector Tabs */}
            <div className="flex items-center justify-between border-b border-[#222227] bg-[#121216] px-3 py-1.5 text-xs font-mono">
              <div className="flex items-center gap-1">
                {(['curl', 'powershell', 'cargo'] as InstallMethod[]).map((method) => {
                  const active = method === installMethod;
                  return (
                    <button
                      key={method}
                      onClick={() => setInstallMethod(method)}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        active
                          ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                          : 'text-[#9E9EA8] hover:text-[#F4F4F6]'
                      }`}
                    >
                      {installCommands[method].label}
                    </button>
                  );
                })}
              </div>

              <span className="text-[10px] text-[#65656E] hidden sm:inline">1-Click Install</span>
            </div>

            {/* Command Display & Copy Button */}
            <div className="p-3 sm:px-4 flex items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 overflow-hidden truncate">
                <span className="text-[#E8523F] font-bold select-none">{installMethod === 'powershell' ? '>' : '$'}</span>
                <span className="truncate select-all text-[#F4F4F6]">{currentInstall.cmd}</span>
              </div>

              <button
                onClick={handleCopyInstall}
                className="ml-1 px-2.5 py-1.5 rounded-md hover:bg-[#18181D] hover:text-[#F4F4F6] transition-colors shrink-0 text-[#9E9EA8] border border-[#27272E] flex items-center gap-1.5"
                title="Copy install command"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
                    <span className="text-[11px] font-semibold text-[#3ECF8E]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Baseline Architectural Invariants Strip */}
          <div className="mt-10 pt-6 border-t border-[#222227] w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg border border-[#222227] bg-[#111115]/70 text-left transition-all hover:border-[#33333D]">
              <div className="flex items-center justify-between text-[#65656E] mb-1">
                <span className="text-[10px] uppercase font-bold">KERNEL</span>
                <Cpu className="w-3.5 h-3.5 text-[#E8523F]" />
              </div>
              <span className="text-[#F4F4F6] font-medium block truncate">Rust {PRODUCT.rustVersion}</span>
              <span className="text-[10px] text-[#65656E] block mt-0.5">Zero unsafe memory</span>
            </div>

            <div className="p-3 rounded-lg border border-[#222227] bg-[#111115]/70 text-left transition-all hover:border-[#33333D]">
              <div className="flex items-center justify-between text-[#65656E] mb-1">
                <span className="text-[10px] uppercase font-bold">CONFINEMENT</span>
                <GitBranch className="w-3.5 h-3.5 text-[#E8523F]" />
              </div>
              <span className="text-[#F4F4F6] font-medium block truncate">Linux cgroups v2</span>
              <span className="text-[10px] text-[#65656E] block mt-0.5">POSIX rlimits active</span>
            </div>

            <div className="p-3 rounded-lg border border-[#222227] bg-[#111115]/70 text-left transition-all hover:border-[#33333D]">
              <div className="flex items-center justify-between text-[#65656E] mb-1">
                <span className="text-[10px] uppercase font-bold">SECURITY</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8523F]" />
              </div>
              <span className="text-[#F4F4F6] font-medium block truncate">11-Stage Gates</span>
              <span className="text-[10px] text-[#65656E] block mt-0.5">Fail-closed policy</span>
            </div>

            <div className="p-3 rounded-lg border border-[#222227] bg-[#111115]/70 text-left transition-all hover:border-[#33333D]">
              <div className="flex items-center justify-between text-[#65656E] mb-1">
                <span className="text-[10px] uppercase font-bold">COMPLETION</span>
                <Lock className="w-3.5 h-3.5 text-[#3ECF8E]" />
              </div>
              <span className="text-[#3ECF8E] font-medium block truncate">SHA-256 Proof</span>
              <span className="text-[10px] text-[#65656E] block mt-0.5">Evidence verified</span>
            </div>
          </div>
        </div>

        {/* ── Centerpiece: Highly Polished Terminal / TUI Experience ── */}
        <div className="w-full max-w-5xl mx-auto relative">
          {/* Subtle backglow behind the terminal frame */}
          <div 
            className="pointer-events-none absolute -inset-3 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(232,82,63,0.12)_0%,transparent_70%)] blur-2xl"
            aria-hidden="true" 
          />
          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}
