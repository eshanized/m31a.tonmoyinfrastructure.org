'use client';

import React, { useState } from 'react';
import { Lock, ShieldAlert, Cpu, Network, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface SecurityControl {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  mechanism: string;
  invariant: string;
}

const CONTROLS: SecurityControl[] = [
  {
    id: 'policy',
    name: '11-Stage Non-Bypassable Policy Gate',
    category: 'Governance',
    description:
      'Every side-effect passes through 11 sequential evaluation stages across a 10-tier authority stack. Layer 0 safety vetoes can never be weakened by user grants or prompt overrides.',
    icon: Lock,
    mechanism: 'Monotonic non-weakening merger rules; higher authority always overrules.',
    invariant: 'DENY is default. ASK converts to DENY in unattended mode.',
  },
  {
    id: 'sandbox',
    name: 'Multi-Tier Process Confinement',
    category: 'Confinement',
    description:
      'Subprocesses run isolated via Linux cgroups v2, POSIX rlimits, process groups, and watchdog timers. All ambient host environment variables are scrubbed via env_clear().',
    icon: Cpu,
    mechanism: 'Hard limits on memory RSS, CPU seconds, and open file descriptors.',
    invariant: 'Zero privilege leakage; LD_PRELOAD vectors neutralized.',
  },
  {
    id: 'paths',
    name: 'Strict Path & Worktree Containment',
    category: 'Filesystem',
    description:
      'File mutations are pinned strictly to the workspace root or isolated Git worktrees. Symlink escapes and relative traversal attempts (../) are rejected fail-closed.',
    icon: ShieldAlert,
    mechanism: 'Lexical and canonicalized path resolution with workspace root pinning.',
    invariant: 'Production requires git.execution_isolation = "required".',
  },
  {
    id: 'secrets',
    name: '5-Tier Deterministic Secret Redactor',
    category: 'Data Protection',
    description:
      'API keys (NVIDIA, GitHub, AWS, OpenAI), JWTs, RSA private keys, and passwords are scrubbed before persistence, display buffers, or telemetry logs.',
    icon: AlertTriangle,
    mechanism: 'Regex and entropy scanners run across all streams and sanitize_error wrappers.',
    invariant: 'Raw credentials never enter SQLite WAL, NDJSON, or model contexts.',
  },
  {
    id: 'ssrf',
    name: 'Network Destination Egress Filtering',
    category: 'Network',
    description:
      'Strict egress filtering blocks IPv4/IPv6 loopbacks, RFC-1918 private subnets, and cloud metadata endpoints (169.254.169.254). Async DNS pre-validation blocks rebinding.',
    icon: Network,
    mechanism: 'Pre-flight DNS validation + per-hop redirect verification up to 5 hops.',
    invariant: 'No untrusted agent action can probe internal infrastructure.',
  },
  {
    id: 'evidence',
    name: 'Cryptographic Evidence & Rollback',
    category: 'Integrity',
    description:
      'A task is complete only when verification evidence produces a matching SHA-256 cryptographic digest. Ambiguous states fail closed with clean rollback seams.',
    icon: CheckCircle,
    mechanism: 'Two-phase atomic staging buffers and SQLite WAL transaction commit.',
    invariant: 'Corrupt or interrupted runs never auto-resume blindly.',
  },
];

export function SecurityModel() {
  const [activeId, setActiveId] = useState<string>('policy');
  const activeControl = CONTROLS.find((c) => c.id === activeId) ?? CONTROLS[0];

  return (
    <div className="w-full">
      {/* 2-Column Product Architecture View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Navigation List */}
        <div className="lg:col-span-6 space-y-2.5">
          {CONTROLS.map((ctrl) => {
            const isSelected = ctrl.id === activeId;
            const Icon = ctrl.icon;

            return (
              <button
                key={ctrl.id}
                onClick={() => setActiveId(ctrl.id)}
                className={`w-full p-4.5 rounded-xl border text-left transition-all flex items-start gap-4 ${
                  isSelected
                    ? 'border-[#E8523F] bg-[#161214] ring-1 ring-[#E8523F]/35 shadow-[0_0_20px_rgba(232,82,63,0.12)]'
                    : 'border-[#27272E] bg-[#111115] hover:border-[#383842] hover:bg-[#141418]'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl mt-0.5 shrink-0 transition-colors ${
                    isSelected ? 'bg-[#E8523F]/20 text-[#E8523F] shadow-[0_0_10px_rgba(232,82,63,0.25)]' : 'bg-[#18181D] text-[#9E9EA8]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#E8523F] font-semibold">
                      {ctrl.category}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-[#3ECF8E] font-bold bg-[#3ECF8E]/10 px-2 py-0.5 rounded border border-[#3ECF8E]/20">
                        Selected
                      </span>
                    )}
                  </div>
                  <h4 className={`text-base font-bold tracking-tight ${
                    isSelected ? 'text-[#F4F4F6]' : 'text-[#9E9EA8]'
                  }`}>
                    {ctrl.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Control Detail Architecture Card */}
        <div className="lg:col-span-6 sticky top-28 rounded-2xl border border-[#27272E] bg-[#111115] p-8 shadow-2xl transition-all hover:border-[#E8523F]/30">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222227]">
            <div className="p-2.5 rounded-xl bg-[#E8523F]/15 text-[#E8523F] border border-[#E8523F]/25 shadow-sm">
              <activeControl.icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8523F] font-semibold">
                {activeControl.category} Architecture
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[#F4F4F6]">
                {activeControl.name}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed mb-6 font-normal">
            {activeControl.description}
          </p>

          <div className="space-y-4 pt-4 border-t border-[#222227]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#65656E] block mb-1 font-semibold">
                Enforcement Mechanism
              </span>
              <p className="text-sm font-medium text-[#F4F4F6] leading-relaxed">
                {activeControl.mechanism}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#65656E] block mb-1.5 font-semibold">
                Security Invariant
              </span>
              <p className="text-xs sm:text-sm font-mono text-[#3ECF8E] bg-[#3ECF8E]/5 border border-[#3ECF8E]/25 p-3 rounded-xl leading-relaxed shadow-sm">
                ✓ {activeControl.invariant}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
