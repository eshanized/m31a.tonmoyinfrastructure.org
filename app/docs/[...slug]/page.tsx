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
      <div className="flex gap-8">
        <DocSidebar currentSlug={slug} />

        <div className="min-w-0 max-w-3xl flex-1">
          <nav className="meta mb-3 flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/docs" className="hover:text-[#ECE7DC]">
              DOCS
            </Link>
            <span aria-hidden="true">/</span>
            <span>{doc.section.replace('-', ' ').toUpperCase()}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#ECE7DC]">{doc.title.toUpperCase()}</span>
            <span className="ml-auto hidden sm:inline">v{PRODUCT.version}</span>
          </nav>

          <h1 className="display-lg text-3xl text-[#ECE7DC] sm:text-4xl">{doc.title}</h1>
          <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">{doc.description}</p>
          <hr className="rule my-6" />

          <div className="doc-body mt-2">{article.content}</div>

          <DocPagination currentSlug={slug} />
        </div>

        <div className="sticky top-24 hidden h-[calc(100vh-7rem)] w-56 shrink-0 overflow-y-auto border-l border-[#2A2721] pl-4 xl:block">
          <DocToc items={article.toc} />
        </div>
      </div>
    </div>
  );
}
