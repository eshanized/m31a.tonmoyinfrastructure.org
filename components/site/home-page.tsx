'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Terminal,
  GitBranch,
  ArrowRight,
  Download,
  Github,
  MessageSquare,
  BrainCog,
  ShieldCheck,
  History,
  CheckCircle2,
  AlertTriangle,
  Lock,
  RefreshCw,
  Power,
  Eye,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Terminal as TerminalBox, TerminalCursor } from '@/components/site/terminal';
import { CodeBlock } from '@/components/site/code-block';
import { SectionHeader, SectionWrapper } from '@/components/site/section-header';
import { GenericBadge } from '@/components/site/status-badge';
import { WorkflowDiagram } from '@/components/site/workflow-diagram';
import { ArchitectureDiagram } from '@/components/site/architecture-diagram';
import { TuiShowcase } from '@/components/site/tui-showcase';
import { capabilities } from '@/content/capabilities';
import { principles } from '@/content/principles';
import {
  agentRoles,
  naturalLanguageWorkflows,
  comparisonRows,
  architectureLayers,
} from '@/content/architecture';
import { securityExamples } from '@/content/architecture';
import { GITLAB_URL } from '@/content/navigation';
import { GITHUB_RELEASES_URL, type RepoStats } from '@/lib/github';
import { cn } from '@/lib/utils';

export function HomePage({ stats }: { stats: RepoStats }) {
  return (
    <main className="pt-16">
      <HeroSection stats={stats} />
      <WhatIsSection />
      <ProblemSection />
      <EngineeringLoopSection />
      <CapabilitiesSection />
      <AgentsSection />
      <VerificationSection />
      <GitSection />
      <MemorySection />
      <FailureRecoverySection />
      <TuiSection />
      <SecuritySection />
      <NaturalLanguageSection />
      <ArchitectureSection />
      <ComparisonSection />
      <OpenSourceSection />
      <QuickstartSection />
      <RoadmapPreviewSection />
      <PhilosophySection />
      <FinalCTASection />
    </main>
  );
}

/* ── Hero ──────────────────────────────────────────────────── */

import { HeroStats } from '@/components/site/hero-stats';

