'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const UNTRUSTED = [
  { label: 'UNTRUSTED MODEL', note: 'proposals only — never authority' },
  { label: 'UNTRUSTED REPOSITORY', note: 'content treated as data' },
  { label: 'UNTRUSTED TOOL OUTPUT', note: 'wrapped in trust envelopes' },
  { label: 'UNTRUSTED NETWORK DATA', note: 'SSRF + DNS validated' },
];

const CONTROLS = [
  { label: 'PATH CONTAINMENT', note: 'All file access pinned inside workspace root. Escape = deny.' },
  { label: 'ENV SANITIZATION', note: 'env_clear() on every child; only trusted baselines installed. Blocks LD_PRELOAD.' },
  { label: 'SECRET REDACTION', note: '5-tier scrubber: NVIDIA / GitHub / AWS / OpenAI keys, JWTs, passwords, private keys — before persistence or display.' },
  { label: 'TRUST ENVELOPES', note: 'Untrusted text wrapped with XML attribute escaping + SHA-256 digest; tag breakouts neutralized.' },
  { label: 'EXECUTION ISOLATION', note: 'Fail-closed worktree isolation (required in production) + cgroups v2 / rlimits confinement.' },
  { label: 'NETWORK DESTINATION POLICY', note: 'Loopback, RFC-1918, metadata 169.254.169.254, link-local blocked; async DNS pre-validation; ≤5 redirect hops.' },
  { label: 'APPROVAL · FAIL-CLOSED', note: 'ASK pauses for operator; unattended or timeout resolves to DENY. No blind auto-resume.' },
  { label: 'RECOVERY SAFETY', note: 'Ambiguous / corrupt crash states never auto-resume; differential DAG replanning preserves verified work.' },
];

/** Security boundary diagram: untrusted inputs → trust boundary → controls. */
export function SecurityBoundary() {
  const [active, setActive] = useState(2);
  return (
    <div className="grid gap-4 lg:grid-cols-12" role="region" aria-label="Security boundary diagram">
      <div className="lg:col-span-5">
        <p className="meta mb-2">OUTSIDE — UNTRUSTED</p>
        <ul className="space-y-1.5">
          {UNTRUSTED.map((u) => (
            <li key={u.label} className="surf-01 px-3 py-2.5">
              <p className="font-mono text-xs tracking-wider text-[#E5484D]">✕ {u.label}</p>
              <p className="mono-val mt-0.5 text-[11px] text-[#6E6860]">{u.note}</p>
            </li>
          ))}
        </ul>
        <div className="my-2 flex items-center gap-2" aria-hidden="true">
          <span className="h-px flex-1 bg-[#E0A63C]/50" />
          <span className="st st-pend">TRUST BOUNDARY</span>
          <span className="h-px flex-1 bg-[#E0A63C]/50" />
        </div>
        <div className="surf-02 border-[#4CC38A]/30 px-3 py-2.5">
          <p className="font-mono text-xs tracking-wider text-[#4CC38A]">✓ RUNTIME INTERIOR — GOVERNED</p>
          <p className="mono-val mt-0.5 text-[11px] text-[#6E6860]">policy · sandbox · verification · checkpoint</p>
        </div>
      </div>
      <div className="lg:col-span-7">
        <p className="meta mb-2">CONTROLS AT THE BOUNDARY — SELECT TO INSPECT</p>
        <ul className="grid gap-1.5 sm:grid-cols-2" role="list">
          {CONTROLS.map((c, i) => {
            const on = i === active;
            return (
              <li key={c.label}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-expanded={on}
                  className={cn(
                    'w-full rounded-[2px] border px-3 py-2.5 text-left transition-colors',
                    on ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.06]' : 'border-[#2A2721] bg-[#141311] hover:border-[#3B362C]'
                  )}
                >
                  <span className="mono-val mr-2 text-[11px] text-[#FF6B4A]">{String(i + 1).padStart(2, '0')}</span>
                  <span className={cn('font-mono text-[12px] tracking-wide', on ? 'text-white' : 'text-[#ECE7DC]')}>
                    {c.label}
                  </span>
                  {on && <span className="mt-1.5 block text-[13px] font-normal leading-relaxed text-[#A8A198]">{c.note}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
