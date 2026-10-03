'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const NODES: Record<string, { label: string; kind: 'ok' | 'warn' | 'bad' | 'idle' | 'run'; note: string; next: string[] }> = {
  running: { label: 'RUNNING', kind: 'run', note: 'Mission executing under budget + policy supervision.', next: ['interrupted'] },
  interrupted: { label: 'INTERRUPTED', kind: 'warn', note: 'Crash, SIGKILL, power loss, or operator cancel.', next: ['scan'] },
  scan: { label: 'RECOVERY SCAN', kind: 'warn', note: 'Startup scanner classifies persisted state on next launch.', next: ['resume'] },
  resume: { label: 'SAFE TO RESUME?', kind: 'idle', note: 'Integrity validator rules on checkpoint + DAG state.', next: ['yes', 'no'] },
  yes: { label: 'YES — RESUME', kind: 'ok', note: 'Verified work preserved; differential replanning continues.', next: [] },
  no: { label: 'NO', kind: 'bad', note: 'One of three terminal classifications below.', next: ['repair', 'ambiguous', 'corrupt'] },
  repair: { label: 'NEEDS REPAIR', kind: 'warn', note: 'Partial writes detected; operator-guided repair required.', next: [] },
  ambiguous: { label: 'AMBIGUOUS', kind: 'warn', note: 'Outcome uncertain — fails closed, never blind auto-resume.', next: [] },
  corrupt: { label: 'CORRUPT', kind: 'bad', note: 'Integrity violation — quarantined, rollback seam available.', next: [] },
};

const ORDER = ['running', 'interrupted', 'scan', 'resume', 'yes', 'no', 'repair', 'ambiguous', 'corrupt'];

const KIND_CLS: Record<string, string> = {
  ok: 'border-[#4CC38A]/50 text-[#4CC38A]',
  warn: 'border-[#E0A63C]/50 text-[#E0A63C]',
  bad: 'border-[#E5484D]/50 text-[#E5484D]',
  idle: 'border-[#3B362C] text-[#A8A198]',
  run: 'border-[#FF4B2C]/60 text-[#FF6B4A]',
};

/** Operational recovery state machine. */
export function RecoveryMachine() {
  const [active, setActive] = useState('scan');
  const cur = NODES[active];
  return (
    <div className="grid gap-4 lg:grid-cols-12" role="region" aria-label="Recovery state machine">
      <ol className="flex gap-1.5 overflow-x-auto pb-1 lg:col-span-7 lg:grid lg:grid-cols-3 lg:overflow-visible" aria-label="Recovery states">
        {ORDER.map((id) => {
          const n = NODES[id];
          const on = id === active;
          return (
            <li key={id} className="min-w-[150px] flex-1 lg:min-w-0">
              <button
                onClick={() => setActive(id)}
                aria-current={on ? 'true' : undefined}
                className={cn(
                  'w-full rounded-[2px] border bg-[#141311] px-2.5 py-2.5 text-left transition-colors',
                  KIND_CLS[n.kind],
                  on && 'bg-[#1B1A17] outline outline-1 outline-[#FF4B2C]'
                )}
              >
                <span className="block font-mono text-[11px] font-bold tracking-wider text-[#ECE7DC]">{n.label}</span>
                <span className="mono-val mt-0.5 block text-[10px] opacity-70">
                  {n.next.length ? `→ ${n.next.join(' · ').toUpperCase()}` : '■ terminal'}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="tick-panel p-5 lg:col-span-5" aria-live="polite">
        <p className="meta">STATE INSPECTOR</p>
        <p className="mt-2 font-mono text-sm font-bold tracking-wider text-white">{cur.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-[#A8A198]">{cur.note}</p>
        <p className="mono-val mt-3 border-t border-[#2A2721] pt-3 text-[12px] text-[#6E6860]">
          {cur.next.length ? `TRANSITIONS → ${cur.next.join(', ')}` : 'NO OUTGOING TRANSITIONS — operator action required.'}
        </p>
      </div>
    </div>
  );
}
