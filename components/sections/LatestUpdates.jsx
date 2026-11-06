import Link from 'next/link';
import { Tag, Calendar, ExternalLink, ArrowRight, Download, PackageCheck } from 'lucide-react';
import { getLatestRelease } from '@/lib/github';
import { siteConfig } from '@/lib/site-config';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default async function LatestUpdates() {
  const release = await getLatestRelease();

  // Format date cleanly
  const releaseDate = release.published_at
    ? new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'November 2026';

  return (
    <Section id="updates" spacing="spacious" background="soft">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="accent" className="mb-4">
          Release Tracking
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Continuous release cadence.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          M31A releases regular updates with new crate features, performance enhancements, and security improvements.
        </p>
      </div>

      <Card
        variant="default"
        className="p-6 sm:p-10 bg-surface border border-border shadow-sm max-w-4xl mx-auto"
      >
        {/* Release Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-accent-subtle text-accent border border-accent/20 flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {release.tag_name}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                Latest Production Release
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {release.name || release.tag_name}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-foreground-muted font-mono shrink-0">
            <Calendar className="w-4 h-4 text-foreground-subtle" />
            <span>{releaseDate}</span>
          </div>
        </div>

        {/* Release Highlights / Markdown Body */}
        <div className="py-6 space-y-4 text-sm text-foreground-muted leading-relaxed border-b border-border">
          <div className="font-sans whitespace-pre-line">
            {release.body || 'Comprehensive bug fixes, autonomous workflow updates, and stability enhancements.'}
          </div>
        </div>

        {/* Release Assets List */}
        {release.assets && release.assets.length > 0 && (
          <div className="py-6 space-y-3 border-b border-border">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground block">
              Published Release Assets ({release.assets.length})
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {release.assets.slice(0, 4).map((asset) => (
                <div
                  key={asset.name}
                  className="p-2.5 rounded bg-surface-muted border border-border flex items-center justify-between"
                >
                  <span className="truncate text-foreground max-w-[220px]">
                    {asset.name}
                  </span>
                  <span className="text-foreground-subtle text-[11px] shrink-0 ml-2">
                    {(asset.size / (1024 * 1024)).toFixed(1)} MB
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/changelog"
            className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
          >
            Browse complete changelog history
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={release.html_url || siteConfig.links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-surface-muted border border-border hover:border-border-strong text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View release on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Card>
    </Section>
  );
}
