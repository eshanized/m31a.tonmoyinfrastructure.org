import Link from 'next/link';
import { PRODUCT } from '@/lib/m31a/product';

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[11] ABOUT — RECORD</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            M31 Autonomous, by {PRODUCT.orgName}.
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <div className="sys-grid">
          <div className="col-span-12 lg:col-span-7">
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-[#A8A198]">{PRODUCT.longDescription}</p>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#A8A198]">
              Production inference is strictly and exclusively NVIDIA NIM
              (<span className="mono-val text-[13px] text-[#ECE7DC]">{PRODUCT.canonicalModelId}</span>).
              Retired provider IDs are rejected deterministically — no credential is
              attached before endpoint trust is verified.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={PRODUCT.repositoryUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !text-xs">VIEW SOURCE ↗</a>
              <Link href="/docs/introduction" className="btn-ghost !text-xs">READ INTRODUCTION</Link>
            </div>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-5 lg:mt-0">
            <dl className="tick-panel grid grid-cols-2 p-0">
              {[
                ['VERSION', PRODUCT.version],
                ['RUST', PRODUCT.rustVersion],
                ['LICENSE', PRODUCT.licenses.join(' / ')],
                ['CHANNEL', 'production'],
                ['PROVIDER', 'NVIDIA NIM'],
                ['ORG', PRODUCT.orgName],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-[#2A2721] px-4 py-3 odd:border-r last:border-b-0">
                  <dt className="meta">{k}</dt>
                  <dd className="mono-val mt-0.5 truncate text-[13px] text-[#ECE7DC]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
