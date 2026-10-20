import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Download,
  Lock,
  GitBranch,
  CheckCircle2,
  Sliders,
  PlayCircle,
  Eye,
  Key,
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT, TUI_SURFACES } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Terminal-Native AI Coding Agent: Ratatui TUI Cockpit & CLI Automation · M31A',
  description:
    'Experience terminal-native AI software engineering with M31A: Ratatui 0.30 interactive cockpit, RAII terminal raw-mode safety, task DAG visualization, and headless UNIX pipeline execution.',
  path: '/terminal-coding-agent',
  keywords: [
    'terminal coding agent',
    'CLI coding agent',
    'TUI coding agent',
    'terminal AI software engineer',
    'Ratatui coding agent',
    'autonomous CLI coding tool',
    'Rust terminal agent',
  ],
});

export default function TerminalCodingAgentPage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Terminal Coding Agent', path: '/terminal-coding-agent' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'Terminal-Native AI Coding Agent: Ratatui Cockpit Architecture & Headless Pipelines',
    description:
      'In-depth technical architecture of M31A as a terminal-native autonomous software engineering agent. Exploring TUI surfaces, RAII terminal safety, petgraph DAG visualizer, and headless automation.',
    path: '/terminal-coding-agent',
  });

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

      {/* Atmospheric Radial Lighting */}
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
              KEYBOARD-FIRST ENGINEERING
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            Terminal-Native Autonomous Coding Agent: Real Engineering Without GUI Friction.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            Software engineering is fundamentally terminal-native. M31A provides a high-density,
            Ratatui-powered operational cockpit that runs entirely in your terminal—giving you full control over
            mission planning, live tool execution spools, task DAGs, verification gates, and telemetry without ever leaving your shell.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <div className="p-2.5 rounded-lg bg-[#E8523F]/10 text-[#E8523F] w-fit mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Ratatui 0.30 Cockpit</h2>
            <p className="text-xs text-[#A3A09B] leading-relaxed">
              Unified keyboard-driven operational surface with zero web or Electron layers. High-performance terminal rendering at 60 FPS with full color support and responsive pane scaling.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 text-[#E8523F] w-fit mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">RAII TerminalGuard</h2>
            <p className="text-xs text-[#A3A09B] leading-relaxed">
              Guaranteed raw-mode terminal restoration. Even if a process panics, crashes, or receives SIGINT/SIGTERM, the RAII TerminalGuard deterministically restores your terminal buffer.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 text-[#E8523F] w-fit mb-4">
              <Sliders className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Headless UNIX Pipeability</h2>
            <p className="text-xs text-[#A3A09B] leading-relaxed">
              Seamless transition between interactive exploration (<code className="text-[#3ECF8E]">m31a cockpit</code>) and headless CI automation (<code className="text-[#3ECF8E]">m31a run --output json</code>) with standardized exit codes.
            </p>
          </div>
        </div>

        {/* The 9 Interactive TUI Cockpit Surfaces */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              COCKPIT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Operational Surfaces in the M31A Cockpit
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              The TUI is a pure projection of authoritative SQLite runtime state (`src/tui/app.rs`).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TUI_SURFACES.map((surface) => (
              <div
                key={surface.id}
                className="p-5 rounded-xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#E8523F] font-bold">{surface.name}</span>
                    <span className="text-[10px] font-mono text-[#65656E]">{surface.id}</span>
                  </div>
                  <p className="text-xs text-[#A3A09B] leading-relaxed mb-4">
                    {surface.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222226] flex flex-wrap gap-1">
                  {surface.shortcuts.map((sc) => (
                    <span key={sc} className="text-[10px] font-mono bg-[#18181D] border border-[#27272E] px-1.5 py-0.5 rounded text-[#9E9EA8]">
                      {sc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Mode: Interactive Cockpit vs Headless Execution */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Dual Mode Operation: When to Use Cockpit vs. Headless Run
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Interactive development vs. automated repository pipelines</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#A3A09B]">
            <div className="p-6 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <h3 className="text-base font-bold text-[#F4F4F6] mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E8523F]" /> Interactive Cockpit (`m31a cockpit`)
              </h3>
              <p className="text-xs leading-relaxed mb-3">
                Full visual observation of petgraph DAG execution, live streaming subprocess spools, prompt review cards, and real-time verification diffs.
              </p>
              <div className="p-3 rounded bg-[#070709] font-mono text-xs text-[#3ECF8E]">
                $ m31a cockpit
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <h3 className="text-base font-bold text-[#F4F4F6] mb-2 flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-[#3ECF8E]" /> Headless Run (`m31a run`)
              </h3>
              <p className="text-xs leading-relaxed mb-3">
                Autonomous mission execution for CI runners, git hooks, and background daemon tasks with structured JSON logging and standardized exit codes.
              </p>
              <div className="p-3 rounded bg-[#070709] font-mono text-xs text-[#3ECF8E]">
                $ m31a run &quot;Upgrade dependencies&quot; --output json
              </div>
            </div>
          </div>
        </div>

        {/* Tested Getting Started Walkthrough */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Launch the Terminal Cockpit
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Single binary download and instant launch</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] text-[#F4F4F6] space-y-3">
              <div>
                <span className="text-[#65656E] block mb-1"># 1. Install standalone M31A binary</span>
                <code className="text-[#3ECF8E]">{PRODUCT.installCurl}</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># 2. Launch the mission cockpit</span>
                <code>m31a cockpit</code>
              </div>
            </div>
          </div>
        </div>

        {/* Source References & Invariants */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-2">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Authoritative Runtime Citations</h3>
          <p>
            • Ratatui cockpit screens and surfaces verified in{' '}
            <code className="text-[#F4F4F6]">src/tui/screens/session_cockpit.rs</code> and{' '}
            <code className="text-[#F4F4F6]">src/tui/app.rs</code>.
          </p>
          <p>
            • RAII TerminalGuard raw-mode restoration verified in <code className="text-[#F4F4F6]">src/tui/terminal.rs</code>.
          </p>
          <p>
            • Complete CLI reference: <Link href="/cli" className="text-[#E8523F] underline">CLI Reference &amp; Exit Codes</Link>.
          </p>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="p-8 rounded-2xl border border-[#E8523F]/30 bg-gradient-to-r from-[#171214] via-[#111115] to-[#171214] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F4F4F6]">Built for Developers Who Live in the Terminal</h3>
            <p className="text-xs text-[#9E9EA8] mt-1">Free &amp; open-source under dual MIT / Apache-2.0 licenses.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(232,82,63,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download M31A</span>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2C2C34] bg-[#141418] hover:bg-[#1A1A20] text-[#F4F4F6] text-xs font-semibold transition-all"
            >
              <span>Explore Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
