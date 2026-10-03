'use client';

import { useState } from 'react';
import { CHANGELOG_ENTRIES, ROADMAP_ITEMS, DOCS, DOC_SECTIONS } from '@/lib/m31a/product';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const LOOP = [
  { n: '01', name: 'INTAKE & VALIDATION', note: 'Prompt validated; mission admitted with profile + budgets.', sys: 'CLI / config tiers' },
  { n: '02', name: 'CONTEXT COMPILATION', note: 'Workspace read; token allocator compacts context windows.', sys: 'context compiler' },
  { n: '03', name: 'PLAN GENERATION', note: 'Model proposes candidate task decomposition.', sys: 'planner role' },
  { n: '04', name: 'DAG RECONCILIATION', note: 'Candidate plan verified before admission to the graph.', sys: 'TaskGraph · petgraph' },
  { n: '05', name: 'TOPOLOGICAL SCHEDULING', note: 'Ready tasks ordered by dependency; loop detector armed.', sys: 'scheduler' },
  { n: '06', name: 'AGENT DISPATCH', note: 'One of 8 canonical roles takes the ready task.', sys: 'dispatcher' },
  { n: '07', name: 'TWO-PHASE RESERVATION', note: 'Budget pre-admission grant; no grant, no execution.', sys: 'budget engine' },
  { n: '08', name: 'TOOL EXECUTION & POLICY GATE', note: '11-stage gate; sandboxed, confined, isolated run.', sys: 'policy + sandbox' },
  { n: '09', name: 'POST-EXECUTION SETTLEMENT', note: 'Budget settled; artifacts content-addressed.', sys: 'artifact store' },
  { n: '10', name: 'EVIDENCE-BASED VERIFICATION', note: 'Tests, lints, reviews; digests required.', sys: 'verification gate' },
  { n: '11', name: 'CHECKPOINTING', note: 'Two-phase atomic commit of mission state.', sys: 'SQLite WAL' },
  { n: '12', name: 'COMPLETION GATING', note: 'Mission closes only with evidence + settled budgets.', sys: 'completion gate' },
];

/** 12-stage autonomy loop timeline. */
export function AutonomyLoop() {
  const [active, setActive] = useState(7);
  const cur = LOOP[active];
  return (
    <div className="grid gap-4 lg:grid-cols-12" role="region" aria-label="Twelve-stage autonomy loop">
      <ol className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3" aria-label="Autonomy stages">
        {LOOP.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.n}>
              <button
                onClick={() => setActive(i)}
                aria-current={on ? 'true' : undefined}
                className={cn(
                  'w-full rounded-[2px] border px-2.5 py-2.5 text-left transition-colors',
                  on ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.07]' : 'border-[#2A2721] bg-[#141311] hover:border-[#3B362C]'
                )}
              >
                <span className={cn('mono-val text-[11px]', on ? 'text-[#FF6B4A]' : 'text-[#6E6860]')}>{s.n}</span>
                <span className={cn('mt-0.5 block font-mono text-[11px] font-bold leading-tight tracking-wide', on ? 'text-white' : 'text-[#ECE7DC]')}>
                  {s.name}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="tick-panel p-5 lg:col-span-5" aria-live="polite">
        <p className="meta">STAGE {cur.n} / 12</p>
        <p className="mt-2 font-mono text-sm font-bold tracking-wider text-white">{cur.name}</p>
        <p className="mt-2 text-sm leading-relaxed text-[#A8A198]">{cur.note}</p>
        <p className="mono-val mt-3 border-t border-[#2A2721] pt-3 text-[12px] text-[#ECE7DC]">SUBSYSTEM — {cur.sys}</p>
        <p className="mono-val mt-1 text-[11px] text-[#6E6860]">AUTHORITY: runtime throughout · model input only at stage 03/06.</p>
      </div>
    </div>
  );
}

const ROLES = [
  { name: 'PLANNER', rel: 'decomposes → DAG', note: 'Task decomposition; candidate plans verified pre-admission.' },
  { name: 'RESEARCHER', rel: 'reads → evidence', note: 'Repository intelligence; read-only by default.' },
  { name: 'ARCHITECT', rel: 'designs → plan', note: 'Structural decisions recorded as plan constraints.' },
  { name: 'IMPLEMENTER', rel: 'edits → proposal', note: 'Produces diffs; every write gated + confined.' },
  { name: 'REVIEWER', rel: 'inspects → verdict', note: 'Anti-fake-diff: rejects placeholders, unverified claims.' },
  { name: 'VERIFIER', rel: 'tests → evidence', note: 'Runs suites; digests required for completion.' },
  { name: 'DIAGNOSTICIAN', rel: 'failures → causes', note: 'Classifies 15 failure modes for recovery.' },
  { name: 'INTEGRATOR', rel: 'lands → worktree', note: 'Attribution trailers; isolated landing only.' },
];

