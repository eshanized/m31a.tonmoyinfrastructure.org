import { fetchChangelog, fetchReleases, GITHUB_REPO_URL, GITHUB_RELEASES_URL } from '@/lib/github';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { SectionWrapper } from '@/components/site/section-header';
import { CodeBlock } from '@/components/site/code-block';
import { GenericBadge } from '@/components/site/status-badge';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Tag, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Changelog',
  description: 'M31A release history and development highlights.',
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export const revalidate = 3600;

export default async function ChangelogPage() {
  const [changelog, releases] = await Promise.all([fetchChangelog(), fetchReleases()]);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SectionWrapper>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Release history and development highlights, fetched live from GitHub.
            </p>

            {/* Releases */}
            <div className="mt-12">
              <div className="flex items-center justify-between">
                <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
                  Releases
                </h2>
                <Link
                  href={GITHUB_RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  View on GitHub
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>

              {releases.length === 0 ? (
                <div className="mt-4 flex items-start gap-3 rounded-lg border border-border bg-card/40 p-5">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-foreground">No releases published yet.</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      M31A is in active development. Releases will appear here automatically once
                      they are published on GitHub.
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-3">
                      <Link href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer">
                        Check GitHub for updates
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-6">
                  {releases.map((release) => (
                    <div
                      key={release.tagName}
                      className="rounded-lg border border-border bg-card/40 p-6"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <Tag className="h-4 w-4 text-primary" />
                        <h3 className="font-sans text-xl font-bold text-foreground">
                          {release.tagName}
                        </h3>
                        {release.isPrerelease && (
                          <GenericBadge variant="warning">Pre-release</GenericBadge>
                        )}
                        {release.isDraft && (
                          <GenericBadge variant="default">Draft</GenericBadge>
                        )}
                        {release.publishedAt && (
                          <span className="font-sans text-xs text-muted-foreground">
                            {formatDate(release.publishedAt)}
                          </span>
                        )}
                      </div>

                      {release.name && release.name !== release.tagName && (
                        <p className="mt-2 text-sm font-medium text-foreground/90">{release.name}</p>
                      )}

                      {release.body && (
                        <div className="mt-4">
                          <CodeBlock language="changelog" code={release.body} showCopy={false} />
                        </div>
                      )}

                      {/* Download assets */}
                      {release.assets.length > 0 && (
                        <div className="mt-4">
                          <h4 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Downloads
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {release.assets.map((asset) => (
                              <a
                                key={asset.name}
                                href={asset.downloadUrl}
                                className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2 transition-colors hover:border-primary/30 hover:bg-primary/5"
                              >
                                <Download className="h-3.5 w-3.5 text-primary" />
                                <span className="font-sans text-xs text-foreground/90">
                                  {asset.name}
                                </span>
                                {asset.size > 0 && (
                                  <span className="font-sans text-xs text-muted-foreground">
                                    {formatBytes(asset.size)}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href={release.htmlUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            View release
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Full CHANGELOG.md */}
            {changelog && (
              <div className="mt-12">
                <div className="flex items-center justify-between">
                  <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
                    Full Changelog
                  </h2>
                  <Link
                    href={changelog.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
                <div className="mt-4">
                  <CodeBlock language="markdown" code={changelog.rawContent} />
                </div>
              </div>
            )}

            {/* Fallback when nothing fetched */}
            {!changelog && releases.length === 0 && (
              <div className="mt-12 rounded-lg border border-border bg-card/40 p-6">
                <p className="text-sm text-muted-foreground">
                  Could not fetch changelog data from GitHub at this time. This may be a temporary
                  network issue or the repository may not yet have published a CHANGELOG.md or any
                  releases.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                      Visit Repository
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer">
                      View Releases
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
