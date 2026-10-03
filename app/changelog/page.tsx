import type { Metadata } from 'next';
import Link from 'next/link';
import { Tag, ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { CHANGELOG, PRODUCT } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Changelog',
  description:
    'All notable changes to M31A (M31 Autonomous), following Keep a Changelog and Semantic Versioning.',
};

export default function ChangelogPage() {
  return (
    <>
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Changelog"
            title="Release history"
            description="All notable changes to M31A, following Keep a Changelog and Semantic Versioning."
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {CHANGELOG.map((entry) => (
              <div key={entry.version} id={`v${entry.version}`} className="scroll-mt-20 rounded-xl border border-border/60 bg-card/40 p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-4">
                  <div className="flex items-center gap-3">
                    <Tag className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">
                      v{entry.version}
                    </h2>
                    {entry.version === PRODUCT.version && (
                      <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 font-mono text-xs font-semibold text-primary">
                        CURRENT RELEASE
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{entry.date}</span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{entry.summary}</p>

                {entry.sections.map((section, i) => (
                  <div key={i} className="mt-6">
                    <h3 className="mb-3 font-semibold text-primary">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={`${PRODUCT.repositoryUrl}/releases/tag/v${entry.version}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
                  >
                    GitHub release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
