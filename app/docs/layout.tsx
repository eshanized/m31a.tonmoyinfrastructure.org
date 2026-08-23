import Link from 'next/link';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { docsNav } from '@/content/architecture';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-7xl gap-8 px-4 pt-16 sm:px-6 lg:px-8">
        <aside className="hidden w-56 shrink-0 border-r border-border py-8 md:block lg:w-64">
          <div className="sticky top-24">
            <Link
              href="/docs"
              className="mb-4 block font-sans text-sm font-semibold text-foreground"
            >
              Documentation
            </Link>
            <DocsSidebar />
          </div>
        </aside>
        <div className="min-w-0 flex-1 py-8">{children}</div>
      </div>
      <Footer />
    </>
  );
}
