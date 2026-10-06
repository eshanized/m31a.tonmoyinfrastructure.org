'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Layers, 
  RefreshCw, 
  Check, 
  Lock,
  GitBranch,
  FileCheck
} from 'lucide-react';
import { Container } from '@/components/site/section';

interface FlowStage {
  id: string;
  number: string;
  label: string;
  summary: string;
  subsystem: string;
  layer: string;
  details: string[];
  invariant: string;
  snippet: {
    command: string;
    output: string[];
  };
}

const FLOW_STAGES: FlowStage[] = [
  {
    id: 'intent',
    number: '01',
    label: 'INTENT',
    summary: 'Understand the engineering goal without granting ambient authority.',
    subsystem: 'Model Intelligence Boundary',
    layer: 'L3 & L4',
    details: [
      'Decomposes human engineering requirements into structured tasks',
      'Model remains strictly unprivileged outside the trust boundary',
      'XML prompt trust envelopes sanitize model input and output',
    ],
    invariant: 'The model has no direct shell, filesystem, or network access.',
    snippet: {
      command: 'm31a intent parse "Migrate auth to new provider"',
      output: [
        '[*] Parsing intent through Layer 3 Intelligence Boundary...',
        '[*] Target modules identified: auth/provider.rs, handlers/login.rs',
        '[*] Candidate goal: Replace legacy session auth with OIDC token validation',
        '--> Intent admitted. Forwarding to Layer 5 DAG Engine.',
      ],
    },
  },
  {
    id: 'plan',
    number: '02',
    label: 'PLAN',
    summary: 'Construct an actionable, acyclic execution graph.',
    subsystem: 'PetGraph Topological Scheduler',
    layer: 'L5',
    details: [
      'Decomposes mission into a directed acyclic task graph (DAG)',
      'Topological scheduling guarantees dependency satisfaction',
      'Candidate plan validation rejects circular or malformed task branches',
    ],
    invariant: 'Plans are validated before execution starts; cycles are impossible.',
    snippet: {
      command: 'm31a plan validate --graph 019234b0',
      output: [
        '[*] Constructing PetGraph<TaskNode, DependencyEdge>...',
        '[*] Node 01: Extract Auth Trait [root]',
        '[*] Node 02: Implement OIDC Provider [dep: 01]',
        '[*] Node 03: Update Login Handler [dep: 02]',
        '[*] Node 04: Test Suite & Checkpoint [dep: 03]',
        '--> Topological sort verified. 0 cycle detections. Plan admitted.',
      ],
    },
  },
  {
    id: 'execute',
    number: '03',
    label: 'EXECUTE',
    summary: 'Modify files and invoke tools inside controlled sandboxes.',
    subsystem: 'Capability Registry & Sandbox',
    layer: 'L2 & L6',
    details: [
      '28 core tools declare risk classes and JSON schema contracts',
      'Linux cgroups v2 & POSIX rlimits bound CPU time and memory RSS',
      'cmd.env_clear() strips all ambient host secrets to block LD_PRELOAD',
    ],
    invariant: 'Every execution runs in an isolated Git worktree under bounded resources.',
    snippet: {
      command: 'm31a execute tool edit_file --path src/auth/provider.rs',
      output: [
        '[L1:GATE] Matcher::evaluate(Tool(edit_file)) -> ALLOW',
        '[L2:SANDBOX] Bound: mem_max=512MB, cpu_limit=60s, worktree_isolated=true',
        '[L2:TOOL] Applying surgical hunk replacement at L42-L89',
        '--> File modified cleanly. Syntactic balance preserved.',
      ],
    },
  },
  {
    id: 'observe',
    number: '04',
    label: 'OBSERVE',
    summary: 'Inspect streaming outputs and system state with secret redaction.',
    subsystem: 'Spool Manager & Secret Redactor',
    layer: 'L6 & L3',
    details: [
      'Streaming output spools capture stdout/stderr with memory caps',
      '5-tier deterministic redactor scrubs NVIDIA, GitHub, AWS keys and JWTs',
      'sanitize_error wrappers prevent credentials from leaking in stack traces',
    ],
    invariant: 'Raw credentials never enter SQLite WAL, NDJSON traces, or context windows.',
    snippet: {
      command: 'm31a observe stream --mission 019234b0',
      output: [
        '[*] Spooling subprocess execution stream (PID 49201)...',
        '[*] Stream buffer: 12KB spooled in memory, 0 secrets leaked',
        '[*] 5-tier filter pipeline active: [NVIDIA, AWS, GITHUB, JWT, RSA]',
        '--> Subprocess exit code: 0 (SUCCESS).',
      ],
    },
  },
  {
    id: 'verify',
    number: '05',
    label: 'VERIFY',
    summary: 'Run tests, linters, and evaluate empirical evidence.',
    subsystem: 'Evidence Gate & Verifier',
    layer: 'L7',
    details: [
      'Multi-tier quality gates run clean test suites and static analysis',
      'Clippy and anti-fake-diff reviews reject todo!() or unimplemented!() stubs',
      'Cryptographic SHA-256 evidence digests signed upon test pass',
    ],
    invariant: 'Assertions are not evidence. Completion requires passing verification pipelines.',
    snippet: {
      command: 'm31a verify gate --target all',
      output: [
        '[*] Running cargo test --workspace (48 passed, 0 failed)...',
        '[*] Running cargo clippy --all-targets -- -D warnings (0 warnings)...',
        '[*] Inspecting diff AST: 0 todo!() or stub placeholders detected',
        '--> Evidence digest computed: sha256:7f83b1657ff1... [VERIFIED]',
      ],
    },
  },
  {
    id: 'recover',
    number: '06',
    label: 'RECOVER',
    summary: 'Respond to failures and continue safely with zero blind resumption.',
    subsystem: 'Differential Replanner & Rollback',
    layer: 'L7',
    details: [
      '15 failure classifications distinguish transient faults from corruption',
      'Differential replanning preserves already-verified task nodes',
      'Atomic rollback seams restore repository state on unrecoverable errors',
    ],
    invariant: 'Interrupted or failed runs fail closed rather than corrupting state.',
    snippet: {
      command: 'm31a recover inspect-failure --checkpoint chk_019234b2',
      output: [
        '[!] Diagnostic: Subprocess timeout encountered on integration test',
        '[*] Classification: TransientResourceExhaustion (Class 04)',
        '[*] Differential replanning: Preserving 3 verified task nodes',
        '--> Re-scheduling Node 04 with extended CPU budget (+30s). Safe to resume.',
      ],
    },
  },
  {
    id: 'complete',
    number: '07',
    label: 'COMPLETE',
    summary: 'Only finish when the result is proven and committed.',
    subsystem: 'Autonomy Controller & Two-Phase Store',
    layer: 'L8 & L0',
    details: [
      'Two-phase atomic checkpoint staging commits state to SQLite WAL',
      'RFC-compliant Git commit trailers created with agent audit signature',
      'Mission admitted complete only when all criteria and proofs match',
    ],
    invariant: 'No task is ever marked complete without cryptographic evidence.',
    snippet: {
      command: 'm31a mission status 019234b0',
      output: [
        '[✓] All 6 DAG tasks topologically executed and verified',
        '[✓] Test evidence digest confirmed: sha256:7f83b165... [MATCH]',
        '[✓] Two-phase atomic commit committed to SQLite WAL',
        '--> MISSION COMPLETE: 142 files verified, 0 regressions, 1.4s total time.',
      ],
    },
  },
];