function HeroSection({ stats }: { stats: RepoStats }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <GenericBadge variant="info">
                <span className="h-1.5 w-1.5 rounded-full bg-info" />
                Building
              </GenericBadge>
              <span className="font-sans text-xs text-muted-foreground">Open-source · Go-native</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Autonomous coding,{' '}
              <span className="text-primary">grounded in engineering state.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              M31A is a terminal-native software engineering agent that understands your
              codebase, plans and executes work, verifies changes, and preserves engineering
              state across sessions.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer">
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={GITLAB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                Terminal-first
              </span>
              <span className="flex items-center gap-1.5">
                <BrainCog className="h-3.5 w-3.5 text-primary" />
                Persistent state
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Verification-oriented
              </span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="h-3.5 w-3.5 text-primary" />
                Git-aware
              </span>
            </div>

            <HeroStats commits={stats.commits} issues={stats.issues} pullRequests={stats.pullRequests} />
          </div>
          <div className="relative">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTerminal() {
  return (
    <TerminalBox title="m31a" className="glow-primary">
      <div className="space-y-1">
        <div className="text-muted-foreground">
          <span className="text-primary">$ </span>m31a
        </div>
        <div className="h-2" />
        <div className="text-foreground">
          <span className="text-primary">{'>'} </span>
          add organization-level RBAC
        </div>
        <div className="h-2" />
        <div className="text-muted-foreground">Analyzing repository...</div>
        <div className="text-info">22 affected files</div>
        <div className="text-info">5 tasks</div>
        <div className="text-info">2 execution waves</div>
        <div className="h-2" />
        <div className="text-success">Plan ready.</div>
        <div className="h-3" />
        <div className="flex gap-2">
          <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">Run</span>
          <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-muted-foreground">Inspect</span>
        </div>
        <div className="h-4" />
        <div className="border-t border-border/40 pt-3">
          <div className="text-muted-foreground">M31A · RUN 84F2 · feature/rbac</div>
          <div className="h-1" />
          <div className="text-foreground/80">PLAN</div>
          <div className="pl-2 text-muted-foreground">5 tasks · 2 waves · MEDIUM</div>
          <div className="h-1" />
          <div className="text-foreground/80">EXECUTION</div>
          <div className="pl-2">
            <div className="text-success">✓ Role model</div>
            <div className="text-success">✓ Authorization service</div>
            <div className="text-info">● Route guards</div>
            <div className="text-muted-foreground/60">○ Persistence</div>
            <div className="text-muted-foreground/60">○ Verification</div>
          </div>
          <div className="h-1" />
          <div className="text-foreground/80">CURRENT</div>
          <div className="pl-2 text-muted-foreground">Implementer · edit_file · 3 files · 00:42</div>
          <div className="h-1" />
          <div className="text-foreground/80">VERIFICATION</div>
          <div className="pl-2 text-muted-foreground">0/5 complete</div>
          <div className="h-2" />
          <div className="text-muted-foreground">
            <span className="text-primary">{'>'} </span>
            steer the run or inspect details...
            <TerminalCursor />
          </div>
        </div>
      </div>
    </TerminalBox>
  );
}

/* ── What M31A Is ──────────────────────────────────────────── */

function WhatIsSection() {
  return (
    <SectionWrapper>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="What M31A Is"
            title="An engineering operating system for autonomous coding."
            description="M31A lives in your terminal. It is not a chatbot, not an IDE plugin, and not a thin wrapper around an API. It is a persistent runtime that turns natural-language intent into verified, resumable engineering work."
            align="left"
          />
          <div className="mt-6 space-y-3">
            {[
              'Understand the repository before changing it.',
              'Plan the work. Execute it safely. Verify the result.',
              'Persistent engineering state for autonomous coding.',
              'Your terminal becomes an engineering workstation.',
            ].map((line) => (
              <div key={line} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{line}</span>
              </div>
            ))}
          </div>
        </div>

        <CodeBlock
          language="terminal"
          code={`# M31A is a runtime, not a chatbot
$ m31a

> explain how authentication works

  # M31A builds a structural model of your
  # codebase, traces the auth pipeline, and
  # produces an annotated explanation with
  # evidence linked to source and commits.

> add organization-level RBAC

  # M31A analyzes impact, creates a TaskGraph,
  # executes tasks through specialized agents,
  # verifies every acceptance criterion, and
  # preserves the full run state to disk.`}
        />
      </div>
    </SectionWrapper>
  );
}

/* ── Problem Section ───────────────────────────────────────── */

function ProblemSection() {
  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="The Problem"
        title="Most coding agents think in conversations. M31A thinks in engineering work."
        description="Conversation-only agents lose state, skip planning, and cannot prove their work. M31A operates around engineering state and verified results."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Traditional */}
        <div className="rounded-lg border border-border bg-background/50 p-6">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <span className="font-sans text-sm font-semibold text-muted-foreground">Traditional</span>
          </div>
          <div className="space-y-2 font-sans text-sm">
            {['prompt', 'model', 'tools', 'response'].map((step, idx) => (
              <div key={step}>
                <div className="rounded border border-border/60 bg-muted/20 px-3 py-2 text-muted-foreground">
                  {step}
                </div>
                {idx < 3 && <div className="py-0.5 text-center text-muted-foreground/40">↓</div>}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            No persistent state. No explicit planning. No verification. Context is lost between turns.
          </p>
        </div>

        {/* M31A */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-sans text-sm font-semibold text-primary">M31A</span>
          </div>
          <div className="space-y-1.5 font-sans text-xs">
            {[
              'intent',
              'repository understanding',
              'impact analysis',
              'plan',
              'task graph',
              'execution',
              'verification',
              'durable engineering state',
            ].map((step, idx) => (
              <div key={step}>
                <div className="rounded border border-primary/20 bg-primary/5 px-3 py-1.5 text-foreground/90">
                  {step}
                </div>
                {idx < 7 && <div className="py-0 text-center text-primary/30">↓</div>}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-primary/80">
            State survives context loss. Work is planned, executed, and verified with evidence.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Engineering Loop ──────────────────────────────────────── */

function EngineeringLoopSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="The Engineering Loop"
        title="From intent to durable result."
        description="Every piece of work follows the same loop: understand, analyze, plan, execute, verify, persist."
      />
      <div className="mt-12">
        <WorkflowDiagram />
      </div>
    </SectionWrapper>
  );
}

/* ── Capabilities Grid ─────────────────────────────────────── */

function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="capabilities" className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="Core Capabilities"
        title="Built around engineering state, not conversation."
        description="Each capability is a first-class subsystem of the runtime, not a prompt template."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        {/* Capability list */}
        <div className="lg:col-span-5">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActive(idx)}
                  className={cn(
                    'flex items-start gap-3 rounded-lg border p-3 text-left transition-all',
                    active === idx
                      ? 'border-primary/40 bg-primary/5'
                      : 'border-border bg-background/40 hover:border-border/80 hover:bg-muted/20'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
                      active === idx
                        ? 'bg-primary/15 text-primary'
                        : 'bg-muted/40 text-muted-foreground'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div
                      className={cn(
                        'font-sans text-sm font-medium',
                        active === idx ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      {cap.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active capability detail */}
        <div className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = capabilities[active].icon;
                return (
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                );
              })()}
              <h3 className="font-sans text-lg font-semibold text-foreground">
                {capabilities[active].title}
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              {capabilities[active].description}
            </p>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-[hsl(220_20%_3%)] p-4 font-mono text-xs leading-relaxed text-foreground/90">
              {capabilities[active].terminalContent}
            </pre>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Agents Section ────────────────────────────────────────── */

function AgentsSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Autonomous Execution"
        title="Specialized agents, not personalities."
        description="Each agent operates through an explicit contract with defined inputs, outputs, and verification obligations. They are engineering functions, not simulated team members."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <TerminalBox title="agents">
          <pre className="text-xs leading-relaxed sm:text-sm">
            <span className="text-primary">Supervisor</span>
            {'\n'}
            <span className="text-muted-foreground">├── Explorer</span>{'\n'}
            <span className="text-muted-foreground">├── Researcher</span>{'\n'}
            <span className="text-muted-foreground">├── Architect</span>{'\n'}
            <span className="text-muted-foreground">├── Planner</span>{'\n'}
            <span className="text-muted-foreground">├── Implementer</span>{'\n'}
            <span className="text-muted-foreground">├── Tester</span>{'\n'}
            <span className="text-muted-foreground">├── Debugger</span>{'\n'}
            <span className="text-muted-foreground">├── Verifier</span>{'\n'}
            <span className="text-muted-foreground">├── Reviewer</span>{'\n'}
            <span className="text-muted-foreground">├── Security Auditor</span>{'\n'}
            <span className="text-muted-foreground">├── Git Specialist</span>{'\n'}
            <span className="text-muted-foreground">└── Release Engineer</span>{'\n'}
            {'\n'}
            <span className="text-primary">Contract-bound · Not personalities</span>
          </pre>
        </TerminalBox>

        <div className="grid gap-3 sm:grid-cols-2">
          {agentRoles.map((role) => (
            <div
              key={role.name}
              className="rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-primary/30"
            >
              <div className="font-sans text-sm font-semibold text-primary">{role.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{role.responsibility}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Verification Section ──────────────────────────────────── */

function VerificationSection() {
  return (
    <SectionWrapper id="verification" className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="Verification"
        title={'"Done" is not evidence.'}
        description="Every acceptance criterion produces a verification strategy that runs tests, analysis, or commands and collects proof. Model confidence does not equal correctness."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <TerminalBox title="verification · REQ-AUTH-04">
          <pre className="text-xs leading-relaxed sm:text-sm">
            <span className="text-foreground/80">REQ-AUTH-04</span>{'\n\n'}
            <span className="text-muted-foreground">Expired access tokens must be rejected.</span>{'\n\n'}
            <span className="text-success">✓ unit tests        12 passed</span>{'\n'}
            <span className="text-success">✓ integration tests  8 passed</span>{'\n'}
            <span className="text-success">✓ API verification   4 passed</span>{'\n'}
            <span className="text-success">✓ regression scan   23 passed</span>{'\n\n'}
            <span className="text-primary">Result: VERIFIED</span>{'\n\n'}
            <span className="text-muted-foreground">Evidence: 47 checks · 0 failures</span>
          </pre>
        </TerminalBox>

        <div className="flex flex-col justify-center gap-4">
          <div className="space-y-3 font-sans text-sm">
            {[
              { label: 'Acceptance criterion', icon: CheckCircle2, color: 'text-muted-foreground' },
              { label: 'Verification strategy', icon: Eye, color: 'text-info' },
              { label: 'Tests / analysis / commands', icon: Zap, color: 'text-warning' },
              { label: 'Evidence', icon: ShieldCheck, color: 'text-primary' },
              { label: 'Verified', icon: CheckCircle2, color: 'text-success' },
            ].map(({ label, icon: Icon, color }, idx, arr) => (
              <div key={label}>
                <div className="flex items-center gap-2.5 rounded-lg border border-border bg-background/40 px-4 py-2.5">
                  <Icon className={cn('h-4 w-4', color)} />
                  <span className="text-foreground/90">{label}</span>
                </div>
                {idx < arr.length - 1 && <div className="py-0.5 text-center text-muted-foreground/40">↓</div>}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            M31A does not imply that model confidence equals correctness. Success is demonstrated
            through executable evidence, not asserted.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Git Section ───────────────────────────────────────────── */

function GitSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Git Intelligence"
        title="Git is a first-class domain."
        description="Branches, worktrees, diffs, history, and semantic commits are native to M31A — not bolted on. Destructive operations are protected by default."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <TerminalBox title="git · semantic commits">
          <pre className="text-xs leading-relaxed sm:text-sm">
            <span className="text-primary">{'> '}</span>
            <span className="text-foreground/90">Split my current changes</span>{'\n'}
            <span className="text-foreground/90">into logical commits.</span>{'\n\n'}
            <span className="text-muted-foreground">Detected 4 groups.</span>{'\n\n'}
            <span className="text-foreground/80">1  feat(auth): add org roles</span>{'\n'}
            <span className="text-foreground/80">2  feat(auth): enforce guards</span>{'\n'}
            <span className="text-foreground/80">3  test(auth): auth matrix</span>{'\n'}
            <span className="text-foreground/80">4  docs(auth): role semantics</span>{'\n\n'}
            <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">Accept</span>
            {'  '}
            <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-muted-foreground">Customize</span>
          </pre>
        </TerminalBox>

        <div className="space-y-3">
          {[
            { title: 'Branch state', desc: 'Track current branch, base, ahead/behind, and worktree.' },
            { title: 'Diffs & history', desc: 'Semantic diffs with architectural context, not raw patches.' },
            { title: 'Regression analysis', desc: 'Identify regressions by correlating commits with test failures.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card/40 p-4">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-primary" />
                <span className="font-sans text-sm font-semibold">{item.title}</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {[
            { title: 'Semantic commits', desc: 'Automatic decomposition of changes into logical, conventional commits.' },
            { title: 'Worktree isolation', desc: 'Each run operates in an isolated worktree for safety.' },
            { title: 'Protected operations', desc: 'Force push, history rewrite, and deletion require explicit approval.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card/40 p-4">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="font-sans text-sm font-semibold">{item.title}</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Persistent Memory ─────────────────────────────────────── */

function MemorySection() {
  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Persistent Engineering Memory"
            title="Your project remembers."
            description="Model context is disposable. Engineering state is durable. M31A preserves everything that matters across sessions, crashes, and provider switches."
            align="left"
          />
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              'Project state',
              'Runs',
              'Requirements',
              'Decisions',
              'Research',
              'Plans',
              'Verification',
              'Learnings',
              'Handoffs',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <TerminalBox title=".m31a/ · project state">
          <pre className="text-xs leading-relaxed sm:text-sm">
            <span className="text-primary">.m31a/</span>{'\n\n'}
            <span className="text-muted-foreground"> project</span>{'\n'}
            <span className="text-muted-foreground"> requirements</span>{'\n'}
            <span className="text-muted-foreground"> roadmap</span>{'\n'}
            <span className="text-muted-foreground"> decisions</span>{'\n'}
            <span className="text-muted-foreground"> research</span>{'\n'}
            <span className="text-muted-foreground"> plans</span>{'\n'}
            <span className="text-muted-foreground"> tasks</span>{'\n'}
            <span className="text-muted-foreground"> runs</span>{'\n'}
            <span className="text-muted-foreground"> verification</span>{'\n'}
            <span className="text-muted-foreground"> handoffs</span>{'\n'}
            <span className="text-muted-foreground"> learnings</span>{'\n\n'}
            <span className="text-info">State survives context loss.</span>
          </pre>
        </TerminalBox>
      </div>
    </SectionWrapper>
  );
}

/* ── Failure Recovery ──────────────────────────────────────── */

function FailureRecoverySection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Failure Recovery & Crash Recovery"
        title="M31A does not collapse when an agent fails."
        description="Failed tasks can be retried, repaired, replanned, or cancelled. Durable checkpoints preserve state across process crashes and provider failures."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <TerminalBox title="run failed · task 4">
          <pre className="text-xs leading-relaxed sm:text-sm">
            <span className="text-destructive">RUN FAILED</span>{'\n\n'}
            <span className="text-foreground/80">Task 4 · Persistence integration</span>{'\n\n'}
            <span className="text-muted-foreground">Failure:</span>{'\n'}
            <span className="text-foreground/90">  integration test failed</span>{'\n\n'}
            <span className="text-muted-foreground">Cause:</span>{'\n'}
            <span className="text-foreground/90">  expected organization_id</span>{'\n'}
            <span className="text-foreground/90">  column missing</span>{'\n\n'}
            <span className="text-muted-foreground">Recovery:</span>{'\n\n'}
            <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">Repair</span>
            {'  '}
            <span className="rounded border border-info/40 bg-info/10 px-2 py-0.5 text-info">Retry</span>{'\n'}
            <span className="rounded border border-warning/40 bg-warning/10 px-2 py-0.5 text-warning">Replan</span>
            {'  '}
            <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-muted-foreground">Inspect</span>{'\n'}
            <span className="rounded border border-destructive/40 bg-destructive/10 px-2 py-0.5 text-destructive">Stop</span>
          </pre>
        </TerminalBox>

        <TerminalBox title="crash recovery · checkpoint">
          <pre className="text-xs leading-relaxed sm:text-sm">
            <span className="text-warning">M31A stopped unexpectedly.</span>{'\n\n'}
            <span className="text-foreground/80">Run 84F2 preserved.</span>{'\n\n'}
            <span className="text-muted-foreground">Last checkpoint:</span>{'\n'}
            <span className="text-foreground/90">  Task 3 · Route guards</span>{'\n\n'}
            <span className="text-muted-foreground">State:</span>{'\n'}
            <span className="text-success">  2 tasks completed</span>{'\n'}
            <span className="text-info">  1 task running</span>{'\n'}
            <span className="text-muted-foreground/60">  2 tasks pending</span>{'\n\n'}
            <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">Resume Run</span>{'\n'}
            <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-muted-foreground">Inspect State</span>
          </pre>
        </TerminalBox>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: 'Retry', icon: RefreshCw },
          { label: 'Repair', icon: Zap },
          { label: 'Replan', icon: BrainCog },
          { label: 'Resume', icon: Power },
          { label: 'Cancel', icon: AlertTriangle },
          { label: 'Checkpoint', icon: ShieldCheck },
        ].map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card/40 p-3 text-center">
            <Icon className="h-4 w-4 text-primary" />
            <span className="font-sans text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── TUI Showcase ──────────────────────────────────────────── */

function TuiSection() {
  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="TUI Showcase"
        title="The terminal is a projection of the runtime."
        description="The TUI renders state from the runtime — it does not own business logic. Switch between core surfaces to see how M31A presents engineering work."
      />
      <div className="mt-12">
        <TuiShowcase />
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        The TUI is a projection, not the runtime. All state lives in the engine.
      </p>
    </SectionWrapper>
  );
}

/* ── Security Section ──────────────────────────────────────── */

function SecuritySection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Security"
        title="Least privilege. Untrusted content. Protected actions."
        description="M31A treats model-generated commands and repository content as untrusted. A capability-based permission model governs every action."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {securityExamples.map((ex) => (
          <div key={ex.title}>
            <h3 className="mb-2 font-sans text-sm font-semibold text-primary">{ex.title}</h3>
            <TerminalBox showHeader={false}>
              <pre className="text-xs leading-relaxed">{ex.content}</pre>
            </TerminalBox>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          'Path containment',
          'Secret protection',
          'Shell safety',
          'Git safety',
          'Checkpointing',
          'Prompt injection defenses',
          'Untrusted repository content',
          'Capability policies',
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-lg border border-border bg-card/40 px-3 py-2.5">
            <Lock className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="font-sans text-xs text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── Natural Language Workflows ────────────────────────────── */

function NaturalLanguageSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="Natural-Language Workflows"
        title="What would you ask M31A?"
        description="Every query maps to an engineering workflow: intent → analysis → action → evidence."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-2">
            {naturalLanguageWorkflows.map((wf, idx) => (
              <button
                key={wf.query}
                onClick={() => setActive(idx)}
                className={cn(
                  'rounded-lg border p-3 text-left font-sans text-sm transition-all',
                  active === idx
                    ? 'border-primary/40 bg-primary/5 text-foreground'
                    : 'border-border bg-background/40 text-muted-foreground hover:border-border/80 hover:text-foreground'
                )}
              >
                <span className="text-primary">{'> '}</span>
                {wf.query}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <div className="mb-4 font-sans text-sm text-primary">
              {'> '}
              {naturalLanguageWorkflows[active].query}
            </div>
            <div className="space-y-3">
              {naturalLanguageWorkflows[active].steps.map((step, idx) => (
                <div key={step.phase} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-sans text-xs font-bold text-primary">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-sans text-sm font-semibold text-foreground">{step.phase}</div>
                    <div className="text-sm text-muted-foreground">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-border/40 pt-3 font-sans text-xs text-success">
              ✓ Evidence produced and persisted to engineering state
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Architecture Section ──────────────────────────────────── */

function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture">
      <SectionHeader
        eyebrow="Architecture"
        title="Six layers, one runtime."
        description="M31A separates interaction, intelligence, engineering, execution, assurance, and memory into distinct layers — each with clear responsibilities."
      />

      <div className="mt-12">
        <ArchitectureDiagram />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {architectureLayers.map((layer) => (
          <div key={layer.id} className="rounded-lg border border-border bg-card/40 p-5">
            <h3 className="font-sans text-sm font-semibold text-primary">{layer.name}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">{layer.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {layer.responsibilities.map((r) => (
                <span
                  key={r}
                  className="rounded border border-border bg-muted/30 px-2 py-0.5 font-sans text-[10px] text-muted-foreground"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── Open Source / GitHub ──────────────────────────────────── */

function OpenSourceSection() {
  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="Open Source"
        title="An engineering project, not a black box."
        description="M31A is open-source and built in the open. The codebase, issues, and contributions are all visible."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <div className="flex items-center gap-3">
              <Github className="h-6 w-6 text-primary" />
              <div>
                <div className="font-sans text-sm font-semibold">GitHub Repository</div>
                <div className="font-sans text-xs text-muted-foreground">github.com/eshanized/M31A</div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link href={GITLAB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`${GITLAB_URL}/issues`} target="_blank" rel="noopener noreferrer">
                  Issues
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`${GITLAB_URL}/pulls`} target="_blank" rel="noopener noreferrer">
                  Pull Requests
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-background/50 p-4">
              <History className="h-4 w-4 text-muted-foreground" />
              <div className="mt-2 font-sans text-xs text-muted-foreground">Releases</div>
              <div className="font-sans text-sm text-foreground/80">View on GitHub</div>
            </div>
            <div className="rounded-lg border border-border bg-background/50 p-4">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <div className="mt-2 font-sans text-xs text-muted-foreground">License</div>
              <div className="font-sans text-sm text-foreground/80">See repository</div>
            </div>
          </div>
        </div>

        <CodeBlock
          language="bash"
          code={`git clone https://github.com/eshanized/M31A.git
cd M31A

go build ./cmd/m31a
./m31a`}
        />
      </div>
    </SectionWrapper>
  );
}

/* ── Quickstart ────────────────────────────────────────────── */

function QuickstartSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Quickstart"
        title="Three steps to your first run."
        description="Install, start, and describe the work. M31A handles the rest."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          {
            num: '1',
            title: 'Install',
            code: `git clone https://github.com/eshanized/M31A.git
cd M31A
go build ./cmd/m31a`,
          },
          {
            num: '2',
            title: 'Start',
            code: `export NVIDIA_API_KEY="..."
./m31a`,
          },
          {
            num: '3',
            title: 'Describe the work',
            code: `> explain how authentication works

> add organization-level RBAC`,
          },
        ].map((step) => (
          <div key={step.num} className="rounded-lg border border-border bg-card/40 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-sans text-sm font-bold text-primary">
                {step.num}
              </span>
              <h3 className="font-sans text-sm font-semibold">{step.title}</h3>
            </div>
            <div className="mt-4">
              <CodeBlock language="bash" code={step.code} showCopy={false} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border bg-background/50 p-4">
        <p className="text-xs text-muted-foreground">
          Provider setup: v1 targets{' '}
          <span className="font-sans text-foreground/80">nvidia/nemotron-3-ultra-550b-a55b</span>{' '}
          through NVIDIA Build. The runtime architecture is provider-independent. Never place a
          real API key in committed code.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ── Roadmap Preview ──────────────────────────────────────── */

function RoadmapPreviewSection() {
  const previewItems = [
    { label: 'Agent runtime', status: 'Building' },
    { label: 'TaskGraph execution', status: 'Building' },
    { label: 'Repository intelligence', status: 'Building' },
    { label: 'Capability policies', status: 'Building' },
    { label: 'Impact analysis', status: 'Planned' },
    { label: 'Semantic commit splitting', status: 'Planned' },
    { label: 'MCP integration', status: 'Exploring' },
    { label: 'Team workflows', status: 'Exploring' },
  ];

  const statusColor: Record<string, string> = {
    Building: 'text-info bg-info/10 border-info/30',
    Planned: 'text-warning bg-warning/10 border-warning/30',
    Exploring: 'text-muted-foreground bg-muted/40 border-muted-foreground/30',
  };

  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="Roadmap"
        title="What is being built."
        description="Status labels reflect actual development state — not marketing aspirations."
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {previewItems.map((item) => (
          <div key={item.label} className="rounded-lg border border-border bg-background/50 p-4">
            <div className="text-sm font-medium text-foreground/90">{item.label}</div>
            <span
              className={cn(
                'mt-2 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-sans text-xs',
                statusColor[item.status]
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button asChild variant="outline">
          <Link href="/roadmap">
            View full roadmap
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

/* ── Philosophy ────────────────────────────────────────────── */

function PhilosophySection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Developer Philosophy"
        title="Principles that govern the runtime."
        description="These are not slogans. They are engineering constraints that shape every design decision in M31A."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, idx) => (
          <div
            key={p.title}
            className="group relative rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-primary/30"
          >
            <span className="font-sans text-xs text-primary/40">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-sans text-sm font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── Comparison Section ────────────────────────────────────── */

function ComparisonSection() {
  const cellMap = {
    full: { label: '✓', className: 'text-success' },
    partial: { label: '~', className: 'text-warning' },
    limited: { label: '—', className: 'text-muted-foreground/50' },
  };

  return (
    <SectionWrapper className="border-y border-border bg-card/30">
      <SectionHeader
        eyebrow="How M31A Is Different"
        title="Architectural categories, not feature wars."
        description="No competitor is named. This is about architectural approaches and what they structurally support."
      />

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 text-left font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Approach
              </th>
              <th className="px-2 py-3 text-center font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Conversation
              </th>
              <th className="px-2 py-3 text-center font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Durable State
              </th>
              <th className="px-2 py-3 text-center font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Explicit Planning
              </th>
              <th className="px-2 py-3 text-center font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Verification
              </th>
              <th className="px-2 py-3 text-center font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Repo Intelligence
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.approach}
                className={cn(
                  'border-b border-border/40',
                  row.highlight && 'bg-primary/5'
                )}
              >
                <td className={cn('py-3 text-sm font-medium', row.highlight ? 'text-primary' : 'text-foreground/90')}>
                  {row.approach}
                </td>
                <td className={cn('px-2 py-3 text-center font-sans text-lg', cellMap[row.conversation].className)}>
                  {cellMap[row.conversation].label}
                </td>
                <td className={cn('px-2 py-3 text-center font-sans text-lg', cellMap[row.durableState].className)}>
                  {cellMap[row.durableState].label}
                </td>
                <td className={cn('px-2 py-3 text-center font-sans text-lg', cellMap[row.explicitPlanning].className)}>
                  {cellMap[row.explicitPlanning].label}
                </td>
                <td className={cn('px-2 py-3 text-center font-sans text-lg', cellMap[row.verification].className)}>
                  {cellMap[row.verification].label}
                </td>
                <td className={cn('px-2 py-3 text-center font-sans text-lg', cellMap[row.repoIntelligence].className)}>
                  {cellMap[row.repoIntelligence].label}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4 font-sans text-xs text-muted-foreground">
        <span><span className="text-success">✓</span> Full</span>
        <span><span className="text-warning">~</span> Partial</span>
        <span><span className="text-muted-foreground/50">—</span> Limited</span>
      </div>
    </SectionWrapper>
  );
}

/* ── Final CTA ─────────────────────────────────────────────── */

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 dot-bg opacity-20" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Build with an agent that{' '}
          <span className="text-primary">remembers the work.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
          M31A lives in your terminal, understands your repository, and turns engineering intent
          into verified, resumable work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Download
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs/architecture">Read the Architecture</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={GITLAB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
