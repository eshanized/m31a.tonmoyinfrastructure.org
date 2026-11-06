import { Sparkles, Terminal, ArrowRight } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import { getRepoMetrics } from '@/lib/github';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import QuickInstallPill from '@/components/hero/QuickInstallPill';

export default async function FinalCTA() {
  const metrics = await getRepoMetrics();

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden border-t border-border">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <Container size="default" className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono font-bold tracking-wider uppercase text-accent bg-accent-subtle px-3 py-1 rounded-full mb-6">
          Sovereign Autonomous Coding
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight text-balance">
          Your next engineering session starts here.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-foreground-muted max-w-2xl leading-relaxed text-balance">
          Explore an autonomous coding system built for developers who want more control over how software gets built.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href="/features"
            variant="primary"
            size="lg"
            icon={Sparkles}
            className="w-full sm:w-auto shadow-md"
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
              ★ {metrics.stargazers_count}
            </span>
          </Button>
        </div>

        <div className="mt-8 flex justify-center">
          <QuickInstallPill command={siteConfig.installCommand} />
        </div>
      </Container>
    </section>
  );
}
