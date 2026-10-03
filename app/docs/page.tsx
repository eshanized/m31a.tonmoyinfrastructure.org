import Link from 'next/link';
import { DocumentationIndex } from '@/components/system/content-matrices';
import { DOCS, PRODUCT } from '@/lib/m31a/product';

export default function DocsIndexPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[05] DOCUMENTATION — v{PRODUCT.version}</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            The runtime manual.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">
            {DOCS.length} topics across getting started, concepts and architecture, and
            the reference manual. Breadcrumb + version context on every page.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <DocumentationIndex />
        <div className="mt-8 flex flex-wrap gap-2 border-t border-[#2A2721] pt-6">
          <Link href="/docs/introduction" className="btn-primary !text-xs">START WITH INTRODUCTION</Link>
          <Link href="/cli" className="btn-ghost !text-xs">CLI REFERENCE</Link>
        </div>
      </div>
    </>
  );
}
