import Link from 'next/link';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Cpu } from 'lucide-react';
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
    <section className="relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-background">
      {/* Custom Canvas Particle Field Background */}
      <ParticleField />

      {/* Subtle radial ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none z-0" />

      <Container size="default" className="relative z-10 flex flex-col items-center text-center">
        {/* Category Badge */}
        <div className="inline-flex items-center mb-6 animate-fade-in">
          <Link
            href="/announcements"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border hover:border-accent-crimson/40 transition-all duration-200 shadow-xs text-xs font-medium text-foreground-muted hover:text-foreground btn-magnetic"
          >
            <span className="w-2 h-2 rounded-full bg-accent-crimson animate-pulse" />
            <span className="font-semibold text-foreground">M31A v{version}</span>
            <span className="text-foreground-subtle">•</span>
            <span>Latest Announcements</span>
            <ArrowRight className="w-3.5 h-3.5 text-foreground-subtle group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Hero Dominant Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-foreground max-w-5xl leading-[1.06] text-balance animate-fade-up">
          {siteConfig.headline}
        </h1>

        {/* Supporting Paragraph */}
        <p className="mt-6 text-base sm:text-xl text-foreground-muted max-w-2xl font-normal leading-relaxed text-balance animate-fade-up [animation-delay:150ms]">
          {siteConfig.subheadline} Powered by NVIDIA NIM frontier intelligence and Linux Bubblewrap isolation.
        </p>

        {/* Prominent CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto animate-fade-up [animation-delay:250ms]">
          <Button
            href="/features"
            variant="primary"
            size="lg"
            icon={Sparkles}
            className="w-full sm:w-auto shadow-md hover:shadow-xl"
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
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-surface-muted text-foreground-muted font-mono border border-border">
              ★ {repoMetrics.stargazers_count}
            </span>
          </Button>
        </div>

        {/* Interactive Quick Install Pill */}
        <div className="animate-fade-up [animation-delay:350ms]">
          <QuickInstallPill command={siteConfig.installCommand} />
        </div>

        {/* Feature Badges Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-foreground-muted animate-fade-up [animation-delay:400ms]">
          <Badge variant="default" icon={Cpu}>
            NVIDIA NIM Low-Latency Frontier Models
          </Badge>
          <Badge variant="default" icon={ShieldCheck}>
            Bubblewrap Linux Container Isolation
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
