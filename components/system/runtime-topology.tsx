'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type NodeState = 'done' | 'active' | 'pending' | 'gate' | 'denied';

interface TopoNode {
  id: string;
  label: string;
  sub: string;
  kind: 'model' | 'proposal' | 'gate' | 'allow' | 'deny' | 'stage';
}

const NODES: TopoNode[] = [
  { id: 'model', label: 'MODEL', sub: 'untrusted reasoning', kind: 'model' },
  { id: 'proposal', label: 'PROPOSAL', sub: 'typed intent', kind: 'proposal' },
  { id: 'policy', label: 'POLICY GATE', sub: '11-stage · non-bypassable', kind: 'gate' },
  { id: 'deny', label: 'DENY', sub: 'fail-closed', kind: 'deny' },
  { id: 'approval', label: 'APPROVAL', sub: 'allow / ask → operator', kind: 'allow' },
  { id: 'sandbox', label: 'SANDBOX', sub: 'cgroup · rlimit · env-clear', kind: 'stage' },
  { id: 'execution', label: 'EXECUTION', sub: 'capability-bound tools', kind: 'stage' },
  { id: 'verification', label: 'VERIFICATION', sub: 'evidence required', kind: 'stage' },
  { id: 'checkpoint', label: 'CHECKPOINT', sub: 'two-phase atomic', kind: 'stage' },
  { id: 'complete', label: 'COMPLETE', sub: 'completion gate', kind: 'stage' },
];

/** Vertical execution order for the animated flow highlight. */
const FLOW = ['model', 'proposal', 'policy', 'approval', 'sandbox', 'execution', 'verification', 'checkpoint', 'complete'];

function stateFor(id: string, cursor: number): NodeState {
  if (id === 'deny') return 'denied';
  const pos = FLOW.indexOf(id);
  if (pos < 0) return 'pending';
  if (pos < cursor) return 'done';
  if (pos === cursor) return id === 'policy' ? 'gate' : 'active';
  return 'pending';
}

/**
 * SIGNATURE 01 — Runtime execution topology.
 * Vertical MODEL → COMPLETE path with a DENY branch at the policy gate.
 * Subtle deterministic motion communicates flow, not decoration.
 */
export function RuntimeTopology({ compact = false }: { compact?: boolean }) {
  const [cursor, setCursor] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCursor((c) => (c + 1) % FLOW.length), 1400);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="tick-panel"
      role="img"
      aria-label="M31A runtime execution topology: model proposal flows down through a policy gate; denied proposals fail closed, allowed proposals continue through approval, sandbox, execution, verification, checkpoint, to complete."
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between border-b border-[#2A2721] px-4 py-2">
        <span className="meta">FIG.01 — EXECUTION TOPOLOGY</span>
        <span className="mono-val text-[11px] text-[#6E6860]">
          STEP {String(cursor + 1).padStart(2, '0')}/{String(FLOW.length).padStart(2, '0')}
        </span>
      </div>
      <ol className={cn('relative px-4', compact ? 'py-3' : 'py-4')}>
        {NODES.filter((n) => n.id !== 'deny').map((node) => {
          const st = stateFor(node.id, cursor);
          const isGate = node.kind === 'gate';
          return (
            <li key={node.id} className="relative flex gap-3">
              {/* connector rail */}
              <div className="flex w-5 flex-col items-center" aria-hidden="true">
                <span
                  className={cn(
                    'h-2 w-px',
                    st === 'done' ? 'bg-[#FF4B2C]' : 'bg-[#2A2721]'
                  )}
                />
                <span
                  className={cn(
                    'flex h-2.5 w-2.5 items-center justify-center rounded-[1px] border',
                    st === 'done' && 'border-[#FF4B2C] bg-[#FF4B2C]/20',
                    st === 'active' && 'node-active border-[#FF4B2C] bg-[#FF4B2C]',
                    st === 'gate' && 'node-active border-[#E0A63C] bg-[#E0A63C]',
                    st === 'pending' && 'border-[#3B362C] bg-[#0D0C0A]'
                  )}
                />
                <span
                  className={cn(
                    'w-px flex-1',
                    st === 'done' ? 'bg-[#FF4B2C]/60' : 'bg-[#2A2721]'
                  )}
                />
              </div>
              <div
                className={cn(
                  'mb-1.5 flex flex-1 items-center justify-between gap-3 rounded-[2px] border px-3',
                  compact ? 'py-1.5' : 'py-2',
                  isGate
                    ? 'border-[#E0A63C]/50 bg-[#E0A63C]/[.06]'
                    : st === 'active'
                      ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.07]'
                      : st === 'done'
                        ? 'border-[#2A2721] bg-[#1B1A17]'
                        : 'border-[#2A2721] bg-transparent opacity-70'
                )}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={cn(
                      'font-mono text-[13px] font-semibold tracking-wider',
                      st === 'active' || st === 'gate' ? 'text-white' : 'text-[#ECE7DC]'
                    )}
                  >
                    {node.label}
                  </span>
                  <span className="mono-val hidden text-[11px] text-[#6E6860] sm:inline">
                    {node.sub}
                  </span>
                </div>
                {node.id === 'policy' && (
                  <span className="flex items-center gap-2">
                    <span className="st st-deny !px-1.5 !py-0.5">DENY →</span>
                    <span className="st st-ok !px-1.5 !py-0.5">ALLOW ↓</span>
                  </span>
                )}
                {st === 'done' && <span className="mono-val text-[11px] text-[#4CC38A]">✓</span>}
                {st === 'active' && <span className="st st-run !px-1.5 !py-0.5">LIVE</span>}
                {st === 'gate' && <span className="st st-pend !px-1.5 !py-0.5">EVAL</span>}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="border-t border-[#2A2721] px-4 py-2">
        <p className="mono-val text-[11px] leading-relaxed text-[#6E6860]">
          AUTHORITY BOUNDARY: everything above POLICY GATE is untrusted proposal. Everything
          below executes only with runtime authorization. Hover pauses the trace.
        </p>
      </div>
    </div>
  );
}
