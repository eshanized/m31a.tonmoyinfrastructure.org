import Link from 'next/link';
import Image from 'next/image';
import {
  Bug,
  MessageSquare,
  FileCode2,
  ShieldCheck,
  LifeBuoy,
  Heart,
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
      description: 'Local development setup, Cargo and Bazel build instructions, coding standards, and PR submission guidelines.',
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
    <div className="w-full bg-background py-16 md:py-24">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="accent" className="mb-4">
            Open Source Community
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Engineered openly for sovereign developers.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
            M31A is an independent open-source project founded by {siteConfig.author.name} under {siteConfig.author.organization}. Join us in building sovereign, verifiable autonomous coding tools without vendor capture.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => {
            const Icon = res.icon;
            return (
              <Card
                key={res.title}
                variant="default"
                className="p-8 bg-surface border border-border flex flex-col justify-between hover:border-border-strong transition-all shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-foreground mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2">
                    {res.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={res.href}
                    target={res.external ? '_blank' : undefined}
                    rel={res.external ? 'noopener noreferrer' : undefined}
                    className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{res.action}</span>
                    {res.external ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Maintainer Callout */}
        <div className="mt-16 p-8 rounded-large bg-background-soft border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border bg-surface-muted shrink-0">
              <Image
                src={siteConfig.author.avatar || 'https://avatars.githubusercontent.com/u/148610067?v=4'}
                alt={siteConfig.author.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">
                Maintainer &amp; Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted max-w-2xl leading-relaxed">
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
