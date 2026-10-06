'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Box, RefreshCw, ArrowRight, Lock, Terminal, Cpu, X, ShieldAlert } from 'lucide-react';
import { Container } from '@/components/site/section';
import Link from 'next/link';

interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  contrastChat: string;
  contrastM31A: string;
  evidence: string[];
  subsystemTag: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PILLARS: Pillar[] = [
  {
    id: 'runtime-authority',
    number: '01',
    title: 'Runtime Authority',
    subtitle: 'The model proposes. The runtime decides.',
    headline: 'The model can propose actions, but the runtime decides what is allowed to happen.',
    description:
      'Large language models are probabilistic reasoning engines. Granting an unconstrained LLM raw shell access or ambient credentials invites runaway loops, destroyed repositories, and prompt injections. M31A places a deterministic 11-stage policy gate between the model and every single file mutation, command execution, and network request.',
    contrastChat: 'Chat agents grant ambient shell & write privileges directly to the LLM.',
    contrastM31A: 'M31A enforces non-bypassable policy gates with Layer 0 safety vetoes.',
    evidence: [
      '11-stage non-bypassable policy gate evaluation',
      'Monotonic non-weakening policy merger rules',
      'Layer 0 built-in safety vetoes can never be weakened by prompts',
    ],
    subsystemTag: 'src/policy/matcher.rs',
    icon: ShieldAlert,
  },
  {
    id: 'evidence-completion',
    number: '02',
    title: 'Evidence-Gated Completion',
    subtitle: 'Completion requires evidence.',
    headline: 'M31A does not equate generated output with success. Completion requires verification evidence.',
    description:
      'A model declaring "I fixed the issue!" is not proof of success. M31A enforces multi-tier quality gates. A mission is admitted as complete only when compiler diagnostics are clean, unit and integration tests pass in a clean sandbox, and a cryptographic SHA-256 evidence digest is generated.',
    contrastChat: 'Chat agents stop when the model outputs "All tests passed" in text.',
    contrastM31A: 'M31A requires verified compiler exit codes and SHA-256 evidence digests.',
    evidence: [
      'Multi-tier compiler, test suite, and Clippy verification',
      'Anti-fake-diff reviews reject todo!() or unimplemented!() placeholders',
      'Cryptographic SHA-256 evidence digests committed to SQLite WAL',
    ],
    subsystemTag: 'src/verification/gate.rs',
    icon: CheckCircle2,
  },
  {
    id: 'sandboxed-execution',
    number: '03',
    title: 'Sandboxed Execution',
    subtitle: 'Controlled boundaries by default.',
    headline: 'Tool and process execution operate inside controlled boundaries.',
    description:
      'Every tool invocation runs under strict system isolation. Linux cgroups v2 enforce RSS memory ceilings, POSIX rlimits cap CPU seconds, and process group supervision terminates orphaned processes. The environment is scrubbed via cmd.env_clear() to neutralize LD_PRELOAD vulnerabilities.',
    contrastChat: 'Subprocesses inherit all host environment variables, secrets, and CPU limits.',
    contrastM31A: 'Isolated cgroups v2, POSIX rlimits, stripped secrets, and isolated Git worktrees.',
    evidence: [
      'cgroups v2 RSS memory limits & POSIX rlimits watchdog timers',
      'env_clear() scrubs host secrets and API credentials before execution',
      'Fail-closed Git worktree isolation prevents corrupting primary branches',
    ],
    subsystemTag: 'src/sandbox/limits.rs',
    icon: Box,
  },
  {
    id: 'recovery-oriented',
    number: '04',
    title: 'Recovery-Oriented Execution',
    subtitle: 'Failures are recoverable states.',
    headline: 'Failures are treated as recoverable execution states instead of terminal disasters.',
    description:
      'Engineering tasks fail frequently: tests fail, compilers throw diagnostics, systems reboot. M31A uses two-phase atomic SQLite WAL commits for verified checkpoints. Differential replanning preserves already-verified tasks while isolating failures. On startup, the crash recovery scanner verifies invariants before safely resuming.',
    contrastChat: 'Crashes or timeouts abort the session, losing all context and edits.',
    contrastM31A: 'Two-phase atomic SQLite checkpoints enable instant, safe resumption.',
    evidence: [
      'Two-phase atomic checkpoint staging eliminates partial workspace writes',
      '15 failure classifications distinguish transient faults from corruption',
      'Clean rollback seams restore repository state on unrecoverable failures',
    ],
    subsystemTag: 'src/deployment/rollback.rs',
    icon: RefreshCw,
  },
];

export function WhyM31A() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 border-b border-[#222227] bg-[#0C0C0E] relative overflow-hidden">
      {/* ── Ambient Radial Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.08)_0%,transparent_70%)] blur-3xl opacity-70"
        aria-hidden="true" 
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8523F]/30 bg-[#161214] text-xs font-mono text-[#E8523F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F]" />
            <span>ARCHITECTURAL DIFFERENTIATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
            Why M31A is different.
          </h2>
          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
            Most coding agents are chatbots with terminal access. M31A is an autonomous engineering
            runtime with an intelligence engine inside.
          </p>
        </div>

        {/* ── 4 Large Editorial Modules ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PILLARS.map((p) => {
            const isHovered = hoveredPillar === p.id;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredPillar(p.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                className={`group relative p-8 sm:p-10 rounded-2xl border transition-all flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#E8523F]/60 bg-[#141418] shadow-[0_15px_40px_rgba(232,82,63,0.12)] ring-1 ring-[#E8523F]/25 -translate-y-1'
                    : 'border-[#27272E] bg-[#111114] hover:border-[#383842]'
                }`}
              >
                <div>
                  {/* Top metadata with Icon Badge */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#222227]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#9E9EA8] font-bold block">
                          {p.title}
                        </span>
                        <span className="font-mono text-[11px] text-[#65656E]">
                          Pillar {p.number}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-[#65656E] bg-[#18181D] px-2.5 py-1 rounded border border-[#27272E]">
                      {p.subsystemTag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4F4F6] mb-4 leading-snug">
                    {p.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>

                  {/* Concrete Contrast Card */}
                  <div className="p-4 rounded-xl border border-[#222227] bg-[#0A0A0C] mb-6 space-y-2.5 text-xs font-mono shadow-inner">
                    <div className="flex items-start gap-2.5 text-[#FF6961]">
                      <span className="font-bold select-none text-sm leading-none mt-0.5">✕</span>
                      <span className="leading-relaxed">{p.contrastChat}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#3ECF8E]">
                      <span className="font-bold select-none text-sm leading-none mt-0.5">✓</span>
                      <span className="leading-relaxed font-semibold">{p.contrastM31A}</span>
                    </div>
                  </div>

                  {/* Evidence Invariants */}
                  <ul className="space-y-2.5">
                    {p.evidence.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#9E9EA8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F] mt-1.5 shrink-0 shadow-[0_0_6px_rgba(232,82,63,0.6)]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link to deep docs */}
                <div className="mt-8 pt-6 border-t border-[#222227] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#65656E]">Subsystem Specification</span>
                  <Link
                    href="/security"
                    className="inline-flex items-center gap-1.5 text-[#E8523F] hover:underline group-hover:translate-x-1 transition-transform font-semibold"
                  >
                    <span>Read Architectural Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
