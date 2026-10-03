import Link from 'next/link';
import {
  ArrowRight,
  Download,
  BookOpen,
  Github,
  ShieldCheck,
  Terminal,
  GitBranch,
  CheckCircle2,
  Activity,
  Cpu,
  Lock,
  Workflow,
  Database,
  Bot,
  Wrench,
} from 'lucide-react';
import { TerminalWindow } from '@/components/site/terminal-window';
import { Section, Container, SectionHeader, StatusBadge } from '@/components/site/section';
import { CodeBlock } from '@/components/site/code-block';
import { InteractiveCockpit } from '@/components/cockpit/interactive-cockpit';
import { PRODUCT, FEATURES } from '@/lib/m31a/product';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot, ShieldCheck, CheckCircle2, Terminal, Wrench, GitBranch, Workflow, Database, Activity, Lock, Cpu,
};

const FLOW_STEPS = [
  { num: '01', title: 'Start M31A', desc: 'Launch the cockpit from your terminal.' },
  { num: '02', title: 'Describe the task', desc: 'State what needs to be done in natural language.' },
  { num: '03', title: 'Workspace analysis', desc: 'M31A reads and understands your codebase.' },
  { num: '04', title: 'Planning', desc: 'The agent decomposes work into a task graph.' },
  { num: '05', title: 'Policy evaluation', desc: 'The runtime evaluates each proposed action.' },
  { num: '06', title: 'Tool execution', desc: 'Authorized tools execute within the sandbox.' },
  { num: '07', title: 'Verification', desc: 'Changes are checked against completion criteria.' },
  { num: '08', title: 'Result delivered', desc: 'Verified work lands in your workspace.' },
];

const PHILOSOPHY_STEPS = [
  { label: 'Model output', desc: 'The LLM proposes actions.', icon: Bot },
  { label: 'Runtime evaluation', desc: 'The policy gate inspects each proposal.', icon: ShieldCheck },
  { label: 'Authorized action', desc: 'Only approved actions reach the workspace.', icon: Lock },
  { label: 'Verification', desc: 'Results are checked before acceptance.', icon: CheckCircle2 },
];

