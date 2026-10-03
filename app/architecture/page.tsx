import Link from 'next/link';
import { ArchitectureMap } from '@/components/system/architecture-map';
import { RuntimeTopology } from '@/components/system/runtime-topology';
import { PRODUCT } from '@/lib/m31a/product';

function Band({ index, title, lede }: { index: string; title: string; lede: string }) {
  return (
    <div className="border-b border-[#2A2721]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
        <p className="meta text-[#FF6B4A]">[{index}] {title}</p>
        <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">{lede}</h1>
      </div>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <>
      <Band index="03" title="ARCHITECTURE" lede="Ten layers, one direction: down." />
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <div className="sys-grid">
          <div className="col-span-12 lg:col-span-4">
            <p className="meta">READING GUIDE</p>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-[#A8A198]">
              M31A is a single Rust crate organised as a strict L0–L9 hierarchy. A layer
              may only depend on layers below it. Trust boundaries sit at L1 (policy)
              and L3 (intelligence) — the model never reaches the kernel directly.
            </p>
            <p className="mono-val mt-4 text-[12px] leading-relaxed text-[#6E6860]">
              SOURCE docs/architecture/ARCHITECTURE.md
              <br />
              RUST {PRODUCT.rustVersion} · SINGLE CRATE · NO NODE / PYTHON / GPU
            </p>
            <div className="mt-6">
              <RuntimeTopology compact />
            </div>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <ArchitectureMap />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-2 border-t border-[#2A2721] pt-6">
          <Link href="/security" className="btn-ghost !text-xs">READ SECURITY MODEL</Link>
          <Link href="/docs/architecture" className="btn-quiet !text-xs">OPEN ARCHITECTURE DOC →</Link>
        </div>
      </div>
    </>
  );
}
