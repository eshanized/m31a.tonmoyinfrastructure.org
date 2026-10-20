import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'AI Coding Agent Alternatives & Comparison Matrix (2026) · M31A',
  description:
    'Compare top AI coding agents: M31A vs Cursor vs Claude Code vs OpenCode. Detailed architectural comparison of execution authority, process sandboxing, licensing, and terminal workflows.',
  path: '/alternatives',
  keywords: [
    'AI coding agent alternatives',
    'Cursor alternative',
    'Claude Code alternative',
    'OpenCode alternative',
    'open source coding agents',
    'terminal coding agent comparison',
    'AI software engineering tools 2026',
  ],
});

export default function AlternativesHubPage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Alternatives', path: '/alternatives' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'AI Coding Agent Alternatives & Architectural Trade-Off Analysis (2026)',
    description:
      'Fact-checked architectural comparison matrix of leading AI coding assistants, covering IDE forks, cloud CLI tools, and terminal-native autonomous runtimes.',
    path: '/alternatives',
  });

  const comparisonData = [
    {
      tool: 'M31A',
      badge: 'Terminal Runtime',
      license: 'Dual MIT / Apache-2.0',
      interface: 'Ratatui 0.30 TUI & Headless CLI',
      executionModel: '12-Stage Deterministic Autonomy Loop',
      authority: 'Runtime Decides (Deterministic Policy Gates)',
      isolation: 'Linux cgroups v2, POSIX rlimits, env_clear()',
      persistence: 'SQLite (WAL), 2-phase checkpoints, crash scanner',
      verification: 'Automated test gates + SHA-256 evidence digests',
      targetAudience: 'Systems, backend & DevOps engineers seeking verified repo refactors in terminal',
      pricing: '$0 software license; direct NVIDIA NIM inference',
    },
    {
      tool: 'Cursor',
      badge: 'IDE Fork',
      license: 'Proprietary Closed-Source',
      interface: 'Desktop GUI (VS Code Electron Fork)',
      executionModel: 'Model-driven multi-file edits (Composer) & Tab auto-complete',
      authority: 'Model proposes; Operator manually reviews inline diffs',
      isolation: 'Standard editor process privileges; no cgroups confinement',
      persistence: 'Local editor workspace storage & proprietary cloud servers',
      verification: 'Manual developer inspection in editor UI',
      targetAudience: 'Developers seeking full-featured GUI editor with tight inline AI integration',
      pricing: 'Free Hobby ($0 limited); Pro ($20/mo); Business ($40/user/mo)',
    },
    {
      tool: 'Claude Code',
      badge: 'Cloud CLI',
      license: 'Proprietary Anthropic Client',
      interface: 'Terminal CLI & REPL (Node.js)',
      executionModel: 'Interactive conversational agent with tool calling',
      authority: 'Interactive operator permission prompts per action',
      isolation: 'Standard user shell permissions; no kernel cgroups bounds',
      persistence: 'Session history in local JSON / memory',
      verification: 'Operator review in terminal or test command scripts',
      targetAudience: 'Developers wanting Claude 3.7/3.5 Sonnet directly in their command line',
      pricing: 'Anthropic token billing or Claude Pro/Team/Enterprise plan',
    },
    {
      tool: 'OpenCode',
      badge: 'Open-Source CLI/GUI',
      license: 'MIT License (Anomaly)',
      interface: 'Terminal TUI, Desktop App & VS Code/Cursor Plugins',
      executionModel: 'Interactive multi-session agent with 75+ provider routing',
      authority: 'Operator-approved tool calls with LSP code intelligence',
      isolation: 'Node.js execution environment; standard shell rlimits',
      persistence: 'Local file/state cache and opt-in session share links',
      verification: 'Language Server diagnostics + user-directed tests',
      targetAudience: 'Engineers wanting a multi-provider open-source assistant across terminal & IDE',
      pricing: '$0 software; BYOK (bring your own API keys) or Copilot/ChatGPT OAuth',
    },
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

      {/* Background CAD Ambient Effects */}
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
              ARCHITECTURAL DIRECTORY
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            AI Coding Agent Alternatives: Architectural Landscape &amp; Decision Guide.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            The 2026 AI coding assistant space is split across three distinct form factors:
            desktop IDE forks, cloud CLI wrappers, and autonomous system runtimes.
            Here is an objective, fact-checked breakdown to help you pick the right tool for your engineering constraints.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* The 3 Paradigms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <span className="text-xs font-mono text-[#E8523F] font-semibold uppercase block mb-2">PARADIGM 01</span>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Desktop IDE Forks</h2>
            <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
              Tools like <strong>Cursor</strong> and Windsurf fork VS Code into custom Electron apps with deep inline tab-completion and GUI diff reviewers.
            </p>
            <span className="text-[11px] font-mono text-[#65656E] block">Best for: Frontend, rapid manual editing, visual UI previews.</span>
          </div>

          <div className="p-6 rounded-xl border border-[#27272E] bg-[#111115]">
            <span className="text-xs font-mono text-[#E8523F] font-semibold uppercase block mb-2">PARADIGM 02</span>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Cloud Terminal CLIs</h2>
            <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
              Tools like <strong>Claude Code</strong> provide quick terminal access to frontier models with conversational prompt loops and interactive approvals.
            </p>
            <span className="text-[11px] font-mono text-[#65656E] block">Best for: Fast exploratory queries and interactive CLI tasks.</span>
          </div>

          <div className="p-6 rounded-xl border border-[#E8523F]/40 bg-[#161214]">
            <span className="text-xs font-mono text-[#E8523F] font-semibold uppercase block mb-2">PARADIGM 03</span>
            <h2 className="text-lg font-bold text-[#F4F4F6] mb-2">Autonomous Runtimes</h2>
            <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
              Runtimes like <strong>M31A</strong> treat the LLM as untrusted. The runtime enforces non-bypassable policy gates, cgroup bounds, and verification checks.
            </p>
            <span className="text-[11px] font-mono text-[#3ECF8E] block">Best for: Unattended repo refactoring, CI pipelines, Linux servers.</span>
          </div>
        </div>

        {/* Master Comparison Table */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              MASTER COMPARISON MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Architectural &amp; Operational Comparison
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#27272E] bg-[#111115]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16161C] border-b border-[#27272E] text-xs font-mono text-[#F4F4F6]">
                <tr>
                  <th className="p-4">Tool</th>
                  <th className="p-4">Form Factor</th>
                  <th className="p-4">License</th>
                  <th className="p-4">Authority Model</th>
                  <th className="p-4">Security Sandbox</th>
                  <th className="p-4">Persistence Engine</th>
                  <th className="p-4">Software Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226] text-[#A3A09B]">
                {comparisonData.map((item) => {
                  const isM31A = item.tool === 'M31A';
                  return (
                    <tr key={item.tool} className={isM31A ? 'bg-[#181315]/60' : undefined}>
                      <td className="p-4 font-bold text-[#F4F4F6] flex items-center gap-2">
                        <span>{item.tool}</span>
                        {isM31A && <span className="text-[10px] font-mono text-[#E8523F] bg-[#E8523F]/10 px-1.5 py-0.5 rounded border border-[#E8523F]/20">Kernel</span>}
                      </td>
                      <td className="p-4">{item.interface}</td>
                      <td className="p-4 font-mono text-xs">{item.license}</td>
                      <td className="p-4">{item.authority}</td>
                      <td className="p-4 font-mono text-xs">{item.isolation}</td>
                      <td className="p-4">{item.persistence}</td>
                      <td className="p-4 font-medium text-[#F4F4F6]">{item.pricing}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dedicated Comparison Subpage Guides */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              DEEP-DIVE COMPARISONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Detailed Architectural Matchups
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              Explore exhaustive head-to-head technical analyses for your specific migration or evaluation scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/alternatives/cursor"
              className="p-6 rounded-xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#E8523F] font-bold block mb-1">M31A vs. Cursor</span>
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-[#E8523F] transition-colors mb-2">
                  Terminal Autonomous Runtime vs. Desktop IDE Fork
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
                  Why engineers choose M31A when they require remote server operation, headless automation, non-bypassable policy gates, and zero seat licensing costs.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8523F] font-semibold mt-4">
                <span>Read Cursor Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/alternatives/claude-code"
              className="p-6 rounded-xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#E8523F] font-bold block mb-1">M31A vs. Claude Code</span>
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-[#E8523F] transition-colors mb-2">
                  Rust Native Kernel vs. Node.js Terminal CLI
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
                  Comparing Anthropic&apos;s interactive CLI tool with M31A&apos;s 11-stage policy gate, cgroups confinement, SQLite WAL persistence, and dual-license open source.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8523F] font-semibold mt-4">
                <span>Read Claude Code Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/alternatives/opencode"
              className="p-6 rounded-xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#E8523F] font-bold block mb-1">M31A vs. OpenCode</span>
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-[#E8523F] transition-colors mb-2">
                  Autonomous Verification vs. Multi-Provider Assistant
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
                  Comparing two prominent open-source tools: OpenCode&apos;s flexible 75+ provider ecosystem and LSP support vs. M31A&apos;s Linux-qualified deterministic execution kernel.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8523F] font-semibold mt-4">
                <span>Read OpenCode Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Operating System Requirements & Disclosures */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-3">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Verification Dates &amp; Official References</h3>
          <p>
            • All competitor features, pricing plans, and licensing details were verified from primary documentation in <strong>{lastVerified}</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-2 font-mono text-[11px]">
            <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer" className="text-[#9E9EA8] hover:text-[#E8523F] flex items-center gap-1">
              <span>Cursor Documentation</span> <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="text-[#9E9EA8] hover:text-[#E8523F] flex items-center gap-1">
              <span>Anthropic Claude Code</span> <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://opencode.ai/" target="_blank" rel="noopener noreferrer" className="text-[#9E9EA8] hover:text-[#E8523F] flex items-center gap-1">
              <span>OpenCode Documentation</span> <ExternalLink className="w-3 h-3" />
            </a>
            <a href={PRODUCT.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-[#9E9EA8] hover:text-[#E8523F] flex items-center gap-1">
              <span>M31A GitHub Core</span> <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
