'use client';

import React, { useState } from 'react';
import { Lock, ShieldAlert, Cpu, Network, CheckCircle, AlertTriangle } from 'lucide-react';

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
        <div className="lg:col-span-6 space-y-2">
          {CONTROLS.map((ctrl) => {
            const isSelected = ctrl.id === activeId;
            const Icon = ctrl.icon;

            return (
              <button
                key={ctrl.id}
                onClick={() => setActiveId(ctrl.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-4 ${
                  isSelected
                    ? 'border-[#E8523F] bg-[#161214] ring-1 ring-[#E8523F]/30'
                    : 'border-[#222226] bg-[#111113] hover:border-[#2C2C31] hover:bg-[#141417]'
                }`}
              >
                <div
                  className={`p-2 rounded-lg mt-0.5 shrink-0 ${
                    isSelected ? 'bg-[#E8523F]/10 text-[#E8523F]' : 'bg-[#18181B] text-[#A3A09B]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6B6965]">
                      {ctrl.category}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono uppercase text-[#E8523F] font-semibold">
                        Selected
                      </span>
                    )}
                  </div>
                  <h4 className={`text-base font-semibold mt-0.5 tracking-tight ${
                    isSelected ? 'text-[#F0EDE8]' : 'text-[#A3A09B]'
                  }`}>
                    {ctrl.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Control Detail Architecture Card */}
        <div className="lg:col-span-6 sticky top-28 rounded-2xl border border-[#222226] bg-[#111113] p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222226]">
            <div className="p-2.5 rounded-lg bg-[#E8523F]/10 text-[#E8523F]">
              <activeControl.icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8523F] font-semibold">
                {activeControl.category} Architecture
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[#F0EDE8]">
                {activeControl.name}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#A3A09B] leading-relaxed mb-6">
            {activeControl.description}
          </p>

          <div className="space-y-4 pt-4 border-t border-[#222226]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B6965] block mb-1">
                Enforcement Mechanism
              </span>
              <p className="text-sm font-medium text-[#F0EDE8]">
                {activeControl.mechanism}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B6965] block mb-1">
                Security Invariant
              </span>
              <p className="text-sm font-mono text-[#3ECF8E] bg-[#3ECF8E]/5 border border-[#3ECF8E]/20 p-2.5 rounded-lg">
                {activeControl.invariant}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
