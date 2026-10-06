import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Lock, ExternalLink, AlertOctagon, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Container } from '@/components/site/section';
import { SecurityModel } from '@/components/home/security-model';

export default function SecurityPage() {
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
            <span>SECURITY ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F4F6] max-w-3xl leading-tight">
            Security is Below{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              the Model.
            </span>
          </h1>

          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed max-w-2xl">
            The model, the repository, tool outputs, and network responses are all treated as untrusted
            inputs. Governance lives beneath them: non-bypassable policy gates, process confinement,
            secret redaction, and fail-closed recovery.
          </p>
        </Container>
      </div>

      <Container className="relative z-10">
        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all shadow-lg hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] mb-4">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[#F4F4F6]">Fail-Closed Defaults</h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              Unattended ASK outcomes, ambiguous recovery checkpoints, and unverified git worktrees
              always fail closed to DENY. The runtime never assumes success.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all shadow-lg hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] mb-4">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[#F4F4F6]">Non-Weakening Policy</h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              Higher authority layers always overrule lower layers. Layer 0 safety vetoes can never
              be compromised by session grants or prompt injections.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all shadow-lg hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] mb-4">
              <AlertOctagon className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[#F4F4F6]">Zero-Leak Secret Redaction</h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              5-tier deterministic scrubbing pipeline masks API keys, tokens, and private keys before
              persistence, logs, or error stack traces.
            </p>
          </div>
        </div>

        {/* Security Model Interactive Controls */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F4F4F6]">
              Boundary Controls &amp; Invariants
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-1">
              Select any control family to inspect its isolation mechanics and formal invariants.
            </p>
          </div>

          <SecurityModel />
        </div>

        {/* Layer 0 Safety Vetoes & Authority Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-[#27272E] bg-[#111115] shadow-xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              LAYER 0 HARD VETOES
            </span>
            <h3 className="text-xl font-bold text-[#F4F4F6] mb-4">
              Immutable Safety Guarantees
            </h3>
            <p className="text-sm text-[#9E9EA8] leading-relaxed mb-4">
              The following operations can never be permitted by any configuration profile, command flag,
              or interactive user grant:
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-[#F4F4F6]">
              <li className="p-3 rounded-xl bg-[#0A0A0C] border border-[#222227] flex items-center justify-between">
                <span>• Credential paths</span>
                <span className="text-[#E8523F]">~/.ssh/**, ~/.aws/**, **/.env*</span>
              </li>
              <li className="p-3 rounded-xl bg-[#0A0A0C] border border-[#222227] flex items-center justify-between">
                <span>• OS tampering</span>
                <span className="text-[#E8523F]">/etc/sudoers*, /etc/shadow, /etc/m31/**</span>
              </li>
              <li className="p-3 rounded-xl bg-[#0A0A0C] border border-[#222227] flex items-center justify-between">
                <span>• Shell profile poisoning</span>
                <span className="text-[#E8523F]">**/.bashrc, **/.zshrc, /etc/profile</span>
              </li>
              <li className="p-3 rounded-xl bg-[#0A0A0C] border border-[#222227] flex items-center justify-between">
                <span>• Destructive commands</span>
                <span className="text-[#E8523F]">rm -rf /, mkfs*, dd if=*</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-[#27272E] bg-[#111115] shadow-xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3ECF8E] block mb-2">
              10-TIER AUTHORITY HIERARCHY
            </span>
            <h3 className="text-xl font-bold text-[#F4F4F6] mb-4">
              Precedence Stack
            </h3>
            <p className="text-sm text-[#9E9EA8] leading-relaxed mb-4">
              When multiple policy layers match an action, higher tiers strictly supersede lower tiers:
            </p>
            <div className="space-y-2 text-xs font-mono text-[#9E9EA8]">
              <div className="flex justify-between py-1.5 border-b border-[#222227]">
                <span className="text-[#E8523F] font-semibold">Layer 0: BuiltInSafety</span>
                <span className="text-[#65656E]">Immutable Vetoes</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#222227]">
                <span className="text-[#F4F4F6]">Layer 1: SystemAdmin</span>
                <span className="text-[#65656E]">/etc/m31/policy.toml</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#222227]">
                <span className="text-[#F4F4F6]">Layer 2: Organization</span>
                <span className="text-[#65656E]">Enterprise Rules</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#222227]">
                <span className="text-[#F4F4F6]">Layer 3: Workspace</span>
                <span className="text-[#65656E]">&lt;repo&gt;/.m31/policy.toml</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#222227]">
                <span className="text-[#9E9EA8]">Layer 4: User</span>
                <span className="text-[#65656E]">~/.config/m31/policy.toml</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#222227]">
                <span className="text-[#9E9EA8]">Layer 5–7: Mission / Role / Task</span>
                <span className="text-[#65656E]">Execution Context</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#3ECF8E] font-semibold">Layer 8–9: SessionApproval / Default</span>
                <span className="text-[#65656E]">Interactive Baseline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222227] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/docs/security"
            className="inline-flex items-center gap-2 font-medium text-[#F4F4F6] hover:text-[#E8523F] transition-colors group"
          >
            <span>Read ASVS L1 Threat Matrix Documentation</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://github.com/eshanized/M31A/blob/master/SECURITY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-[#9E9EA8] hover:text-[#F4F4F6] transition-colors group"
          >
            <span>GitHub Security Policy</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E8523F]" />
          </a>
        </div>
      </Container>
    </div>
  );
}
