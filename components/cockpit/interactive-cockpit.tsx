'use client';

import { useState } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Workflow,
  Cpu,
  Bot,
  Wrench,
  GitBranch,
  History,
  Activity,
  Layers,
  FileCode,
  Lock,
} from 'lucide-react';
import { PRODUCT } from '@/lib/m31a/product';

type CockpitTab =
  | 'mission'
  | 'conversation'
  | 'tasks'
  | 'agents'
  | 'tools'
  | 'verification'
  | 'telemetry'
  | 'git'
  | 'replay'
  | 'approvals';

export function InteractiveCockpit() {
  const [activeTab, setActiveTab] = useState<CockpitTab>('mission');
  const [simStep, setSimStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const simulationSteps = [
    {
      title: 'Idle / Ready',
      desc: 'Runtime initialized in local workspace. Awaiting operator mission intent.',
      badge: 'IDLE',
      badgeColor: 'text-zinc-400 border-zinc-700 bg-zinc-900',
    },
    {
      title: 'Context Compilation & Discovery',
      desc: 'Scanning repository symbols, reading Cargo.toml, resolving effective profile "coding".',
      badge: 'DISCOVERY',
      badgeColor: 'text-blue-400 border-blue-800 bg-blue-950/60',
    },
    {
      title: 'Candidate Plan Generation (L5)',
      desc: 'LLM proposes 3-node Task DAG. Runtime verifies acyclicity and dependency constraints.',
      badge: 'PLANNING',
      badgeColor: 'text-purple-400 border-purple-800 bg-purple-950/60',
    },
    {
      title: 'Policy Evaluation & Budget Reservation',
      desc: '11-stage policy gate evaluates tool actions. BudgetEnforcer reserves 15k tokens and 100MB RAM.',
      badge: 'GOVERNANCE',
      badgeColor: 'text-amber-400 border-amber-800 bg-amber-950/60',
    },
    {
      title: 'Sandboxed Tool Execution (L2)',
      desc: 'Tools read_file, edit_file, and run_command execute under POSIX rlimits and cgroups v2.',
      badge: 'EXECUTING',
      badgeColor: 'text-cyan-400 border-cyan-800 bg-cyan-950/60',
    },
    {
      title: 'Continuous Verification Gate (L7)',
      desc: 'Running "cargo test" in isolated worktree. All 14 tests pass. SHA-256 digest generated.',
      badge: 'VERIFYING',
      badgeColor: 'text-yellow-400 border-yellow-800 bg-yellow-950/60',
    },
    {
      title: 'Two-Phase Checkpoint & Completion',
      desc: 'Artifacts committed to SQLite; RFC-compliant commit trailer signed. Mission succeeded.',
      badge: 'SUCCEEDED',
      badgeColor: 'text-emerald-400 border-emerald-800 bg-emerald-950/60',
    },
  ];

  const handleNextStep = () => {
    setSimStep((prev) => (prev + 1) % simulationSteps.length);
  };

  const handleReset = () => {
    setSimStep(0);
    setIsSimulating(false);
  };

  const handleAutoRun = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    const runSteps = (step: number) => {
      if (step >= simulationSteps.length) {
        setIsSimulating(false);
        return;
      }
      setTimeout(() => {
        setSimStep(step);
        runSteps(step + 1);
      }, 1400);
    };

    runSteps(2);
  };

  return (
    <div className="rounded-xl border border-border/70 bg-[#0c0e12] shadow-2xl overflow-hidden font-sans">
      {/* Disclaimer bar */}
      <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-primary gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 shrink-0" />
          <span className="font-semibold uppercase tracking-wider">Interactive Cockpit Preview</span>
          <span className="hidden sm:inline text-primary/60">·</span>
          <span className="text-muted-foreground">Simulating the Ratatui 0.30 projection layer</span>
        </div>
        <div className="text-[11px] font-mono text-muted-foreground">
          Local terminal execution · v{PRODUCT.version} PRODUCTION
        </div>
      </div>

      {/* TUI Header Bar */}
      <div className="bg-[#12151b] border-b border-border/60 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            M31A
          </span>
          <span className="text-muted-foreground/60">│</span>
          <span className="text-muted-foreground">
            channel: <span className="text-cyan-400 font-semibold">PRODUCTION</span>
          </span>
          <span className="text-muted-foreground/60">│</span>
          <span className="text-muted-foreground">
            profile: <span className="text-foreground">coding</span>
          </span>
          <span className="text-muted-foreground/60">│</span>
          <span className="text-muted-foreground">
            model: <span className="text-zinc-300">nvidia/nemotron-3-ultra-550b-a55b</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-muted-foreground">
            isolation: <span className="text-emerald-400">worktree (required)</span>
          </span>
          <span className="text-muted-foreground/60">│</span>
          <span className="text-muted-foreground">
            tokens: <span className="text-foreground">14,280 / 500,000</span>
          </span>
        </div>
      </div>

      {/* Surface Selector Tabs */}
      <div className="bg-[#0f1117] border-b border-border/50 px-2 py-1.5 flex items-center gap-1 overflow-x-auto scrollbar-thin">
        {[
          { id: 'mission', label: '1. Mission', icon: Bot },
          { id: 'conversation', label: '2. Conversation', icon: Terminal },
          { id: 'tasks', label: '3. Task DAG', icon: Workflow },
          { id: 'agents', label: '4. Swarm', icon: Cpu },
          { id: 'tools', label: '5. Tools', icon: Wrench },
          { id: 'verification', label: '6. Verification', icon: CheckCircle2 },
          { id: 'telemetry', label: '7. Telemetry', icon: Activity },
          { id: 'git', label: '8. Git', icon: GitBranch },
          { id: 'replay', label: '9. Replay', icon: History },
          { id: 'approvals', label: '0. Approvals', icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CockpitTab)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-secondary text-foreground font-semibold border border-border'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/40'
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Interactive Controller Bar */}
      <div className="bg-[#141820] border-b border-border/40 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-mono text-muted-foreground">Simulated Lifecycle:</span>
          <span
            className={`font-mono px-2 py-0.5 rounded text-[11px] font-bold border ${simulationSteps[simStep].badgeColor}`}
          >
            {simulationSteps[simStep].badge}
          </span>
          <span className="text-foreground font-medium hidden md:inline">
            {simulationSteps[simStep].title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAutoRun}
            disabled={isSimulating}
            className="flex items-center gap-1.5 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 px-3 py-1 rounded text-xs font-mono font-medium transition-colors disabled:opacity-50"
          >
            <Play className="h-3 w-3" />
            {isSimulating ? 'Simulating...' : 'Run Lifecycle'}
          </button>
          <button
            onClick={handleNextStep}
            className="bg-secondary hover:bg-secondary/80 text-foreground border border-border px-3 py-1 rounded text-xs font-mono transition-colors"
          >
            Step &gt;
          </button>
          <button
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground p-1 transition-colors"
            title="Reset simulation"
            aria-label="Reset simulation"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Surface View Area */}
      <div className="p-4 sm:p-6 min-h-[360px] bg-[#090b0e] font-mono text-xs">
        {activeTab === 'mission' && (
          <div className="space-y-4">
            <div className="border border-border/70 rounded-lg p-4 bg-[#11141b]/60">
              <div className="text-muted-foreground mb-1 text-[11px]">ACTIVE MISSION OBJECTIVE</div>
              <div className="text-sm font-semibold text-foreground">
                &quot;Refactor database queries in src/repository/ to use parameterized SQL statements and verify zero SQL injection vulnerabilities.&quot;
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-muted-foreground text-[11px] pt-3 border-t border-border/40">
                <div>
                  ID: <span className="text-foreground">019234b0-a5ef-7b23-96b0-96f7c75b001a</span>
                </div>
                <div>
                  Created: <span className="text-foreground">2026-10-03 04:32:10 UTC</span>
                </div>
                <div>
                  Stage: <span className="text-primary font-bold">{simStep + 1} / 12</span>
                </div>
                <div>
                  Checkpoints: <span className="text-foreground">2 verified</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border border-border/50 rounded-lg p-3 bg-[#11141b]/40">
                <div className="text-muted-foreground text-[11px] mb-1">AUTONOMY MODE</div>
                <div className="text-sm font-bold text-foreground">Assisted</div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  Workspace file mutations permitted. Outbound pushes and network require confirmation.
                </div>
              </div>

              <div className="border border-border/50 rounded-lg p-3 bg-[#11141b]/40">
                <div className="text-muted-foreground text-[11px] mb-1">TASK GRAPH PROGRESS</div>
                <div className="text-sm font-bold text-cyan-400">2 / 3 Tasks Complete</div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-500 h-full w-2/3" />
                </div>
              </div>

              <div className="border border-border/50 rounded-lg p-3 bg-[#11141b]/40">
                <div className="text-muted-foreground text-[11px] mb-1">POLICY STATUS</div>
                <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" /> 11-Stage Gate Active
                </div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  Zero policy violations. Worktree isolation enforced.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'conversation' && (
          <div className="space-y-3">
            <div className="rounded border border-blue-900/50 bg-blue-950/20 p-3">
              <div className="text-blue-400 font-bold text-[11px] mb-1">OPERATOR INTENT</div>
              <div className="text-foreground">
                Refactor database queries in src/repository/ to use parameterized SQL statements.
              </div>
            </div>

            <div className="rounded border border-border/60 bg-[#12151e]/80 p-3 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-primary font-bold">M31A RUNTIME · CANDIDATE PLAN PROPOSAL</span>
                <span className="text-muted-foreground">L5 Planning Engine</span>
              </div>
              <p className="text-muted-foreground">
                Decomposed mission into 3 sequential tasks with petgraph topological ordering:
              </p>
              <div className="pl-3 border-l-2 border-primary/40 space-y-1 text-muted-foreground">
                <div>1. [AST Audit] Locate raw format!() query interpolations in src/repository/</div>
                <div>2. [Implementer] Substitute raw formatting with sqlx query_as!() binds</div>
                <div>3. [Verifier] Execute cargo test --test repository_regression</div>
              </div>
            </div>

            <div className="rounded border border-emerald-900/40 bg-emerald-950/15 p-3 flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-emerald-400 font-bold text-[11px]">
                  GOVERNANCE CARD · EXECUTION AUTHORIZED
                </div>
                <div className="text-muted-foreground text-[11px] mt-0.5">
                  Task 1 &amp; 2 completed. Task 3 verification passed with 0 test failures.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-3">
            <div className="text-muted-foreground mb-2 flex items-center justify-between">
              <span>PETGRAPH DIRECTED ACYCLIC GRAPH (rev_1)</span>
              <span className="text-xs text-primary">Topological scheduling active</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border border-emerald-500/40 bg-emerald-950/10 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-foreground">Task 1: AST Audit</span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">SUCCEEDED</span>
                </div>
                <div className="text-muted-foreground text-[11px]">Role: researcher</div>
                <div className="text-muted-foreground text-[11px]">Tool: repo_symbols</div>
                <div className="mt-2 text-[10px] text-muted-foreground">Output: 3 vulnerable query sites identified</div>
              </div>

              <div className="border border-emerald-500/40 bg-emerald-950/10 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-foreground">Task 2: Query Parameterization</span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">SUCCEEDED</span>
                </div>
                <div className="text-muted-foreground text-[11px]">Role: implementer</div>
                <div className="text-muted-foreground text-[11px]">Tool: edit_file</div>
                <div className="mt-2 text-[10px] text-muted-foreground">Diff: src/repository/user.rs (+14/-8)</div>
              </div>

              <div className="border border-cyan-500/40 bg-cyan-950/10 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-foreground">Task 3: Test Verification</span>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase">VERIFYING</span>
                </div>
                <div className="text-muted-foreground text-[11px]">Role: verifier</div>
                <div className="text-muted-foreground text-[11px]">Tool: run_tests</div>
                <div className="mt-2 text-[10px] text-muted-foreground">Running cargo test --package repository</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-3">
            <div className="text-muted-foreground mb-2">CANONICAL AGENT ROLES &amp; STATE MACHINES</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { role: 'planner', status: 'Idle', steps: 4 },
                { role: 'researcher', status: 'Idle', steps: 12 },
                { role: 'architect', status: 'Idle', steps: 2 },
                { role: 'implementer', status: 'Idle', steps: 18 },
                { role: 'reviewer', status: 'Idle', steps: 3 },
                { role: 'verifier', status: 'Active', steps: 8 },
                { role: 'diagnostician', status: 'Standby', steps: 0 },
                { role: 'integrator', status: 'Standby', steps: 0 },
              ].map((agent) => (
                <div key={agent.role} className="border border-border/60 bg-[#12151b] p-2.5 rounded">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">{agent.role}</span>
                    <span
                      className={`text-[10px] font-bold ${
                        agent.status === 'Active' ? 'text-cyan-400' : 'text-muted-foreground'
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>
                  <div className="text-muted-foreground text-[10px] mt-1">Steps: {agent.steps}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>TOOL EXECUTION DISPATCH · run_tests</span>
              <span className="text-emerald-400">Policy: ALLOW</span>
            </div>
            <div className="bg-[#050608] border border-border/70 rounded p-3 text-[11px] text-muted-foreground space-y-1">
              <div className="text-foreground">$ cargo test --package m31a-repository --lib</div>
              <div>Compiling m31a-repository v0.1.1 (/tmp/.m31a-worktree-a910/crates/repo)</div>
              <div>Running unittests src/lib.rs (target/debug/deps/repo-9549303)</div>
              <div className="text-emerald-400">test user::test_parameterized_query ... ok</div>
              <div className="text-emerald-400">test user::test_escaped_input_injection ... ok</div>
              <div className="text-emerald-400">test user::test_transaction_rollback ... ok</div>
              <div className="pt-2 text-foreground font-semibold">
                test result: ok. 14 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
              </div>
            </div>
          </div>
        )}

        {activeTab === 'verification' && (
          <div className="space-y-3">
            <div className="text-muted-foreground">VERIFICATION EVIDENCE (Multi-Tier Contract)</div>
            <div className="border border-border/70 rounded-lg p-3 bg-[#11141b]/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-foreground font-bold">1. Compilation &amp; Syntax</span>
                <span className="text-emerald-400 font-bold">PASSED (0 errors, 0 warnings)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground font-bold">2. Automated Test Suite</span>
                <span className="text-emerald-400 font-bold">PASSED (14/14 tests)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground font-bold">3. Static Linter (Clippy)</span>
                <span className="text-emerald-400 font-bold">PASSED (Zero warnings)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground font-bold">4. Anti-Fake-Diff Review</span>
                <span className="text-emerald-400 font-bold">PASSED (No todo!() or unimplemented!())</span>
              </div>
              <div className="pt-2 border-t border-border/40 text-[10px] text-muted-foreground">
                Cryptographic Evidence Digest:{' '}
                <span className="text-foreground font-mono">
                  sha256:7b9201f928e469c11867c21f92bc31a4095819d4b008d519
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-3">
            <div className="text-muted-foreground">10-DIMENSIONAL RESOURCE BUDGET ENFORCEMENT</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Tokens', used: '14,280', max: '500,000', pct: 3 },
                { name: 'Wall-Clock Time', used: '42s', max: '3600s', pct: 1 },
                { name: 'Memory Footprint', used: '184 MB', max: '4,096 MB', pct: 5 },
                { name: 'Child Process CPU', used: '3.4s', max: '600s', pct: 1 },
                { name: 'Financial Cost ($USD)', used: '$0.042', max: '$10.00', pct: 1 },
                { name: 'Artifact Storage', used: '2.4 MB', max: '100 MB', pct: 2 },
              ].map((m) => (
                <div key={m.name} className="border border-border/60 bg-[#12151b] p-2.5 rounded">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-foreground font-bold">{m.name}</span>
                    <span className="text-muted-foreground">
                      {m.used} / {m.max}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1 rounded overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: `${m.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'git' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>GIT ATTRIBUTION &amp; WORKTREE ISOLATION</span>
              <span className="text-emerald-400">Worktree: /tmp/.m31a-worktree-a910</span>
            </div>
            <div className="bg-[#050608] border border-border/70 rounded p-3 text-[11px] space-y-2">
              <div className="text-foreground font-bold">Prepared Commit Message:</div>
              <div className="text-muted-foreground">refactor(repo): parameterize SQL query statements in user repository</div>
              <div className="pt-2 border-t border-border/40 text-cyan-400 font-mono text-[10px]">
                M31A-Mission-ID: 019234b0-a5ef-7b23-96b0-96f7c75b001a<br />
                M31A-Agent-Role: implementer<br />
                M31A-Verified-By: verifier (evidence: sha256:7b9201f92...)
              </div>
            </div>
          </div>
        )}

        {activeTab === 'replay' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>HISTORICAL TIMELINE REPLAY CONTROLLER</span>
              <span className="text-primary">Read-Only Mode</span>
            </div>
            <div className="border border-border/60 bg-[#11141b] rounded p-3 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-foreground font-bold">Event 18 / 34: [L1 Policy Gate Evaluation]</span>
                <span className="text-muted-foreground">T+18.4s</span>
              </div>
              <p className="text-muted-foreground text-[11px]">
                Model proposed tool call &quot;edit_file&quot; on path &quot;src/repository/user.rs&quot;.
                Policy Layer 3 (Workspace) matched ALLOW rule. Symlink escape check passed.
              </p>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-3">
                <div className="bg-primary h-full w-[53%]" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="space-y-3">
            <div className="border border-amber-500/50 bg-amber-950/20 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Lock className="h-4 w-4" />
                <span>APPROVAL COORDINATOR · OPERATOR CONFIRMATION REQUIRED</span>
              </div>
              <div className="text-muted-foreground text-[11px]">
                Policy Layer 0 has encountered a mutating action with high risk class:
              </div>
              <div className="bg-[#050608] p-2.5 rounded border border-border/60 font-mono text-[11px] text-foreground">
                Command: git commit -m &quot;refactor: parameterize SQL queries&quot;
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 px-3 py-1 rounded text-xs">
                  [y] Allow Once
                </button>
                <button className="bg-secondary hover:bg-secondary/80 text-foreground border border-border px-3 py-1 rounded text-xs">
                  [a] Allow Always for Mission
                </button>
                <button className="bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-800 px-3 py-1 rounded text-xs">
                  [n] Deny (Fail-Closed)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* TUI Footer Key Hint Bar */}
      <div className="bg-[#0f1117] border-t border-border/60 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-muted-foreground gap-2">
        <div className="flex items-center gap-3">
          <span>
            <kbd className="bg-secondary px-1 py-0.5 rounded text-foreground text-[10px]">Tab</kbd> Next surface
          </span>
          <span>
            <kbd className="bg-secondary px-1 py-0.5 rounded text-foreground text-[10px]">1-9</kbd> Jump to surface
          </span>
          <span>
            <kbd className="bg-secondary px-1 py-0.5 rounded text-foreground text-[10px]">Ctrl+C</kbd> Safe cancellation
          </span>
        </div>
        <div className="text-zinc-500">
          RAII TerminalGuard active · Raw Mode
        </div>
      </div>
    </div>
  );
}
