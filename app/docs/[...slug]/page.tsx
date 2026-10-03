import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DocSidebar, DocPagination } from '@/components/docs/doc-sidebar';
import { DocToc } from '@/components/docs/doc-toc';
import { DOCS } from '@/lib/m31a/product';
import { getDocArticle } from '@/lib/docs/content';

interface PageProps {
  params: { slug: string[] };
}

function getDoc(slug: string) {
  return DOCS.find((d) => d.slug === slug);
}

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: [d.slug] }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug.join('/');
  const doc = getDoc(slug);
  if (!doc) return { title: 'Not Found' };
  return {
    title: `${doc.title} — M31A Documentation`,
    description: doc.description,
  };
}

export default function DocPage({ params }: PageProps) {
  const slug = params.slug.join('/');
  const doc = getDoc(slug);
  if (!doc) notFound();

  const article = getDocArticle(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex gap-8">
        {/* Left Column: Fixed Sidebar */}
        <DocSidebar currentSlug={slug} />

        {/* Center Column: Main Article Content */}
        <div className="min-w-0 flex-1 max-w-3xl">
          {/* Breadcrumbs */}
          <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Link href="/docs" className="hover:text-foreground">
              Docs
            </Link>
            <span>/</span>
            <span className="capitalize">{doc.section.replace('-', ' ')}</span>
            <span>/</span>
            <span className="text-foreground font-semibold">{doc.title}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">{doc.title}</h1>
          <p className="mt-2 text-base text-muted-foreground">{doc.description}</p>

          <div className="mt-8">
            {article.content}
          </div>

          {/* Bottom Pagination */}
          <DocPagination currentSlug={slug} />
        </div>

        {/* Right Column: In-page TOC */}
        <div className="hidden xl:block w-56 shrink-0 sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pl-4 border-l border-border/40">
          <DocToc items={article.toc} />
        </div>
      </div>
    </div>
  );
}
