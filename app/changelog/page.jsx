import Link from 'next/link';
import { Tag, Calendar, ExternalLink, Sparkles, Package } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { getChangelog } from '@/lib/github';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Changelog & Release History',
  description:
    'Complete release notes and version history for M31A autonomous coding assistant, dynamically synchronized from GitHub.',
};

export default async function ChangelogPage() {
  const releases = await getChangelog();

  return (
    <div className="w-full bg-background py-16 md:py-24">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="accent" icon={Sparkles}>
              Live GitHub Sync
            </Badge>
            <Badge variant="default">
              Rust 2024 Workspace
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            M31A Changelog
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
            Every release, crate restructuring, security patch, and autonomous workflow feature synchronized in real-time from GitHub Releases.
          </p>
        </div>

        {/* Release Timeline */}
        <div className="space-y-10">
          {releases.map((rel) => (
            <Card
              key={rel.version || rel.tag_name}
              variant="default"
              className="p-8 sm:p-10 bg-surface border border-border shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/20 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {rel.version || rel.tag_name}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {rel.name || rel.title}
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-foreground-subtle font-mono">
                  <Calendar className="w-4 h-4" />
                  <span>{rel.date}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground-muted mb-3">
                  Key Changes &amp; Highlights:
                </h3>
                <ul className="space-y-2.5">
                  {(rel.highlights || []).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {rel.assets && rel.assets.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-foreground-subtle">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Package className="w-3.5 h-3.5" />
                    <span>{rel.assets.length} binary distribution assets</span>
                  </div>
                  <a
                    href={rel.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline inline-flex items-center gap-1"
                  >
                    <span>View release on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-large bg-background-soft border border-border text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Looking for historic milestones or raw commits?
          </h3>
          <p className="text-sm text-foreground-muted max-w-xl mb-6">
            Inspect all releases, download multi-architecture binaries, or view verified commit signatures directly on the GitHub repository.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={siteConfig.links.releases}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={ExternalLink}
            >
              GitHub Releases
            </Button>
            <Button
              href="/announcements"
              variant="outline"
              size="md"
            >
              View Announcements
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
