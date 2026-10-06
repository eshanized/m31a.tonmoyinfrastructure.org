'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Check, Play, Pause, RotateCcw, Copy, ExternalLink, ShieldAlert, Cpu, GitBranch, ArrowRight, Layers, FileCode, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useLatestVersion } from '@/hooks/use-latest-version';

interface MissionStep {
  id: string;
  number: string;
  label: string;
  detail: string;
  status: 'completed' | 'running' | 'pending';
  subsystem: string;
}

const MISSION_STEPS: MissionStep[] = [
  {
    id: 'inspect',
    number: '01',
    label: 'Repository Inspected',
    detail: 'AST parsed across 142 files · Auth boundaries & token interfaces mapped',
    status: 'completed',
    subsystem: 'L2:repo_symbols',
  },
  {
    id: 'plan',
    number: '02',
    label: 'Execution Plan Created',
    detail: 'Acyclic DAG with 6 topologically ordered tasks · Petgraph validated',
    status: 'completed',
    subsystem: 'L5:DAG_Engine',
  },
  {
    id: 'depend',
    number: '03',
    label: 'Dependencies Analyzed',
    detail: 'Cargo tree analyzed · OAuth2 trait implementations verified compatible',
    status: 'completed',
    subsystem: 'L2:read_file',
  },
  {
    id: 'execute',
    number: '04',
    label: 'Files Being Modified',
    detail: 'Surgical diffs in isolated worktree: src/auth/provider.rs, src/handlers/login.rs',
    status: 'running',
    subsystem: 'L2:edit_file',
  },
  {
    id: 'test',
    number: '05',
    label: 'Tests Running',
    detail: 'cargo test --package auth-engine (48 passed, 0 failed, 0 ignored)',
    status: 'running',
    subsystem: 'L7:Verifier',
  },
  {
    id: 'verify',
    number: '06',
    label: 'Verification Completed',
    detail: 'Clippy static review clean · Anti-fake-diff checked · SHA-256 signed',
    status: 'completed',
    subsystem: 'L7:EvidenceGate',
  },
  {
    id: 'complete',
    number: '07',
    label: 'Mission Complete',
    detail: 'Two-phase atomic commit committed to SQLite WAL · Worktree merged cleanly',
    status: 'completed',
    subsystem: 'L8:AutonomyLoop',
  },
];

type ActiveTab = 'stream' | 'dag' | 'policy' | 'evidence';

