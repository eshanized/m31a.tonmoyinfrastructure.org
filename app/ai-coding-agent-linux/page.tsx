import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Download,
  Lock,
  Cpu,
  Layers,
  ExternalLink,
  Code2,
  GitBranch,
  Server,
  Command,
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT, PLATFORMS_MATRIX } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Linux-First AI Coding Agent: cgroups v2, Headless CLI & Terminal Cockpit · M31A',
  description:
    'M31A is release-qualified for Linux x86_64. Features Linux cgroups v2 process bounds, POSIX rlimits, headless CI execution, Ratatui TUI cockpit, and dual MIT/Apache-2.0 open-source licensing.',
  path: '/ai-coding-agent-linux',
  keywords: [
    'AI coding agent Linux',
    'Linux terminal AI assistant',
    'Linux coding agent CLI',
    'autonomous AI agent for Linux',
    'cgroups v2 AI sandbox',
    'open source Linux coding tool',
    'headless AI coding agent',
  ],
});

export default function AiCodingAgentLinuxPage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Linux AI Coding Agent', path: '/ai-coding-agent-linux' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'Linux-First AI Coding Agent: Kernel Confinement, Zero GUI Overhead & Headless Automation',
    description:
      'Authoritative technical overview of M31A on Linux. Detailed analysis of Linux cgroups v2 confinement, POSIX rlimits, fail-closed worktrees, and headless CLI pipelines.',
    path: '/ai-coding-agent-linux',
  });

  const linuxDistros = [
    { name: 'Ubuntu LTS (22.04 / 24.04)', status: 'SUPPORTED', notes: 'Native standalone binary & Cargo build verified in CI.' },
    { name: 'Debian 12 (Bookworm)', status: 'SUPPORTED', notes: 'Full cgroups v2 hierarchy and POSIX rlimits tested.' },
    { name: 'Fedora (40 / 41)', status: 'SUPPORTED', notes: 'SELinux-compatible unprivileged execution under user session.' },
    { name: 'Arch Linux', status: 'SUPPORTED', notes: 'Rolling kernel testing; cgroups v2 memory bounds active.' },
    { name: 'Rocky Linux / RHEL 9', status: 'SUPPORTED', notes: 'Enterprise server & headless container qualification.' },
    { name: 'Alpine Linux (musl)', status: 'COMPILE-ONLY', notes: 'Source compilation via Cargo; no standalone musl bundle.' },
  ];

  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }}
      />

      {/* Atmospheric Lighting */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.12)_0%,rgba(14,14,18,0.3)_45%,transparent_70%)] blur-3xl opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#F4F4F6_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F]">
              TIER-1 PLATFORM QUALIFICATION
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            Linux-First Autonomous AI Coding Agent: Native Kernel Confinement &amp; Zero GUI Overhead.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            Most AI coding tools treat Linux as a second-class target—distributing heavy Electron desktop apps that fail on headless servers, remote SSH connections, and tmux sessions.
            M31A is built from the kernel up for Linux x86_64, enforcing cgroups v2 process bounds, POSIX rlimits, and verifiable Git worktree isolation.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* Why Linux Needs a Dedicated Runtime */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <div className="p-2.5 rounded-lg bg-[#E8523F]/10 text-[#E8523F] w-fit mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Linux cgroups v2 Confinement</h2>
            <p className="text-xs text-[#A3A09B] leading-relaxed">
              Every child process and tool dispatch is governed by Linux control groups v2 (`src/sandbox/limits.rs`). Hard ceilings on CPU shares, memory RSS, and process fork counts prevent runaway agent loops from freezing the host machine.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 text-[#E8523F] w-fit mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Zero GUI Overhead</h2>
            <p className="text-xs text-[#A3A09B] leading-relaxed">
              No Electron, Chromium, or X11/Wayland dependencies. Runs seamlessly over SSH, within tmux or screen, inside remote devcontainers, and in headless CI/CD runner pipelines.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 text-[#E8523F] w-fit mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Host Environment Isolation</h2>
            <p className="text-xs text-[#A3A09B] leading-relaxed">
              Child processes invoke <code className="text-[#3ECF8E]">cmd.env_clear()</code> before execution, scrubbing all inherited host environment variables, tokens, and credentials while blocking LD_PRELOAD injection.
            </p>
          </div>
        </div>

        {/* Linux Distribution Compatibility Matrix */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              DISTRIBUTION SUPPORT MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Verified Linux Environments
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              Release-qualified on Linux x86_64 across major distributions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#27272E] bg-[#111115]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16161C] border-b border-[#27272E] text-xs font-mono text-[#F4F4F6]">
                <tr>
                  <th className="p-4">Linux Distribution</th>
                  <th className="p-4">Classification</th>
                  <th className="p-4">Technical Qualification Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226] text-[#A3A09B]">
                {linuxDistros.map((distro) => (
                  <tr key={distro.name}>
                    <td className="p-4 font-bold text-[#F4F4F6]">{distro.name}</td>
                    <td className="p-4">
                      <StatusBadge status={distro.status} />
                    </td>
                    <td className="p-4 text-xs">{distro.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Headless & CI/CD Pipelines */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Command className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Headless Linux Automation: Scripting, Pipelines &amp; Exit Codes
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Integrating autonomous coding agents into GitHub Actions, GitLab CI, and shell scripts</p>
            </div>
          </div>

          <p className="text-sm text-[#A3A09B] leading-relaxed">
            Because M31A adheres strictly to UNIX philosophy, it emits structured NDJSON to stdout/stderr and exits with deterministic status codes that tell your CI runners exactly what occurred:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#3ECF8E] font-bold">Exit 0</span>
              <p className="text-[#9E9EA8] font-sans text-xs mt-1">Success: Mission passed all compiler &amp; test gates.</p>
            </div>
            <div className="p-3 rounded-lg border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold">Exit 1</span>
              <p className="text-[#9E9EA8] font-sans text-xs mt-1">Verification Failure: Tests or linters failed.</p>
            </div>
            <div className="p-3 rounded-lg border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#EAB308] font-bold">Exit 2</span>
              <p className="text-[#9E9EA8] font-sans text-xs mt-1">Policy Violation: Denied by 11-stage policy gate.</p>
            </div>
            <div className="p-3 rounded-lg border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold">Exit 3</span>
              <p className="text-[#9E9EA8] font-sans text-xs mt-1">Budget Exhaustion: Token or dollar cap reached.</p>
            </div>
            <div className="p-3 rounded-lg border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold">Exit 4</span>
              <p className="text-[#9E9EA8] font-sans text-xs mt-1">Crash / Fault: SQLite state preserved for replay.</p>
            </div>
            <div className="p-3 rounded-lg border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold">Exit 5</span>
              <p className="text-[#9E9EA8] font-sans text-xs mt-1">Configuration Error: Invalid authority parameters.</p>
            </div>
          </div>
        </div>

        {/* Tested Linux Installation */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Tested Installation on Linux x86_64
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Release v{PRODUCT.version}</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] text-[#F4F4F6] space-y-3">
              <div>
                <span className="text-[#65656E] block mb-1"># Automated one-liner download &amp; verify</span>
                <code className="text-[#3ECF8E]">{PRODUCT.installCurl}</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># Or build from source via Cargo (requires Rust {PRODUCT.rustVersion})</span>
                <code>cargo install --git https://github.com/eshanized/M31A.git</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># Verify platform qualification report</span>
                <code>m31a version --verbose</code>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Limitation Disclosures */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-2">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Architecture &amp; Platform Invariants</h3>
          <p>
            • <strong>Linux x86_64</strong> is the sole release-qualified target with green CI, native runtime, parity, and security evidence.
          </p>
          <p>
            • <strong>Linux ARM64</strong> (aarch64) is currently classified as <code>COMPILE-ONLY</code>. Cross-compilation succeeds, but native runtime validation evidence is not yet established. Do not assume parity with x86_64.
          </p>
          <p>
            • Official platform specification: <Link href="/docs/platform-support" className="text-[#E8523F] underline">Platform Qualification Guide</Link>.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl border border-[#E8523F]/30 bg-gradient-to-r from-[#171214] via-[#111115] to-[#171214] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F4F4F6]">Deploy M31A to Your Linux Environment</h3>
            <p className="text-xs text-[#9E9EA8] mt-1">Single static binary. Zero foreign runtime dependencies.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(232,82,63,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Linux Binary</span>
            </Link>
            <Link
              href="/terminal-coding-agent"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2C2C34] bg-[#141418] hover:bg-[#1A1A20] text-[#F4F4F6] text-xs font-semibold transition-all"
            >
              <span>Explore Terminal Cockpit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