/** Agent role matrix — roles operate inside the runtime, never above it. */
export function RoleMatrix() {
  const [active, setActive] = useState(3);
  return (
    <div role="region" aria-label="Agent role matrix">
      <div className="surf-01 mb-3 flex items-center justify-between px-3 py-2">
        <span className="meta">ORCHESTRATION — RUNTIME ABOVE ALL ROLES</span>
        <span className="st st-run">GOVERNS 8 ROLES</span>
      </div>
      <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Canonical agent roles">
        {ROLES.map((r, i) => {
          const on = i === active;
          return (
            <li key={r.name}>
              <button
                onClick={() => setActive(i)}
                aria-expanded={on}
                className={cn(
                  'w-full rounded-[2px] border px-3 py-2.5 text-left transition-colors',
                  on ? 'border-[#FF4B2C]/60 bg-[#FF4B2C]/[.06]' : 'border-[#2A2721] bg-[#141311] hover:border-[#3B362C]'
                )}
              >
                <span className="mono-val text-[10px] text-[#6E6860]">ROLE {String(i + 1).padStart(2, '0')}</span>
                <span className={cn('block font-mono text-[13px] font-bold tracking-wider', on ? 'text-white' : 'text-[#ECE7DC]')}>{r.name}</span>
                <span className="mono-val block text-[11px] text-[#8CA6BE]">{r.rel}</span>
                {on && <span className="mt-1.5 block text-[13px] font-normal leading-relaxed text-[#A8A198]">{r.note}</span>}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mono-val mt-2 text-[11px] text-[#6E6860]">
        SOURCE src/agent/registry.rs · ROLES ARE STATE MACHINES INSIDE THE RUNTIME — they hold no execution authority.
      </p>
    </div>
  );
}

/** Changelog timeline from real release data. */
export function ChangelogTimeline() {
  return (
    <ol className="space-y-4" aria-label="Release history">
      {CHANGELOG_ENTRIES.map((e) => (
        <li key={e.version} className="tick-panel p-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-2xl font-bold text-white">v{e.version}</span>
            <span className="mono-val text-[12px] text-[#6E6860]">{e.date}</span>
            <a href={e.tagUrl} target="_blank" rel="noopener noreferrer" className="btn-quiet !p-0 !text-xs text-[#FF6B4A] hover:text-white">
              TAG ↗
            </a>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#A8A198]">{e.summary}</p>
          {e.sections.map((s) => (
            <div key={s.title} className="mt-4">
              <p className="meta-bright">{s.title}</p>
              <ul className="mt-2 space-y-1.5">
                {s.items.map((it, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-[#A8A198]">
                    <span className="mono-val mt-0.5 shrink-0 text-[11px] text-[#FF6B4A]">▪</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      ))}
    </ol>
  );
}

/** Engineering roadmap matrix. */
export function RoadmapMatrix() {
  const order = ['Completed', 'In Progress', 'Planned', 'Future'];
  const sorted = [...ROADMAP_ITEMS].sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status));
  return (
    <div className="overflow-x-auto rounded-[3px] border border-[#2A2721]" role="region" aria-label="Engineering roadmap">
      <table className="w-full min-w-[720px] border-collapse bg-[#141311] text-left">
        <caption className="sr-only">Roadmap phases with status, objective, deliverables</caption>
        <thead>
          <tr className="border-b border-[#2A2721] bg-[#1B1A17]">
            {['PHASE', 'STATUS', 'OBJECTIVE', 'REF'].map((h) => (
              <th key={h} scope="col" className="meta px-3 py-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => (
            <tr key={r.title} className="border-b border-[#2A2721]/60 align-top last:border-0 hover:bg-[#1B1A17]">
              <td className="px-3 py-2.5 text-sm font-semibold text-[#ECE7DC]">{r.title}</td>
              <td className="whitespace-nowrap px-3 py-2.5">
                <span className={cn('st !text-[10px]', r.status === 'Completed' ? 'st-ok' : r.status === 'In Progress' ? 'st-pend' : r.status === 'Planned' ? 'st-info' : 'st-idle')}>
                  {r.status.toUpperCase()}
                </span>
              </td>
              <td className="max-w-[380px] px-3 py-2.5 text-[13px] leading-relaxed text-[#A8A198]">{r.description}</td>
              <td className="mono-val whitespace-nowrap px-3 py-2.5 text-[11px] text-[#6E6860]">{r.reference ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Documentation index grouped by section. */
export function DocumentationIndex() {
  return (
    <div className="grid gap-4 md:grid-cols-3" role="region" aria-label="Documentation index">
      {DOC_SECTIONS.map((sec, si) => (
        <div key={sec.id} className="surf-01 p-4">
          <p className="tech-num">0{si + 1}</p>
          <h3 className="mt-1 font-display text-lg font-bold text-white">{sec.label}</h3>
          <ul className="mt-3 space-y-1">
            {DOCS.filter((d) => d.section === sec.id).map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/docs/${d.slug}`}
                  className="group block rounded-[2px] px-2 py-1.5 transition-colors hover:bg-[#1B1A17]"
                >
                  <span className="block text-[13.5px] font-medium text-[#ECE7DC] group-hover:text-white">{d.title}</span>
                  <span className="block truncate font-mono text-[11px] text-[#6E6860]">{d.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
