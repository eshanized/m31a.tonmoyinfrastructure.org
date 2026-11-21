import Link from 'next/link';
import { Tag, Calendar, ExternalLink, ArrowRight, Download, PackageCheck } from 'lucide-react';
import { getLatestRelease } from '@/lib/github';
import { siteConfig } from '@/lib/site-config';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default async function LatestUpdates() {
  const release = await getLatestRelease();

  const releaseDate = release.published_at
    ? new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'November 2026';

  return (
    <Section id="updates" spacing="default" background="soft">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Releases
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Continuous release cadence.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          M31A publishes updates with new crate features, performance benchmarks, and security improvements.
        </p>
      </div>

      <Card
        variant="default"
        className="p-5 sm:p-8 bg-surface border border-border max-w-4xl mx-auto"
      >
        {/* Release Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20 flex items-center gap-1.5 tabular-nums">
                <Tag className="w-3 h-3" />
                {release.tag_name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                Latest Release
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              {release.name || release.tag_name}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-foreground-muted font-mono shrink-0 tabular-nums">
            <Calendar className="w-3.5 h-3.5 text-foreground-subtle" />
            <span>{releaseDate}</span>
          </div>
        </div>

        {/* Release Highlights */}
        <div className="py-5 space-y-3 text-xs sm:text-sm text-foreground-muted leading-relaxed border-b border-border">
          <div className="font-sans whitespace-pre-line">
            {release.body || 'Bug fixes, autonomous workflow updates, and stability enhancements.'}
          </div>
        </div>

        {/* Release Assets List */}
        {release.assets && release.assets.length > 0 && (
          <div className="py-5 space-y-2.5 border-b border-border">
            <span className="text-xs font-medium text-foreground block">
              Published Release Assets ({release.assets.length})
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {release.assets.slice(0, 4).map((asset) => (
                <div
                  key={asset.name}
                  className="p-2 rounded bg-surface-muted border border-border flex items-center justify-between"
                >
                  <span className="truncate text-foreground max-w-[220px]">
                    {asset.name}
                  </span>
                  <span className="text-foreground-subtle text-[11px] shrink-0 ml-2 tabular-nums">
                    {(asset.size / (1024 * 1024)).toFixed(1)} MB
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-5 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/changelog"
            className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
          >
            Browse complete changelog history
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={release.html_url || siteConfig.links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground-muted hover:text-foreground inline-flex items-center gap-1"
          >
            View on GitHub Releases
            <ExternalLink className="w-3 h-3 text-foreground-subtle" />
          </a>
        </div>
      </Card>
    </Section>
  );
}
