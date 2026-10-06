'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Check,
  Play,
  Pause,
  RotateCcw,
  Copy,
  ExternalLink,
  ShieldAlert,
  Cpu,
  GitBranch,
  ArrowRight,
  Layers,
  FileCode,
  CheckCircle2,
  Lock,
  Workflow,
  Zap,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
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

interface DiffLine {
  type: 'header' | 'sub' | 'rem' | 'add' | 'ctx';
  lineNoOld?: number | string;
  lineNoNew?: number | string;
  text: string;
}

interface StreamLog {
  time: string;
  subsystem: string;
  subsystemColor: string;
  text: string;
  highlight?: boolean;
  evidence?: boolean;
}

interface DagTask {
  id: string;
  name: string;
  deps: string;
  status: 'PASS' | 'ACTIVE' | 'PENDING';
  dur: string;
}

interface Scenario {
  id: string;
  badge: string;
  title: string;
  repo: string;
  branch: string;
  command: string;
  activeFile: string;
  diffStats: string;
  steps: MissionStep[];
  diffLines: DiffLine[];
  streamLogs: StreamLog[];
  dagTasks: DagTask[];
  evidence: {
    missionId: string;
    compiler: string;
    tests: string;
    linter: string;
    antiFakeDiff: string;
    digest: string;
    atomicTx: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'auth',
    badge: '01 // ARCHITECTURE',
    title: 'OIDC Auth Migration',
    repo: '~/dev/auth-engine',
    branch: 'feat/oidc-migration',
    command: 'm31a mission run "migrate authentication to OpenID Connect"',
    activeFile: 'src/auth/provider.rs',
    diffStats: '+22 -14 lines',
    steps: [
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
        detail: 'Cargo tree analyzed · OpenID Connect trait implementations verified',
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
    ],
    diffLines: [
      { type: 'header', text: '--- a/src/auth/provider.rs' },
      { type: 'sub', text: '+++ b/src/auth/provider.rs' },
      { type: 'ctx', lineNoOld: 104, lineNoNew: 104, text: ' #[derive(Clone)]' },
      { type: 'rem', lineNoOld: 105, text: '-impl LegacyAuthProvider for AuthEngine {' },
      { type: 'rem', lineNoOld: 106, text: '-    fn authenticate(&self, creds: Credentials) -> Result<Session, Error> {' },
      { type: 'rem', lineNoOld: 107, text: '-        self.db.verify_legacy_hash(creds.username, creds.secret)' },
      { type: 'rem', lineNoOld: 108, text: '-    }' },
      { type: 'rem', lineNoOld: 109, text: '-}' },
      { type: 'add', lineNoNew: 105, text: '+impl OpenIdConnectProvider for AuthEngine {' },
      { type: 'add', lineNoNew: 106, text: '+    async fn verify_token(&self, token: &BearerToken) -> Result<Claims, AuthError> {' },
      { type: 'add', lineNoNew: 107, text: '+        let jwks = self.jwks_cache.load_or_fetch().await?;' },
      { type: 'add', lineNoNew: 108, text: '+        jwks.validate_signature(token).await' },
      { type: 'add', lineNoNew: 109, text: '+    }' },
      { type: 'add', lineNoNew: 110, text: '+}' },
    ],
    streamLogs: [
      { time: '14:22:01.002', subsystem: '[L0:KERNEL]', subsystemColor: 'text-[#3ECF8E]', text: 'Initializing mission 019234b0-a5ef-7b23...' },
      { time: '14:22:01.120', subsystem: '[L0:PERSIST]', subsystemColor: 'text-[#3ECF8E]', text: 'SQLite WAL session store online: ~/.config/m31a/state.db' },
      { time: '14:22:01.350', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(repo_symbols) → ALLOW (Read-only query)' },
      { time: '14:22:02.100', subsystem: '[L2:TOOL]', subsystemColor: 'text-[#9E9EA8]', text: 'repo_symbols returned 28 symbols across auth module' },
      { time: '14:22:02.400', subsystem: '[L5:PLAN]', subsystemColor: 'text-[#3ECF8E]', text: 'Topologically resolving task graph (6 nodes, acyclic)' },
      { time: '14:22:02.890', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(edit_file "src/auth/provider.rs") → ALLOW' },
      { time: '14:22:03.450', subsystem: '[L2:SANDBOX]', subsystemColor: 'text-[#3ECF8E]', text: 'Git worktree branch active: .git/worktrees/m31a-019234b0' },
      { time: '14:22:04.120', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(run_tests) → ALLOW' },
      { time: '14:22:04.300', subsystem: '[L2:SANDBOX]', subsystemColor: 'text-[#3ECF8E]', text: 'Subprocess spawned [cgroups: mem_max=512M, cpu=60s]' },
      { time: '14:22:05.410', subsystem: '[L7:VERIFIER]', subsystemColor: 'text-[#3ECF8E]', text: 'cargo test: 48 passed; 0 failed; 0 ignored (1.12s)', highlight: true },
      { time: '14:22:05.780', subsystem: '[L7:VERIFIER]', subsystemColor: 'text-[#3ECF8E]', text: 'cargo clippy: 0 warnings (0 todo!/unimplemented! found)' },
      { time: '14:22:06.100', subsystem: '[L7:CHECKPOINT]', subsystemColor: 'text-[#3ECF8E]', text: 'Two-phase commit staged: chk_019234b2 (sha256: 7f83b165...)', evidence: true },
      { time: '14:22:06.320', subsystem: '[L8:COMPLETE]', subsystemColor: 'text-[#3ECF8E]', text: 'Mission criteria satisfied with empirical evidence.', highlight: true },
    ],
    dagTasks: [
      { id: 'T1', name: 'Extract Auth Trait Interfaces', deps: 'None', status: 'PASS', dur: '0.4s' },
      { id: 'T2', name: 'Stub OpenID Connect Provider', deps: 'T1', status: 'PASS', dur: '0.8s' },
      { id: 'T3', name: 'Migrate Session Token Validator', deps: 'T2', status: 'PASS', dur: '1.2s' },
      { id: 'T4', name: 'Refactor Login Request Handlers', deps: 'T3', status: 'ACTIVE', dur: '1.9s' },
      { id: 'T5', name: 'Execute Integration Test Suite', deps: 'T4', status: 'PENDING', dur: '--' },
      { id: 'T6', name: 'Generate SHA-256 Checkpoint', deps: 'T5', status: 'PENDING', dur: '--' },
    ],
    evidence: {
      missionId: '019234b0-a5ef-7b23-96b0-96f7c75b001a',
      compiler: 'rustc 1.85.0 (0 warnings, 0 errors)',
      tests: '48 passed; 0 failed (cargo test)',
      linter: 'clippy --all-targets -- -D warnings (PASS)',
      antiFakeDiff: 'Zero todo!() or unimplemented!() stubs',
      digest: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      atomicTx: 'TRANSACTION COMMITTED (tx_9921)',
    },
  },
  {
    id: 'sql',
    badge: '02 // SECURITY',
    title: 'SQL Sanitization',
    repo: '~/dev/billing-service',
    branch: 'sec/parameterized-sql',
    command: 'm31a mission run "sanitize raw SQL with parameterized queries"',
    activeFile: 'src/db/accounts.rs',
    diffStats: '+16 -12 lines',
    steps: [
      {
        id: 'inspect',
        number: '01',
        label: 'Vulnerabilities Scanned',
        detail: 'AST taint analysis matched 7 unescaped format!("SELECT...") statements in src/db/',
        status: 'completed',
        subsystem: 'L2:grep',
      },
      {
        id: 'plan',
        number: '02',
        label: 'Execution Plan Created',
        detail: 'Acyclic DAG with 4 tasks · Compile-time verified sqlx query schemas mapped',
        status: 'completed',
        subsystem: 'L5:DAG_Engine',
      },
      {
        id: 'depend',
        number: '03',
        label: 'Dependencies Analyzed',
        detail: 'sqlx 0.8 with postgres driver confirmed active · Zero new dependencies needed',
        status: 'completed',
        subsystem: 'L2:read_file',
      },
      {
        id: 'execute',
        number: '04',
        label: 'Files Being Modified',
        detail: 'Converted raw string queries to sqlx::query_as!() in src/db/accounts.rs',
        status: 'running',
        subsystem: 'L2:edit_file',
      },
      {
        id: 'test',
        number: '05',
        label: 'Tests Running',
        detail: 'cargo test --test sql_injection_boundary (24 passed, 0 failed, 0 ignored)',
        status: 'running',
        subsystem: 'L7:Verifier',
      },
      {
        id: 'verify',
        number: '06',
        label: 'Verification Completed',
        detail: 'Static policy gate confirms zero raw SQL interpolations remaining in AST',
        status: 'completed',
        subsystem: 'L7:EvidenceGate',
      },
      {
        id: 'complete',
        number: '07',
        label: 'Mission Complete',
        detail: 'Vulnerability remediation criteria satisfied · Signed SHA-256 evidence logged',
        status: 'completed',
        subsystem: 'L8:AutonomyLoop',
      },
    ],
    diffLines: [
      { type: 'header', text: '--- a/src/db/accounts.rs' },
      { type: 'sub', text: '+++ b/src/db/accounts.rs' },
      { type: 'ctx', lineNoOld: 68, lineNoNew: 68, text: ' pub async fn get_account(&self, org_id: &str, status: &str) -> Result<Vec<Account>> {' },
      { type: 'rem', lineNoOld: 69, text: '-    let query = format!("SELECT * FROM accounts WHERE org_id = \'{}\' AND status = \'{}\'", org_id, status);' },
      { type: 'rem', lineNoOld: 70, text: '-    let rows = self.pool.execute(&query).await?;' },
      { type: 'rem', lineNoOld: 71, text: '-    Ok(rows)' },
      { type: 'add', lineNoNew: 69, text: '+    let accounts = sqlx::query_as!(Account,' },
      { type: 'add', lineNoNew: 70, text: '+        "SELECT id, org_id, status, balance FROM accounts WHERE org_id = $1 AND status = $2",' },
      { type: 'add', lineNoNew: 71, text: '+        org_id, status' },
      { type: 'add', lineNoNew: 72, text: '+    ).fetch_all(&self.pool).await?;' },
      { type: 'add', lineNoNew: 73, text: '+    Ok(accounts)' },
    ],
    streamLogs: [
      { time: '11:04:12.110', subsystem: '[L0:KERNEL]', subsystemColor: 'text-[#3ECF8E]', text: 'Initializing mission 019241f8-9a3c-7411...' },
      { time: '11:04:12.240', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(grep "SELECT .* FROM") → ALLOW (Read-only query)' },
      { time: '11:04:12.580', subsystem: '[L2:TOOL]', subsystemColor: 'text-[#9E9EA8]', text: 'grep identified 7 raw string interpolation queries in src/db/' },
      { time: '11:04:12.910', subsystem: '[L5:PLAN]', subsystemColor: 'text-[#3ECF8E]', text: 'Petgraph constructed: 4 tasks with zero cyclic dependencies' },
      { time: '11:04:13.200', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(edit_file "src/db/accounts.rs") → ALLOW' },
      { time: '11:04:13.620', subsystem: '[L2:SANDBOX]', subsystemColor: 'text-[#3ECF8E]', text: 'Subprocess isolated: memory=512MB, pids=32, rlimits active' },
      { time: '11:04:14.050', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(run_tests) → ALLOW' },
      { time: '11:04:15.120', subsystem: '[L7:VERIFIER]', subsystemColor: 'text-[#3ECF8E]', text: 'cargo test --test sql_injection_boundary: 24 passed (0.84s)', highlight: true },
      { time: '11:04:15.480', subsystem: '[L7:VERIFIER]', subsystemColor: 'text-[#3ECF8E]', text: 'sqlx macro schema verification: all queries type-safe' },
      { time: '11:04:15.890', subsystem: '[L7:CHECKPOINT]', subsystemColor: 'text-[#3ECF8E]', text: 'Staged atomic commit chk_019241f9 (sha256: 4e91c780...)', evidence: true },
      { time: '11:04:16.100', subsystem: '[L8:COMPLETE]', subsystemColor: 'text-[#3ECF8E]', text: 'Vulnerability remediation criteria satisfied.', highlight: true },
    ],
    dagTasks: [
      { id: 'T1', name: 'Parse Query AST & Identify Taint Sinks', deps: 'None', status: 'PASS', dur: '0.3s' },
      { id: 'T2', name: 'Generate Parameterized Prepared Statements', deps: 'T1', status: 'PASS', dur: '0.7s' },
      { id: 'T3', name: 'Refactor Account Query Handlers', deps: 'T2', status: 'ACTIVE', dur: '1.4s' },
      { id: 'T4', name: 'Execute SQL Boundary Test Suite', deps: 'T3', status: 'PENDING', dur: '--' },
    ],
    evidence: {
      missionId: '019241f8-9a3c-7411-912b-3199c011e84a',
      compiler: 'rustc 1.85.0 + sqlx-macros (0 errors)',
      tests: '24 passed; 0 failed (cargo test --test sql_injection_boundary)',
      linter: 'clippy --all-targets: PASS (0 warnings)',
      antiFakeDiff: 'Zero unescaped interpolation format strings remaining',
      digest: '4e91c780f2d48a1768b5a0346c26b91c84d720b0051187d9a1c128479e0a3b22',
      atomicTx: 'TRANSACTION COMMITTED (tx_9942)',
    },
  },
  {
    id: 'concurrency',
    badge: '03 // PERFORMANCE',
    title: 'Lock-Free Queue',
    repo: '~/dev/event-router',
    branch: 'perf/lock-free-queue',
    command: 'm31a mission run "replace mutex locks with crossbeam ring buffer"',
    activeFile: 'src/queue/ring_buffer.rs',
    diffStats: '+28 -20 lines',
    steps: [
      {
        id: 'inspect',
        number: '01',
        label: 'Contention Profiled',
        detail: 'Flamegraph showed 42% CPU lock contention on Arc<Mutex<VecDeque>> during peak ingestion',
        status: 'completed',
        subsystem: 'L2:repo_symbols',
      },
      {
        id: 'plan',
        number: '02',
        label: 'Execution Plan Created',
        detail: 'Acyclic DAG with 5 tasks · Lock-free queue interface with backpressure synthesized',
        status: 'completed',
        subsystem: 'L5:DAG_Engine',
      },
      {
        id: 'depend',
        number: '03',
        label: 'Dependencies Analyzed',
        detail: 'crossbeam-queue 0.3 confirmed available and bounded in Cargo.toml',
        status: 'completed',
        subsystem: 'L2:read_file',
      },
      {
        id: 'execute',
        number: '04',
        label: 'Files Being Modified',
        detail: 'Replaced Mutex with ArrayQueue in src/queue/ring_buffer.rs',
        status: 'running',
        subsystem: 'L2:edit_file',
      },
      {
        id: 'test',
        number: '05',
        label: 'Tests Running',
        detail: 'cargo test --release --bench ring_latency + ThreadSanitizer (TSan clean)',
        status: 'running',
        subsystem: 'L7:Verifier',
      },
      {
        id: 'verify',
        number: '06',
        label: 'Verification Completed',
        detail: 'Zero data races or deadlocks detected · Ingestion throughput +340% (4.2M ops/s)',
        status: 'completed',
        subsystem: 'L7:EvidenceGate',
      },
      {
        id: 'complete',
        number: '07',
        label: 'Mission Complete',
        detail: 'Concurrency and latency invariant verified · SHA-256 evidence logged',
        status: 'completed',
        subsystem: 'L8:AutonomyLoop',
      },
    ],
    diffLines: [
      { type: 'header', text: '--- a/src/queue/ring_buffer.rs' },
      { type: 'sub', text: '+++ b/src/queue/ring_buffer.rs' },
      { type: 'ctx', lineNoOld: 18, lineNoNew: 18, text: ' use std::sync::Arc;' },
      { type: 'rem', lineNoOld: 19, text: '-use std::sync::Mutex;' },
      { type: 'rem', lineNoOld: 20, text: '-use std::collections::VecDeque;' },
      { type: 'add', lineNoNew: 19, text: '+use crossbeam::queue::ArrayQueue;' },
      { type: 'rem', lineNoOld: 22, text: '-pub struct EventBus {' },
      { type: 'rem', lineNoOld: 23, text: '-    inner: Arc<Mutex<VecDeque<Event>>>, // Contention bottleneck' },
      { type: 'rem', lineNoOld: 24, text: '-}' },
      { type: 'add', lineNoNew: 21, text: '+pub struct EventBus {' },
      { type: 'add', lineNoNew: 22, text: '+    queue: Arc<ArrayQueue<Event>>, // Lock-free bounded ring buffer' },
      { type: 'add', lineNoNew: 23, text: '+    capacity: usize,' },
      { type: 'add', lineNoNew: 24, text: '+}' },
      { type: 'add', lineNoNew: 25, text: '+impl EventBus {' },
      { type: 'add', lineNoNew: 26, text: '+    pub fn push(&self, event: Event) -> Result<(), QueueFull> {' },
      { type: 'add', lineNoNew: 27, text: '+        self.queue.push(event).map_err(|_| QueueFull)' },
      { type: 'add', lineNoNew: 28, text: '+    }' },
      { type: 'add', lineNoNew: 29, text: '+}' },
    ],
    streamLogs: [
      { time: '09:18:03.400', subsystem: '[L0:KERNEL]', subsystemColor: 'text-[#3ECF8E]', text: 'Initializing mission 019248a2-c11d-88f2...' },
      { time: '09:18:03.520', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(read_file "src/queue/ring_buffer.rs") → ALLOW' },
      { time: '09:18:03.880', subsystem: '[L5:PLAN]', subsystemColor: 'text-[#3ECF8E]', text: 'Petgraph resolved: 5 sequential & concurrent verification tasks' },
      { time: '09:18:04.210', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(edit_file "src/queue/ring_buffer.rs") → ALLOW' },
      { time: '09:18:04.700', subsystem: '[L2:SANDBOX]', subsystemColor: 'text-[#3ECF8E]', text: 'Subprocess isolated: ThreadSanitizer flags enabled' },
      { time: '09:18:05.100', subsystem: '[L1:GATE]', subsystemColor: 'text-[#E8523F]', text: 'Action: Tool(run_tests) → ALLOW' },
      { time: '09:18:06.420', subsystem: '[L7:VERIFIER]', subsystemColor: 'text-[#3ECF8E]', text: 'cargo test --release: 62 passed; TSan: 0 race conditions', highlight: true },
      { time: '09:18:06.810', subsystem: '[L7:VERIFIER]', subsystemColor: 'text-[#3ECF8E]', text: 'Benchmark: p99 latency dropped from 4.8ms to 0.12ms (-97.5%)' },
      { time: '09:18:07.120', subsystem: '[L7:CHECKPOINT]', subsystemColor: 'text-[#3ECF8E]', text: 'Staged atomic commit chk_019248a3 (sha256: d823e51a...)', evidence: true },
      { time: '09:18:07.380', subsystem: '[L8:COMPLETE]', subsystemColor: 'text-[#3ECF8E]', text: 'Performance invariant verified with benchmark evidence.', highlight: true },
    ],
    dagTasks: [
      { id: 'T1', name: 'Profile Mutex Lock Hold Time', deps: 'None', status: 'PASS', dur: '0.5s' },
      { id: 'T2', name: 'Implement ArrayQueue Trait Wrapper', deps: 'T1', status: 'PASS', dur: '0.9s' },
      { id: 'T3', name: 'Refactor Consumer Poll Handlers', deps: 'T2', status: 'ACTIVE', dur: '1.6s' },
      { id: 'T4', name: 'Run ThreadSanitizer Data-Race Suite', deps: 'T3', status: 'PENDING', dur: '--' },
      { id: 'T5', name: 'Verify p99 Latency Invariant', deps: 'T4', status: 'PENDING', dur: '--' },
    ],
    evidence: {
      missionId: '019248a2-c11d-88f2-89a1-002bb55381a9',
      compiler: 'rustc 1.85.0 (-Zsanitizer=thread PASS)',
      tests: '62 passed; 0 race conditions; 0 deadlocks',
      linter: 'clippy --all-targets: PASS (0 warnings)',
      antiFakeDiff: 'Zero todo!() or unwrap() stubs in lock-free path',
      digest: 'd823e51ac82531a7f01416892fa6ef0189a87d0e4c6984c98bc01d167ef089f2',
      atomicTx: 'TRANSACTION COMMITTED (tx_9971)',
    },
  },
];

type ActiveTab = 'stream' | 'dag' | 'policy' | 'evidence';

export function HeroTerminal() {
  const { displayVersion } = useLatestVersion();
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<ActiveTab>('stream');
  const [currentStepIndex, setCurrentStepIndex] = useState(3);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const scenario = SCENARIOS[activeScenarioIndex];

  // Auto-play progression
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % scenario.steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, scenario.steps.length]);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(scenario.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#27272E] bg-[#0C0C0E] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all hover:border-[#E8523F]/35">
      {/* ── Top Bar: Scenario Switcher Strip ── */}
      <div className="border-b border-[#222227] bg-[#111115] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[11px] font-mono text-[#65656E] uppercase tracking-wider font-semibold mr-1.5 hidden sm:inline flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#E8523F]" />
            <span>Missions:</span>
          </span>

          {SCENARIOS.map((sc, sIdx) => {
            const isSelected = sIdx === activeScenarioIndex;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioIndex(sIdx);
                  setCurrentStepIndex(3);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E8523F]/15 border border-[#E8523F]/50 text-[#F4F4F6] shadow-[0_0_15px_rgba(232,82,63,0.2)] font-semibold'
                    : 'text-[#9E9EA8] hover:text-[#F4F4F6] hover:bg-[#18181D] border border-transparent'
                }`}
              >
                <span className={`text-[10px] ${isSelected ? 'text-[#E8523F]' : 'text-[#65656E]'}`}>
                  {sc.badge.split(' // ')[0]}
                </span>
                <span>{sc.title}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#65656E]">
          <span className="hidden md:inline">Interactive TUI Cockpit</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
        </div>
      </div>

      {/* ── Terminal Window Header ── */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222227] bg-[#141418] px-4 py-3 gap-3">
        {/* Left: Window Controls + Active Path */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block border border-[#E0443E]/50 shadow-[0_0_8px_rgba(255,95,86,0.3)]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block border border-[#DEA123]/50 shadow-[0_0_8px_rgba(255,189,46,0.3)]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block border border-[#1AAB29]/50 shadow-[0_0_8px_rgba(39,201,63,0.3)]" />
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#27272E] text-xs font-mono text-[#9E9EA8]">
            <span className="text-[#F4F4F6] font-semibold">m31a {displayVersion}</span>
            <span className="text-[#65656E]">/</span>
            <span className="truncate max-w-[200px]">{scenario.repo}</span>
            <span className="inline-flex items-center gap-1 text-[#E8523F] bg-[#E8523F]/10 px-1.5 py-0.5 rounded text-[11px] border border-[#E8523F]/20">
              <GitBranch className="w-3 h-3" />
              <span>{scenario.branch}</span>
            </span>
          </div>
        </div>

        {/* Right: Runtime Telemetry Badges */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/25 text-[#3ECF8E] shadow-[0_0_12px_rgba(62,207,142,0.15)]">
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

      {/* ── Mission Prompt Banner with Copy Button ── */}
      <div className="border-b border-[#222227] bg-[#101013] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
          <span className="text-[#E8523F] font-bold select-none text-base">$</span>
          <span className="text-[#9E9EA8] select-none">m31a mission run</span>
          <span className="text-[#F4F4F6] font-medium break-all">&quot;{scenario.command.replace('m31a mission run "', '').slice(0, -1)}&quot;</span>
        </div>

        <button
          onClick={handleCopyCommand}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#9E9EA8] hover:text-[#F4F4F6] hover:bg-[#18181D] border border-[#27272E] hover:border-[#383842] transition-all"
          title="Copy mission command"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span className="text-[#3ECF8E] font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#9E9EA8]" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* ── Visual Execution Sequence Tracker (01 to 07) ── */}
      <div className="border-b border-[#222227] bg-[#0E0E11] px-4 sm:px-6 py-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between min-w-[720px] gap-2">
          {scenario.steps.map((step, idx) => {
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
                    ? 'bg-[#E8523F]/15 border border-[#E8523F]/50 ring-1 ring-[#E8523F]/30 shadow-[0_0_15px_rgba(232,82,63,0.15)]'
                    : isCompleted
                    ? 'bg-[#18181D]/60 hover:bg-[#18181D] border border-[#27272E]'
                    : 'opacity-40 hover:opacity-75 border border-transparent'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center font-mono text-[10px] shrink-0 font-bold ${
                    isCurrent
                      ? 'bg-[#E8523F] text-white shadow-[0_0_8px_rgba(232,82,63,0.5)]'
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
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left: Mission Progression & DAG Tasks (5 cols) */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#222227] p-4 sm:p-6 bg-[#0E0E12] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222227]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#65656E] font-semibold flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-[#E8523F]" />
                <span>EXECUTION GRAPH // PETGRAPH</span>
              </span>
              <span className="font-mono text-[11px] text-[#E8523F] font-bold">
                TASK {currentStepIndex + 1} OF {scenario.steps.length}
              </span>
            </div>

            {/* Current Active Task Card */}
            <div className="p-4 rounded-xl border border-[#E8523F]/35 bg-[#161214] mb-4 shadow-[0_0_20px_rgba(232,82,63,0.08)]">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-[#E8523F] font-bold">
                  STEP {scenario.steps[currentStepIndex].number} · {scenario.steps[currentStepIndex].subsystem}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#E8523F]/20 text-[#E8523F] font-bold border border-[#E8523F]/30 animate-pulse">
                  ACTIVE
                </span>
              </div>
              <h4 className="text-base font-bold text-[#F4F4F6] mb-1 tracking-tight">
                {scenario.steps[currentStepIndex].label}
              </h4>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                {scenario.steps[currentStepIndex].detail}
              </p>
            </div>

            {/* Plan Checklist with Status Signals */}
            <div className="space-y-2 mt-4">
              {scenario.steps.map((s, i) => {
                const done = i < currentStepIndex;
                const active = i === currentStepIndex;

                return (
                  <div
                    key={s.id}
                    onClick={() => {
                      setCurrentStepIndex(i);
                      setIsPlaying(false);
                    }}
                    className={`flex items-start gap-3 p-2.5 rounded-lg text-xs cursor-pointer transition-all ${
                      active
                        ? 'bg-[#18181D] border border-[#E8523F]/40 shadow-sm'
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
              Scrub or auto-advance
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
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
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
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
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
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
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
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
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
              {scenario.streamLogs.slice(0, 7).map((log, lIdx) => (
                <div key={lIdx} className="text-[#9E9EA8]">
                  <span className="text-[#65656E] mr-2">{log.time}</span>
                  <span className={`${log.subsystemColor} mr-2 font-semibold`}>{log.subsystem}</span>
                  <span className={log.highlight ? 'text-[#F4F4F6] font-bold' : ''}>{log.text}</span>
                </div>
              ))}

              {/* Surgical Diff Visual Block */}
              <div className="p-3.5 my-3 rounded-xl bg-[#060608] border border-[#222227] font-mono text-[11px] shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1A1A20] text-xs">
                  <div className="flex items-center gap-2 text-[#F4F4F6]">
                    <FileCode className="w-3.5 h-3.5 text-[#E8523F]" />
                    <span className="font-semibold">{scenario.activeFile}</span>
                  </div>
                  <span className="text-[#3ECF8E] font-medium text-[10px] bg-[#3ECF8E]/10 px-2 py-0.5 rounded border border-[#3ECF8E]/20">
                    {scenario.diffStats}
                  </span>
                </div>

                <div className="space-y-0.5 leading-5 font-mono overflow-x-auto">
                  {scenario.diffLines.map((line, dlIdx) => {
                    if (line.type === 'header' || line.type === 'sub') {
                      return (
                        <div key={dlIdx} className="text-[#65656E]">
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'rem') {
                      return (
                        <div key={dlIdx} className="flex items-center bg-[#FF453A]/10 text-[#FF6961] px-1 rounded-sm">
                          <span className="w-8 shrink-0 text-[#8E2822] select-none text-[10px]">{line.lineNoOld}</span>
                          <span className="w-8 shrink-0 select-none text-[10px] text-transparent">--</span>
                          <span className="break-all">{line.text}</span>
                        </div>
                      );
                    }
                    if (line.type === 'add') {
                      return (
                        <div key={dlIdx} className="flex items-center bg-[#30D158]/10 text-[#3ECF8E] px-1 rounded-sm font-medium">
                          <span className="w-8 shrink-0 select-none text-[10px] text-transparent">--</span>
                          <span className="w-8 shrink-0 text-[#1E7E34] select-none text-[10px]">{line.lineNoNew}</span>
                          <span className="break-all">{line.text}</span>
                        </div>
                      );
                    }
                    return (
                      <div key={dlIdx} className="flex items-center text-[#7E7E8A] px-1">
                        <span className="w-8 shrink-0 text-[#4E4E58] select-none text-[10px]">{line.lineNoOld}</span>
                        <span className="w-8 shrink-0 text-[#4E4E58] select-none text-[10px]">{line.lineNoNew}</span>
                        <span className="break-all">{line.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {scenario.streamLogs.slice(7).map((log, lIdx) => (
                <div key={lIdx} className="text-[#9E9EA8]">
                  <span className="text-[#65656E] mr-2">{log.time}</span>
                  <span className={`${log.subsystemColor} mr-2 font-semibold`}>{log.subsystem}</span>
                  <span className={log.highlight ? 'text-[#F4F4F6] font-bold' : log.evidence ? 'text-[#3ECF8E] font-medium' : ''}>
                    {log.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Task DAG Graph Inspector */}
          {activeTab === 'dag' && (
            <div className="p-4 sm:p-6 space-y-4 flex-1">
              <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8] pb-3 border-b border-[#222227]">
                <span className="flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-[#E8523F]" />
                  <span>Petgraph Acyclic Task Representation</span>
                </span>
                <span className="text-[#3ECF8E] font-semibold">Topological Sort: Valid</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {scenario.dagTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-3 rounded-lg border border-[#222227] bg-[#101013] flex items-center justify-between gap-4 transition-all hover:border-[#383842]"
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
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8523F]" />
                  <span>11-Stage Non-Bypassable Policy Pipeline</span>
                </span>
                <span className="text-[#3ECF8E] font-semibold">Evaluation: FAIL-CLOSED</span>
              </div>

              <div className="p-3 rounded-lg bg-[#141418] border border-[#27272E] text-xs font-mono space-y-1 mb-3">
                <div className="text-[#65656E]">PROPOSED RUNTIME ACTION:</div>
                <div className="text-[#F4F4F6] font-bold">Tool(edit_file, path=&quot;{scenario.activeFile}&quot;)</div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                {[
                  { layer: 'Layer 0', name: 'Built-in Safety Invariant', verdict: 'ALLOW', reason: 'Target path resides strictly within workspace root' },
                  { layer: 'Layer 1', name: 'System Administrator Veto', verdict: 'ALLOW', reason: 'No administrative block on workspace directory' },
                  { layer: 'Layer 2', name: 'Corporate / Org Policy', verdict: 'ALLOW', reason: 'Compliant with repository Apache/MIT header policy' },
                  { layer: 'Layer 3', name: 'Workspace Isolation Check', verdict: 'ALLOW', reason: `Git worktree isolation verified active (${scenario.branch})` },
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
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#3ECF8E]" />
                  <span>Cryptographic Evidence Ledger</span>
                </span>
                <span className="text-[#3ECF8E] font-semibold">Proof Verified</span>
              </div>

              <div className="p-4 rounded-xl border border-[#27272E] bg-[#101013] font-mono text-xs space-y-3">
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">MISSION ID:</span>
                  <span className="text-[#F4F4F6]">{scenario.evidence.missionId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">COMPILER PROOF:</span>
                  <span className="text-[#3ECF8E]">{scenario.evidence.compiler}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">TEST PROOF:</span>
                  <span className="text-[#3ECF8E]">{scenario.evidence.tests}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">LINTER AUDIT:</span>
                  <span className="text-[#3ECF8E]">{scenario.evidence.linter}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222227]">
                  <span className="text-[#65656E]">ANTI-FAKE-DIFF:</span>
                  <span className="text-[#3ECF8E]">{scenario.evidence.antiFakeDiff}</span>
                </div>
                <div>
                  <span className="text-[#65656E] block mb-1">SHA-256 EVIDENCE DIGEST:</span>
                  <span className="text-[#E8523F] break-all bg-[#18181D] p-2 rounded block">
                    {scenario.evidence.digest}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-[#3ECF8E]/20 bg-[#3ECF8E]/5 text-xs font-mono text-[#3ECF8E] flex items-center justify-between">
                <span>SQLite 2-Phase Atomic Commit:</span>
                <span className="font-bold">{scenario.evidence.atomicTx}</span>
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
