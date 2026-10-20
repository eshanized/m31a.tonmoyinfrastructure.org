import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/m31a/seo';
import { HeroSection } from '@/components/home/hero-section';
import { WhyM31A } from '@/components/home/why-m31a';
import { ManifestoPhilosophy } from '@/components/home/manifesto-philosophy';
import { ProductStory } from '@/components/home/product-story';
import { ArchitectureDeepDive } from '@/components/home/architecture-deep-dive';
import { SecurityArchitecture } from '@/components/home/security-architecture';
import { InstallationSection } from '@/components/home/installation-section';
import { OpenSourceSection } from '@/components/home/open-source-section';
import { FinalCta } from '@/components/home/final-cta';
import { Container } from '@/components/site/section';

export const metadata: Metadata = createPageMetadata({
  title: "M31A — Open-Source Autonomous Coding Agent",
  description: "M31A is an open-source autonomous coding agent with a Rust-native runtime for terminal-based software engineering, controlled tool execution, verification, and recovery.",
  path: "/",
  keywords: [
    'open-source AI coding agent',
    'terminal coding agent',
    'autonomous coding agent',
    'Linux AI coding tool',
    'Rust AI agent',
    'AI software engineering agent',
    'Cursor alternative',
    'Claude Code alternative',
  ],
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <div className="w-full overflow-clip">
      <HeroSection />
      <WhyM31A />
      <ManifestoPhilosophy />

      <section id="product-demo" className="border-b border-[#27272D] py-20 sm:py-28">
        <Container>
          <div className="mb-10 grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-10">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F07865]">
                How the runtime is designed
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[#F5F0EB] sm:text-4xl">
                A documented engineering lifecycle.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#A9A6A5] sm:text-base">
              Explore the design principles behind planning, bounded execution, verification, and recovery. These are explanatory product details—not a live mission or a simulated terminal session.
            </p>
          </div>
          <ProductStory />
        </Container>
      </section>

      <ArchitectureDeepDive />
      <SecurityArchitecture />
      <InstallationSection />
      <OpenSourceSection />
      <FinalCta />
    </div>
  );
}
