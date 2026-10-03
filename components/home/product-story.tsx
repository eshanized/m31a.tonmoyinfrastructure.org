'use client';

import React, { useState } from 'react';
import { Network, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

interface Stage {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
  visualMetric: string;
}

const STAGES: Stage[] = [
  {
    id: 'plan',
    number: '01',
    name: 'PLAN',
    subtitle: 'Acyclic DAG Decomposition',
    description:
      'Candidate intent is decomposed into a directed acyclic task graph backed by petgraph. The runtime performs topological scheduling and candidate validation before any task is admitted for execution.',
    icon: Network,
    details: [
      'Topological dependency resolution prevents circular blockages',
      'Candidate plan validation rejects malformed task branches',
      'Differential replanning preserves already verified nodes on recovery',
    ],
    visualMetric: 'TaskGraph<PetGraph>',
  },
  {
    id: 'execute',
    number: '02',
    name: 'EXECUTE',
    subtitle: 'Sandboxed Confinement',
    description:
      'Every tool dispatch runs under strict isolation: Linux cgroups v2, POSIX rlimits, process groups, and env_clear() stripping all host secrets. No process inherits ambient shell privileges.',
    icon: ShieldCheck,
    details: [
      '28 typed tools declare JSON schema contracts and risk classes',
      'Deny-by-default environment contract neutralizes LD_PRELOAD attacks',
      'Fail-closed Git worktree isolation isolates primary branches',
    ],
    visualMetric: 'cgroups v2 + rlimits',
  },
  {
    id: 'verify',
    number: '03',
    name: 'VERIFY',
    subtitle: 'Empirical Evidence Gates',
    description:
      'Completion requires proof, not assertions. M31A enforces multi-tier quality gates — compiler validation, automated test suites, clippy analysis, diff boundaries, and anti-fake-diff reviews.',
    icon: CheckCircle2,
    details: [
      'Rejects premature completion claims and placeholder code (todo!/unimplemented!)',
      'Cryptographic SHA-256 evidence digests attached to completed tasks',
      'Deterministic verification prevents false-positive test reporting',
    ],
    visualMetric: 'SHA-256 Evidence Gate',
  },
  {
    id: 'recover',
    number: '04',
    name: 'RECOVER',
    subtitle: 'Crash-Resilient Checkpoints',
    description:
      'Two-phase atomic checkpoints commit verified states to SQLite WAL storage. On system crashes or power interruptions, the startup scanner inspects state and fails closed rather than blindly auto-resuming.',
    icon: RefreshCw,
    details: [
      'Two-phase commit protocol eliminates partial workspace writes',
      '15 failure classifications distinguish safe resumptions from corruption',
      'Rollback seam enables instant recovery to the last known good commit',
    ],
    visualMetric: 'Two-Phase Atomic Commit',
  },
];

export function ProductStory() {
  const [selected, setSelected] = useState<string>('plan');
  const current = STAGES.find((s) => s.id === selected) ?? STAGES[0];

  return (
    <div className="w-full">
      {/* Stage Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {STAGES.map((stage) => {
          const isSelected = stage.id === selected;
          const Icon = stage.icon;
          return (
            <button
              key={stage.id}
              onClick={() => setSelected(stage.id)}
              className={`p-5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'border-[#E8523F] bg-[#161214] ring-1 ring-[#E8523F]/30'
                  : 'border-[#222226] bg-[#111113] hover:border-[#2C2C31] hover:bg-[#141417]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-[#E8523F]' : 'text-[#6B6965]'}`}>
                  {stage.number}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E8523F]' : 'text-[#6B6965]'}`} />
              </div>
              <h3 className={`text-base font-bold tracking-tight ${isSelected ? 'text-[#F0EDE8]' : 'text-[#A3A09B]'}`}>
                {stage.name}
              </h3>
              <p className="text-xs text-[#6B6965] mt-1 truncate">
                {stage.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Narrative Detail Panel */}
      <div className="rounded-2xl border border-[#222226] bg-[#111113] p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-[#E8523F] font-bold">{current.number} //</span>
              <span className="text-xs uppercase tracking-widest text-[#A3A09B] font-semibold">{current.subtitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0EDE8]">
              {current.name}: {current.subtitle}
            </h3>
            <p className="text-[#A3A09B] text-base leading-relaxed">
              {current.description}
            </p>
            <ul className="mt-2 space-y-2.5">
              {current.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#F0EDE8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F] mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-xs rounded-xl border border-[#222226] bg-[#0A0A0B] p-6 flex flex-col items-center justify-center text-center shadow-lg">
              <current.icon className="w-12 h-12 text-[#E8523F] mb-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A3A09B]">Subsystem Invariant</span>
              <span className="font-mono text-sm font-semibold text-[#F0EDE8] mt-1">{current.visualMetric}</span>
              <div className="w-full h-px bg-[#222226] my-4" />
              <p className="text-xs text-[#6B6965] leading-relaxed">
                Authority is enforced outside the model context window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
