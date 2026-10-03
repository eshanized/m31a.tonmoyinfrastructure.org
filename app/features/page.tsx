import Link from 'next/link';
import { FEATURES } from '@/lib/m31a/product';
import { StatusBadge } from '@/components/site/section';

const GROUPS: Record<string, typeof FEATURES> = {};
for (const f of FEATURES) {
  (GROUPS[f.category] ??= []).push(f);
}

export default function FeaturesPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[09] FEATURES — SUBSYSTEM REGISTER</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            What the runtime owns.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">
            Every entry below names its source module. Features are grouped by the
            subsystem that implements them — not by marketing persona.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        {Object.entries(GROUPS).map(([cat, items], gi) => (
          <div key={cat} className="mb-10">
            <div className="mb-3 flex items-baseline gap-3">
              <span className="tech-num">G{String(gi + 1).padStart(2, '0')}</span>
              <h2 className="font-mono text-xs font-bold tracking-[0.14em] text-[#ECE7DC]">{cat.toUpperCase()}</h2>
              <span className="h-px flex-1 bg-[#2A2721]" aria-hidden="true" />
            </div>
            <dl className="overflow-hidden rounded-[3px] border border-[#2A2721]">
              {items.map((f) => (
                <div key={f.id} className="grid gap-1 border-b border-[#2A2721]/60 bg-[#141311] px-4 py-3 last:border-0 hover:bg-[#1B1A17] md:grid-cols-12 md:gap-4">
                  <dt className="md:col-span-3">
                    <span className="block text-sm font-semibold text-[#ECE7DC]">{f.title}</span>
                    <span className="mono-val mt-0.5 block text-[11px] text-[#6E6860]">{f.sourceRef}</span>
                  </dt>
                  <dd className="text-[13.5px] leading-relaxed text-[#A8A198] md:col-span-7">{f.description}</dd>
                  <dd className="md:col-span-2 md:text-right"><StatusBadge status={f.status} /></dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
        <div className="flex flex-wrap gap-2 border-t border-[#2A2721] pt-6">
          <Link href="/architecture" className="btn-ghost !text-xs">EXPLORE ARCHITECTURE</Link>
          <Link href="/docs" className="btn-quiet !text-xs">OPEN DOCUMENTATION →</Link>
        </div>
      </div>
    </>
  );
}
