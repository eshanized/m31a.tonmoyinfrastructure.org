'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const STEPS = [
  { id: 'request', label: 'TOOL REQUEST', what: 'Agent proposes a typed tool call with parameters.', controls: 'Schema contract, capability family, risk class.' },
  { id: 'schema', label: 'SCHEMA', what: 'Parameters validated against the tool JSON schema.', controls: 'Type, range, path-shape validation.' },
  { id: 'semantic', label: 'SEMANTIC VALIDATION', what: 'Intent checked: path inside workspace, command shape sane.', controls: 'Path containment, workspace root pin.' },
  { id: 'capability', label: 'CAPABILITY', what: 'Tool capability family must be granted to this mission.', controls: '15 capability families, least privilege.' },
  { id: 'resource', label: 'RESOURCE', what: 'Two-phase budget reservation: time, memory, tokens, cost.', controls: '10-dimensional budget model.' },
  { id: 'policy', label: 'POLICY', what: '10-tier authority stack resolves; Layer-0 veto can never weaken.', controls: 'Monotonic non-weakening merger.' },
  { id: 'approval', label: 'APPROVAL', what: 'ASK outcomes pause for operator decision; unattended = fail-closed.', controls: 'Approval coordinator, durable grants.' },
  { id: 'execution', label: 'EXECUTION', what: 'Sandboxed run: cgroups, rlimits, env-clear, worktree isolation.', controls: 'Confinement + SSRF egress policy.' },
];

const DECISIONS = [
  { id: 'ALLOW', cls: 'st-ok', note: 'Proceeds to sandbox. Logged with audit digest.' },
  { id: 'DENY', cls: 'st-deny', note: 'Blocked. Nothing executes. Agent must replan.' },
  { id: 'ASK', cls: 'st-pend', note: 'Pauses for operator. Default is deny on timeout.' },
  { id: 'ESCALATE', cls: 'st-info', note: 'Raised to higher authority tier for ruling.' },
];

/**
 * SIGNATURE 03 — Policy / execution decision trace.
 * Hover or focus a step to see what it controls.
 */
export function PolicyTrace() {
  const [active, setActive] = useState('policy');
  const [decision, setDecision] = useState('ALLOW');
  const current = STEPS.find((s) => s.id === active) ?? STEPS[0];

  return (
    <div className="grid gap-4 lg:grid-cols-12" role="region" aria-label="Policy decision trace explorer">
      <ol className="lg:col-span-7" aria-label="Policy evaluation steps">
        {STEPS.map((s, i) => {
          const on = s.id === active;
          return (
            <li key={s.id} className="relative flex gap-3">
              <div className="flex w-5 flex-col items-center" aria-hidden="true">
                <span className={cn('h-1.5 w-px', i === 0 ? 'bg-transparent' : on ? 'bg-[#FF4B2C]/60' : 'bg-[#2A2721]')} />
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-[1px] border font-mono text-[10px]',
                    on ? 'border-[#FF4B2C] bg-[#FF4B2C] text-white' : 'border-[#3B362C] text-[#6E6860]'
                  )}
                >
                  {i + 1}
                </span>
                <span className={cn('w-px flex-1', i === STEPS.length - 1 ? 'bg-transparent' : 'bg-[#2A2721]')} />
              </div>
              <button
                onMouseEnter={() => setActive(s.id)}
                onFocus={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
                aria-current={on ? 'true' : undefined}
                className={cn(
                  'mb-1 flex flex-1 items-center justify-between gap-3 rounded-[2px] border px-3 py-2 text-left font-mono text-xs tracking-wider transition-colors',
                  on ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.07] text-white' : 'border-[#2A2721] text-[#A8A198] hover:bg-[#1B1A17] hover:text-[#ECE7DC]'
                )}
              >
                {s.label}
                {on && <span className="text-[#FF6B4A]">◀</span>}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="lg:col-span-5">
        <div className="tick-panel p-5" aria-live="polite">
          <p className="meta">STEP INSPECTOR</p>
          <p className="mt-2 font-mono text-sm font-bold tracking-wider text-white">{current.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#A8A198]">{current.what}</p>
          <p className="mono-val mt-3 border-t border-[#2A2721] pt-3 text-[12px] text-[#ECE7DC]">
            CONTROLS — {current.controls}
          </p>
          <div className="mt-4 border-t border-[#2A2721] pt-4">
            <p className="meta mb-2">SIMULATE DECISION</p>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Simulate policy decision">
              {DECISIONS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDecision(d.id)}
                  aria-pressed={decision === d.id}
                  className={cn('st cursor-pointer', d.cls, decision !== d.id && 'opacity-50 hover:opacity-100')}
                >
                  {d.id}
                </button>
              ))}
            </div>
            <p className="mt-3 font-mono text-[12px] leading-relaxed text-[#A8A198]">
              → {DECISIONS.find((d) => d.id === decision)?.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
