'use client';

import React, { useState } from 'react';
import { Container } from '@/components/site/section';
import { PRODUCT, PLATFORMS_MATRIX } from '@/lib/m31a/product';
import { Terminal, Copy, Check, Download, ExternalLink, ShieldCheck, ArrowRight, GitBranch, Cpu, Lock } from 'lucide-react';
import Link from 'next/link';

export function InstallationSection() {
  const [activeTab, setActiveTab] = useState<'curl' | 'powershell' | 'source'>('curl');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    if (activeTab === 'curl') return PRODUCT.installCurl;
    if (activeTab === 'powershell') return PRODUCT.installPowerShell;
    return `git clone https://github.com/eshanized/M31A.git\ncd M31A\ncargo build --release   # Requires Rust ${PRODUCT.rustVersion} (Edition ${PRODUCT.edition})\ncargo install --path .`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="install" className="py-24 sm:py-32 border-b border-[#222227] bg-[#0A0A0C] relative overflow-hidden">
      {/* ── Ambient Radial Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/3 left-1/4 w-[750px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.08)_0%,transparent_70%)] blur-3xl opacity-70"
        aria-hidden="true" 
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8523F]/30 bg-[#161214] text-xs font-mono text-[#E8523F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F]" />
            <span>DEPLOYMENT &amp; RUNTIME ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
            Install M31A in seconds.
          </h2>
          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
            Release-qualified on Linux x86_64. Single self-contained binary with zero foreign runtime dependencies.
            Automated one-liner installation scripts, pre-built GitHub release archives, or native Cargo build from source.
          </p>
        </div>

        {/* ── Installer Terminal Block & Platform Qualification ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Code Installer Box (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#27272E] bg-[#111115] overflow-hidden shadow-2xl transition-all hover:border-[#E8523F]/30">
            {/* Tab switchers */}
            <div className="flex items-center justify-between border-b border-[#222227] bg-[#141418] px-4 py-2.5">
              <div className="flex items-center gap-1 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('curl')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === 'curl'
                      ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                      : 'text-[#65656E] hover:text-[#9E9EA8]'
                  }`}
                >
                  Linux / macOS (curl)
                </button>
                <button
                  onClick={() => setActiveTab('powershell')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === 'powershell'
                      ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                      : 'text-[#65656E] hover:text-[#9E9EA8]'
                  }`}
                >
                  Windows (PowerShell)
                </button>
                <button
                  onClick={() => setActiveTab('source')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === 'source'
                      ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                      : 'text-[#65656E] hover:text-[#9E9EA8]'
                  }`}
                >
                  From Source (Cargo)
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-[#9E9EA8] hover:text-[#F4F4F6] bg-[#18181D] border border-[#27272E] hover:border-[#383842] transition-colors"
                title="Copy install command"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
                    <span className="text-[#3ECF8E] font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#9E9EA8]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 bg-[#070709] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[160px] flex flex-col justify-center">
              <pre className="text-[#F4F4F6] whitespace-pre-wrap break-all">
                <code>{getCode()}</code>
              </pre>
            </div>

            {/* Verification Note */}
            <div className="border-t border-[#222227] bg-[#101013] px-6 py-3.5 text-xs text-[#9E9EA8] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3ECF8E]" />
                <span>Automatically checks SHA-256 release checksum on download</span>
              </span>
              <span className="font-mono text-[#65656E] hidden sm:block">Channel: Production</span>
            </div>
          </div>

          {/* Right: Platform Support Qualification Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#27272E] bg-[#111115] p-6 sm:p-8 shadow-2xl transition-all hover:border-[#E8523F]/30">
            <div className="flex items-center justify-between border-b border-[#222227] pb-4 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8523F] font-semibold">
                PLATFORM QUALIFICATION MATRIX
              </span>
              <span className="text-[11px] font-mono text-[#65656E]">
                docs/PLATFORM-SUPPORT.md
              </span>
            </div>

            <div className="space-y-3">
              {PLATFORMS_MATRIX.slice(0, 3).map((p) => (
                <div
                  key={p.targetTriple}
                  className="p-3.5 rounded-xl border border-[#222227] bg-[#0A0A0C] flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-medium text-[#F4F4F6] block">
                      {p.os} ({p.architecture})
                    </span>
                    <span className="font-mono text-[11px] text-[#65656E]">
                      {p.targetTriple}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      p.classification === 'SUPPORTED'
                        ? 'bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/25'
                        : p.classification === 'CONDITIONALLY SUPPORTED'
                        ? 'bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/25'
                        : 'bg-[#18181D] text-[#65656E]'
                    }`}
                  >
                    {p.classification}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-6 border-t border-[#222227] space-y-2.5">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(232,82,63,0.3)] hover:shadow-[0_0_30px_rgba(232,82,63,0.5)]"
              >
                <Download className="w-4 h-4" />
                <span>View All Platform Releases</span>
              </Link>

              <Link
                href="/docs/installation"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#E8523F]/50 text-xs font-mono text-[#F4F4F6] transition-colors"
              >
                <span>Read Detailed Installation Manual</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E8523F]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
