import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Coins,
  ArrowRight,
  Download,
  Lock,
  Cpu,
  Layers,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { Container, StatusBadge } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { createPageMetadata, generateBreadcrumbJsonLd, generateTechArticleJsonLd } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Free AI Coding Agent: Open-Source Runtime vs Inference Costs · M31A',
  description:
    'M31A provides a 100% free, open-source (MIT/Apache-2.0) autonomous coding agent for your terminal. Understand true software freedom, client-side budget caps, and transparent NVIDIA NIM inference costs.',
  path: '/free-ai-coding-agent',
  keywords: [
    'free AI coding agent',
    'open source AI coding assistant',
    'free cursor alternative',
    'terminal coding agent free',
    'open source software engineering agent',
    'free developer coding agent',
  ],
});

export default function FreeAiCodingAgentPage() {
  const lastVerified = 'October 2026';

  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Free AI Coding Agent', path: '/free-ai-coding-agent' },
  ]);

  const articleJson = generateTechArticleJsonLd({
    headline: 'Free & Open-Source AI Coding Agent: Software Freedom vs Inference Reality',
    description:
      'A technical guide to evaluating free and open-source AI coding agents, understanding seat fees vs inference economics, and configuring M31A with client-side budget limits.',
    path: '/free-ai-coding-agent',
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

      {/* Header Section */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F]">
              OPEN SOURCE ECONOMICS
            </span>
            <span className="text-[#65656E]">/</span>
            <span className="text-xs font-mono text-[#9E9EA8]">Fact-Checked: {lastVerified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-4xl leading-tight">
            Free and Open-Source AI Coding Agent: True Software Freedom vs. Inference Economics.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-3xl">
            M31A is 100% free and open-source software under dual MIT and Apache-2.0 licenses.
            No seat subscriptions, no recurring SaaS licensing fees, and no closed-source proxy servers.
            Here is exactly how software freedom works alongside model inference costs.
          </p>
        </Container>
      </div>

      <Container className="space-y-16">
        {/* Core Distinction: Software Freedom vs Inference Costs */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                The Non-Negotiable Distinction: Software vs. Compute
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Honest accounting for engineering leaders and developers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-[#A3A09B]">
            <div className="p-6 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <h3 className="text-base font-semibold text-[#3ECF8E] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 100% Free Software (M31A Runtime)
              </h3>
              <ul className="space-y-2 mt-3 text-xs sm:text-sm">
                <li>• <strong>Dual License:</strong> Full rights to inspect, fork, modify, and build under MIT / Apache-2.0.</li>
                <li>• <strong>Zero Seat Fees:</strong> Deploy across 1 or 1,000 developer machines without paying Tonmoy Infrastructure a dime.</li>
                <li>• <strong>Local Autonomy:</strong> Single self-contained binary written in Rust with zero telemetry lock-in.</li>
                <li>• <strong>No Artificial Feature Paywalls:</strong> All 28 tools, 11 policy stages, and the Ratatui cockpit are completely unlocked.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <h3 className="text-base font-semibold text-[#EAB308] mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Model Inference Compute (API Tokens)
              </h3>
              <ul className="space-y-2 mt-3 text-xs sm:text-sm">
                <li>• <strong>No Free Lunch in Compute:</strong> Running 500B+ frontier models requires data-center GPU clusters.</li>
                <li>• <strong>Direct Provider Billing:</strong> You connect directly to NVIDIA NIM using your own API key.</li>
                <li>• <strong>Free Developer Credits:</strong> NVIDIA offers free trial credits upon developer account creation for evaluation.</li>
                <li>• <strong>Client-Side Budget Guards:</strong> Hard limit enforcement prevents uncontrolled token or financial burn.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Comparison: Proprietary SaaS vs M31A */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              COST BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Proprietary SaaS Subscriptions vs. M31A Open-Source Model
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA8]">
              Why developer teams replace $20–$40/user/month subscriptions with direct model inference.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#27272E] bg-[#111115]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16161C] border-b border-[#27272E] text-xs font-mono text-[#F4F4F6]">
                <tr>
                  <th className="p-4">Dimension</th>
                  <th className="p-4">Proprietary AI Editors (Cursor / Copilot)</th>
                  <th className="p-4 text-[#E8523F]">M31A Autonomous Runtime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226] text-[#A3A09B]">
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Software License</td>
                  <td className="p-4">Proprietary closed-source; per-seat subscription ($240–$480/yr)</td>
                  <td className="p-4 text-[#3ECF8E] font-medium">Dual MIT / Apache-2.0 ($0 forever)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Model Pricing Model</td>
                  <td className="p-4">Bundled quota with rate limits, queue throttling, or overage surcharges</td>
                  <td className="p-4">Direct utility billing at provider list price (zero markup)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Data Intermediary</td>
                  <td className="p-4">Traffic proxies through vendor cloud servers before reaching LLM</td>
                  <td className="p-4 text-[#3ECF8E]">Direct TLS connection between your terminal and NVIDIA NIM</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Runaway Cost Protection</td>
                  <td className="p-4">Overage billings or sudden throttle to slow queue</td>
                  <td className="p-4">Deterministic 10-dimensional budget enforcer halts before overrun</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[#F4F4F6]">Platform Qualification</td>
                  <td className="p-4">Desktop GUI app required (macOS, Windows, Linux Desktop)</td>
                  <td className="p-4">Terminal native; headless CLI for servers, SSH, tmux &amp; CI/CD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 10-Dimensional Budget Model Details */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/20 text-[#E8523F]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4F4F6]">
                Client-Side Budget Enforcement (`docs/subsystems/AUTONOMY.md`)
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Two-phase reservation engine eliminates unexpected inference bills</p>
            </div>
          </div>

          <p className="text-sm text-[#A3A09B] leading-relaxed mb-6">
            When you run an autonomous coding agent, a looping model can burn through hundreds of dollars in hours if left unchecked.
            M31A includes a hard 10-dimensional budget engine compiled directly into the kernel:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold block mb-1">--budget-tokens &lt;N&gt;</span>
              <p className="text-[#9E9EA8] font-sans text-xs">Hard ceiling on cumulative prompt and completion tokens per mission.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold block mb-1">--budget-cost &lt;USD&gt;</span>
              <p className="text-[#9E9EA8] font-sans text-xs">Strict monetary dollar cap calculated against current model token rates.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#222226] bg-[#0E0E12]">
              <span className="text-[#E8523F] font-bold block mb-1">--budget-steps &lt;N&gt;</span>
              <p className="text-[#9E9EA8] font-sans text-xs">Maximum autonomy loop steps before the mission terminates with exit code 3.</p>
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
                Quick Start: Running M31A with Zero Software License Fees
              </h2>
              <p className="text-xs font-mono text-[#9E9EA8]">Tested on Linux x86_64</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#09090C] border border-[#222226] text-[#F4F4F6] space-y-3">
              <div>
                <span className="text-[#65656E] block mb-1"># 1. Install the standalone binary via curl</span>
                <code className="text-[#3ECF8E]">{PRODUCT.installCurl}</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># 2. Export your NVIDIA NIM developer API key</span>
                <code>export NVIDIA_API_KEY=&quot;nvapi-your-key-here&quot;</code>
              </div>
              <div>
                <span className="text-[#65656E] block mb-1"># 3. Launch an autonomous task bounded by token &amp; cost limits</span>
                <code className="text-[#E8523F]">
                  m31a run &quot;Add comprehensive unit tests for auth module&quot; --budget-tokens 50000 --budget-cost 0.25
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Current Limitations & Truthful Disclosure */}
        <div className="p-6 rounded-xl border border-[#27272E] bg-[#121216] text-xs text-[#9E9EA8] space-y-3">
          <h3 className="font-semibold text-sm text-[#F4F4F6]">Truthful Operational Disclosures</h3>
          <p>
            • <strong>No Unmetered Free Inference:</strong> M31A does not host or bundle free cloud inference compute. You must supply valid credentials to NVIDIA NIM or an authorized endpoint.
          </p>
          <p>
            • <strong>Platform Qualification:</strong> Native runtime qualification is release-qualified on <strong>Linux x86_64</strong>. macOS Intel is conditionally supported with degraded sandbox isolation. macOS Apple Silicon and Windows targets are compile-only.
          </p>
          <p>
            • <strong>Canonical Model:</strong> The default production model is <code>{PRODUCT.canonicalModelId}</code> accessed via <code>{PRODUCT.canonicalProviderEndpoint}</code>.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl border border-[#E8523F]/30 bg-gradient-to-r from-[#171214] via-[#111115] to-[#171214] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F4F4F6]">Inspect the Full Open-Source Repository</h3>
            <p className="text-xs text-[#9E9EA8] mt-1">Dual-licensed under MIT &amp; Apache-2.0. No telemetry, no lock-in.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(232,82,63,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download v{PRODUCT.version}</span>
            </Link>
            <Link
              href="/alternatives"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2C2C34] bg-[#141418] hover:bg-[#1A1A20] text-[#F4F4F6] text-xs font-semibold transition-all"
            >
              <span>Compare Alternatives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
