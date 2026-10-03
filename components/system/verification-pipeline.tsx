'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const PIPE = [
  { id: 'plan', label: 'PLAN', note: 'Candidate plan admitted only after validation.' },
  { id: 'execute', label: 'EXECUTE', note: 'Sandboxed tool run under confinement.' },
  { id: 'observe', label: 'OBSERVE', note: 'Raw output captured to spool; model sees only redacted projection.' },
  { id: 'verify', label: 'VERIFY', note: 'Compiler, tests, lints, diff invariants, review — evidence collected.' },
  { id: 'settle', label: 'SETTLE', note: 'Budget settlement; artifacts content-addressed (SHA-256).' },
  { id: 'checkpoint', label: 'CHECKPOINT', note: 'Two-phase atomic commit; crash-safe.' },
];

const TIERS = [
  { label: 'COMPILER', note: 'cargo build must pass; diagnostics sanitized before display.' },
  { label: 'TESTS', note: 'cargo test suites; structured results parsed, not trusted blindly.' },
  { label: 'STATIC ANALYSIS', note: 'clippy + fmt gates; anti-fake-diff review rejects todo!()/unimplemented!().' },
  { label: 'DIFF INVARIANTS', note: 'Change bounded to mission scope; worktree attribution verified.' },
  { label: 'REVIEW', note: 'Reviewer role must accept; premature-completion claims rejected.' },
  { label: 'EVIDENCE', note: 'SHA-256 audit digests; completion gate refuses missions without evidence.' },
];

/** Verification pipeline: linear flow + tier grid. */
export function VerificationPipeline() {
  const [active, setActive] = useState('verify');
  const cur = PIPE.find((p) => p.id === active) ?? PIPE[0];
  return (
    <div role="region" aria-label="Verification pipeline">
      <ol className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6" aria-label="Plan to checkpoint flow">
        {PIPE.map((p) => {
          const on = p.id === active;
          return (
            <li key={p.id}>
              <button
                onClick={() => setActive(p.id)}
                aria-current={on ? 'true' : undefined}
                className={cn(
                  'w-full rounded-[2px] border px-2 py-3 text-center transition-colors',
                  on ? 'border-[#4CC38A]/60 bg-[#4CC38A]/[.07]' : 'border-[#2A2721] bg-[#141311] hover:border-[#3B362C]'
                )}
              >
                <span className={cn('block font-mono text-xs font-bold tracking-wider', on ? 'text-white' : 'text-[#ECE7DC]')}>{p.label}</span>
                <span className={cn('mt-1 block font-mono text-[10px]', on ? 'text-[#4CC38A]' : 'text-[#3B362C]')}>{on ? '●' : '○'}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="mono-val mt-2 border border-[#2A2721] bg-[#141311] px-3 py-2 text-[12px] text-[#A8A198]" aria-live="polite">
        <span className="text-[#4CC38A]">{cur.label}</span> — {cur.note}
      </p>
      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Verification tiers">
        {TIERS.map((t, i) => (
          <li key={t.label} className="surf-01 px-3 py-2.5">
            <p className="font-mono text-[12px] tracking-wider text-[#ECE7DC]">
              <span className="mono-val mr-2 text-[11px] text-[#4CC38A]">V{i + 1}</span>{t.label}
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-[#A8A198]">{t.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
