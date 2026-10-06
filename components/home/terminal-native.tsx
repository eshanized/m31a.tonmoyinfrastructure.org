'use client';

import React, { useState } from 'react';
import { Container } from '@/components/site/section';
import { Terminal, Copy, Check, ArrowRight, Keyboard } from 'lucide-react';
import Link from 'next/link';

interface CommandItem {
  id: string;
  name: string;
  command: string;
  summary: string;
  shortcut: string;
  output: { text: string; type: 'default' | 'success' | 'warning' | 'error' | 'coral' }[];
}

const COMMANDS: CommandItem[] = [
  {
    id: 'tui',
    name: 'm31a',
    command: 'm31a',
    summary: 'Launch the interactive Ratatui 0.30 terminal cockpit.',
    shortcut: 'Space: approve · Tab: cycle panels · Esc: dismiss',
    output: [
      { text: '[+] Initializing Ratatui cockpit (TerminalGuard RAII active)...', type: 'default' },
      { text: '[+] Terminal raw mode enabled with guaranteed signal restoration', type: 'success' },
      { text: '[+] SQLite session index connected: ~/.config/m31a/state.db', type: 'default' },
      { text: '┌────────────────────────────────── M31A COCKPIT ──────────────────────────────────┐', type: 'coral' },
      { text: '│ MISSION: Idle · Profile: coding · Model: NVIDIA Nemotron-3-Ultra-550b           │', type: 'default' },
      { text: '│ Active Worktree: .git/worktrees/m31a-019234b0 [Clean, Isolated]                 │', type: 'success' },
      { text: '│ Memory: 124MB / 512MB · CPU: 0.2% · cgroups v2 [CONFINED]                        │', type: 'default' },
      { text: '└──────────────────────────────────────────────────────────────────────────────────┘', type: 'coral' },
      { text: '--> Ready. Enter engineering goal or press [?] for keyboard help.', type: 'success' },
    ],
  },
  {
    id: 'doctor',
    name: 'm31a doctor',
    command: 'm31a doctor',
    summary: 'Run environmental and sandbox qualification diagnostic probes.',
    shortcut: 'Validates Linux cgroups v2, SQLite WAL, and NVIDIA NIM connectivity',
    output: [
      { text: '[i] Probing host runtime environment and platform qualifications...', type: 'default' },
      { text: '    OK  Target Architecture: x86_64-unknown-linux-gnu (Release Qualified)', type: 'success' },
      { text: '    OK  Confinement: Linux cgroups v2 hierarchy available and mounted', type: 'success' },
      { text: '    OK  Process Limits: POSIX rlimits (RLIMIT_AS, RLIMIT_CPU) supported', type: 'success' },
      { text: '    OK  Git Worktree: Isolation verified, git rev-parse HEAD valid', type: 'success' },
      { text: '    OK  Storage Engine: SQLite 3.46+ with WAL mode enabled', type: 'success' },
      { text: '    OK  Model Provider: NVIDIA NIM API reachable (integrate.api.nvidia.com)', type: 'success' },
      { text: '    OK  Secret Redaction: 5-tier filter pipeline verified active', type: 'success' },
      { text: '--> All 8 runtime prerequisites verified. Host is ready for missions.', type: 'success' },
    ],
  },
  {
    id: 'mission-run',
    name: 'm31a mission run',
    command: 'm31a mission run "Refactor database queries to parameterized statements" --profile coding',
    summary: 'Start an autonomous engineering mission with bounded resources.',
    shortcut: 'Runs through Intent -> Plan -> Execute -> Observe -> Verify -> Complete',
    output: [
      { text: '[+] Initializing mission 019234b0-a5ef-7b23-96b0-96f7c75b001a...', type: 'default' },
      { text: '[+] Budget reserved: tokens=20000, steps=25, memory=512MB, timeout=300s', type: 'default' },
      { text: '[*] Planner (L4): Proposing candidate task graph (6 tasks)...', type: 'default' },
      { text: '[*] DAG Engine (L5): Topological scheduling confirmed; plan admitted', type: 'success' },
      { text: '[*] Policy Gate (L1): Evaluating Tool(edit_file) -> ALLOW (worktree isolated)', type: 'coral' },
      { text: '[*] Verifier (L7): Running cargo test (48 passed, 0 failed in 1.12s)', type: 'success' },
      { text: '[*] Verifier (L7): Running cargo clippy --all-targets (0 warnings)', type: 'success' },
      { text: '[✓] Mission completed with cryptographic evidence digest (sha256: 7f83b165...)', type: 'success' },
    ],
  },
  {
    id: 'resume',
    name: 'm31a mission resume',
    command: 'm31a mission resume 019234b0',
    summary: 'Resume an interrupted session from the last verified SQLite checkpoint.',
    shortcut: 'Fault-tolerant recovery after power loss, timeout, or manual pause',
    output: [
      { text: '[*] Inspecting SQLite WAL session index: mission 019234b0...', type: 'default' },
      { text: '[*] Scanning state invariants: Task 01 to 03 COMMITTED', type: 'success' },
      { text: '[*] Checkpoint hash verified: chk_019234b2 (sha256: 7f83b165... MATCH)', type: 'success' },
      { text: '[*] Differential replanner: Preserving 3 verified tasks without re-executing', type: 'default' },
      { text: '[*] Resuming from Task 04: "Adapt login handler to claims"', type: 'coral' },
      { text: '--> Session resumed safely. Zero blind state loss.', type: 'success' },
    ],
  },
  {
    id: 'policy-check',
    name: 'm31a policy check',
    command: 'm31a policy check write_file',
    summary: 'Dry-run evaluate an action or tool against active policy layers.',
    shortcut: 'Inspects all 11 evaluation stages across the 10 authority tiers',
    output: [
      { text: 'Evaluating action: Tool(write_file)', type: 'default' },
      { text: 'Context: profile=coding, authority_level=Workspace', type: 'default' },
      { text: 'Layer 0 (BuiltInSafety):    PASS (target inside workspace root)', type: 'success' },
      { text: 'Layer 1 (SystemAdmin):      PASS (no administrative override)', type: 'success' },
      { text: 'Layer 2 (Organization):     PASS (corporate compliance verified)', type: 'success' },
      { text: 'Layer 3 (Workspace):        ALLOW (src/repository/query.rs)', type: 'success' },
      { text: 'Effective Decision:         ALLOW [NON-BYPASSABLE]', type: 'coral' },
      { text: 'Post-conditions:            Requires git worktree commit trailer', type: 'default' },
    ],
  },
  {
    id: 'checkpoint-list',
    name: 'm31a checkpoint list',
    command: 'm31a checkpoint list 019234b0',
    summary: 'Inspect atomic two-phase mission checkpoints and rollback seams.',
    shortcut: 'Lists verified states with cryptographic SHA-256 evidence digests',
    output: [
      { text: 'CHECKPOINT ID                 TASK ID   STEP  STATUS     DIGEST', type: 'default' },
      { text: 'chk_019234b1_a29e41           task_01   04    COMMITTED  sha256:4f8a2e... [VERIFIED]', type: 'success' },
      { text: 'chk_019234b2_b48f12           task_02   09    COMMITTED  sha256:7f83b1... [VERIFIED]', type: 'success' },
      { text: 'chk_019234b3_c11d90           task_03   15    COMMITTED  sha256:9a32c4... [VERIFIED]', type: 'success' },
      { text: '--> 3 verified checkpoints committed in SQLite store. Safe to roll back.', type: 'coral' },
    ],
  },
];

