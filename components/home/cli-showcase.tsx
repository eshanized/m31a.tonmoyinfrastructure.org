'use client';

import React, { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';

interface CliTab {
  id: string;
  name: string;
  command: string;
  output: string[];
}

const TABS: CliTab[] = [
  {
    id: 'doctor',
    name: 'Doctor Diagnostics',
    command: 'm31a doctor',
    output: [
      '[i] Probing host runtime environment and platform qualifications...',
      '    OK  Architecture: x86_64-unknown-linux-gnu (Release Qualified)',
      '    OK  Git Worktree: Isolation available, verified clean root',
      '    OK  Process Limits: POSIX rlimits supported (max_memory, cpu_time)',
      '    OK  Confinement: Linux cgroups v2 hierarchy available',
      '    OK  Storage: SQLite 3.46+ with WAL mode enabled',
      '    OK  Provider Trust: NVIDIA NIM API reachable (integrate.api.nvidia.com)',
      '    OK  Secret Redaction: 5-tier filter pipeline verified active',
      '--> All runtime prerequisites verified. Ready for mission execution.',
    ],
  },
  {
    id: 'mission',
    name: 'Autonomous Mission',
    command: 'm31a mission run "Refactor DB queries to parameterized statements" --profile coding',
    output: [
      '[+] Initializing mission 019234b0-a5ef-7b23-96b0-96f7c75b001a...',
      '[+] Budget reserved: tokens=20000, steps=25, memory=512MB, timeout=300s',
      '[*] Planner (L4): Proposing candidate task graph (6 tasks)...',
      '[*] DAG Engine (L5): Topological scheduling confirmed; plan admitted',
      '[*] Gate (L1): Evaluating tool proposal "read_file" -> ALLOW',
      '[*] Gate (L1): Evaluating tool proposal "edit_file" -> ALLOW',
      '[*] Sandbox (L2): Patch applied cleanly in isolated git worktree',
      '[*] Verifier (L7): Running cargo test --workspace (42 passed, 0 failed)',
      '[*] Verifier (L7): Running cargo clippy --all-targets (0 warnings)',
      '[*] Checkpoint (L7): Two-phase atomic commit committed to SQLite WAL',
      '[✓] Mission completed with cryptographic evidence digest (sha256: 4f8a2e...)',
    ],
  },
  {
    id: 'policy',
    name: 'Policy Evaluation',
    command: 'm31a policy check write_file',
    output: [
      'Evaluating action: Tool(write_file)',
      'Context: profile=coding, authority_level=Workspace',
      'Layer 0 (BuiltInSafety):    PASS (target inside workspace root)',
      'Layer 1 (SystemAdmin):      PASS (no administrative override)',
      'Layer 2 (Organization):     PASS (corporate compliance verified)',
      'Layer 3 (Workspace):        ALLOW (src/repository/query.rs)',
      'Effective Decision:         ALLOW',
      'Post-conditions:            Requires git worktree commit trailer',
    ],
  },
  {
    id: 'checkpoints',
    name: 'Checkpoints & Fault Recovery',
    command: 'm31a checkpoint list 019234b0',
    output: [
      'CHECKPOINT ID                         TASK ID        STEP    STATUS     TIMESTAMP',
      'chk_019234b1_a29e41                   task_01        04      COMMITTED  2026-10-02T14:22:01Z',
      'chk_019234b2_b48f12                   task_02        09      COMMITTED  2026-10-02T14:22:45Z',
      'chk_019234b3_c11d90                   task_03        15      COMMITTED  2026-10-02T14:23:30Z',
      '3 verified checkpoints recorded in SQLite store.',
      'Crash recovery guarantee: Safe to resume without blind state loss.',
    ],
  },
];

export function CliShowcase() {
  const [selected, setSelected] = useState<string>('doctor');
  const [copied, setCopied] = useState(false);

  const current = TABS.find((t) => t.id === selected) ?? TABS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#222226] bg-[#0A0A0B] overflow-hidden shadow-2xl">
      {/* Top command selector bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222226] bg-[#111113] px-4 py-2 gap-2">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <Terminal className="w-4 h-4 text-[#E8523F] mr-2 shrink-0" />
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelected(tab.id)}
              className={`px-3 py-1 rounded text-xs font-mono transition-all shrink-0 ${
                selected === tab.id
                  ? 'bg-[#18181B] text-[#F0EDE8] border border-[#2C2C31]'
                  : 'text-[#6B6965] hover:text-[#A3A09B]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          aria-label="Copy command"
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

      {/* Terminal prompt and output */}
      <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        {/* Command Line */}
        <div className="flex items-center gap-2 text-[#F0EDE8] mb-4 pb-3 border-b border-[#222226]/60">
          <span className="text-[#E8523F] font-bold select-none">$</span>
          <span className="font-semibold">{current.command}</span>
        </div>

        {/* Output lines */}
        <div className="space-y-1.5 text-[#A3A09B]">
          {current.output.map((line, idx) => (
            <div
              key={idx}
              className={
                line.startsWith('[✓]') || line.startsWith('-->') || line.includes('OK')
                  ? 'text-[#3ECF8E]'
                  : line.startsWith('[+]')
                  ? 'text-[#F0EDE8]'
                  : line.startsWith('[*]')
                  ? 'text-[#A3A09B]'
                  : line.includes('ALLOW')
                  ? 'text-[#E8523F]'
                  : 'text-[#A3A09B]'
              }
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
