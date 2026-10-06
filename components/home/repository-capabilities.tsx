'use client';

import React, { useState } from 'react';
import { Container } from '@/components/site/section';
import { 
  GitBranch, 
  Terminal, 
  FileCode, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  RefreshCw,
  FolderGit2,
  Workflow
} from 'lucide-react';

interface CapabilityWorkflow {
  id: string;
  name: string;
  tagline: string;
  description: string;
  terminalHeader: string;
  codeSnippet: {
    command: string;
    logs: { text: string; type: 'default' | 'success' | 'warning' | 'error' | 'coral' | 'diff-add' | 'diff-del' }[];
  };
  metrics: { label: string; value: string }[];
}

const WORKFLOWS: CapabilityWorkflow[] = [
  {
    id: 'multi-file',
    name: 'Multi-File Surgical Refactors',
    tagline: 'Atomic diffs across dependency boundaries',
    description:
      'M31A does not paste code snippets into a chat window. It clones your repository into an isolated Git worktree, inspects callers with repo_symbols, and applies coordinated atomic edits across traits, handlers, and configuration files.',
    terminalHeader: 'src/auth/mod.rs, src/handlers/login.rs, Cargo.toml [Worktree Isolated]',
    codeSnippet: {
      command: 'm31a execute batch-edit --worktree 019234b0',
      logs: [
        { text: '[*] Checking Git worktree isolation: .git/worktrees/m31a-019234b0', type: 'default' },
        { text: '[*] File 1/3: src/auth/provider.rs -> Replacing AuthEngine trait (64 lines modified)', type: 'default' },
        { text: '    - fn authenticate(&self, creds: Credentials) -> Result<Session, Error>', type: 'diff-del' },
        { text: '    + async fn verify_token(&self, token: &BearerToken) -> Result<Claims, AuthError>', type: 'diff-add' },
        { text: '[*] File 2/3: src/handlers/login.rs -> Adapting HTTP request handler to OIDC claims', type: 'default' },
        { text: '[*] File 3/3: Cargo.toml -> Adding serde_json and jsonwebtoken dependencies', type: 'default' },
        { text: '[✓] Syntax trees validated. Zero unresolved cross-file references.', type: 'success' },
      ],
    },
    metrics: [
      { label: 'Worktree', value: 'Isolated' },
      { label: 'Files Edited', value: '3 in atomic batch' },
      { label: 'Integrity', value: 'AST Balanced' },
    ],
  },
  {
    id: 'compiler-loop',
    name: 'Autonomous Compiler Feedback',
    tagline: 'Self-correcting type checking & diagnostics',
    description:
      'When rustc or cargo check emits compiler errors, M31A does not give up or ask the developer for help. It parses machine-readable JSON compiler diagnostics, extracts the exact spans and suggestions, corrects the implementation, and re-verifies.',
    terminalHeader: 'cargo check --message-format=json [Subprocess]',
    codeSnippet: {
      command: 'cargo check --all-targets',
      logs: [
        { text: 'error[E0308]: mismatched types in src/handlers/login.rs:88:14', type: 'error' },
        { text: '   --> expected `Claims`, found `Result<Claims, AuthError>`', type: 'warning' },
        { text: '    = note: consider using the `?` operator to unwrap the `Result`', type: 'warning' },
        { text: '[*] Diagnostician (L4): Diagnosing E0308 error in login.rs', type: 'coral' },
        { text: '[*] Applying fix: Append `?` operator to async verify_token call', type: 'default' },
        { text: '[*] Re-running cargo check --all-targets...', type: 'default' },
        { text: '[✓] Finished dev [unoptimized + debuginfo] target(s) in 0.84s (0 errors)', type: 'success' },
      ],
    },
    metrics: [
      { label: 'Diagnostic', value: 'Rustc E0308' },
      { label: 'Fix Strategy', value: 'Unwrap (? Operator)' },
      { label: 'Resolution', value: 'Clean in 0.84s' },
    ],
  },
  {
    id: 'test-confinement',
    name: 'Sandboxed Test Execution',
    tagline: 'Bounded CPU, memory, and clean environment',
    description:
      'All automated test suites execute inside bounded Linux cgroups v2 boundaries. Host secrets and private tokens are stripped from the environment via cmd.env_clear() before any test runner spawns.',
    terminalHeader: 'cargo test --workspace [cgroups v2 + rlimits]',
    codeSnippet: {
      command: 'cargo test --workspace -- --nocapture',
      logs: [
        { text: '[*] Confinement active: mem_limit=512MB, cpu_limit=60s, pids=32', type: 'default' },
        { text: '[*] Scrubbed environment: 42 host environment variables stripped', type: 'default' },
        { text: 'running 48 tests across 4 packages...', type: 'default' },
        { text: 'test auth::provider::tests::test_valid_oidc_token ... ok', type: 'success' },
        { text: 'test auth::provider::tests::test_expired_token_rejected ... ok', type: 'success' },
        { text: 'test handlers::login::tests::test_bearer_header_extraction ... ok', type: 'success' },
        { text: '[✓] test result: ok. 48 passed; 0 failed; 0 ignored (1.18s)', type: 'success' },
      ],
    },
    metrics: [
      { label: 'Confinement', value: 'cgroups v2' },
      { label: 'Tests Passed', value: '48 / 48' },
      { label: 'Environment', value: 'Scrubbed (env_clear)' },
    ],
  },
  {
    id: 'continuity',
    name: 'Fault Recovery & Continuity',
    tagline: 'Two-phase atomic SQLite WAL checkpoints',
    description:
      'Power outages, broken networks, and host restarts do not destroy M31A missions. Every verified task node stages artifacts and commits atomic transactions to local SQLite WAL storage. Resume with a single CLI command.',
    terminalHeader: 'm31a mission resume [SQLite WAL Store]',
    codeSnippet: {
      command: 'm31a mission resume 019234b0-a5ef-7b23',
      logs: [
        { text: '[*] Scanning SQLite store: ~/.config/m31a/state.db...', type: 'default' },
        { text: '[*] Detected interrupted mission 019234b0 at step 04/06', type: 'warning' },
        { text: '[*] Checkpoint verified: chk_019234b2 (sha256: 7f83b165... MATCH)', type: 'success' },
        { text: '[*] Differential replanner: Preserving 3 verified task nodes', type: 'default' },
        { text: '[*] Resuming from step 04: "Refactor Login Request Handlers"', type: 'coral' },
        { text: '[✓] Safe state restored. Resuming execution without work loss.', type: 'success' },
      ],
    },
    metrics: [
      { label: 'Storage', value: 'SQLite WAL' },
      { label: 'Recovery Time', value: '< 20ms' },
      { label: 'Preserved Tasks', value: '100% of Verified' },
    ],
  },
];

