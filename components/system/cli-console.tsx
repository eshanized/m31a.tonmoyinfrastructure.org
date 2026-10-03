'use client';

import { useState } from 'react';
import { CLI_COMMAND_DEFS } from '@/lib/m31a/product';
import { cn } from '@/lib/utils';

const OUTPUTS: Record<string, string[]> = {
  'm31a doctor': ['probe  kernel-ids      ok', 'probe  sqlite-wal       ok', 'probe  cgroup-v2       ok', 'probe  policy-layers   10/10', 'probe  nim-endpoint    trusted', '', 'verdict: READY · exit 0'],
  'm31a deployment': ['channel     production (m31a)', 'build       0.1.1 · release', 'artifact    m31a-linux-x64.tar.gz', 'state       ~/.local/share/m31a', '', 'exit 0'],
  'm31a mission': ['mission  7f23 · profile=coding', 'dag      14 tasks · 3 ready · 11 pending', 'budget   tokens 18,420/200,000 · wall 02:41', 'policy   11/11 ALLOW · 0 ASK pending', '', 'exit 0'],
  'm31a session': ['use `m31a mission list --all` · `m31a checkpoint list <MISSION_ID>`', 'state is SQLite-backed; replay via TUI surface 09', '', 'exit 0'],
  'm31a update': ['manifest  schema v1 · channel production', 'stage → verify → atomic replace', 'rollback seam armed (previous binary kept)', '', 'exit 0 (dry-run)'],
  'm31a rollback': ['rollback  previous binary restored atomically', 'state untouched (channel-isolated paths)', '', 'exit 0'],
};

function outputFor(cmd: string): string[] {
  for (const key of Object.keys(OUTPUTS)) {
    if (cmd.startsWith(key)) return OUTPUTS[key];
  }
  return ['', 'exit 0'];
};

/** Command-line showcase: real documented commands, illustrative output. */
export function CliConsole({ defaultCmd = 0 }: { defaultCmd?: number }) {
  const [idx, setIdx] = useState(defaultCmd);
  const cmd = CLI_COMMAND_DEFS[idx];
  const lines = outputFor(cmd.command);

  return (
    <div className="tick-panel overflow-hidden" role="region" aria-label="M31A command-line showcase">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A2721] bg-[#1B1A17] px-3 py-2">
        <span className="meta">CLI — DOCUMENTED COMMANDS · ILLUSTRATIVE OUTPUT</span>
        <span className="mono-val text-[11px] text-[#6E6860]">exit-code contract: 0 ok · 1 verify · 2 policy · 3 budget · 4 crash · 5 config</span>
      </div>
      <div className="grid md:grid-cols-12">
        <div className="border-b border-[#2A2721] md:col-span-4 md:border-b-0 md:border-r" role="tablist" aria-label="Commands">
          {CLI_COMMAND_DEFS.slice(0, 10).map((c, i) => (
            <button
              key={c.command}
              role="tab"
              aria-selected={idx === i}
              onClick={() => setIdx(i)}
              className={cn(
                'block w-full truncate border-b border-[#2A2721]/60 px-3 py-2 text-left font-mono text-[12px] transition-colors last:border-0',
                idx === i ? 'bg-[#FF4B2C]/[.08] text-white' : 'text-[#A8A198] hover:bg-[#1B1A17] hover:text-[#ECE7DC]'
              )}
            >
              <span className="mono-val mr-2 text-[10px] text-[#6E6860]">{String(i + 1).padStart(2, '0')}</span>
              {c.command}
            </button>
          ))}
        </div>
        <div className="md:col-span-8" role="tabpanel" aria-label={`Output for ${cmd.command}`}>
          <div className="border-b border-[#2A2721] px-4 py-3">
            <p className="font-mono text-[13px] text-white">
              <span className="text-[#FF6B4A]">$</span> {cmd.examples[0]}
            </p>
            <p className="mt-1 text-[13px] text-[#A8A198]">{cmd.summary}</p>
            <p className="mono-val mt-1 text-[11px] text-[#6E6860]">usage: {cmd.usage}</p>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-[#ECE7DC]" tabIndex={0}>
            <code>{lines.join('\n')}<span className="animate-blink text-[#FF4B2C]"> ▊</span></code>
          </pre>
        </div>
      </div>
    </div>
  );
}
