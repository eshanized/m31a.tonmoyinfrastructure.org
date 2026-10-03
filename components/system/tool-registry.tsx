'use client';

import { useMemo, useState } from 'react';
import { TOOLS_CATALOG } from '@/lib/m31a/product';
import { cn } from '@/lib/utils';

const CATS = ['All', 'Filesystem', 'Repository', 'Process', 'Git', 'Verification', 'Artifacts'] as const;
const RISKS = ['All', 'ReadOnly', 'WorkspaceMutation', 'HighRiskMutation'] as const;

const RISK_STYLE: Record<string, string> = {
  ReadOnly: 'st-info',
  WorkspaceMutation: 'st-pend',
  HighRiskMutation: 'st-deny',
};

/** Filterable technical tool catalog — derived from real project data. */
export function ToolRegistry({ limit }: { limit?: number }) {
  const [cat, setCat] = useState<(typeof CATS)[number]>('All');
  const [risk, setRisk] = useState<(typeof RISKS)[number]>('All');
  const [q, setQ] = useState('');

  const rows = useMemo(() => {
    const out = TOOLS_CATALOG.filter(
      (t) =>
        (cat === 'All' || t.category === cat) &&
        (risk === 'All' || t.riskClass === risk) &&
        (q === '' || t.name.includes(q.toLowerCase()) || t.description.toLowerCase().includes(q.toLowerCase()))
    );
    return limit ? out.slice(0, limit) : out;
  }, [cat, risk, q, limit]);

  return (
    <div role="region" aria-label="M31A tool registry">
      {!limit && (
        <div className="mb-3 flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by capability family">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={cn(
                  'rounded-[2px] border px-2.5 py-1 font-mono text-[11px] tracking-wider transition-colors',
                  cat === c
                    ? 'border-[#FF4B2C] bg-[#FF4B2C]/10 text-white'
                    : 'border-[#2A2721] text-[#A8A198] hover:border-[#3B362C] hover:text-[#ECE7DC]'
                )}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by side-effect class">
              {RISKS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRisk(r)}
                  aria-pressed={risk === r}
                  className={cn(
                    'rounded-[2px] border px-2 py-1 font-mono text-[11px] tracking-wider transition-colors',
                    risk === r
                      ? 'border-[#8CA6BE] bg-[#8CA6BE]/10 text-white'
                      : 'border-[#2A2721] text-[#6E6860] hover:text-[#ECE7DC]'
                  )}
                >
                  {r === 'All' ? 'ANY RISK' : r.replace('Workspace', 'WS-').toUpperCase()}
                </button>
              ))}
            </div>
            <label className="flex flex-1 items-center gap-2 rounded-[2px] border border-[#2A2721] bg-[#141311] px-2.5 py-1.5 sm:ml-auto sm:max-w-xs sm:flex-1">
              <span className="meta">SEARCH</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="read_file, git_diff…"
                className="w-full bg-transparent font-mono text-xs text-[#ECE7DC] placeholder:text-[#3B362C] focus:outline-none"
                aria-label="Search tools"
              />
            </label>
          </div>
        </div>
      )}
      <div className="overflow-x-auto rounded-[3px] border border-[#2A2721]">
        <table className="w-full min-w-[640px] border-collapse bg-[#141311] text-left">
          <caption className="sr-only">M31A core tools: name, capability family, side-effect class, policy requirement</caption>
          <thead>
            <tr className="border-b border-[#2A2721] bg-[#1B1A17]">
              {['TOOL', 'FAMILY', 'SIDE-EFFECT', 'POLICY'].map((h) => (
                <th key={h} scope="col" className="meta px-3 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((t) => (
              <tr key={t.id} className="border-b border-[#2A2721]/60 transition-colors last:border-0 hover:bg-[#1B1A17]">
                <td className="px-3 py-2">
                  <span className="font-mono text-[13px] font-semibold text-[#ECE7DC]">{t.name}</span>
                  <span className="block max-w-[280px] truncate font-mono text-[11px] text-[#6E6860]">{t.description}</span>
                </td>
                <td className="mono-val px-3 py-2 text-[12px] text-[#8CA6BE]">{t.category.toUpperCase()}</td>
                <td className="px-3 py-2">
                  <span className={cn('st !text-[10px]', RISK_STYLE[t.riskClass])}>{t.riskClass}</span>
                </td>
                <td className="mono-val px-3 py-2 text-[11px] text-[#6E6860]">
                  {t.riskClass === 'ReadOnly' ? 'schema + capability' : t.riskClass === 'WorkspaceMutation' ? 'gate + approval*' : 'gate + approval + confine'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono-val mt-2 text-[11px] text-[#6E6860]">
        {rows.length} / {TOOLS_CATALOG.length} CORE TOOLS · *ASK OUTCOMES PAUSE FOR OPERATOR · SOURCE docs/subsystems/TOOLS.md
      </p>
    </div>
  );
}
