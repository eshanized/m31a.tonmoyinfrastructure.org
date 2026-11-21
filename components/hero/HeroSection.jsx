import Link from 'next/link';
import { ArrowRight, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import { getRepoMetrics, getLatestVersion } from '@/lib/github';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ParticleField from './ParticleField';
import HeroDemonstration from './HeroDemonstration';
import QuickInstallPill from './QuickInstallPill';

export default async function HeroSection() {
  const [repoMetrics, version] = await Promise.all([
    getRepoMetrics(),
    getLatestVersion(),
  ]);

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-background">
      {/* Subtle Hairline Background Grid */}
      <ParticleField />

      <Container size="default" className="relative z-10 flex flex-col items-center text-center">
        {/* Category Announcement Tag */}
        <div className="inline-flex items-center mb-6">
          <Link
            href="/announcements"
            className="group flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border hover:border-border-strong transition-colors text-xs text-foreground-muted hover:text-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-medium text-foreground">M31A v{version}</span>
            <span className="text-foreground-subtle">•</span>
            <span>Latest Announcements</span>
            <ArrowRight className="w-3.5 h-3.5 text-foreground-subtle group-hover:text-foreground transition-colors" />
          </Link>
        </div>

        {/* Hero Dominant Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight text-foreground max-w-4xl leading-[1.08] text-balance">
          {siteConfig.headline}
        </h1>

        {/* Supporting Paragraph */}
        <p className="mt-5 text-sm sm:text-lg text-foreground-muted max-w-2xl font-normal leading-relaxed text-balance">
          {siteConfig.subheadline}
        </p>

        {/* Action Controls */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Button
            href="/features"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Get Started
          </Button>

          <Button
            href={siteConfig.links.github}
            variant="outline"
            size="lg"
            icon={GithubIcon}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Explore on GitHub
            <span className="ml-1.5 text-xs px-2 py-0.5 rounded bg-surface-muted text-foreground-muted font-mono border border-border tabular-nums">
              ★ {repoMetrics.stargazers_count}
            </span>
          </Button>
        </div>

        {/* Quick Install Bar */}
        <QuickInstallPill command={siteConfig.installCommand} />

        {/* Architecture Badges Bar */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs text-foreground-muted">
          <Badge variant="default" icon={Cpu}>
            NVIDIA NIM Low-Latency Inference
          </Badge>
          <Badge variant="default" icon={ShieldCheck}>
            Bubblewrap Linux Container Sandbox
          </Badge>
          <Badge variant="default" icon={Terminal}>
            Ratatui Full-Screen TUI
          </Badge>
        </div>

        {/* Hero Interactive Terminal & Screenshot Demonstration */}
        <HeroDemonstration />
      </Container>
    </section>
  );
}
