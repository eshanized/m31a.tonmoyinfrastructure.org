import type { Metadata } from 'next';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { SectionWrapper } from '@/components/site/section-header';
import { StatusBadge } from '@/components/site/status-badge';
import { roadmapCategories, statusConfig } from '@/content/roadmap';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'M31A development roadmap with status labels reflecting actual development state.',
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight">Roadmap</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Status labels reflect actual development state — not marketing aspirations.
            </p>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-3">
              {Object.entries(statusConfig).map(([key, config]) => (
                <span
                  key={key}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-xs ${config.className}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
                  {config.label}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {roadmapCategories.map((cat) => (
                <div key={cat.category}>
                  <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary">
                    {cat.category}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-border bg-card/40 p-5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                          <StatusBadge status={item.status} />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
