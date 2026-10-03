import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Workflow, Cpu, Database, CheckCircle2, ShieldCheck, Terminal, Bot } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { CodeBlock } from '@/components/site/code-block';
import { InteractiveArchitecture } from '@/components/architecture/interactive-architecture';
import { PRODUCT, ARCHITECTURE_LAYERS } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Architecture — Layered Runtime & Kernel Design',
  description:
    'Technical deep-dive into M31A runtime layers (L0-L9), 12-stage autonomy controller loop, 8 agent roles, and downward-dependency architecture.',
};

export default function ArchitecturePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Systems Architecture"
            title="The Downward-Dependency Layered Runtime"
            description="M31A enforces a strict unidirectional dependency hierarchy organized into 10 layers (L0 to L9). Lower layers are strictly prohibited from importing or depending on higher layers."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="text-primary font-bold">Single-Crate Rust 1.85+</span>
            <span className="text-border">│</span>
            <span>Zero foreign runtime dependencies</span>
            <span className="text-border">│</span>
            <a
              href="https://github.com/eshanized/M31A/blob/master/docs/architecture/ARCHITECTURE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <span>docs/architecture/ARCHITECTURE.md</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </Container>
      </Section>

      {/* 1. Interactive L0–L9 Architecture Explorer */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Interactive System Model"
            title="Explore the 10 Runtime Layers"
            description="Click any layer to inspect its architectural subsystem, operational responsibilities, enforced invariants, and direct source code implementation."
          />

          <div className="mt-8">
            <InteractiveArchitecture />
          </div>
        </Container>
      </Section>

      {/* 2. The 12-Stage Autonomy Controller Loop */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Deterministic Lifecycle"
            title="The 12-Stage Autonomy Controller Loop"
            description="Every autonomous mission is orchestrated by the AutonomyController through a 12-stage deterministic execution lifecycle."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            {[
              { num: '01', name: 'Intake & Validation', desc: 'Ingests mission intent, resolves effective profile, validates configuration invariants.' },
              { num: '02', name: 'Context Compilation', desc: 'Gathers workspace symbols, baseline Git commit, and active security policies in XML trust envelopes.' },
              { num: '03', name: 'Plan Generation', desc: 'Consults planning model to generate a structured candidate task DAG.' },
              { num: '04', name: 'DAG Reconciliation', desc: 'Reconciles candidate plan with petgraph TaskGraph, preserving verified tasks across revisions.' },
              { num: '05', name: 'Topological Scheduling', desc: 'Selects ready tasks whose dependencies are satisfied; checks pre-admission quotas.' },
              { num: '06', name: 'Agent Dispatch', desc: 'Instantiates specialized agent role state machine (planner, implementer, verifier).' },
              { num: '07', name: 'Two-Phase Reservation', desc: 'Pre-allocates tokens, memory, and step quotas before invoking model or tool.' },
              { num: '08', name: 'Tool Execution & Policy', desc: 'Evaluates candidate actions through 11-stage policy gate; executes in OS sandbox.' },
              { num: '09', name: 'Post-Execution Settle', desc: 'Reconciles actual consumed resources and records structural execution telemetry.' },
              { num: '10', name: 'Evidence Verification', desc: 'Runs multi-tier checks (cargo test, clippy, syntax, anti-fake-diff reviews).' },
              { num: '11', name: 'Atomic Checkpointing', desc: 'Captures two-phase snapshot committing staged artifacts to SQLite persistence.' },
              { num: '12', name: 'Completion Gating', desc: 'Evaluates completion criteria; generates signed completion report with SHA-256 evidence.' },
            ].map((stage) => (
              <div key={stage.num} className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="flex items-center justify-between text-muted-foreground mb-1.5">
                  <span className="text-primary font-bold">STAGE {stage.num}</span>
                  <span className="text-[10px] text-zinc-500">L8 Controller</span>
                </div>
                <h4 className="font-semibold text-foreground text-sm font-sans">{stage.name}</h4>
                <p className="mt-1 text-muted-foreground text-xs font-sans leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Canonical Agent Swarm Roles */}
      <Section className="border-b border-border/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeader
                eyebrow="Specialization &amp; Governance"
                title="8 Canonical Agent Roles"
                description="Tasks are partitioned across specialized agent roles. Roles enforce distinct prompt envelopes, capability limits, and decision budgets."
              />
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p>
                  • <strong>Anti-Fake-Diff Reviews:</strong> Reviewers and verifiers automatically detect and reject placeholder shortcuts such as <code className="text-red-400 font-mono">todo!()</code>, <code className="text-red-400 font-mono">unimplemented!()</code>, or stubbed comments.
                </p>
                <p>
                  • <strong>Premature-Completion Rejection:</strong> Tasks cannot transition to Succeeded without deterministic test and linter evidence.
                </p>
                <p>
                  • <strong>Bounded Decision Budgets:</strong> Role state machines limit decision steps to prevent cyclic retry loops.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { role: 'planner', tag: 'Planning', desc: 'Decomposes high-level requirements into acyclic task DAGs.' },
                { role: 'researcher', tag: 'Discovery', desc: 'Inspects codebase symbols, AST definitions, and dependencies.' },
                { role: 'architect', tag: 'Design', desc: 'Defines cross-module interfaces, contract types, and API boundaries.' },
                { role: 'implementer', tag: 'Code', desc: 'Authors source modifications and applies targeted file edits.' },
                { role: 'reviewer', tag: 'Review', desc: 'Audits proposed diffs for security, maintainability, and regression risks.' },
                { role: 'verifier', tag: 'QA', desc: 'Runs automated test suites, type checking, formatting, and linters.' },
                { role: 'diagnostician', tag: 'Triage', desc: 'Analyzes failed verification runs and classifies failure categories.' },
                { role: 'integrator', tag: 'Release', desc: 'Consolidates worktrees and crafts RFC-compliant commit trailers.' },
              ].map((r) => (
                <div key={r.role} className="border border-border/60 bg-card/40 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-foreground text-xs uppercase">{r.role}</span>
                    <span className="text-[10px] text-primary px-1.5 py-0.2 rounded bg-primary/10">{r.tag}</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Hybrid Persistence */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Storage Architecture"
            title="Hybrid Storage: Relational State, Streams, &amp; Blobs"
            description="Designed for speed, durability, and minimal disk footprint without external database services."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-[#0d1016] p-5 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm">
                <Database className="h-4 w-4" />
                <span>1. SQLite Relational Store</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Stores authoritative state machines: missions, tasks, checkpoints, recovery attempts, and completion reports. Operates in WAL mode with foreign key enforcement and 19 migration files.
              </p>
              <div className="font-mono text-[11px] text-zinc-400 bg-secondary/60 p-2 rounded">
                .m31a/db.sqlite
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[#0d1016] p-5 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm">
                <Terminal className="h-4 w-4" />
                <span>2. Append-Only NDJSON Streams</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                High-throughput, non-blocking telemetry logging for raw execution spans, tool calls, and model tokens. Secrets are deterministically redacted before bytes hit storage.
              </p>
              <div className="font-mono text-[11px] text-zinc-400 bg-secondary/60 p-2 rounded">
                .m31a/telemetry/&lt;id&gt;.ndjson
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[#0d1016] p-5 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm">
                <Cpu className="h-4 w-4" />
                <span>3. Content-Addressed Artifacts</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Immutable blob storage indexed by SHA-256 hash. Protected by StreamingQuotaWriter byte caps (100MB default cumulative limit) to eliminate disk exhaustion risk.
              </p>
              <div className="font-mono text-[11px] text-zinc-400 bg-secondary/60 p-2 rounded">
                .m31a/artifacts/ab/abcd1234...bin
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Source Code Explorer */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Direct Attribution"
            title="Inspect Implementation in Repository"
            description="Every architectural statement on this website directly maps to verified source files in the primary repository."
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            {[
              { name: 'Autonomy Engine', path: 'src/agent/engine.rs', desc: '12-stage controller loop & mission scheduling' },
              { name: 'Policy Gate Matcher', path: 'src/policy/matcher.rs', desc: '11-stage policy gate evaluation & precedence' },
              { name: 'Process Confinement', path: 'src/sandbox/limits.rs', desc: 'cgroups v2, POSIX rlimits, env_clear()' },
              { name: 'SSRF & Egress Policy', path: 'src/policy/destination.rs', desc: 'NetworkDestinationPolicy & DNS pre-validation' },
              { name: 'Verification Gate', path: 'src/verification/gate.rs', desc: 'Test execution, clippy checks, evidence digests' },
              { name: 'Deployment Channels', path: 'src/deployment/channel.rs', desc: 'Compile-time identity & transactional installer' },
              { name: 'TUI Cockpit App', path: 'src/tui/app.rs', desc: 'Ratatui 0.30 projection layer & TerminalGuard' },
              { name: 'Model Provider', path: 'src/model/provider/mod.rs', desc: 'NVIDIA NIM provider & SSE streaming parser' },
              { name: 'CLI Command Hierarchy', path: 'src/cli/args.rs', desc: 'Clap 4.5 argument definitions & subcommands' },
            ].map((item) => (
              <a
                key={item.path}
                href={`https://github.com/eshanized/M31A/blob/master/${item.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-border/60 bg-card/40 hover:bg-card/80 hover:border-primary/40 transition-colors flex items-start justify-between gap-3 group"
              >
                <div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                  <div className="text-primary text-[11px] mt-0.5">{item.path}</div>
                  <div className="text-muted-foreground text-[11px] mt-1 font-sans">{item.desc}</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary shrink-0" />
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
