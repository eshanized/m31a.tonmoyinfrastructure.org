import Link from 'next/link';
import {
  Bug,
  MessageSquare,
  BookOpen,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import { getRepoMetrics } from '@/lib/github';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default async function CommunitySection() {
  const metrics = await getRepoMetrics();

  const channels = [
    {
      title: 'GitHub Repository',
      description: 'Explore the 39-crate monorepo source code, submit pull requests, and audit implementations.',
      icon: GithubIcon,
      link: siteConfig.links.github,
      action: `Star Repository (${metrics.stargazers_count})`,
      external: true,
    },
    {
      title: 'Issue Tracker',
      description: 'Report bugs, request new crate features, and track ongoing engineering tasks transparently.',
      icon: Bug,
      link: siteConfig.links.issues,
      action: `Open Issues (${metrics.open_issues_count})`,
      external: true,
    },
    {
      title: 'Contributing Guide',
      description: 'Instructions on setting up the local Rust workspace, running cargo check, and style guidelines.',
      icon: BookOpen,
      link: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md',
      action: 'Read CONTRIBUTING.md',
      external: true,
    },
    {
      title: 'Security Policy',
      description: 'Details on vulnerability reporting, coordinated disclosure, and sandbox boundary assessments.',
      icon: ShieldAlert,
      link: 'https://github.com/eshanized/M31A/blob/main/SECURITY.md',
      action: 'View Security Policy',
      external: true,
    },
  ];

  return (
    <Section id="community" spacing="default" background="surface">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Open Source
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Built in public. Backed by community.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          M31A is an independent, MIT-licensed open-source project created by Eshan Roy under Tonmoy Infrastructure &amp; Vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {channels.map((chan) => {
          const Icon = chan.icon;
          return (
            <Card
              key={chan.title}
              variant="default"
              className="p-5 bg-surface border border-border flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {chan.title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                  {chan.description}
                </p>
              </div>

              <div>
                <Link
                  href={chan.link}
                  target={chan.external ? '_blank' : undefined}
                  rel={chan.external ? 'noopener noreferrer' : undefined}
                  className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span className="tabular-nums">{chan.action}</span>
                  {chan.external ? (
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
    </Section>
  );
}
