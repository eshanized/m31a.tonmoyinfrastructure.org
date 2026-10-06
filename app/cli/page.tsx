import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Download, Sparkles } from 'lucide-react';
import { Container } from '@/components/site/section';
import { CliShowcase } from '@/components/home/cli-showcase';
import { CLI_COMMAND_DEFS } from '@/lib/m31a/product';

const EXIT_CODES = [
  { code: '0', meaning: 'Success', desc: 'Mission or command finished with all verification checks satisfied.' },
  { code: '1', meaning: 'Verification Failure', desc: 'Compiler error, failing tests, or unverified diffs.' },
  { code: '2', meaning: 'Policy Violation', desc: 'Operation blocked by policy gate (fail-closed DENY).' },
  { code: '3', meaning: 'Budget Exhaustion', desc: 'Exceeded tokens, execution time, steps, or financial limits.' },
  { code: '4', meaning: 'Crash / Unrecoverable', desc: 'Process fault or panic; state preserved in SQLite.' },
  { code: '5', meaning: 'Configuration Error', desc: 'Malformed config file or invalid authority parameter.' },
];

export default function CliPage() {
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
            <span>COMMAND LINE INTERFACE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F4F6] max-w-3xl leading-tight">
            The Runtime, Addressed{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              by Name.
            </span>
          </h1>

          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed max-w-2xl">
            M31A provides a complete clap-derive CLI with machine-readable <code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1.5 py-0.5 rounded">--output json</code> options,
            strict UNIX exit codes, and an interactive Ratatui TUI cockpit.
          </p>
        </Container>
      </div>

      <Container className="relative z-10">
        {/* Interactive CLI Showcase */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F4F4F6]">
              Interactive Command Preview
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-1">
              Select commands below to inspect real documented output and environmental checks.
            </p>
          </div>

          <CliShowcase />
        </div>

        {/* Exit Code Contract */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 mb-20 shadow-xl">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              AUTOMATION CONTRACT
            </span>
            <h2 className="text-xl font-bold text-[#F4F4F6]">
              Standardized UNIX Exit Codes
            </h2>
            <p className="text-xs text-[#9E9EA8] mt-1 leading-relaxed">
              Every invocation returns a predictable exit code designed for headless CI/CD evaluation runners:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXIT_CODES.map((ec) => (
              <div key={ec.code} className="p-4 rounded-xl border border-[#27272E] bg-[#0A0A0C]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#E8523F] bg-[#E8523F]/10 px-2 py-0.5 rounded border border-[#E8523F]/20">
                    exit {ec.code}
                  </span>
                  <span className="text-sm font-semibold text-[#F4F4F6]">{ec.meaning}</span>
                </div>
                <p className="text-xs text-[#9E9EA8] leading-relaxed mt-2">{ec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Command Register */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F4F4F6]">
              Full Command Catalog
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-1">
              {CLI_COMMAND_DEFS.length} documented subcommands across 6 operational categories.
            </p>
          </div>

          <div className="space-y-4">
            {CLI_COMMAND_DEFS.map((cmd) => (
              <div
                key={cmd.command}
                className="p-6 rounded-xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/35 transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-[#E8523F] shrink-0" />
                    <span className="font-mono text-sm sm:text-base font-bold text-[#F4F4F6]">
                      {cmd.command}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded border border-[#27272E] bg-[#18181D] text-[#9E9EA8] self-start sm:self-auto">
                    {cmd.category}
                  </span>
                </div>

                <p className="text-sm text-[#9E9EA8] leading-relaxed mb-3">
                  {cmd.summary}
                </p>

                <div className="pt-3 border-t border-[#222227] font-mono text-xs text-[#65656E]">
                  <span className="text-[#9E9EA8]">Usage: </span>
                  <span className="text-[#F4F4F6]">{cmd.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222227] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/docs/cli-reference"
            className="inline-flex items-center gap-2 font-medium text-[#F4F4F6] hover:text-[#E8523F] transition-colors group"
          >
            <span>Complete CLI Reference Documentation</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(232,82,63,0.3)]"
          >
            <Download className="w-4 h-4" />
            <span>Download M31A Binary</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
