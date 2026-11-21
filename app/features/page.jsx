import Link from 'next/link';
import {
  GitBranch,
  Terminal,
  Shield,
  FileCode2,
  Database,
  Binary,
  Layers,
  Eye,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Check,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Autonomous Features & Capabilities',
  description:
    'Technical catalog of M31A capabilities: native desktop workspace, worktree-first coordination, Vibe Loop, Speculative Arena, Visual TDD, tool orchestration, and AST safety analysis.',
};

export default function FeaturesPage() {
  const deepFeatures = [
    {
      id: 'desktop',
      title: 'Native Desktop Workspace',
      crate: 'apps/desktop · Tauri 2',
      tag: 'Desktop Experience',
      description:
        'A native desktop surface connected directly to the M31A Rust runtime. The workspace includes session navigation, streaming chat history, tool-call visibility, approval cards, interactive questions, and runtime settings.',
      capabilities: [
        'Tauri 2 host integrated with m31a-runtime and shared workspace crates',
        'Session sidebar and conversation timeline',
        'Explicit approval and elicitation dialogs for human-in-the-loop control',
        'Native dialog integration and configurable runtime settings',
      ],
      command: 'cargo tauri dev --manifest-path apps/desktop/src-tauri/Cargo.toml',
    },
    {
      id: 'worktree-coordination',
      title: 'Worktree-First Autonomous Coordination',
      crate: 'crates/m31a-agent-engine · m31a-storage',
      tag: 'Concurrent Execution',
      description:
        'Independent Git worktrees are the default isolation boundary for concurrent coding tasks. Coordination activates when shared mutable resources require it, discovers conflicts, replans affected DAG tasks, and integrates verified results with content-addressed deduplication and targeted rollback.',
      capabilities: [
        'Isolated worktree per independent task by default',
        'Demand-driven coordination instead of global locking',
        'Conflict discovery, cycle detection, and dynamic DAG unblocking',
        'Durable integration records, stale-base detection, and per-file rollback',
      ],
      command: 'm31a workflow run "Implement and verify an isolated feature"',
    },
    {
      id: 'vibe-loop',
      title: 'Continuous Verification & Vibe Loop',
      crate: 'crates/m31a-agent-engine::vibe_loop',
      tag: 'Autonomous Flow',
      description:
        'Continuous non-intrusive workspace filesystem watcher (m31a-watcher) with configurable debouncing. Autonomously catches compiler errors, synthesizes targeted multi-file Codex patches via low-latency NVIDIA NIM models, and repairs workspace state without interrupting developer flow.',
      capabilities: [
        'Configurable debounce timer (default 400ms) prevents thrashing during active editing',
        'Direct compiler diagnostic parsing for cargo check, tsc, and pytest',
        'Automatic single-turn repair synthesis with low-latency nemotron-3.5-bolt',
        'Integrates visual regression checks if --visual-url is configured',
      ],
      command: 'm31a vibe --visual-url http://localhost:3000',
    },
    {
      id: 'speculative',
      title: 'Speculative Parallel Reality Arena',
      crate: 'crates/m31a-agent-engine::speculative',
      tag: 'Concurrence',
      description:
        'Concurrently evaluates competing implementation hypotheses in isolated temporary sandbox workspaces. Generates a composite multi-criteria scoring matrix across compiler checks, full test suites, execution speed benchmarks, and blast-radius safety, then automatically merges the winner.',
      capabilities: [
        'Clones isolated temporary Git worktrees inside Bubblewrap sandboxes',
        'Parallel execution across Tokio asynchronous worker tasks',
        'Multi-criteria composite scoring algorithm (0-100 scale)',
        'Automatic branch promotion directly into active working tree with --promote',
      ],
      command: 'm31a speculate "Optimize parser" "Approach A: SIMD" "Approach B: FlatBuffers" --promote',
    },
    {
      id: 'visual-tdd',
      title: 'Autonomous Visual TDD Engine',
      crate: 'crates/m31a-verify::visual_tdd & m31a-browser',
      tag: 'Frontend Verification',
      description:
        'Headless Chromium automation via Chrome DevTools Protocol (CDP) validating live web frontends: element presence, visibility, exact text match, computed CSS styles, and attribute states. Automatically enforces zero console errors and zero HTTP 4xx/5xx network failures.',
      capabilities: [
        'Full CDP browser control with zero external Selenium or Puppeteer daemon',
        'Automated inspection for zero browser console errors and network failures',
        'DOM computed style assertions and layout bounding-box checks',
        'Visual screenshot artifact capture saved to ~/.m31a/artifacts',
      ],
      command: 'm31a vibe "Build dark mode toggle" --visual-url http://localhost:3000',
    },
    {
      id: 'patch-engine',
      title: 'Codex Multi-File Patch Engine',
      crate: 'crates/m31a-patch & m31a-tools',
      tag: 'Code Mutation',
      description:
        'Full support for the OpenAI Codex multi-file patch specification. Implements a 4-tier fuzzy match algorithm (seek_sequence) handling exact match, right-strip whitespace, full trim, and unicode typographic normalization.',
      capabilities: [
        '*** Begin Patch / *** Update File / *** Add File / *** End Patch format',
        '4-tier fuzzy matching tolerates editor whitespace differences',
        'Unicode typographic normalization for smart quotes and non-breaking spaces',
        'Atomic rollback if any patch chunk fails validation',
      ],
      command: 'm31a exec "Refactor authentication middleware"',
    },
    {
      id: 'blast-radius',
      title: 'AST Blast-Radius Gate & Taint Tracking',
      crate: 'crates/m31a-verify::safety & m31a-ast',
      tag: 'Code Intelligence',
      description:
        'Full AST symbol cross-referencing and transitive call-graph blast radius score (0-100). Intra-procedural data-flow taint tracking detects unconsumed mutations and untrusted inputs flowing into security-sensitive sinks.',
      capabilities: [
        'Tree-sitter and AST symbol extraction for Rust, TypeScript, and Python',
        'Transitive dependent analysis to calculate blast radius impact score',
        'Intra-procedural data-flow taint analysis for security invariants',
        'Guardian integration: denies patches exceeding safety thresholds',
      ],
      command: 'm31a review --against origin/master',
    },
    {
      id: 'swarms',
      title: 'Multi-Agent Swarms & Path Concurrency Locks',
      crate: 'crates/m31a-storage & m31a-agent-engine',
      tag: 'Coordination',
      description:
        'Decomposes complex engineering objectives across specialized agents (Architect, Coder, Tester, Guardian). Agents coordinate over a SQLite pub-sub board and acquire granular path locks to prevent concurrent race conditions.',
      capabilities: [
        'Architect generates milestone Dependency Graphs (DAGs)',
        'Path locks ensure only one agent modifies a file path at any time',
        'Pub-sub message board allows agents to review and verify work asynchronously',
        'Token accounting and session budget tracking across all child agents',
      ],
      command: 'm31a swarm "Refactor database query serialization to use SIMD"',
    },
  ];

  return (
    <div className="w-full bg-background py-12 md:py-16">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="default" className="mb-3">
            Features
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Autonomous capabilities built for sovereign engineering.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
            Every feature in M31A is backed by a modular Rust crate designed for predictable, verifiable execution inside kernel-level container boundaries.
          </p>
        </div>

        {/* Deep Dive Features */}
        <div className="space-y-6">
          {deepFeatures.map((feat) => (
            <Card
              key={feat.id}
              variant="default"
              className="p-6 sm:p-7 bg-surface border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-border">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/20">
                      {feat.tag}
                    </span>
                    <span className="text-xs font-mono text-foreground-subtle">
                      {feat.crate}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {feat.title}
                  </h2>
                </div>

                <div className="rounded-lg bg-[#0b0d13] border border-[#222838] px-3 py-1.5 font-mono text-xs text-emerald-400 shrink-0 self-start">
                  $ {feat.command}
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {feat.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {feat.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-foreground bg-surface-muted/50 p-2.5 rounded-md border border-border"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-surface-muted border border-border text-center flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
            Ready to test M31A in your repository?
          </h3>
          <p className="text-xs sm:text-sm text-foreground-muted max-w-lg mb-5">
            Get started with the quickstart guide or explore the CLI and native desktop workspace.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="https://github.com/eshanized/M31A#quickstart"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              Quickstart Guide
            </Button>
            <Button
              href="https://github.com/eshanized/M31A/tree/master/docs"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
            >
              CLI Reference
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
