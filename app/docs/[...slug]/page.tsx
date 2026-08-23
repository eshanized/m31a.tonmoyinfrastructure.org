import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { docsContent } from '@/content/docs';
import { docsNav } from '@/content/architecture';
import { CodeBlock } from '@/components/site/code-block';
import { ChevronLeft, ChevronRight, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  return Object.keys(docsContent).map((slug) => ({ slug: [slug] }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug?.[0];
  const doc = slug ? docsContent[slug] : null;
  if (!doc) return { title: 'Not Found' };
  return {
    title: doc.title,
    description: doc.description,
  };
}

const calloutStyles = {
  info: { border: 'border-info/30 bg-info/5', icon: Info, iconClass: 'text-info' },
  warning: { border: 'border-warning/30 bg-warning/5', icon: AlertTriangle, iconClass: 'text-warning' },
  success: { border: 'border-success/30 bg-success/5', icon: CheckCircle2, iconClass: 'text-success' },
};

export default function DocPage({ params }: PageProps) {
  const slug = params.slug?.[0];
  const doc = slug ? docsContent[slug] : null;

  if (!doc) notFound();

  // Find prev/next
  const allItems = docsNav.flatMap((s) => s.items);
  const currentIdx = allItems.findIndex((i) => i.slug === slug);
  const prev = currentIdx > 0 ? allItems[currentIdx - 1] : null;
  const next = currentIdx < allItems.length - 1 ? allItems[currentIdx + 1] : null;

  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 font-sans text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/docs" className="hover:text-foreground">Docs</Link>
        <span>/</span>
        <span className="text-foreground">{doc.title}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{doc.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{doc.description}</p>

      <div className="mt-10 space-y-8">
        {doc.sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
              {section.heading}
            </h2>
            {section.body && (
              <p className="text-pretty text-base text-muted-foreground">{section.body}</p>
            )}
            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.code && (
              <div className="mt-4">
                <CodeBlock language={section.code.language} code={section.code.content} />
              </div>
            )}
            {section.callout && (
              <div
                className={cn(
                  'mt-4 flex items-start gap-3 rounded-lg border p-4',
                  calloutStyles[section.callout.type].border
                )}
              >
                {(() => {
                  const Icon = calloutStyles[section.callout.type].icon;
                  return (
                    <Icon
                      className={cn(
                        'mt-0.5 h-4 w-4 shrink-0',
                        calloutStyles[section.callout.type].iconClass
                      )}
                    />
                  );
                })()}
                <p className="text-sm text-foreground/90">{section.callout.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev/Next nav */}
      <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/docs/${prev.slug}`}
            className="group flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-3 transition-colors hover:border-primary/30"
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            <div>
              <div className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">Previous</div>
              <div className="text-sm font-medium text-foreground">{prev.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug}`}
            className="group flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-3 text-right transition-colors hover:border-primary/30"
          >
            <div>
              <div className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">Next</div>
              <div className="text-sm font-medium text-foreground">{next.title}</div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
