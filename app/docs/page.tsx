import Link from 'next/link';
import type { Metadata } from 'next';
import { docsNav } from '@/content/architecture';
import { FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Technical documentation for the M31A autonomous software engineering runtime.',
};

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Documentation</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Technical documentation for the M31A autonomous software engineering runtime.
      </p>

      <div className="mt-10 space-y-10">
        {docsNav.map((section) => (
          <div key={section.section}>
            <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-primary">
              {section.section}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  className="group rounded-lg border border-border bg-card/40 p-4 transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-2 font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