export function RepositoryCapabilities() {
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>('multi-file');
  const active = WORKFLOWS.find((w) => w.id === activeWorkflowId) ?? WORKFLOWS[0];

  return (
    <section className="py-24 sm:py-32 border-b border-[#222227] bg-[#0A0A0C]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            SERIOUS ENGINEERING WORKFLOWS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
            Built for repositories, not conversations.
          </h2>
          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
            M31A is not an LLM chat window asking you to copy code snippets. It operates directly
            in your repository: parsing symbol graphs, applying multi-file edits, interpreting
            compiler diagnostics, and producing verifiable commits.
          </p>
        </div>

        {/* ── Workflow Tabs ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {WORKFLOWS.map((wf) => {
            const isSelected = wf.id === activeWorkflowId;

            return (
              <button
                key={wf.id}
                onClick={() => setActiveWorkflowId(wf.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-[#E8523F] bg-[#161214] ring-1 ring-[#E8523F]/30 shadow-md'
                    : 'border-[#27272E] bg-[#101013] hover:border-[#383842] hover:bg-[#141418]'
                }`}
              >
                <span
                  className={`block text-xs font-mono font-bold mb-1 ${
                    isSelected ? 'text-[#E8523F]' : 'text-[#65656E]'
                  }`}
                >
                  {wf.tagline}
                </span>
                <span
                  className={`block text-sm sm:text-base font-bold tracking-tight ${
                    isSelected ? 'text-[#F4F4F6]' : 'text-[#9E9EA8]'
                  }`}
                >
                  {wf.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Active Workflow Terminal & Description View ── */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Workflow Explanation (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222227]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E8523F]/10 border border-[#E8523F]/25 text-[#E8523F] font-mono text-xs font-semibold mb-4">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>{active.name}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F6] mb-4">
                  {active.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed mb-8">
                  {active.description}
                </p>
              </div>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#222227]">
                {active.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-lg border border-[#222227] bg-[#0A0A0C]">
                    <span className="block text-[10px] font-mono text-[#65656E] uppercase">
                      {m.label}
                    </span>
                    <span className="block text-xs font-mono font-semibold text-[#F4F4F6] mt-0.5 truncate">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Realistic Terminal View (7 cols) */}
            <div className="lg:col-span-7 bg-[#070709] p-6 sm:p-8 font-mono text-xs flex flex-col justify-between">
              <div>
                {/* Terminal header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222227] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8523F]" />
                    <span className="text-[#9E9EA8] truncate max-w-[280px]">
                      {active.terminalHeader}
                    </span>
                  </div>
                  <span className="text-[#3ECF8E] text-[11px]">CONFINED</span>
                </div>

                {/* Command prompt */}
                <div className="flex items-center gap-2 text-[#F4F4F6] pb-3 mb-4 border-b border-[#222227]/60">
                  <span className="text-[#E8523F] font-bold select-none">$</span>
                  <span className="font-semibold text-xs sm:text-sm">{active.codeSnippet.command}</span>
                </div>

                {/* Log lines */}
                <div className="space-y-2 leading-relaxed">
                  {active.codeSnippet.logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.type === 'success'
                          ? 'text-[#3ECF8E] font-medium'
                          : log.type === 'error'
                          ? 'text-[#EF4444]'
                          : log.type === 'warning'
                          ? 'text-[#EAB308]'
                          : log.type === 'coral'
                          ? 'text-[#E8523F] font-semibold'
                          : log.type === 'diff-add'
                          ? 'text-[#3ECF8E] bg-[#3ECF8E]/5 px-1 py-0.5 rounded'
                          : log.type === 'diff-del'
                          ? 'text-[#EF4444] bg-[#EF4444]/5 px-1 py-0.5 rounded'
                          : 'text-[#9E9EA8]'
                      }
                    >
                      {log.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="mt-8 pt-4 border-t border-[#222227] flex items-center justify-between text-[11px] text-[#65656E]">
                <span>State persisted in SQLite WAL</span>
                <span className="text-[#3ECF8E]">Verification Invariant: ENFORCED</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