export default function HomePage() {
  const heroFeatures = FEATURES.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  M31 Autonomous
                </span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">
                  v{PRODUCT.version}
                </span>
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                An autonomous coding agent that lives in your terminal.
              </h1>
              <p className="max-w-xl text-pretty text-lg text-muted-foreground">
                M31A is a Rust-native runtime that treats the LLM as an untrusted reasoning component.
                The runtime owns state, scheduling, policies, and verification.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/download"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-cyan"
                >
                  <Download className="h-4 w-4" />
                  Download M31A
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <BookOpen className="h-4 w-4" />
                  View Documentation
                </Link>
                <Link
                  href={PRODUCT.repositoryUrl}
                  className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <span className="font-mono text-xs text-muted-foreground">Rust {PRODUCT.rustVersion}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-mono text-xs text-muted-foreground">{PRODUCT.licenses.join(' / ')}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-mono text-xs text-muted-foreground">Single crate</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <TerminalWindow
                className="relative"
                title="m31a — cockpit"
                loop
                sessions={[
                  {
                    typingSpeed: 20,
                    lines: [
                      { type: 'prompt', text: 'm31a' },
                      { type: 'output', text: '' },
                      { type: 'info', text: 'M31A — M31 Autonomous' },
                      { type: 'info', text: 'v0.1.1 PRODUCTION' },
                      { type: 'output', text: '' },
                      { type: 'status', text: '● EXECUTING' },
                      { type: 'output', text: 'model: reasoning' },
                      { type: 'output', text: 'task: inspect repository structure' },
                      { type: 'output', text: '' },
                      { type: 'status', text: '◐ planning' },
                      { type: 'status', text: '◐ reading workspace' },
                      { type: 'status', text: '◐ running tools' },
                      { type: 'success', text: '✓ verification passed' },
                      { type: 'output', text: '' },
                      { type: 'success', text: '✓ task complete — 4 files modified' },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy — The model proposes. The runtime decides. */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg-fine opacity-20" />
        <Container className="relative">
          <SectionHeader
            align="center"
            eyebrow="Architectural Principle"
            title="The model proposes. The runtime decides."
            description="Unlike ad-hoc agent scripts that delegate execution authority to non-deterministic LLMs, M31A treats the model as an untrusted reasoning component. Every side effect passes through runtime governance."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PHILOSOPHY_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="group relative">
                  <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="mb-1 font-mono text-xs text-muted-foreground">
                      Stage {i + 1}
                    </div>
                    <h3 className="font-semibold">{step.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < PHILOSOPHY_STEPS.length - 1 && (
                    <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-border lg:block">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* AI can generate code. M31A is built around execution. */}
      <Section className="border-b border-border/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Why M31A"
                title="AI can generate code. M31A is built around execution."
                description="Generating code is the easy part. Controlling what happens next — file writes, process spawning, Git operations, network requests — is where the real engineering lives. M31A is a runtime, not a chatbot."
              />
              <div className="mt-6 space-y-3">
                {[
                  'Deterministic lifecycle control — the runtime owns state, not the model.',
                  '11-stage policy gate on every side effect. Non-bypassable by design.',
                  'Resource-bounded execution with capability boundaries.',
                  'Continuous verification against completion criteria.',
                  'Crash-resilient checkpoints with SQLite-backed persistence.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CodeBlock
                filename="config.example.toml"
                language="toml"
                code={`[runtime]
channel = "production"
max_concurrent_tasks = 4

[policy]
require_verification = true
allow_network = false

[model]
provider = "nvidia"
streaming = true

[storage]
backend = "sqlite"
checkpoint_interval = "30s"

[telemetry]
tracing = true
local_only = true`}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Interactive Cockpit Experience */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <Container className="relative">
          <SectionHeader
            align="center"
            eyebrow="Terminal Cockpit"
            title="10 Real-Time Operational Surfaces"
            description="Built on Ratatui 0.30 with RAII terminal protection. Select any surface tab below or step through the simulated 12-stage runtime lifecycle to observe how M31A presents state, policies, verification, and telemetry."
          />
          <div className="mt-10">
            <InteractiveCockpit />
          </div>
        </Container>
      </Section>

      {/* Core features grid */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Architecture"
            title="What M31A actually does"
            description="Each subsystem is designed around a single principle: the runtime owns execution."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {heroFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? Cpu;
              return (
                <Link
                  key={feature.id}
                  href="/features"
                  className="group rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <StatusBadge status={feature.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
            >
              View all features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Developer flow */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Developer Journey"
            title="From task to verified result"
            description="Every step is owned by the runtime. The model proposes actions; the runtime decides whether they execute."
          />
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW_STEPS.map((step, i) => (
              <div
                key={i}
                className="relative rounded-lg border border-border/60 bg-card/30 p-5"
              >
                <div className="mb-2 font-mono text-xs text-primary">{step.num}</div>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Security highlight */}
      <Section className="border-b border-border/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl border border-border bg-card/40 p-8">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary">1</span>
                    <span className="text-muted-foreground">Model proposes: write to src/main.rs</span>
                  </div>
                  <div className="ml-3 border-l border-border pl-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary">2</span>
                      <span className="text-muted-foreground">Policy gate: check file access</span>
                    </div>
                  </div>
                  <div className="ml-6 border-l border-border pl-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs text-primary">3</span>
                      <span className="text-muted-foreground">Capability check: filesystem tool</span>
                    </div>
                  </div>
                  <div className="ml-9 border-l border-border pl-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/10 text-xs text-emerald-400">4</span>
                      <span className="text-muted-foreground">Tool execution: write within bounds</span>
                    </div>
                  </div>
                  <div className="ml-12 border-l border-border pl-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/10 text-xs text-emerald-400">5</span>
                      <span className="text-emerald-400">Verification: build check passed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="Security"
                title="Non-bypassable policy gates"
                description="Every side effect — file writes, process spawning, Git operations, network requests — passes through an 11-stage policy gate. No action reaches the workspace without runtime authorization."
              />
              <div className="mt-6 space-y-3">
                {[
                  'Capability boundaries enforced per tool.',
                  'Resource limits on memory, time, and file access.',
                  'Controlled side effects within the sandbox.',
                  'Cancellation at any stage of execution.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/security"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
              >
                Read the security model
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Architecture overview */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="System Design"
            title="A single trusted kernel"
            description="One Rust crate. No foreign runtime dependencies. No Node.js, Python, or GPU required for core runtime execution."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-xl border border-border bg-card/40 p-8">
              <div className="space-y-3 text-center font-mono text-sm">
                <ArchBlock label="User" sub="terminal" />
                <ArchArrow />
                <ArchBlock label="M31A CLI" sub="clap" highlight />
                <ArchArrow />
                <ArchBlock label="Agent / Runtime" sub="deterministic loop" highlight />
                <ArchArrow />
                <div className="grid grid-cols-3 gap-3">
                  <ArchBlock label="Model" sub="provider" small />
                  <ArchBlock label="Tools" sub="capability-bound" small />
                  <ArchBlock label="Policy" sub="11-stage gate" small />
                </div>
                <ArchArrow />
                <ArchBlock label="Verification" sub="quality gates" />
                <ArchArrow />
                <ArchBlock label="Workspace" sub="Git-attributed" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/architecture"
              className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
            >
              Explore the architecture
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-12 text-center sm:p-16">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 radial-glow" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to work differently?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Install M31A. Put the agent in your terminal.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/download"
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-cyan"
                >
                  <Download className="h-4 w-4" />
                  Download M31A
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <BookOpen className="h-4 w-4" />
                  Read the Docs
                </Link>
                <Link
                  href={PRODUCT.repositoryUrl}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ArchBlock({
  label,
  sub,
  highlight,
  small,
}: {
  label: string;
  sub: string;
  highlight?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border ${
        highlight
          ? 'border-primary/40 bg-primary/5'
          : 'border-border bg-secondary/30'
      } ${small ? 'p-2' : 'px-6 py-3'}`}
    >
      <div className={small ? 'text-xs font-semibold' : 'text-sm font-semibold'}>
        {label}
      </div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function ArchArrow() {
  return <div className="text-border">↓</div>;
}
