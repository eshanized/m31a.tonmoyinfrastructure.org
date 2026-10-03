import type { Metadata } from 'next';
import { Section, Container, SectionHeader, StatusBadge } from '@/components/site/section';
import { ROADMAP } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Roadmap',
  description:
    'The M31A technical roadmap: completed, in progress, planned, and future milestones.',
};

const STATUS_ORDER = ['Completed', 'In Progress', 'Planned', 'Future'];

export default function RoadmapPage() {
  return (
    <>
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Roadmap"
            title="Where M31A is heading"
            description="A technical roadmap grounded in current project state. No aggressive promises — only verified statuses."
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <div className="space-y-12">
            {STATUS_ORDER.map((status) => {
              const items = ROADMAP.filter((r) => r.status === status);
              if (items.length === 0) return null;

              return (
                <div key={status}>
                  <div className="mb-6 flex items-center gap-3">
                    <h2 className="text-xl font-bold tracking-tight">{status}</h2>
                    <StatusBadge status={status} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-border/60 bg-card/40 p-5 transition-all hover:border-primary/30"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        {item.reference && (
                          <div className="mt-4 pt-3 border-t border-border/40">
                            <span className="font-mono text-xs text-primary">
                              Ref: {item.reference}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
