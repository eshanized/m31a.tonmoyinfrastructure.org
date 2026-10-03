import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Download } from 'lucide-react';
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
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            COMMAND LINE INTERFACE
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            The Runtime, Addressed by Name.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            M31A provides a complete clap-derive CLI with machine-readable <code className="text-[#F0EDE8] font-mono">--output json</code> options,
            strict UNIX exit codes, and an interactive Ratatui TUI cockpit.
          </p>
        </Container>
      </div>

      <Container>
        {/* Interactive CLI Showcase */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F0EDE8]">
              Interactive Command Preview
            </h2>
            <p className="text-sm text-[#A3A09B] mt-1">
              Select commands below to inspect real documented output and environmental checks.
            </p>
          </div>

          <CliShowcase />
        </div>

        {/* Exit Code Contract */}
        <div className="rounded-2xl border border-[#222226] bg-[#111113] p-8 mb-20">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              AUTOMATION CONTRACT
            </span>
            <h2 className="text-xl font-bold text-[#F0EDE8]">
              Standardized UNIX Exit Codes
            </h2>
            <p className="text-xs text-[#A3A09B] mt-1 leading-relaxed">
              Every invocation returns a predictable exit code designed for headless CI/CD evaluation runners:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXIT_CODES.map((ec) => (
              <div key={ec.code} className="p-4 rounded-xl border border-[#222226] bg-[#0A0A0B]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#E8523F] bg-[#E8523F]/10 px-2 py-0.5 rounded">
                    exit {ec.code}
                  </span>
                  <span className="text-sm font-semibold text-[#F0EDE8]">{ec.meaning}</span>
                </div>
                <p className="text-xs text-[#A3A09B] leading-relaxed mt-2">{ec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Command Register */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F0EDE8]">
              Full Command Catalog
            </h2>
            <p className="text-sm text-[#A3A09B] mt-1">
              {CLI_COMMAND_DEFS.length} documented subcommands across 6 operational categories.
            </p>
          </div>

          <div className="space-y-4">
            {CLI_COMMAND_DEFS.map((cmd) => (
              <div
                key={cmd.command}
                className="p-6 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#2C2C31] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-[#E8523F] shrink-0" />
                    <span className="font-mono text-sm sm:text-base font-bold text-[#F0EDE8]">
                      {cmd.command}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded border border-[#2C2C31] bg-[#18181B] text-[#A3A09B] self-start sm:self-auto">
                    {cmd.category}
                  </span>
                </div>

                <p className="text-sm text-[#A3A09B] leading-relaxed mb-3">
                  {cmd.summary}
                </p>

                <div className="pt-3 border-t border-[#222226] font-mono text-xs text-[#6B6965]">
                  <span className="text-[#A3A09B]">Usage: </span>
                  <span className="text-[#F0EDE8]">{cmd.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/docs/cli-reference"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>Complete CLI Reference Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download M31A Binary</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
