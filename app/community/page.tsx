import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, MessageSquare, Bug, Shield, BookOpen, Code2 } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Community',
  description:
    'Join the M31A community: GitHub, issues, discussions, security reporting, and contributing.',
};

const CHANNELS = [
  {
    icon: Github,
    title: 'GitHub Repository',
    desc: 'Source code, releases, and documentation.',
    href: PRODUCT.repositoryUrl,
    label: 'View repository',
  },
  {
    icon: Bug,
    title: 'Issues',
    desc: 'Report bugs, request features, and track work.',
    href: PRODUCT.issuesUrl,
    label: 'Browse issues',
  },
  {
    icon: MessageSquare,
    title: 'Discussions',
    desc: 'Ask questions, share workflows, and discuss architecture.',
    href: PRODUCT.discussionsUrl,
    label: 'Join discussions',
  },
  {
    icon: Shield,
    title: 'Security Reporting',
    desc: 'Report security vulnerabilities through GitHub advisories following our security policy.',
    href: PRODUCT.securityReportUrl,
    label: 'Report a vulnerability',
  },
  {
    icon: Code2,
    title: 'Contributing',
    desc: 'Read the contributing guidelines, development workflow, and PR checklist.',
    href: PRODUCT.contributingUrl,
    label: 'Contributing guide',
  },
  {
    icon: Shield,
    title: 'Code of Conduct',
    desc: 'Review the Contributor Covenant standards for participating in M31A.',
    href: PRODUCT.codeOfConductUrl,
    label: 'Read standards',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    desc: 'Read the technical manuals, architecture contracts, and subsystem guides.',
    href: '/docs',
    label: 'Read docs',
  },
];

export default function CommunityPage() {
  return (
    <>
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Community"
            title="Join the M31A community"
            description="M31A is open source under MIT OR Apache-2.0. All community channels are hosted on GitHub."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              const isExternal = channel.href.startsWith('http');
              return (
                <Link
                  key={channel.title}
                  href={channel.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground">{channel.desc}</p>
                  <span className="mt-3 inline-block text-sm text-primary transition-colors group-hover:text-primary/80">
                    {channel.label} →
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