export function ProductWorkflow() {
  const [selectedId, setSelectedId] = useState<string>('intent');
  const current = FLOW_STAGES.find((s) => s.id === selectedId) ?? FLOW_STAGES[0];
  const currentIndex = FLOW_STAGES.findIndex((s) => s.id === selectedId);

  return (
    <section id="product-demo" className="py-24 sm:py-32 border-b border-[#222227] bg-[#0A0A0C]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            AUTONOMOUS EXECUTION GRAPH
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
            Give M31A a goal.
          </h2>
          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
            M31A does not operate in endless conversational loops. It turns your engineering goal
            into an acyclic execution graph, executes tools within sandboxed boundaries, and verifies
            every single change before completion.
          </p>
        </div>

        {/* ── Sequence Pipeline Bar ── */}
        <div className="mb-10 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center min-w-[760px] gap-2 border-b border-[#222227] pb-6">
            {FLOW_STAGES.map((stage, idx) => {
              const isSelected = stage.id === selectedId;
              const isPast = idx < currentIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedId(stage.id)}
                  className={`group relative flex-1 p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-[#E8523F] bg-[#161214] ring-1 ring-[#E8523F]/30 shadow-lg'
                      : isPast
                      ? 'border-[#27272E] bg-[#101013] hover:border-[#3A3A44]'
                      : 'border-[#1E1E24] bg-[#0E0E11]/60 hover:border-[#27272E] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected
                          ? 'text-[#E8523F]'
                          : isPast
                          ? 'text-[#3ECF8E]'
                          : 'text-[#65656E]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    {isPast && <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />}
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#E8523F] animate-pulse" />}
                  </div>
                  <span
                    className={`block font-mono text-xs font-semibold tracking-wider ${
                      isSelected ? 'text-[#F4F4F6]' : isPast ? 'text-[#9E9EA8]' : 'text-[#65656E]'
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Detailed Stage Inspector ── */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Stage Narrative & Subsystem Invariants (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222227]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E8523F]/15 text-[#E8523F] border border-[#E8523F]/30">
                    STAGE {current.number}
                  </span>
                  <span className="font-mono text-xs text-[#9E9EA8]">
                    Layer {current.layer} · {current.subsystem}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F6] mb-3">
                  {current.label}: {current.summary}
                </h3>

                <ul className="space-y-3 mt-6">
                  {current.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9E9EA8]">
                      <CheckCircle2 className="w-4 h-4 text-[#E8523F] mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Invariant Guarantee Box */}
              <div className="mt-8 pt-6 border-t border-[#222227]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#65656E] block mb-1.5">
                  Runtime Security &amp; Correctness Invariant
                </span>
                <div className="p-3.5 rounded-xl border border-[#3ECF8E]/20 bg-[#3ECF8E]/5 font-mono text-xs text-[#3ECF8E]">
                  ✓ {current.invariant}
                </div>

                {/* Stage Step Controls */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#222227]/60">
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setSelectedId(FLOW_STAGES[Math.max(0, currentIndex - 1)].id)}
                    className="text-xs font-mono text-[#9E9EA8] hover:text-[#F4F4F6] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ← Previous Stage
                  </button>

                  <span className="text-xs font-mono text-[#65656E]">
                    {currentIndex + 1} of {FLOW_STAGES.length}
                  </span>

                  <button
                    disabled={currentIndex === FLOW_STAGES.length - 1}
                    onClick={() => setSelectedId(FLOW_STAGES[Math.min(FLOW_STAGES.length - 1, currentIndex + 1)].id)}
                    className="text-xs font-mono text-[#E8523F] hover:underline disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Authentic CLI / Subsystem Output (6 cols) */}
            <div className="lg:col-span-6 bg-[#09090C] p-6 sm:p-10 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222227] text-xs">
                  <span className="text-[#65656E] uppercase tracking-wider">
                    OPERATOR TRACE // {current.label}
                  </span>
                  <span className="text-[#3ECF8E] font-medium">FAIL-CLOSED BOUNDED</span>
                </div>

                {/* Simulated Command Execution */}
                <div className="flex items-center gap-2 text-[#F4F4F6] pb-3 mb-4 border-b border-[#222227]/60">
                  <span className="text-[#E8523F] font-bold select-none">$</span>
                  <span className="font-semibold text-xs sm:text-sm">{current.snippet.command}</span>
                </div>

                {/* Output log lines */}
                <div className="space-y-2 text-[#9E9EA8] leading-relaxed">
                  {current.snippet.output.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith('[✓]') || line.startsWith('-->') || line.includes('SUCCESS') || line.includes('VERIFIED')
                          ? 'text-[#3ECF8E]'
                          : line.startsWith('[!]')
                          ? 'text-[#EAB308]'
                          : line.startsWith('[*]')
                          ? 'text-[#F4F4F6]'
                          : line.includes('ALLOW')
                          ? 'text-[#E8523F]'
                          : 'text-[#9E9EA8]'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="mt-8 pt-4 border-t border-[#222227] text-[11px] text-[#65656E] flex items-center justify-between">
                <span>Deterministic State Commitment</span>
                <span className="text-[#9E9EA8]">SQLite WAL Engine</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
