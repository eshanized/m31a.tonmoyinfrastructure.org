import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ExternalLink, ShieldCheck, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '@/components/site/section';
import { CodeBlock } from '@/components/site/code-block';
import { PRODUCT, PLATFORMS_MATRIX } from '@/lib/m31a/product';
import { ReleaseCard } from '@/components/download/release-card';

export default function DownloadPage() {
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
            <span>INSTALLATION &amp; RELEASES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F4F6] max-w-3xl leading-tight">
            Run M31A{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              Locally.
            </span>
          </h1>

          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed max-w-2xl">
            Release-qualified on Linux x86_64. Standalone pre-compiled binaries and one-liner installer
            scripts. No foreign runtime dependencies required.
          </p>
        </Container>
      </div>

      <Container className="relative z-10">
        {/* Quick Install Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#E8523F]" />
                <h2 className="text-base font-bold text-[#F4F4F6]">Linux &amp; macOS (curl)</h2>
              </div>
              <CodeBlock language="bash" filename="terminal" code={PRODUCT.installCurl} />
              <p className="text-xs text-[#9E9EA8] mt-2">
                Detects host architecture, verifies SHA-256 checksum, and installs binary to <code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1 py-0.5 rounded">/usr/local/bin</code> or <code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1 py-0.5 rounded">~/.local/bin</code>.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#E8523F]" />
                <h2 className="text-base font-bold text-[#F4F4F6]">Windows (PowerShell)</h2>
              </div>
              <CodeBlock language="powershell" filename="PowerShell" code={PRODUCT.installPowerShell} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#E8523F]" />
                <h2 className="text-base font-bold text-[#F4F4F6]">Build from Source with Cargo</h2>
              </div>
              <CodeBlock
                language="bash"
                filename="terminal"
                code={`git clone https://github.com/eshanized/M31A.git\ncd M31A\ncargo build --release   # Requires Rust ${PRODUCT.rustVersion} (Edition 2024)\ncargo install --path .`}
              />
            </div>
          </div>

          {/* Release Record Card */}
          <div className="lg:col-span-5">
            <ReleaseCard />
          </div>
        </div>

        {/* Platform Support Matrix */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F4F4F6]">
              Platform Support Matrix
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-1">
              Honest platform qualification criteria according to <code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1.5 py-0.5 rounded">docs/PLATFORM-SUPPORT.md</code>.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#27272E] bg-[#111115] shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#141418] border-b border-[#27272E] text-[#9E9EA8] font-mono uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">OS / Architecture</th>
                  <th className="py-3.5 px-4 font-semibold">Target Triple</th>
                  <th className="py-3.5 px-4 font-semibold">Qualification</th>
                  <th className="py-3.5 px-4 font-semibold">Details &amp; Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222227]">
                {PLATFORMS_MATRIX.map((p) => (
                  <tr key={p.targetTriple} className="hover:bg-[#18181D]/60 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-[#F4F4F6]">
                      {p.os} ({p.architecture})
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#9E9EA8]">
                      {p.targetTriple}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        p.classification === 'SUPPORTED'
                          ? 'bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/20'
                          : p.classification === 'CONDITIONALLY SUPPORTED'
                          ? 'bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20'
                          : 'bg-[#18181D] text-[#9E9EA8] border border-[#27272E]'
                      }`}>
                        {p.classification}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#9E9EA8] max-w-md">
                      {p.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deployment Channels */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-12 mb-16 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              DEPLOYMENT CHANNELS
            </span>
            <h2 className="text-2xl font-bold text-[#F4F4F6]">
              Compile-Time Artifact Identity
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              M31A enforces strict separation between production (<code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1 py-0.5 rounded">m31a</code>) and development (<code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1 py-0.5 rounded">m31a-dev</code>) channels. Channel is baked into the binary at compile time with completely isolated state paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-[#27272E] bg-[#0A0A0C]">
              <span className="font-mono text-xs text-[#3ECF8E] font-bold block mb-1">
                PRODUCTION CHANNEL (DEFAULT)
              </span>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">Binary: m31a</h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
                Strict qualification rules. Worktree isolation required. Stable SQLite schema migrations. Pointing to production endpoints.
              </p>
              <div className="font-mono text-xs text-[#65656E]">
                State path: ~/.config/m31a/
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#27272E] bg-[#0A0A0C]">
              <span className="font-mono text-xs text-[#EAB308] font-bold block mb-1">
                DEVELOPMENT CHANNEL
              </span>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">Binary: m31a-dev</h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
                Built with <code className="text-[#F4F4F6] bg-[#18181D] px-1 py-0.5 rounded">--features development</code>. Isolated persistence so experiments never compromise production state.
              </p>
              <div className="font-mono text-xs text-[#65656E]">
                State path: ~/.config/m31a-dev/
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222227] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 font-medium text-[#F4F4F6] hover:text-[#E8523F] transition-colors group"
          >
            <span>Read Version Changelog</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/docs/quick-start"
            className="inline-flex items-center gap-2 font-medium text-[#9E9EA8] hover:text-[#F4F4F6] transition-colors group"
          >
            <span>Quick Start Guide</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
