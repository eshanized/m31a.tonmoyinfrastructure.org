import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Lock, ExternalLink, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/site/section';
import { SecurityModel } from '@/components/home/security-model';

export default function SecurityPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            SECURITY ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            Security is Below the Model.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            The model, the repository, tool outputs, and network responses are all treated as untrusted
            inputs. Governance lives beneath them: non-bypassable policy gates, process confinement,
            secret redaction, and fail-closed recovery.
          </p>
        </Container>
      </div>

      <Container>
        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-[#222226] bg-[#111113]">
            <Lock className="w-5 h-5 text-[#E8523F] mb-3" />
            <h2 className="text-base font-bold text-[#F0EDE8]">Fail-Closed Defaults</h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              Unattended ASK outcomes, ambiguous recovery checkpoints, and unverified git worktrees
              always fail closed to DENY. The runtime never assumes success.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#222226] bg-[#111113]">
            <ShieldCheck className="w-5 h-5 text-[#E8523F] mb-3" />
            <h2 className="text-base font-bold text-[#F0EDE8]">Non-Weakening Policy</h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              Higher authority layers always overrule lower layers. Layer 0 safety vetoes can never
              be compromised by session grants or prompt injections.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#222226] bg-[#111113]">
            <AlertOctagon className="w-5 h-5 text-[#E8523F] mb-3" />
            <h2 className="text-base font-bold text-[#F0EDE8]">Zero-Leak Secret Redaction</h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              5-tier deterministic scrubbing pipeline masks API keys, tokens, and private keys before
              persistence, logs, or error stack traces.
            </p>
          </div>
        </div>

        {/* Security Model Interactive Controls */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F0EDE8]">
              Boundary Controls &amp; Invariants
            </h2>
            <p className="text-sm text-[#A3A09B] mt-1">
              Select any control family to inspect its isolation mechanics and formal invariants.
            </p>
          </div>

          <SecurityModel />
        </div>

        {/* Layer 0 Safety Vetoes & Authority Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-[#222226] bg-[#111113]">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              LAYER 0 HARD VETOES
            </span>
            <h3 className="text-xl font-bold text-[#F0EDE8] mb-4">
              Immutable Safety Guarantees
            </h3>
            <p className="text-sm text-[#A3A09B] leading-relaxed mb-4">
              The following operations can never be permitted by any configuration profile, command flag,
              or interactive user grant:
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-[#F0EDE8]">
              <li className="p-2.5 rounded-lg bg-[#0A0A0B] border border-[#222226]">
                • Credential paths (<span className="text-[#E8523F]">~/.ssh/**, ~/.aws/**, **/.env*</span>)
              </li>
              <li className="p-2.5 rounded-lg bg-[#0A0A0B] border border-[#222226]">
                • OS tampering (<span className="text-[#E8523F]">/etc/sudoers*, /etc/shadow, /etc/m31/**</span>)
              </li>
              <li className="p-2.5 rounded-lg bg-[#0A0A0B] border border-[#222226]">
                • Shell profile poisoning (<span className="text-[#E8523F]">**/.bashrc, **/.zshrc, /etc/profile</span>)
              </li>
              <li className="p-2.5 rounded-lg bg-[#0A0A0B] border border-[#222226]">
                • Destructive commands (<span className="text-[#E8523F]">rm -rf /, mkfs*, dd if=*</span>)
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-[#222226] bg-[#111113]">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3ECF8E] block mb-2">
              10-TIER AUTHORITY HIERARCHY
            </span>
            <h3 className="text-xl font-bold text-[#F0EDE8] mb-4">
              Precedence Stack
            </h3>
            <p className="text-sm text-[#A3A09B] leading-relaxed mb-4">
              When multiple policy layers match an action, higher tiers strictly supersede lower tiers:
            </p>
            <div className="space-y-1.5 text-xs font-mono text-[#A3A09B]">
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#E8523F]">Layer 0: BuiltInSafety</span>
                <span className="text-[#6B6965]">Immutable Vetoes</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#F0EDE8]">Layer 1: SystemAdmin</span>
                <span className="text-[#6B6965]">/etc/m31/policy.toml</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#F0EDE8]">Layer 2: Organization</span>
                <span className="text-[#6B6965]">Enterprise Rules</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#F0EDE8]">Layer 3: Workspace</span>
                <span className="text-[#6B6965]">&lt;repo&gt;/.m31/policy.toml</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#A3A09B]">Layer 4: User</span>
                <span className="text-[#6B6965]">~/.config/m31/policy.toml</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#A3A09B]">Layer 5–7: Mission / Role / Task</span>
                <span className="text-[#6B6965]">Execution Context</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#3ECF8E]">Layer 8–9: SessionApproval / Default</span>
                <span className="text-[#6B6965]">Interactive Baseline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/docs/security"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>Read ASVS L1 Threat Matrix Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://github.com/eshanized/M31A/blob/master/SECURITY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>GitHub Security Policy</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </div>
  );
}
