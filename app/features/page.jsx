import Link from 'next/link';
import {
  Sparkles,
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
    'Comprehensive technical catalog of M31A autonomous capabilities: Vibe Loop, Speculative Arena, Visual TDD, 18-tool suite, and AST Blast Radius Gate.',
};

export default function FeaturesPage() {
  const deepFeatures = [
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
    <div className="w-full bg-background py-16 md:py-24">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="accent" className="mb-4">
            Product Features
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Autonomous capabilities built for sovereign engineering.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
            Every feature in M31A is backed by a modular Rust crate designed for predictable, verifiable execution inside kernel-level container boundaries.
          </p>
        </div>

        {/* Deep Dive Features */}
        <div className="space-y-12">
          {deepFeatures.map((feat) => (
            <Card
              key={feat.id}
              variant="default"
              className="p-8 sm:p-10 bg-surface border border-border shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-border">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-accent bg-accent-subtle px-2 py-0.5 rounded">
                      {feat.tag}
                    </span>
                    <span className="text-xs font-mono text-foreground-subtle">
                      {feat.crate}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {feat.title}
                  </h2>
                </div>

                <div className="rounded-medium bg-[#0d0f14] border border-[#232733] px-3.5 py-2 font-mono text-xs text-emerald-400 shrink-0 self-start">
                  $ {feat.command}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                  {feat.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {feat.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground bg-surface-muted/50 p-3 rounded-medium border border-border/70"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-large bg-background-soft border border-border text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to test M31A in your repository?
          </h3>
          <p className="text-sm text-foreground-muted max-w-xl mb-6">
            Get started with our 2-minute quickstart guide or inspect the full 54-command CLI reference.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
              href="https://github.com/eshanized/M31A/tree/main/docs"
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
