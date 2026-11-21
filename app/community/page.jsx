import Link from 'next/link';
import Image from 'next/image';
import {
  Bug,
  MessageSquare,
  FileCode2,
  ShieldCheck,
  LifeBuoy,
  Quote,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import { getRepoMetrics } from '@/lib/github';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Community & Ecosystem',
  description:
    'Join the M31A open-source community: contributing guides, security disclosures, issue tracking, and ecosystem repositories.',
};

export default async function CommunityPage() {
  const metrics = await getRepoMetrics();

  const resources = [
    {
      title: 'GitHub Repository',
      description: 'The canonical 39-crate Rust workspace source code. Star the project, fork the repository, or inspect active pull requests.',
      icon: GithubIcon,
      href: siteConfig.links.github,
      action: `Star on GitHub (${metrics.stargazers_count})`,
      external: true,
    },
    {
      title: 'Issue Tracker & Bug Reports',
      description: 'Report regressions, submit reproduction steps, or request enhancements for specific crates.',
      icon: Bug,
      href: siteConfig.links.issues,
      action: `View Issues (${metrics.open_issues_count})`,
      external: true,
    },
    {
      title: 'Contributing Guide',
      description: 'Local development setup, Cargo build instructions, coding standards, and PR submission guidelines.',
      icon: FileCode2,
      href: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md',
      action: 'Read CONTRIBUTING.md',
      external: true,
    },
    {
      title: 'Security Policy & Disclosures',
      description: 'Guidelines on reporting security vulnerabilities, sandbox bypass evaluations, and coordinated disclosure.',
      icon: ShieldCheck,
      href: 'https://github.com/eshanized/M31A/blob/main/SECURITY.md',
      action: 'View Security Policy',
      external: true,
    },
    {
      title: 'Community Support',
      description: 'Technical troubleshooting guidelines, environment verification commands, and diagnostic bundle generation.',
      icon: LifeBuoy,
      href: 'https://github.com/eshanized/M31A/discussions',
      action: 'Visit Discussions',
      external: true,
    },
    {
      title: 'Academic Citation (CITATION.cff)',
      description: 'Citing M31A in academic research, benchmark evaluations, or comparative AI agent studies.',
      icon: Quote,
      href: 'https://github.com/eshanized/M31A/blob/master/CITATION.cff',
      action: 'View CITATION.cff',
      external: true,
    },
  ];

  return (
    <div className="w-full bg-background py-12 md:py-16">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            Open Source
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Engineered openly for sovereign developers.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
            M31A is an independent open-source project founded by {siteConfig.author.name} under {siteConfig.author.organization}.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((res) => {
            const Icon = res.icon;
            return (
              <Card
                key={res.title}
                variant="default"
                className="p-6 bg-surface border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-semibold text-foreground mb-1.5">
                    {res.title}
                  </h2>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={res.href}
                    target={res.external ? '_blank' : undefined}
                    rel={res.external ? 'noopener noreferrer' : undefined}
                    className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1.5"
                  >
                    <span className="tabular-nums">{res.action}</span>
                    {res.external ? (
                      <ExternalLink className="w-3 h-3 text-foreground-subtle" />
                    ) : (
                      <ArrowRight className="w-3 h-3" />
                    )}
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Maintainer Callout */}
        <div className="mt-12 p-6 rounded-xl bg-surface-muted border border-border flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border bg-surface shrink-0">
              <Image
                src={siteConfig.author.avatar || 'https://avatars.githubusercontent.com/u/148610067?v=4'}
                alt={siteConfig.author.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-base font-semibold text-foreground">
                Maintainer &amp; Infrastructure
              </h3>
              <p className="text-xs text-foreground-muted max-w-xl leading-relaxed">
                M31A is developed and maintained by {siteConfig.author.name} at {siteConfig.author.organization}. Licensed under the permissive MIT license.
              </p>
            </div>
          </div>

          <Button
            href={siteConfig.links.github}
            variant="primary"
            size="md"
            icon={GithubIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </Button>
        </div>
      </Container>
    </div>
  );
}
