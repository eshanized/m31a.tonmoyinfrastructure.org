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
  Database,
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Claude Code Alternative: Rust Runtime vs Node.js Terminal Agent · M31A',
  description:
    'Comparing Anthropic Claude Code with M31A: Rust native kernel, 11-stage policy gate, Linux cgroups v2 confinement, SQLite WAL persistence, and dual-licensed open source.',
  path: '/alternatives/claude-code',
  keywords: [
    'Claude Code alternative',
    'open source Claude Code alternative',
    'Claude Code vs M31A',
    'terminal coding agent alternative',
    'Rust AI coding agent',
    'CLI coding agent open source',
  ],
});

export default function ClaudeCodeAlternativePage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Alternatives', path: '/alternatives' },
    { name: 'Claude Code Comparison', path: '/alternatives/claude-code' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'Claude Code Alternative: Rust Autonomous Runtime vs. Node.js Terminal Agent',
    description:
      'Fact-checked architectural comparison between Anthropic Claude Code and M31A. Exploring policy gates, process confinement, persistence, and open-source licensing.',
    path: '/alternatives/claude-code',
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
              CLAUDE CODE COMPARISON
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            M31A vs. Claude Code: Native Rust Runtime vs. Node.js Terminal Agent.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            Both tools operate directly from the developer&apos;s command line. However, their internal engines,
            process sandboxing, security policies, persistence architectures, and licensing models represent completely different philosophies.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* Who Each Tool Suits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-[#27272E] bg-[#111115]">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#E8523F] font-semibold uppercase">
              <span>TARGET PROFILE</span>
            </div>
            <h2 className="text-xl font-bold text-[#F4F4F6] mb-3">When to Choose Claude Code</h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A3A09B] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You want immediate interactive command-line access to Anthropic&apos;s Claude 3.7 or 3.5 Sonnet.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You prefer interactive conversational REPL prompts where you approve each shell command one-by-one.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You already have an existing Anthropic Console billing account or Claude Pro/Team plan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>Your environment has Node.js installed and does not require kernel-level cgroups process isolation.</span>
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
                <span>You require a single native binary (Rust 2024) with zero foreign runtime dependencies (no Node.js or Python).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You need autonomous multi-step execution governed by an 11-stage policy gate and Linux cgroups v2 bounds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You require crash recovery and durable auditability backed by an ACID SQLite engine with WAL mode and two-phase commits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3ECF8E] font-bold">✓</span>
                <span>You require dual-licensed open-source software (MIT / Apache-2.0) with zero vendor lock-in.</span>
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
              Technical Invariants: Claude Code vs. M31A
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              Verified against current official documentation and release binaries ({lastVerified}).
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#27272E] bg-[#111115]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16161C] border-b border-[#27272E] text-xs font-mono text-[#F4F4F6]">
                <tr>
                  <th className="p-4">Architectural Subsystem</th>
                  <th className="p-4">Claude Code (Anthropic)</th>
                  <th className="p-4 text-[#E8523F]">M31A Autonomous Runtime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226] text-[#A3A09B]">
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Implementation Language</td>
                  <td className="p-4">TypeScript / Node.js (npm / curl installer)</td>
                  <td className="p-4 text-[#3ECF8E] font-medium">100% Native Rust (Edition 2024, zero C/Node runtimes)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Software License</td>
                  <td className="p-4">Proprietary Anthropic Commercial Client</td>
                  <td className="p-4 text-[#3ECF8E] font-medium">Dual MIT / Apache-2.0 (Open Source)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Execution Governance</td>
                  <td className="p-4">Interactive prompt confirmations (manual allow/deny)</td>
                  <td className="p-4 text-[#E8523F] font-medium">11-stage non-bypassable policy gate across 10 authority layers</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Process Confinement</td>
                  <td className="p-4">Inherits full host shell permissions</td>
                  <td className="p-4 text-[#3ECF8E]">Linux cgroups v2, POSIX rlimits, cmd.env_clear() host isolation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Network Egress Hardening</td>
                  <td className="p-4">Standard user network access</td>
                  <td className="p-4 text-[#3ECF8E]">Centralized SSRF filter blocking loopback, 169.254.169.254 &amp; DNS hops</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">State Persistence &amp; Crash Safety</td>
                  <td className="p-4">Local session state in memory / JSON files</td>
                  <td className="p-4 text-[#3ECF8E]">Durable ACID SQLite (WAL mode), 2-phase commits &amp; startup crash scanner</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Verification Engine</td>
                  <td className="p-4">User-initiated terminal testing commands</td>
                  <td className="p-4">Mandatory verification gates with cryptographic SHA-256 evidence digests</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">User Interface Surface</td>
                  <td className="p-4">Terminal REPL / conversational command line</td>
                  <td className="p-4">Full Ratatui 0.30 interactive cockpit + headless CLI</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Supported Model Providers</td>
                  <td className="p-4">Anthropic Claude models exclusively</td>
                  <td className="p-4">NVIDIA NIM Nemotron-3 Ultra 550B (Production canonical)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Deep Dive: Policy Gates vs Prompts */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Security Architecture: Non-Bypassable Policy Gates vs. Prompt Confirmations
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">src/policy/matcher.rs vs. interactive CLI confirmation</p>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#A3A09B]">
            <p>
              In interactive CLI tools like <strong>Claude Code</strong>, the agent asks for confirmation when it wants to run a shell command or mutate a sensitive path. If the operator approves, the command runs under the developer&apos;s full user permissions—inheriting host environment variables, unredacted SSH keys, and cloud credentials.
            </p>
            <p>
              In <strong>M31A</strong>, human confirmation is only one part of an 11-stage deterministic policy gate:
            </p>
            <ul className="space-y-2 font-mono text-xs text-[#F4F4F6] p-4 rounded-xl bg-[#09090C] border border-[#222226]">
              <li>• <span className="text-[#E8523F]">Stage 0 (Built-In Safety):</span> Non-bypassable vetoes blocking destruction of git root or system directories.</li>
              <li>• <span className="text-[#E8523F]">Stage 1 (Secret Scrubbing):</span> Multi-tier redactor removes API keys, JWTs, and private keys before logging.</li>
              <li>• <span className="text-[#E8523F]">Stage 4 (Destination SSRF):</span> Denies private subnets, cloud metadata (169.254.169.254), and redirects.</li>
              <li>• <span className="text-[#E8523F]">Stage 7 (Process Confinement):</span> Strips host env (<code className="text-[#3ECF8E]">env_clear()</code>), enforces cgroups v2 memory bounds.</li>
              <li>• <span className="text-[#E8523F]">Stage 10 (Output Security):</span> Formalized evidence contract separating diagnostic logs from model proposals.</li>
            </ul>
          </div>
        </div>

        {/* Tested CLI Installation Walkthrough */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Install and Run M31A in Your Shell
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">No Node.js or npm dependencies required</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] text-[#F4F4F6] space-y-3">
              <div>
                <span className="text-[#65656E] block mb-1"># Install the standalone native binary</span>
                <code className="text-[#3ECF8E]">{PRODUCT.installCurl}</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># Run unattended mission with budget bounds</span>
                <code className="text-[#E8523F]">
                  m31a run &quot;Implement rate limiter with sliding window&quot; --budget-tokens 30000 --budget-cost 0.20
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosures & Official Links */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-2">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Official Documentation Citations</h3>
          <p>
            • Claude Code CLI commands, permissions, and account requirements verified on <strong>{lastVerified}</strong> from{' '}
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="text-[#E8523F] underline inline-flex items-center gap-0.5">
              claude.ai <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
          <p>
            • M31A security invariants and CLI commands verified against <strong>v{PRODUCT.version}</strong> in{' '}
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
              href="/alternatives/opencode"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F4F6] hover:text-[#E8523F] transition-colors"
            >
              <span>Next: Compare OpenCode</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
