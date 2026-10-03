'use client';

import { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '@/lib/m31a/product';
import { cn } from '@/lib/utils';

/**
 * SIGNATURE 02 — L0→L9 architecture explorer.
 * Strict downward dependency: each layer may only depend on layers below it.
 */
export function ArchitectureMap({ defaultLayer = 'L1' }: { defaultLayer?: string }) {
  const [active, setActive] = useState(defaultLayer);
  const layers = [...ARCHITECTURE_LAYERS].reverse(); // L0 at bottom visually? show L9 top
  const current = ARCHITECTURE_LAYERS.find((l) => l.layer === active) ?? ARCHITECTURE_LAYERS[0];

  return (
    <div className="grid gap-4 lg:grid-cols-12" role="region" aria-label="M31A L0 to L9 architecture explorer">
      <ol className="space-y-1 lg:col-span-7" aria-label="Architecture layers">
        {[...ARCHITECTURE_LAYERS].map((l) => {
          const on = l.layer === active;
          return (
            <li key={l.layer}>
              <button
                onClick={() => setActive(l.layer)}
                aria-expanded={on}
                aria-controls="arch-detail"
                className={cn(
                  'flex w-full items-center gap-4 rounded-[2px] border px-3 py-2 text-left transition-colors',
                  on
                    ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.06]'
                    : 'border-[#2A2721] bg-[#141311] hover:border-[#3B362C] hover:bg-[#1B1A17]'
                )}
              >
                <span className={cn('mono-val w-8 text-[13px] font-bold', on ? 'text-[#FF6B4A]' : 'text-[#6E6860]')}>
                  {l.layer}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={cn('block truncate text-sm font-semibold', on ? 'text-white' : 'text-[#ECE7DC]')}>
                    {l.name}
                  </span>
                  <span className="block truncate font-mono text-[11px] text-[#6E6860]">{l.subsystem}</span>
                </span>
                <span className={cn('mono-val hidden text-[11px] sm:inline', on ? 'text-[#FF6B4A]' : 'text-[#3B362C]')}>
                  {on ? '◉' : '○'}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div
        id="arch-detail"
        className="tick-panel p-5 lg:col-span-5"
        aria-live="polite"
        role="status"
      >
        <p className="meta">LAYER INSPECTOR</p>
        <p className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
          <span className="mono-val mr-2 text-sm text-[#FF6B4A]">{current.layer}</span>
          {current.name}
        </p>
        <p className="meta-bright mt-1">{current.subsystem}</p>
        <p className="mt-4 text-sm leading-relaxed text-[#A8A198]">{current.responsibilities}</p>
        <dl className="mt-5 space-y-2 border-t border-[#2A2721] pt-4">
          <div className="flex justify-between gap-4">
            <dt className="meta">SOURCE</dt>
            <dd className="mono-val truncate text-right text-[12px] text-[#ECE7DC]">{current.sourcePath}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="meta">DEPENDS ON</dt>
            <dd className="mono-val text-right text-[12px] text-[#ECE7DC]">
              {current.layer === 'L0' ? '— (foundation)' : `layers below ${current.layer}`}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="meta">BOUNDARY</dt>
            <dd className="mono-val text-right text-[12px] text-[#ECE7DC]">
              {current.layer === 'L1' || current.layer === 'L3' ? 'TRUST BOUNDARY' : 'downward-only'}
            </dd>
          </div>
        </dl>
        <a
          href={current.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-5 w-full justify-center !text-xs"
        >
          OPEN SOURCE MODULE ↗
        </a>
        <p className="mono-val mt-3 text-[11px] text-[#6E6860]">layers: {layers.length} · strict downward deps</p>
      </div>
    </div>
  );
}
