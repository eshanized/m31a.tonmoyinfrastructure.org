'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface StageRow {
  n: string;
  name: string;
  detail: string;
}

const STAGES: StageRow[] = [
  { n: '01', name: 'INTAKE', detail: 'prompt validated, mission admitted' },
  { n: '02', name: 'CONTEXT', detail: 'workspace compiled, budgets set' },
  { n: '03', name: 'PLAN', detail: 'candidate task graph proposed' },
  { n: '04', name: 'DAG', detail: 'reconciled, topologically sorted' },
  { n: '05', name: 'SCHEDULER', detail: 'ready tasks dispatched' },
  { n: '06', name: 'AGENT', detail: 'role state machine acts' },
  { n: '07', name: 'POLICY', detail: '11-stage gate: ALLOW / ASK / DENY' },
  { n: '08', name: 'EXECUTION', detail: 'sandboxed tool runs' },
  { n: '09', name: 'VERIFICATION', detail: 'evidence collected, gates checked' },
  { n: '10', name: 'CHECKPOINT', detail: 'two-phase atomic commit' },
];

const TELEMETRY_BASE = {
  tasks: 14,
  tools: 8,
  tokens: 18420,
  elapsed: 161,
  policy: '11/11',
  isolation: 'REQUIRED',
  provider: 'NVIDIA NIM',
};

function fmtElapsed(s: number) {
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

/**
 * Interactive runtime monitor — visual simulation, clearly labelled.
 * Step through the 10-row mission trace; telemetry ticks while running.
 */
export function RuntimeMonitor() {
  const [active, setActive] = useState(5); // AGENT running
  const [running, setRunning] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setActive((a) => (a >= STAGES.length - 1 ? 5 : a + 1));
    }, 2200);
    return () => clearInterval(t);
  }, [running]);

  const telemetry = useMemo(
    () => ({
      ...TELEMETRY_BASE,
      tokens: TELEMETRY_BASE.tokens + tick * 37,
      elapsed: TELEMETRY_BASE.elapsed + tick * 2,
    }),
    [tick]
  );

  return (
    <div className="tick-panel" role="region" aria-label="M31A runtime monitor (simulated demonstration)">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A2721] px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="meta">M31A RUNTIME — SIMULATION</span>
          <span className={cn('st', running ? 'st-run' : 'st-idle')}>
            {running ? 'EXECUTING' : 'HELD'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="mono-val text-[11px] text-[#6E6860]">MISSION 7F23</span>
          <button
            onClick={() => setRunning((r) => !r)}
            className="rounded-[2px] border border-[#3B362C] px-2 py-1 font-mono text-[11px] tracking-wider text-[#A8A198] transition-colors hover:border-[#FF4B2C] hover:text-white"
            aria-pressed={running}
          >
            {running ? 'HOLD' : 'RESUME'}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12">
        {/* stage trace */}
        <ol className="md:col-span-7" aria-label="Mission stage trace">
          {STAGES.map((s, i) => {
            const done = i < active;
            const live = i === active;
            return (
              <li key={s.n}>
                <button
                  onClick={() => setActive(i)}
                  aria-current={live ? 'true' : undefined}
                  className={cn(
                    'flex w-full items-center gap-3 border-b border-[#2A2721] px-4 py-[7px] text-left transition-colors',
                    live ? 'bg-[#FF4B2C]/[.07]' : 'hover:bg-[#1B1A17]'
                  )}
                >
                  <span className={cn('mono-val text-[11px]', live ? 'text-[#FF6B4A]' : 'text-[#6E6860]')}>
                    {s.n}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-xs tracking-wider',
                      live ? 'text-white' : done ? 'text-[#ECE7DC]' : 'text-[#6E6860]'
                    )}
                  >
                    {s.name}
                  </span>
                  <span className="ml-auto hidden truncate pl-4 font-mono text-[11px] text-[#6E6860] lg:inline">
                    {live ? s.detail : done ? 'complete' : 'pending'}
                  </span>
                  <span
                    className={cn(
                      'st !px-1.5 !py-0.5',
                      done ? 'st-ok' : live ? (s.name === 'POLICY' ? 'st-pend' : 'st-run') : 'st-idle'
                    )}
                  >
                    {done ? 'DONE' : live ? (s.name === 'POLICY' ? 'ALLOW' : 'LIVE') : 'PEND'}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        {/* telemetry */}
        <div className="border-t border-[#2A2721] md:col-span-5 md:border-l md:border-t-0">
          <p className="meta border-b border-[#2A2721] px-4 py-2">TELEMETRY</p>
          <dl className="grid grid-cols-2">
            {[
              ['TASKS', String(telemetry.tasks)],
              ['TOOLS', String(telemetry.tools)],
              ['TOKENS', telemetry.tokens.toLocaleString('en-US')],
              ['ELAPSED', fmtElapsed(telemetry.elapsed)],
              ['POLICY', telemetry.policy],
              ['ISOLATION', telemetry.isolation],
              ['PROVIDER', telemetry.provider],
              ['CHECKPOINT', 'ATOMIC'],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-[#2A2721] px-4 py-2 odd:border-r">
                <dt className="meta">{k}</dt>
                <dd className="mono-val mt-0.5 text-[13px] text-[#ECE7DC]">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mono-val px-4 py-2 text-[11px] leading-relaxed text-[#6E6860]">
            DEMO VALUES — illustrative trace of runtime state transitions, not live telemetry.
          </p>
        </div>
      </div>
    </div>
  );
}