export function HeroTerminal() {
  const { displayVersion } = useLatestVersion();
  const [activeTab, setActiveTab] = useState<ActiveTab>('stream');
  const [currentStepIndex, setCurrentStepIndex] = useState(3);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  // Auto-play progression
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % MISSION_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('m31a mission run "migrate authentication to the new provider"');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#27272E] bg-[#0C0C0E] shadow-2xl overflow-hidden transition-all">
      {/* ── Terminal Window Top Bar ── */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222227] bg-[#141418] px-4 py-3 gap-3">
        {/* Left: Window Controls + Active Path */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block border border-[#E0443E]/50" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block border border-[#DEA123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block border border-[#1AAB29]/50" />
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#27272E] text-xs font-mono text-[#9E9EA8]">
            <span className="text-[#F4F4F6] font-semibold">m31a {displayVersion}</span>
            <span className="text-[#65656E]">/</span>
            <span className="truncate max-w-[220px]">~/dev/auth-engine</span>
            <span className="inline-flex items-center gap-1 text-[#E8523F] bg-[#E8523F]/10 px-1.5 py-0.5 rounded text-[11px]">
              <GitBranch className="w-3 h-3" />
              <span>feat/provider-migration</span>
            </span>
          </div>
        </div>

        {/* Right: Runtime Telemetry Badges */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/25 text-[#3ECF8E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">RUNTIME BOUNDED</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-[#9E9EA8] px-2 py-0.5 rounded bg-[#18181D] border border-[#27272E]">
            <Cpu className="w-3 h-3 text-[#E8523F]" />
            <span>cgroups v2</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-[#9E9EA8] px-2 py-0.5 rounded bg-[#18181D] border border-[#27272E]">
            <span>RSS: 384MB / 512MB</span>
          </div>
        </div>
      </div>

      {/* ── Mission Prompt Banner ── */}
      <div className="border-b border-[#222227] bg-[#101013] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
          <span className="text-[#E8523F] font-bold select-none">$</span>
          <span className="text-[#9E9EA8] select-none">m31a mission run</span>
          <span className="text-[#F4F4F6] font-medium">&quot;migrate authentication to the new provider&quot;</span>
        </div>

        <button
          onClick={handleCopyCommand}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-[#9E9EA8] hover:text-[#F4F4F6] hover:bg-[#18181D] border border-[#27272E] transition-colors"
          title="Copy mission command"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span className="text-[#3ECF8E]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* ── Visual Execution Sequence Tracker ── */}
      <div className="border-b border-[#222227] bg-[#0E0E11] px-4 sm:px-6 py-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between min-w-[700px] gap-2">
          {MISSION_STEPS.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                  isCurrent
                    ? 'bg-[#E8523F]/15 border border-[#E8523F]/40 ring-1 ring-[#E8523F]/30'
                    : isCompleted
                    ? 'bg-[#18181D]/60 hover:bg-[#18181D] border border-[#27272E]'
                    : 'opacity-40 hover:opacity-75 border border-transparent'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center font-mono text-[10px] shrink-0 font-bold ${
                    isCurrent
                      ? 'bg-[#E8523F] text-white'
                      : isCompleted
                      ? 'bg-[#3ECF8E]/20 text-[#3ECF8E]'
                      : 'bg-[#27272E] text-[#65656E]'
                  }`}
                >
                  {isCompleted ? '✓' : isCurrent ? '→' : step.number}
                </span>
                <div className="truncate">
                  <span
                    className={`block font-mono text-[11px] leading-tight font-medium ${
                      isCurrent
                        ? 'text-[#F4F4F6] font-semibold'
                        : isCompleted
                        ? 'text-[#9E9EA8]'
                        : 'text-[#65656E]'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main TUI Content Area: Left Cockpit Status + Right Interactive Inspector ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
        {/* Left: Mission Progression & DAG Tasks (5 cols) */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#222227] p-4 sm:p-6 bg-[#0E0E12] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222227]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65656E] font-semibold">
                EXECUTION GRAPH // PETGRAPH
              </span>
              <span className="font-mono text-[11px] text-[#E8523F]">
                TASK {currentStepIndex + 1} OF {MISSION_STEPS.length}
              </span>
            </div>

            {/* Current Active Task Card */}
            <div className="p-4 rounded-xl border border-[#E8523F]/30 bg-[#161214] mb-4 shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-[#E8523F] font-bold">
                  STEP {MISSION_STEPS[currentStepIndex].number} · {MISSION_STEPS[currentStepIndex].subsystem}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#E8523F]/20 text-[#E8523F] font-semibold animate-pulse">
                  ACTIVE
                </span>
              </div>
              <h4 className="text-base font-bold text-[#F4F4F6] mb-1 tracking-tight">
                {MISSION_STEPS[currentStepIndex].label}
              </h4>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                {MISSION_STEPS[currentStepIndex].detail}
              </p>
            </div>

            {/* Plan Checklist with Status Signals */}
            <div className="space-y-2 mt-4">
              {MISSION_STEPS.map((s, i) => {
                const done = i < currentStepIndex;
                const active = i === currentStepIndex;

                return (
                  <div
                    key={s.id}
                    onClick={() => {
                      setCurrentStepIndex(i);
                      setIsPlaying(false);
                    }}
                    className={`flex items-start gap-3 p-2.5 rounded-lg text-xs cursor-pointer transition-colors ${
                      active
                        ? 'bg-[#18181D] border border-[#E8523F]/40'
                        : done
                        ? 'bg-[#121215]/80 hover:bg-[#18181D]'
                        : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[11px] font-bold">
                      {done ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3ECF8E]" />
                      ) : active ? (
                        <span className="text-[#E8523F]">→</span>
                      ) : (
                        <span className="text-[#65656E]">○</span>
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${active ? 'text-[#F4F4F6]' : done ? 'text-[#9E9EA8]' : 'text-[#65656E]'}`}>
                          {s.label}
                        </span>
                        <span className="font-mono text-[10px] text-[#65656E]">
                          {s.subsystem.split(':')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="mt-6 pt-4 border-t border-[#222227] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#18181D] hover:bg-[#222227] text-[#F4F4F6] border border-[#27272E] transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#E8523F]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#3ECF8E]" />
                    <span>Auto Play</span>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setCurrentStepIndex(0);
                  setIsPlaying(true);
                }}
                className="p-1.5 rounded-md text-[#65656E] hover:text-[#F4F4F6] hover:bg-[#18181D] transition-colors"
                title="Restart simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <span className="text-[11px] font-mono text-[#65656E]">
              Interactive Simulation
            </span>
          </div>
        </div>

        {/* Right: Interactive Cockpit Tabs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-[#0A0A0C]">
          {/* Cockpit Nav Tabs */}
          <div className="flex items-center justify-between border-b border-[#222227] bg-[#121216] px-4 py-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setActiveTab('stream')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'stream'
                    ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                    : 'text-[#9E9EA8] hover:text-[#F4F4F6]'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-[#E8523F]" />
                <span>[1] Live Stream</span>
              </button>
              <button
                onClick={() => setActiveTab('dag')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'dag'
                    ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                    : 'text-[#9E9EA8] hover:text-[#F4F4F6]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#E8523F]" />
                <span>[2] Task Graph</span>
              </button>
              <button
                onClick={() => setActiveTab('policy')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'policy'
                    ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                    : 'text-[#9E9EA8] hover:text-[#F4F4F6]'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#E8523F]" />
                <span>[3] Policy Gates</span>
              </button>
              <button
                onClick={() => setActiveTab('evidence')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'evidence'
                    ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E]'
                    : 'text-[#9E9EA8] hover:text-[#F4F4F6]'
                }`}
              >
                <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
                <span>[4] Evidence</span>
              </button>
            </div>

            <div className="text-[11px] font-mono text-[#65656E] hidden sm:block">
              TAB {activeTab === 'stream' ? '1' : activeTab === 'dag' ? '2' : activeTab === 'policy' ? '3' : '4'}/4
            </div>
          </div>

          {/* Tab 1: Live Terminal Execution Stream */}
          {activeTab === 'stream' && (
            <div className="p-4 sm:p-6 font-mono text-xs leading-relaxed space-y-2 flex-1 overflow-x-auto text-[#9E9EA8]">
              <div className="text-[#65656E]">14:22:01.002 <span className="text-[#3ECF8E]">[L0:KERNEL]</span> Initializing mission 019234b0-a5ef-7b23...</div>
              <div className="text-[#65656E]">14:22:01.120 <span className="text-[#3ECF8E]">[L0:PERSIST]</span> SQLite WAL session store online: ~/.config/m31a/state.db</div>
              <div className="text-[#9E9EA8]">14:22:01.350 <span className="text-[#E8523F]">[L1:GATE]</span> Action: Tool(repo_symbols) → <span className="text-[#3ECF8E] font-bold">ALLOW</span> (Read-only query)</div>
              <div className="text-[#9E9EA8]">14:22:02.100 <span className="text-[#9E9EA8]">[L2:TOOL]</span> repo_symbols returned 28 symbols across auth module</div>
              <div className="text-[#9E9EA8]">14:22:02.400 <span className="text-[#3ECF8E]">[L5:PLAN]</span> Topologically resolving task graph (6 nodes, acyclic)</div>
              <div className="text-[#9E9EA8]">14:22:02.890 <span className="text-[#E8523F]">[L1:GATE]</span> Action: Tool(edit_file &quot;src/auth/provider.rs&quot;) → <span className="text-[#3ECF8E] font-bold">ALLOW</span></div>
              <div className="text-[#9E9EA8]">14:22:03.450 <span className="text-[#3ECF8E]">[L2:SANDBOX]</span> Git worktree branch active: .git/worktrees/m31a-019234b0</div>
              
              {/* Surgical Diff Visual */}
              <div className="p-3 my-2 rounded-lg bg-[#060608] border border-[#222227] font-mono text-[11px]">
                <div className="text-[#65656E] mb-1">--- a/src/auth/provider.rs</div>
                <div className="text-[#65656E] mb-2">+++ b/src/auth/provider.rs</div>
                <div className="text-[#EF4444]">- impl LegacyAuthProvider for AuthEngine &#123;</div>
                <div className="text-[#EF4444]">-     fn authenticate(&amp;self, creds: Credentials) -&gt; Result&lt;Session, Error&gt; &#123; ... &#125;</div>
                <div className="text-[#3ECF8E]">+ impl OpenIdConnectProvider for AuthEngine &#123;</div>
                <div className="text-[#3ECF8E]">+     async fn verify_token(&amp;self, token: &amp;BearerToken) -&gt; Result&lt;Claims, AuthError&gt; &#123;</div>
                <div className="text-[#3ECF8E]">+         self.jwks_cache.validate_signature(token).await</div>
                <div className="text-[#3ECF8E]">+     &#125;</div>
              </div>

              <div className="text-[#9E9EA8]">14:22:04.120 <span className="text-[#E8523F]">[L1:GATE]</span> Action: Tool(run_tests) → <span className="text-[#3ECF8E] font-bold">ALLOW</span></div>
              <div className="text-[#9E9EA8]">14:22:04.300 <span className="text-[#3ECF8E]">[L2:SANDBOX]</span> Subprocess spawned [cgroups: mem_max=512M, cpu=60s]</div>
              <div className="text-[#F4F4F6]">14:22:05.410 <span className="text-[#3ECF8E]">[L7:VERIFIER]</span> cargo test: 48 passed; 0 failed; 0 ignored (1.12s)</div>
              <div className="text-[#F4F4F6]">14:22:05.780 <span className="text-[#3ECF8E]">[L7:VERIFIER]</span> cargo clippy: 0 warnings (0 todo!/unimplemented! found)</div>
              <div className="text-[#3ECF8E] font-medium">14:22:06.100 <span className="text-[#3ECF8E]">[L7:CHECKPOINT]</span> Two-phase commit staged: chk_019234b2 (sha256: 7f83b165...)</div>
              <div className="text-[#3ECF8E] font-bold">14:22:06.320 <span className="text-[#3ECF8E]">[L8:COMPLETE]</span> Mission criteria satisfied with empirical evidence.</div>
            </div>
          )}

          {/* Tab 2: Task DAG Graph Inspector */}
          {activeTab === 'dag' && (
            <div className="p-4 sm:p-6 space-y-4 flex-1">
              <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8] pb-3 border-b border-[#222227]">
                <span>Acyclic Task Graph Representation</span>
                <span className="text-[#3ECF8E]">Topological Sort: Valid</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { id: 'T1', name: 'Extract Auth Trait Interfaces', deps: 'None', status: 'PASS', dur: '0.4s' },
                  { id: 'T2', name: 'Stub OpenID Connect Provider', deps: 'T1', status: 'PASS', dur: '0.8s' },
                  { id: 'T3', name: 'Migrate Session Token Validator', deps: 'T2', status: 'PASS', dur: '1.2s' },
                  { id: 'T4', name: 'Refactor Login Request Handlers', deps: 'T3', status: 'ACTIVE', dur: '1.9s' },
                  { id: 'T5', name: 'Execute Integration Test Suite', deps: 'T4', status: 'PENDING', dur: '--' },
                  { id: 'T6', name: 'Generate SHA-256 Checkpoint', deps: 'T5', status: 'PENDING', dur: '--' },
                ].map((task) => (
                  <div
                    key={task.id}
                    className="p-3 rounded-lg border border-[#222227] bg-[#101013] flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-[#18181D] border border-[#27272E] text-[#E8523F] font-bold flex items-center justify-center text-xs">
                        {task.id}
                      </span>
                      <div>
                        <span className="text-[#F4F4F6] font-medium block">{task.name}</span>
                        <span className="text-[11px] text-[#65656E]">Depends on: {task.deps}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right">
                      <span className="text-[11px] text-[#65656E]">{task.dur}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          task.status === 'PASS'
                            ? 'bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/25'
                            : task.status === 'ACTIVE'
                            ? 'bg-[#E8523F]/15 text-[#E8523F] border border-[#E8523F]/30 animate-pulse'
                            : 'bg-[#18181D] text-[#65656E]'
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Policy Gates Verdicts */}
          {activeTab === 'policy' && (
            <div className="p-4 sm:p-6 space-y-4 flex-1">
              <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8] pb-3 border-b border-[#222227]">
                <span>11-Stage Non-Bypassable Policy Gate</span>
                <span className="text-[#3ECF8E]">Evaluation: FAIL-CLOSED</span>
              </div>

              <div className="p-3 rounded-lg bg-[#141418] border border-[#27272E] text-xs font-mono space-y-1 mb-3">
                <div className="text-[#65656E]">PROPOSED ACTION:</div>
                <div className="text-[#F4F4F6] font-bold">Tool(edit_file, path=&quot;src/auth/provider.rs&quot;)</div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                {[
                  { layer: 'Layer 0', name: 'Built-in Safety Invariant', verdict: 'ALLOW', reason: 'Target path resides strictly within workspace root' },
                  { layer: 'Layer 1', name: 'System Administrator Veto', verdict: 'ALLOW', reason: 'No administrative block on workspace directory' },
                  { layer: 'Layer 2', name: 'Corporate / Org Policy', verdict: 'ALLOW', reason: 'Compliant with dual-license header policy' },
                  { layer: 'Layer 3', name: 'Workspace Isolation Check', verdict: 'ALLOW', reason: 'Git worktree execution isolation verified active' },
                  { layer: 'Layer 4', name: 'Secret Redaction Pre-Check', verdict: 'ALLOW', reason: 'Payload scanned: zero API keys / JWTs detected' },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg border border-[#222227] bg-[#101013] flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#E8523F] font-semibold">{item.layer}:</span>
                        <span className="text-[#F4F4F6]">{item.name}</span>
                      </div>
                      <span className="text-[11px] text-[#65656E] block mt-0.5">{item.reason}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/25 font-bold">
                      {item.verdict}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Cryptographic Evidence Ledger */}
          {activeTab === 'evidence' && (
            <div className="p-4 sm:p-6 space-y-4 flex-1">
              <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8] pb-3 border-b border-[#222227]">
                <span>Cryptographic Evidence Ledger</span>
                <span className="text-[#3ECF8E]">Proof Verified</span>
              </div>

              <div className="p-4 rounded-xl border border-[#27272E] bg-[#101013] font-mono text-xs space-y-3">
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">MISSION ID:</span>
                  <span className="text-[#F4F4F6]">019234b0-a5ef-7b23-96b0-96f7c75b001a</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">COMPILER PROOF:</span>
                  <span className="text-[#3ECF8E]">rustc 1.85.0 (0 warnings, 0 errors)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">TEST PROOF:</span>
                  <span className="text-[#3ECF8E]">48 passed; 0 failed (cargo test)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">LINTER AUDIT:</span>
                  <span className="text-[#3ECF8E]">clippy --all-targets -- -D warnings (PASS)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">ANTI-FAKE-DIFF:</span>
                  <span className="text-[#3ECF8E]">Zero todo!() or unimplemented!() stubs</span>
                </div>
                <div>
                  <span className="text-[#65656E] block mb-1">SHA-256 EVIDENCE DIGEST:</span>
                  <span className="text-[#E8523F] break-all bg-[#18181D] p-2 rounded block">
                    7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-[#3ECF8E]/20 bg-[#3ECF8E]/5 text-xs font-mono text-[#3ECF8E] flex items-center justify-between">
                <span>SQLite 2-Phase Atomic Commit:</span>
                <span className="font-bold">TRANSACTION COMMITTED (tx_9921)</span>
              </div>
            </div>
          )}

          {/* Cockpit Footer Status Bar */}
          <div className="border-t border-[#222227] bg-[#101013] px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#65656E]">
            <div className="flex items-center gap-3">
              <span className="text-[#F4F4F6]">Press [Tab] to cycle views</span>
              <span>·</span>
              <span>[Space] Approve action</span>
            </div>
            <Link
              href="/architecture"
              className="inline-flex items-center gap-1 text-[#E8523F] hover:underline"
            >
              <span>Explore Architecture Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
