import { Terminal, ArrowRight } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import { getRepoMetrics } from '@/lib/github';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import QuickInstallPill from '@/components/hero/QuickInstallPill';

export default async function FinalCTA() {
  const metrics = await getRepoMetrics();

  return (
    <section className="relative w-full py-16 md:py-24 bg-background border-t border-border">
      <Container size="default" className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono font-medium text-accent bg-accent-subtle px-2.5 py-0.5 rounded-md border border-accent/20 mb-4">
          Open Source &amp; Sovereign
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
          Your next engineering session starts here.
        </h2>

        <p className="mt-4 text-sm sm:text-base text-foreground-muted max-w-xl leading-relaxed text-balance">
          An autonomous systems runtime built for developers who demand verifiable execution and kernel-level container boundaries.
        </p>

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
              ★ {metrics.stargazers_count}
            </span>
          </Button>
        </div>

        <div className="mt-6 flex justify-center">
          <QuickInstallPill command={siteConfig.installCommand} />
        </div>
      </Container>
    </section>
  );
}
