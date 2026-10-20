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
  Sparkles,
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'OpenCode Alternative: Rust Systems Kernel vs Multi-Provider Assistant · M31A',
  description:
    'Comparing OpenCode and M31A: Two open-source terminal coding agents. Explore differences in Rust vs TypeScript runtimes, multi-provider routing vs deterministic policy gates, and verification loops.',
  path: '/alternatives/opencode',
  keywords: [
    'OpenCode alternative',
    'OpenCode vs M31A',
    'open source AI coding agent',
    'terminal coding assistant comparison',
    'Rust vs TypeScript coding agent',
    'open source autonomous coding runtime',
  ],
});

export default function OpenCodeAlternativePage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Alternatives', path: '/alternatives' },
    { name: 'OpenCode Comparison', path: '/alternatives/opencode' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'OpenCode Alternative: Rust Autonomous Kernel vs. Multi-Provider Assistant',
    description:
      'Fact-checked architectural comparison between OpenCode (Anomaly) and M31A (Tonmoy Infrastructure). Evaluating two leading open-source terminal agents across execution models, sandboxing, and provider scope.',
    path: '/alternatives/opencode',
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

      {/* Atmospheric Ambient Lighting */}
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
            <Link href="/alternatives" className="text-xs font-mono text-[#9E9EA8] hover:text-[#E8523F] transition-colors">
              ALTERNATIVES
            </Link>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F]">
              OPENCODE COMPARISON
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            M31A vs. OpenCode: Comparing Two Open-Source Terminal Coding Agents.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            Both M31A and OpenCode reject the proprietary SaaS lock-in of commercial AI assistants.
            However, their architectural focus differs: OpenCode prioritizes broad multi-provider flexibility and editor extensions, while M31A focuses on single-binary Rust systems assurance, non-bypassable policy gates, and automated verification loops.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* Open-Source Shared Foundation */}
        <div className="p-6 rounded-2xl border border-[#3ECF8E]/30 bg-[#0E1512] flex items-start gap-4 shadow-xl">
          <div className="p-2 rounded-lg bg-[#3ECF8E]/15 text-[#3ECF8E] shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-sm text-[#A3A09B]">
            <h2 className="text-base font-bold text-[#F4F4F6]">
              A Shared Open-Source Ethos: Zero Proprietary SaaS Gatekeeping
            </h2>
            <p>
              Unlike commercial closed-source tools (such as Cursor or GitHub Copilot), both <strong>OpenCode</strong> (MIT licensed by Anomaly) and <strong>M31A</strong> (MIT licensed by Tonmoy Infrastructure) are open-source projects where you own your tools, inspect the code, and pay zero recurring subscription seat fees.
            </p>
          </div>
        </div>

        {/* Who Each Tool Suits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-[#27272E] bg-[#111115]">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#E8523F] font-semibold uppercase">
              <span>TARGET PROFILE</span>
            </div>
            <h2 className="text-xl font-bold text-[#F4F4F6] mb-3">When to Choose OpenCode</h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A3A09B] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You want model provider flexibility: routing across 75+ LLMs (OpenAI, Anthropic, Gemini, Ollama, Copilot).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You work across multiple surfaces: terminal TUI, desktop application, and VS Code/Zed/Cursor extensions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You rely heavily on Language Server Protocol (LSP) integration for in-session type definitions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You want built-in session sharing links for collaborating with teammates on debug threads.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-[#27272E] bg-[#111115]">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#3ECF8E] font-semibold uppercase">
              <span>TARGET PROFILE</span>
            </div>
            <h2 className="text-xl font-bold text-[#F4F4F6] mb-3">When to Choose M31A</h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A3A09B] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You require a single, self-contained native Rust 2024 binary with zero Node.js, Python, or npm dependencies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You need strict system governance: an 11-stage policy gate, Linux cgroups v2 resource enforcement, and SSRF egress filtering.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You require verifiable outcomes: mandatory compiler checks, automated unit test suites, and SHA-256 evidence digests before commits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You need crash resilience backed by an ACID SQLite persistence engine (WAL mode) with atomic two-phase commit checkpoints.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fact-Checked Comparison Table */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              FACT-CHECKED COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              OpenCode vs. M31A Technical Comparison
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              Verified against current official documentation and release repositories ({lastVerified}).
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#27272E] bg-[#111115]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16161C] border-b border-[#27272E] text-xs font-mono text-[#F4F4F6]">
                <tr>
                  <th className="p-4">Dimension</th>
                  <th className="p-4">OpenCode (Anomaly)</th>
                  <th className="p-4 text-[#E8523F]">M31A Autonomous Runtime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226] text-[#A3A09B]">
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Software License</td>
                  <td className="p-4 font-mono text-xs text-[#3ECF8E]">MIT License</td>
                  <td className="p-4 font-mono text-xs text-[#3ECF8E]">MIT</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Runtime Architecture</td>
                  <td className="p-4">TypeScript / Node.js runtime</td>
                  <td className="p-4 text-[#3ECF8E] font-medium">Single-crate native Rust 2024 binary (zero foreign deps)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Supported Model Scope</td>
                  <td className="p-4">75+ providers (Claude, OpenAI, Gemini, Ollama, Copilot)</td>
                  <td className="p-4">NVIDIA NIM Nemotron-3 Ultra 550B (Production canonical)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Execution Paradigm</td>
                  <td className="p-4">Interactive conversational assistant with parallel sessions</td>
                  <td className="p-4 text-[#E8523F] font-medium">12-stage deterministic autonomy loop with 8 agent roles</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Process Confinement</td>
                  <td className="p-4">Standard Node.js process shell environment</td>
                  <td className="p-4 text-[#3ECF8E]">Linux cgroups v2, POSIX rlimits, cmd.env_clear() host isolation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Egress Network Security</td>
                  <td className="p-4">Standard host network privileges</td>
                  <td className="p-4 text-[#3ECF8E]">Centralized SSRF filter blocking private IPs &amp; cloud metadata</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">State Persistence Engine</td>
                  <td className="p-4">Local file cache &amp; session sharing links</td>
                  <td className="p-4">ACID SQLite (WAL), 2-phase checkpoints, startup crash recovery</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Verification Gates</td>
                  <td className="p-4">Language Server Protocol (LSP) diagnostics &amp; user tests</td>
                  <td className="p-4 text-[#3ECF8E]">Multi-tier verification gates with SHA-256 evidence digests</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">User Surfaces</td>
                  <td className="p-4">Terminal TUI, Desktop App, VS Code / Cursor extensions</td>
                  <td className="p-4">Ratatui 0.30 Cockpit &amp; Headless CLI (JSON streaming)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Platform Qualification</td>
                  <td className="p-4">Cross-platform via Node.js runtime (macOS, Linux, Windows)</td>
                  <td className="p-4">Linux x86_64 (release-qualified); macOS Intel (conditional)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Systems Assurance vs Multi-Provider Agility */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Architectural Philosophy: Ecosystem Agility vs. Kernel Determinism
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Choosing between broad provider routing and non-bypassable runtime control</p>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#A3A09B]">
            <p>
              <strong>OpenCode</strong> shines when you want flexibility across providers and editor surfaces. If your engineering workflow involves switching between Claude 3.7, OpenAI o3-mini, and local Ollama models inside VS Code or the terminal, OpenCode provides an adaptable, community-driven interface with LSP diagnostics.
            </p>
            <p>
              <strong>M31A</strong> is built for high-assurance systems engineering. Rather than supporting 75 different providers with varying trust characteristics, M31A qualifies a canonical production provider (NVIDIA NIM Nemotron-3 Ultra 550B) and surrounds it with an impenetrable defense-in-depth perimeter:
            </p>
            <ul className="space-y-2 font-mono text-xs text-[#F4F4F6] p-4 rounded-xl bg-[#09090C] border border-[#222226]">
              <li>• <span className="text-[#E8523F]">Non-Bypassable Policy Gate:</span> 10 authority layers evaluate every mutation before it touches disk.</li>
              <li>• <span className="text-[#E8523F]">Fail-Closed Worktrees:</span> All agent side effects are isolated in git worktrees; runs fail closed if unverified.</li>
              <li>• <span className="text-[#E8523F]">Linux cgroups v2 Bounds:</span> Hard ceilings on CPU cores, memory RSS, and process child counts.</li>
              <li>• <span className="text-[#E8523F]">SHA-256 Proof of Work:</span> A mission cannot report success without passing compiler and test gates.</li>
            </ul>
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
                Quick Start: Installing M31A on Linux
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Single self-contained binary, no npm packages required</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] text-[#F4F4F6] space-y-3">
              <div>
                <span className="text-[#65656E] block mb-1"># 1. Download standalone Linux x86_64 binary</span>
                <code className="text-[#3ECF8E]">{PRODUCT.installCurl}</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># 2. Launch interactive Ratatui mission cockpit</span>
                <code>m31a cockpit</code>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosures & Citations */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-2">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Documentation Citations &amp; Verification Dates</h3>
          <p>
            • OpenCode features, repository details, and LSP capabilities verified on <strong>{lastVerified}</strong> from{' '}
            <a href="https://opencode.ai/" target="_blank" rel="noopener noreferrer" className="text-[#E8523F] underline inline-flex items-center gap-0.5">
              opencode.ai <ExternalLink className="w-3 h-3" />
            </a>{' '}
            and{' '}
            <a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener noreferrer" className="text-[#E8523F] underline inline-flex items-center gap-0.5">
              github.com/anomalyco/opencode <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
          <p>
            • M31A technical specifications verified against runtime release <strong>v{PRODUCT.version}</strong> in{' '}
            <a href={PRODUCT.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-[#E8523F] underline inline-flex items-center gap-0.5">
              github.com/eshanized/M31A <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
        </div>

        {/* Action Link Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#222226]">
          <Link href="/alternatives" className="inline-flex items-center gap-2 text-xs font-mono text-[#9E9EA8] hover:text-[#E8523F] transition-colors">
            ← Back to All Alternatives
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/ai-coding-agent-linux"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F4F6] hover:text-[#E8523F] transition-colors"
            >
              <span>Next: Linux-First AI Coding Agent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
