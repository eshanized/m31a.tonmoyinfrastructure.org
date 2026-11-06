import Link from 'next/link';
import {
  Bug,
  MessageSquare,
  BookOpen,
  ShieldAlert,
  Heart,
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
      description: 'Step-by-step instructions on setting up the local Rust workspace, running Bazel checks, and style guides.',
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
    <Section id="community" spacing="spacious" background="surface">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="default" className="mb-4">
          Open Source &amp; Sovereign
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Built in public. Backed by community.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          M31A is an independent, MIT-licensed open-source project created by Eshan Roy under Tonmoy Infrastructure &amp; Vision. We welcome technical contributions, security audits, and real-world feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map((chan) => {
          const Icon = chan.icon;
          return (
            <Card
              key={chan.title}
              variant="default"
              className="p-6 bg-surface flex flex-col justify-between hover:border-border-strong transition-all"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-foreground mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {chan.title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed mb-6">
                  {chan.description}
                </p>
              </div>

              <div>
                <Link
                  href={chan.link}
                  target={chan.external ? '_blank' : undefined}
                  rel={chan.external ? 'noopener noreferrer' : undefined}
                  className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>{chan.action}</span>
                  {chan.external ? (
                    <ExternalLink className="w-3 h-3" />
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