export function TerminalNative() {
  const [selectedId, setSelectedId] = useState<string>('tui');
  const [copied, setCopied] = useState(false);
  const active = COMMANDS.find((c) => c.id === selectedId) ?? COMMANDS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="cli" className="py-24 sm:py-32 border-b border-[#222227] bg-[#0C0C0E]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
              OPERATOR COMMAND SURFACE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
              Terminal-Native by Design.
            </h2>
            <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
              Launch the Ratatui cockpit, run autonomous coding missions, probe host diagnostics,
              dry-run evaluate policy gates, or resume interrupted work from verified checkpoints.
            </p>
          </div>

          <Link
            href="/cli"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#E8523F]/50 text-xs sm:text-sm font-mono text-[#F4F4F6] transition-all shrink-0"
          >
            <span>All 18 CLI Subcommands</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F]" />
          </Link>
        </div>

        {/* ── Terminal Simulator Window ── */}
        <div className="rounded-2xl border border-[#27272E] bg-[#0A0A0C] overflow-hidden shadow-2xl">
          {/* Top Bar with Command Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#222227] bg-[#141418] px-4 py-2.5 gap-2">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <Terminal className="w-4 h-4 text-[#E8523F] mr-1 shrink-0" />
              {COMMANDS.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => setSelectedId(cmd.id)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all shrink-0 ${
                    selectedId === cmd.id
                      ? 'bg-[#18181D] text-[#F4F4F6] font-semibold border border-[#27272E] shadow-sm'
                      : 'text-[#65656E] hover:text-[#9E9EA8]'
                  }`}
                >
                  {cmd.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-[#9E9EA8] hover:text-[#F4F4F6] bg-[#18181D] border border-[#27272E] transition-colors"
              title="Copy command to clipboard"
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

          {/* Terminal Command Header & Description */}
          <div className="border-b border-[#222227] bg-[#101013] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div>
              <span className="text-[#9E9EA8]">{active.summary}</span>
            </div>
            <div className="text-[11px] text-[#65656E] flex items-center gap-1.5">
              <Keyboard className="w-3.5 h-3.5 text-[#E8523F]" />
              <span>{active.shortcut}</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[280px]">
            {/* Command Prompt Line */}
            <div className="flex items-center gap-2 text-[#F4F4F6] mb-4 pb-3 border-b border-[#222227]/60">
              <span className="text-[#E8523F] font-bold select-none">$</span>
              <span className="font-semibold">{active.command}</span>
            </div>

            {/* Simulated Output Lines */}
            <div className="space-y-1.5">
              {active.output.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.type === 'success'
                      ? 'text-[#3ECF8E]'
                      : line.type === 'coral'
                      ? 'text-[#E8523F]'
                      : line.type === 'warning'
                      ? 'text-[#EAB308]'
                      : line.type === 'error'
                      ? 'text-[#EF4444]'
                      : 'text-[#9E9EA8]'
                  }
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Footer Info */}
          <div className="border-t border-[#222227] bg-[#101013] px-6 py-3 flex items-center justify-between text-xs font-mono text-[#65656E]">
            <span>Channel: Production (m31a)</span>
            <span>Single Rust Binary · Zero Foreign Dependencies</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
