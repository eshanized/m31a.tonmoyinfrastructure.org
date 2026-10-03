import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'About M31A',
  description:
    'M31A (M31 Autonomous) is a Rust-native autonomous software-engineering runtime built by Tonmoy Infrastructure & Vision.',
};

export default function AboutPage() {
  return (
    <>
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="About"
            title="M31 Autonomous"
            description="A Rust-native autonomous software-engineering runtime with non-bypassable policy gates and verifiable execution."
          />
        </Container>
      </Section>

      <Section className="border-b border-border/40">
        <Container className="max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold tracking-tight">What M31A is</h2>
            <p className="mt-3 text-muted-foreground">
              M31A (M31 Autonomous) is a single-crate, high-assurance, Rust-native
              autonomous software engineering runtime. It provides deterministic
              lifecycle control, strict multi-layer security policies, resource-bounded
              execution, continuous verification, crash-resilient checkpoints, and local
              observability for autonomous coding agents.
            </p>
            <p className="mt-4 text-muted-foreground">
              Unlike ad-hoc agent scripts or loose orchestration frameworks that delegate
              execution authority to non-deterministic large language models, M31A treats
              the LLM as an untrusted reasoning component. The runtime strictly owns state,
              scheduling, file access, command execution, policies, verification, and
              completion criteria.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/40">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-bold tracking-tight">Architectural philosophy</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-primary">Single Trusted Kernel</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Implemented as a single, clean Rust crate without foreign runtime
                dependencies. No Node.js, Python, or GPU required for core runtime execution.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-primary">Deterministic Governance</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every side effect passes through an 11-stage policy gate. The runtime owns
                the decision — the model proposes, the runtime decides.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-primary">Verifiable Execution</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Continuous verification against completion criteria. Every action is
                checked, and evidence is collected before the runtime accepts a result.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-5">
              <h3 className="font-semibold text-primary">Terminal-Native</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                M31A lives in the developer&apos;s terminal. A full TUI cockpit provides
                real-time visibility into planning, execution, verification, and Git state.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/40">
        <Container className="max-w-3xl">
          <h2 className="text-xl font-bold tracking-tight">Project details</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Detail label="Version" value={`v${PRODUCT.version}`} />
            <Detail label="Language" value="Rust" />
            <Detail label="Edition" value={PRODUCT.edition} />
            <Detail label="MSRV" value={PRODUCT.rustVersion} />
            <Detail label="License" value={PRODUCT.licenses.join(' / ')} />
            <Detail label="Organization" value={PRODUCT.orgName} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-xl font-bold tracking-tight">Tonmoy Infrastructure &amp; Vision</h2>
          <p className="mt-3 text-muted-foreground">
            M31A is developed by {PRODUCT.orgName}. The project is open source and
            community-driven, with all development happening on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={PRODUCT.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View on GitHub
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Community
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card/30 p-4">
      <div className="font-mono text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}
