import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DocSidebar, DocPagination } from '@/components/docs/doc-sidebar';
import { DocToc } from '@/components/docs/doc-toc';
import { DOCS } from '@/lib/m31a/product';
import { getDocArticle } from '@/lib/docs/content';
import { PRODUCT } from '@/lib/m31a/product';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

function getDoc(slug: string) {
  return DOCS.find((d) => d.slug === slug);
}

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: [d.slug] }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: parts } = await params;
  const slug = parts.join('/');
  const doc = getDoc(slug);
  if (!doc) return { title: 'Not Found' };
  return {
    title: `${doc.title} — M31A Documentation`,
    description: doc.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug: parts } = await params;
  const slug = parts.join('/');
  const doc = getDoc(slug);
  if (!doc) notFound();

  const article = getDocArticle(slug);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6">
      <div className="flex gap-10">
        <DocSidebar currentSlug={slug} />

        <div className="min-w-0 max-w-3xl flex-1">
          {/* Breadcrumbs */}
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-[#6B6965]" aria-label="Breadcrumb">
            <Link href="/docs" className="hover:text-[#E8523F] transition-colors">
              Docs
            </Link>
            <span aria-hidden="true">/</span>
            <span className="capitalize">{doc.section.replace('-', ' ')}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#F0EDE8]">{doc.title}</span>
            <span className="ml-auto hidden sm:inline text-[#E8523F]">v{PRODUCT.version}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">{doc.title}</h1>
          <p className="mt-2 text-base text-[#A3A09B] leading-relaxed">{doc.description}</p>
          <hr className="border-[#222226] my-6" />

          <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#A3A09B]">
            {article.content}
          </div>

          <DocPagination currentSlug={slug} />
        </div>

        <div className="sticky top-24 hidden h-[calc(100vh-7rem)] w-56 shrink-0 overflow-y-auto border-l border-[#222226] pl-6 xl:block">
          <DocToc items={article.toc} />
        </div>
      </div>
    </div>
  );
}
