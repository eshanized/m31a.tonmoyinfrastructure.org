import Link from 'next/link';
import { Tag, Calendar, ExternalLink, Package } from 'lucide-react';
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
    <div className="w-full bg-background py-12 md:py-16">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="default">
              Live GitHub Sync
            </Badge>
            <Badge variant="default">
              Rust 2024 Workspace
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            M31A Changelog
          </h1>
          <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
            Every release, crate restructuring, security patch, and autonomous workflow feature synchronized directly from GitHub Releases.
          </p>
        </div>

        {/* Release Timeline */}
        <div className="space-y-6">
          {releases.map((rel) => (
            <Card
              key={rel.version || rel.tag_name}
              variant="default"
              className="p-6 sm:p-7 bg-surface border border-border"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20 flex items-center gap-1.5 tabular-nums">
                    <Tag className="w-3 h-3" />
                    {rel.version || rel.tag_name}
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    {rel.name || rel.title}
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-foreground-subtle font-mono tabular-nums">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{rel.date}</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-foreground-muted mb-2">
                  Key Changes &amp; Highlights:
                </h3>
                <ul className="space-y-1.5">
                  {(rel.highlights || []).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {rel.assets && rel.assets.length > 0 && (
                <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-foreground-subtle">
                  <div className="flex items-center gap-1.5 font-mono tabular-nums">
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

        {/* GitHub Releases Link Card */}
        <div className="mt-12 p-6 rounded-xl bg-surface-muted border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Full Release Archive
            </h4>
            <p className="text-xs text-foreground-muted mt-0.5">
              Review commit diffs, SHA-256 checksums, and release artifacts on GitHub.
            </p>
          </div>
          <Button
            href={siteConfig.links.releases}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
          >
            GitHub Releases
          </Button>
        </div>
      </Container>
    </div>
  );
}
