import Link from 'next/link';
import { CliConsole } from '@/components/system/cli-console';
import { CLI_COMMAND_DEFS } from '@/lib/m31a/product';

export default function CliPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[06] CLI — COMMAND REFERENCE</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            The runtime, addressed by name.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">
            {CLI_COMMAND_DEFS.length} documented command groups. Exit-code contract: 0
            success · 1 verification failure · 2 policy violation · 3 budget exhaustion ·
            4 crash · 5 config error. Machine-readable <span className="mono-val text-[13px] text-[#ECE7DC]">--output json</span> throughout.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <CliConsole />
        <h2 className="meta-bright mb-3 mt-12">FULL COMMAND REGISTER</h2>
        <dl className="overflow-hidden rounded-[3px] border border-[#2A2721]">
          {CLI_COMMAND_DEFS.map((c, i) => (
            <div key={c.command} className="grid gap-1 border-b border-[#2A2721]/60 bg-[#141311] px-4 py-3 last:border-0 md:grid-cols-12 md:gap-4">
              <dt className="md:col-span-4">
                <span className="mono-val mr-2 text-[11px] text-[#FF6B4A]">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-mono text-[13px] font-bold text-[#ECE7DC]">{c.command}</span>
                <span className="st st-idle ml-2 !text-[10px]">{c.category.toUpperCase()}</span>
              </dt>
              <dd className="text-[13.5px] leading-relaxed text-[#A8A198] md:col-span-8">
                {c.summary}
                <span className="mono-val mt-1 block text-[11px] text-[#6E6860]">{c.usage}</span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-[#2A2721] pt-6">
          <Link href="/docs/cli-reference" className="btn-ghost !text-xs">OPEN CLI DOC</Link>
          <Link href="/download" className="btn-primary !text-xs">DOWNLOAD M31A</Link>
        </div>
      </div>
    </>
  );
}
