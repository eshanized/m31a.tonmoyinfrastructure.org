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
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Cursor Alternative: Terminal Autonomous Agent vs Desktop IDE Fork · M31A',
  description:
    'Comparing Cursor and M31A: Why terminal-native engineers choose M31A for headless execution, non-bypassable policy gates, Linux cgroups confinement, and 100% open-source licensing.',
  path: '/alternatives/cursor',
  keywords: [
    'Cursor alternative',
    'open source Cursor alternative',
    'Cursor vs M31A',
    'terminal alternative to Cursor',
    'AI coding agent terminal',
    'headless Cursor alternative',
  ],
});

export default function CursorAlternativePage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Alternatives', path: '/alternatives' },
    { name: 'Cursor Comparison', path: '/alternatives/cursor' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'Cursor Alternative: Terminal Autonomous Agent vs. Desktop IDE Fork',
    description:
      'Fact-checked architectural comparison between Cursor (VS Code fork) and M31A (Rust terminal runtime). Detailed analysis of authority models, sandboxing, and operating constraints.',
    path: '/alternatives/cursor',
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

      {/* Atmospheric Radial Lighting & CAD Tech Grid */}
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
              CURSOR COMPARISON
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            M31A vs. Cursor: Terminal Autonomous Runtime vs. Desktop IDE Fork.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            Cursor is an AI-first desktop IDE fork of VS Code. M31A is an open-source autonomous runtime that lives in your terminal.
            Here is an honest, architectural comparison of where they diverge, who each tool suits, and why M31A is not a drop-in IDE replacement.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* Important Scope Notice: Not an IDE Replacement */}
        <div className="p-6 rounded-2xl border border-[#E8523F]/35 bg-[#171214] flex items-start gap-4 shadow-xl">
          <div className="p-2 rounded-lg bg-[#E8523F]/15 text-[#E8523F] shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-sm text-[#A3A09B]">
            <h2 className="text-base font-bold text-[#F4F4F6]">
              Clear Architectural Scope: M31A Is Not a Drop-In IDE Replacement
            </h2>
            <p>
              If your primary daily workflow requires a graphical text editor with inline tab completion, syntax highlighting panes, mouse interactions, and visual web browser previews, <strong>Cursor</strong> or standard VS Code is purpose-built for that model.
            </p>
            <p>
              <strong>M31A is designed for serious repository engineering from the terminal.</strong> It excels at autonomous multi-file refactoring, headless CI/CD execution, SSH remote development, tmux sessions, and strict policy-governed system mutations where the runtime—not the model—owns execution authority.
            </p>
          </div>
        </div>

        {/* Who Each Tool Suits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-[#27272E] bg-[#111115]">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#E8523F] font-semibold uppercase">
              <span>TARGET PROFILE</span>
            </div>
            <h2 className="text-xl font-bold text-[#F4F4F6] mb-3">When to Choose Cursor</h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A3A09B] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You want a complete desktop IDE experience with inline tab autocomplete (Copilot-style).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You prefer interactive side-by-side visual diff reviews within editor buffer splits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You are comfortable paying a $20–$40/month subscription per engineer and proxying repository code through proprietary cloud infrastructure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You work locally on macOS or Windows desktops with ample memory for Electron processes.</span>
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
                <span>You live in the terminal (Bash, Zsh, tmux, Neovim, SSH) and want an autonomous agent that does not force you into a GUI editor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You require deterministic security: an 11-stage policy gate, Linux cgroups v2 process confinement, and fail-closed git worktree isolation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You require open-source software under the MIT License with zero recurring license seat fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You want automated continuous verification (compiler, test suites, SHA-256 evidence digests) before any work is committed.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fact-Checked Comparison Table */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              FEATURE-BY-FEATURE BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Cursor vs. M31A Fact-Checked Comparison
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              Verified against current official documentation and release artifacts ({lastVerified}).
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#27272E] bg-[#111115]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16161C] border-b border-[#27272E] text-xs font-mono text-[#F4F4F6]">
                <tr>
                  <th className="p-4">Capability / Invariant</th>
                  <th className="p-4">Cursor (Anysphere)</th>
                  <th className="p-4 text-[#E8523F]">M31A Autonomous Runtime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226] text-[#A3A09B]">
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Software License</td>
                  <td className="p-4">Proprietary Closed-Source</td>
                  <td className="p-4 text-[#3ECF8E] font-medium">MIT (Open Source)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Primary User Interface</td>
                  <td className="p-4">Desktop GUI Application (Electron / VS Code fork)</td>
                  <td className="p-4">Ratatui 0.30 Terminal Cockpit + Headless CLI</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Underlying Runtime</td>
                  <td className="p-4">Node.js + Electron + Chromium</td>
                  <td className="p-4">Single Rust 2024 binary (zero foreign dependencies)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Execution Authority</td>
                  <td className="p-4">Model proposes edits; human accepts/rejects in GUI</td>
                  <td className="p-4 text-[#E8523F] font-medium">&quot;The model proposes. The runtime decides.&quot;</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Security Policy Gates</td>
                  <td className="p-4">Standard editor process execution permissions</td>
                  <td className="p-4 text-[#3ECF8E]">11-stage non-bypassable policy gate with 10 authority layers</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Process Confinement</td>
                  <td className="p-4">No OS-level cgroup bounds or memory ceilings</td>
                  <td className="p-4 text-[#3ECF8E]">Linux cgroups v2 memory/CPU limits &amp; POSIX rlimits</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Network Egress Hardening</td>
                  <td className="p-4">Standard host network privileges</td>
                  <td className="p-4">Centralized SSRF filter blocking loopback &amp; cloud metadata</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Crash Persistence</td>
                  <td className="p-4">Local editor cache and proprietary remote backend</td>
                  <td className="p-4">ACID SQLite (WAL), 2-phase checkpoints, startup scanner</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Headless &amp; CI/CD Mode</td>
                  <td className="p-4">No native headless CLI execution mode</td>
                  <td className="p-4 text-[#3ECF8E]">Native <code>m31a run --output json</code> with UNIX exit codes</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Pricing / Licensing Fees</td>
                  <td className="p-4">Hobby (Limited $0), Pro ($20/mo), Business ($40/mo)</td>
                  <td className="p-4 text-[#3ECF8E] font-medium">$0 software license; direct NVIDIA NIM inference</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Primary Operating System</td>
                  <td className="p-4">macOS, Windows, Linux Desktop GUI</td>
                  <td className="p-4">Linux x86_64 (release-qualified); macOS Intel (conditional)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Architecture & Workflow Differences */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Architectural Breakdown: Where the Workflows Diverge
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Interactive Editor vs. Deterministic Autonomous Engine</p>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#A3A09B]">
            <p>
              In <strong>Cursor</strong>, the AI model acts as a co-author inside your active editing session. You prompt the composer, watch green/red diffs appear in your active files, and accept or reject them manually. This is fast and visually intuitive for interactive component development.
            </p>
            <p>
              In <strong>M31A</strong>, the interaction follows a closed-loop autonomous engineering cycle. You specify a high-level engineering mission (e.g., &quot;Upgrade hyper to 1.x and resolve all breaking API changes&quot;). M31A takes over:
            </p>
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] font-mono text-xs text-[#F4F4F6] space-y-1">
              <div>1. <span className="text-[#E8523F]">INTENT</span> → Decomposes mission into petgraph-backed task DAG.</div>
              <div>2. <span className="text-[#E8523F]">PLAN</span> → Dispatches specialized roles (planner, researcher, architect).</div>
              <div>3. <span className="text-[#E8523F]">EXECUTE</span> → Gated by 11 policy stages; confined by cgroups v2.</div>
              <div>4. <span className="text-[#E8523F]">VERIFY</span> → Compiles code, executes cargo test suites, runs clippy.</div>
              <div>5. <span className="text-[#E8523F]">RECOVER</span> → Re-plans on compiler failure; rolls back on unverified diffs.</div>
              <div>6. <span className="text-[#3ECF8E]">COMPLETE</span> → Issues RFC-compliant commit trailer with SHA-256 evidence.</div>
            </div>
          </div>
        </div>

        {/* Tested Installation Instructions */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Try M31A in Your Terminal
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Standalone single-binary installation on Linux x86_64</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] text-[#F4F4F6] space-y-3">
              <div>
                <span className="text-[#65656E] block mb-1"># Install standalone M31A binary</span>
                <code className="text-[#3ECF8E]">{PRODUCT.installCurl}</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># Initialize workspace state and launch the Ratatui cockpit</span>
                <code>m31a init &amp;&amp; m31a cockpit</code>
              </div>
            </div>
          </div>
        </div>

        {/* Source References & Last-Verified Timestamp */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-2">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Verification Details &amp; Disclosures</h3>
          <p>
            • Cursor features, pricing, and licensing information verified on <strong>{lastVerified}</strong> from{' '}
            <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8523F] underline inline-flex items-center gap-0.5">
              cursor.com <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
          <p>
            • M31A capabilities and platform support verified against repository release <strong>v{PRODUCT.version}</strong> in{' '}
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
              href="/alternatives/claude-code"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F4F6] hover:text-[#E8523F] transition-colors"
            >
              <span>Next: Compare Claude Code</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
