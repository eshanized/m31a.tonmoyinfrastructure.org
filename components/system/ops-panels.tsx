'use client';

import { useState } from 'react';
import { PLATFORMS_MATRIX } from '@/lib/m31a/product';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/site/code-block';

const CHANNELS = [
  {
    id: 'production',
    bin: 'm31a',
    state: '~/.local/share/m31a',
    note: 'Default build. Release-qualified on Linux x86_64. Governed runs fail closed.',
  },
  {
    id: 'development',
    bin: 'm31a-dev',
    state: '~/.local/share/m31a-dev (isolated)',
    note: 'Built with --features development. State paths isolated; cannot touch production state.',
  },
];

const LIFECYCLE = ['SOURCE', 'DEVELOPMENT', 'RELEASE CANDIDATE', 'VERIFICATION', 'PROMOTION', 'PRODUCTION'];

/** Deployment channel monitor with lifecycle + isolation note. */
export function DeploymentChannels() {
  const [active, setActive] = useState('production');
  const cur = CHANNELS.find((c) => c.id === active) ?? CHANNELS[0];
  return (
    <div role="region" aria-label="Deployment channels">
      <div className="flex gap-1.5" role="tablist" aria-label="Channels">
        {CHANNELS.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              'flex-1 rounded-[2px] border px-4 py-3 text-left transition-colors',
              active === c.id
                ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.06]'
                : 'border-[#2A2721] bg-[#141311] hover:border-[#3B362C]'
            )}
          >
            <span className="meta">{c.id}</span>
            <span className="mt-0.5 block font-mono text-lg font-bold text-white">{c.bin}</span>
          </button>
        ))}
      </div>
      <div className="tick-panel mt-3 p-4" aria-live="polite">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="meta">BINARY</p>
            <p className="mono-val mt-0.5 text-sm text-white">{cur.bin}</p>
          </div>
          <div>
            <p className="meta">STATE PATH</p>
            <p className="mono-val mt-0.5 text-sm text-white">{cur.state}</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#A8A198]">{cur.note}</p>
        <p className="mono-val mt-2 text-[11px] text-[#6E6860]">
          CHANNEL IS COMPILE-TIME ARTIFACT IDENTITY — no runtime flag can re-channel a binary.
        </p>
      </div>
      <ol className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6" aria-label="Release lifecycle">
        {LIFECYCLE.map((s, i) => (
          <li key={s} className="surf-01 px-2 py-2 text-center">
            <span className="mono-val block text-[10px] text-[#FF6B4A]">{String(i + 1).padStart(2, '0')}</span>
            <span className="block font-mono text-[11px] tracking-wide text-[#ECE7DC]">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Platform support matrix — honesty about qualification states. */
export function PlatformMatrix({ filterable = false }: { filterable?: boolean }) {
  const [f, setF] = useState('All');
  const rows = PLATFORMS_MATRIX.filter((p) => f === 'All' || p.classification === f);
  return (
    <div role="region" aria-label="Platform support matrix">
      {filterable && (
        <div className="mb-3 flex flex-wrap gap-1.5" role="group" aria-label="Filter by classification">
          {['All', 'SUPPORTED', 'CONDITIONALLY SUPPORTED', 'COMPILE-ONLY'].map((c) => (
            <button
              key={c}
              onClick={() => setF(c)}
              aria-pressed={f === c}
              className={cn(
                'rounded-[2px] border px-2.5 py-1 font-mono text-[11px] tracking-wider transition-colors',
                f === c ? 'border-[#FF4B2C] bg-[#FF4B2C]/10 text-white' : 'border-[#2A2721] text-[#A8A198] hover:text-[#ECE7DC]'
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="overflow-x-auto rounded-[3px] border border-[#2A2721]">
        <table className="w-full min-w-[680px] border-collapse bg-[#141311] text-left">
          <caption className="sr-only">Platform support: OS, architecture, target triple, classification</caption>
          <thead>
            <tr className="border-b border-[#2A2721] bg-[#1B1A17]">
              {['OS / ARCH', 'TARGET TRIPLE', 'ARCHIVE', 'CLASS'].map((h) => (
                <th key={h} scope="col" className="meta px-3 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.targetTriple} className="border-b border-[#2A2721]/60 align-top last:border-0 hover:bg-[#1B1A17]">
                <td className="px-3 py-2.5">
                  <span className="block text-sm font-semibold text-[#ECE7DC]">{p.os} · {p.architecture}</span>
                  <span className="mt-0.5 block max-w-[300px] text-[12.5px] leading-snug text-[#A8A198]">{p.details}</span>
                </td>
                <td className="mono-val whitespace-nowrap px-3 py-2.5 text-[12px] text-[#8CA6BE]">{p.targetTriple}</td>
                <td className="mono-val whitespace-nowrap px-3 py-2.5 text-[12px] text-[#6E6860]">{p.archiveName}</td>
                <td className="px-3 py-2.5">
                  <span className={cn('st !text-[10px]', p.classification === 'SUPPORTED' ? 'st-ok' : p.classification === 'CONDITIONALLY SUPPORTED' ? 'st-pend' : 'st-info')}>
                    {p.classification}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono-val mt-2 text-[11px] text-[#6E6860]">
        SOURCE docs/PLATFORM-SUPPORT.md · COMPILE-ONLY MEANS EXACTLY THAT — no native runtime evidence claimed.
      </p>
    </div>
  );
}

/** Release panel — only values available from repo metadata. */
export function ReleasePanel() {
  return (
    <div className="tick-panel p-5" role="region" aria-label="Release information">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-3xl font-bold tracking-tight text-white">M31A <span className="text-[#FF4B2C]">0.1.1</span></p>
        <span className="st st-ok">PRODUCTION</span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-[#2A2721] bg-[#2A2721] sm:grid-cols-3">
        {[
          ['RELEASE DATE', '2026-10-02'],
          ['CHANNEL', 'production'],
          ['RUST', '1.85+ · ed.2024'],
          ['PROVIDER', 'NVIDIA NIM'],
          ['MODEL', 'nemotron-3-ultra'],
          ['LICENSE', 'MIT / Apache-2.0'],
        ].map(([k, v]) => (
          <div key={k} className="bg-[#141311] px-3 py-2.5">
            <dt className="meta">{k}</dt>
            <dd className="mono-val mt-0.5 truncate text-[13px] text-[#ECE7DC]">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mono-val mt-3 text-[11px] leading-relaxed text-[#6E6860]">
        COMMIT / CHECKSUM omitted — not pinned in website metadata. See GitHub release tag v0.1.1 for artifacts.
      </p>
      <div className="mt-2">
        <CodeBlock filename="install.sh" language="bash" code="curl -fsSL https://raw.githubusercontent.com/eshanized/M31A/master/scripts/install.sh | bash" />
      </div>
    </div>
  );
}
