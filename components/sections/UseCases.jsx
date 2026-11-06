'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Code,
  Bug,
  TestTube,
  CheckCircle,
  Laptop,
  Compass,
  GitCompare,
  RefreshCw,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

const USE_CASES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Feature Implementation',
    icon: Laptop,
    command: 'm31a "Implement JWT authentication endpoint and React login modal with form validation"',
    summary: 'Spans both backend API handler and frontend components in one unified autonomous session.',
    workflow: [
      'AST parser cross-references route declarations and user schema',
      'Generates multi-file patch spanning backend routes and frontend UI',
      'Runs backend compiler checks and frontend headless Chromium visual TDD',
      'Captures passing visual screenshot proof',
    ],
  },
  {
    id: 'debugging',
    title: 'Automated Root-Cause Debugging',
    icon: Bug,
    command: 'm31a "Diagnose and fix intermittent panic in crates/m31a-sandbox during network teardown"',
    summary: 'Analyzes call traces, identifies data races or edge conditions, and writes defensive patches.',
    workflow: [
      'Reproduces failure by running localized unit tests in the sandbox',
      'Uses DeepSeek R1 reasoning chain to trace unwrap() panic site',
      'Replaces unchecked unwraps with pattern-matched error propagation',
      'Executes 100 test iterations in a loop to guarantee zero flaky failures',
    ],
  },
  {
    id: 'vibe-loop',
    title: 'Continuous Background Vibe Coding',
    icon: RefreshCw,
    command: 'm31a vibe --visual-url http://localhost:3000',
    summary: 'Zero-babysitter auto-healing loop while you focus on high-level design.',
    workflow: [
      'Passively observes workspace files with configurable debounce',
      'Instantly catches compiler errors or broken imports in real-time',
      'Generates and applies minimal single-turn Codex auto-repairs',
      'Keeps your dev server running without context-switching',
    ],
  },
  {
    id: 'speculate',
    title: 'Parallel Implementation Experiments',
    icon: GitCompare,
    command: 'm31a speculate "Refactor SQLite query cache" "LRU Cache" "Lock-Free SkipList" --promote',
    summary: 'Evaluates competing engineering hypotheses concurrently in sandboxed temporary worktrees.',
    workflow: [
      'Clones temporary worktrees in isolated Bubblewrap sandboxes',
      'Builds both approaches and benchmarks execution speeds',
      'Calculates blast radius scores and test pass rates',
      'Promotes and merges the winning implementation into your branch',
    ],
  },
  {
    id: 'review',
    title: 'Semantic Code Review & Blast Radius Gate',
    icon: CheckCircle,
    command: 'm31a review --against origin/master',
    summary: 'Evaluates pending diffs against AST symbol relationships and data-flow taint invariants.',
    workflow: [
      'Calculates blast radius score (0-100) across downstream dependents',
      'Audits untrusted inputs flowing into security-sensitive sinks',
      'Verifies compliance with local .m31a/skills guidelines',
      'Produces structured Markdown report with actionable findings',
    ],
  },
  {
    id: 'tests',
    title: 'Autonomous Test Suite Generation',
    icon: TestTube,
    command: 'm31a "Generate comprehensive unit and boundary tests for crates/m31a-patch"',
    summary: 'Discovers untested execution branches, edge cases, and creates hermetic test cases.',
    workflow: [
      'Inspects function signatures and branch decision points in AST',
      'Synthesizes edge-case inputs (empty files, unicode strings, oversized chunks)',
      'Executes cargo test inside sandbox to verify new tests compile and pass',
      'Ensures zero regression in existing test suites',
    ],
  },
];

export default function UseCases() {
  const [selectedCase, setSelectedCase] = useState(USE_CASES[0]);

  return (
    <Section id="use-cases" spacing="spacious" background="surface">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="default" className="mb-4">
          Practical Workflows
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Real engineering tasks. Zero synthetic benchmarks.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          M31A is built for software engineers who need autonomous assistance on substantive problems—from full-stack features to speculative performance experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Selector Buttons - 5 cols */}
        <div className="lg:col-span-5 space-y-2">
          {USE_CASES.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedCase.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCase(item)}
                className={`w-full text-left p-4 rounded-medium border transition-all flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-surface border-accent shadow-sm'
                    : 'bg-surface-muted/50 border-border hover:border-border-strong text-foreground-muted'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-accent text-white'
                      : 'bg-surface border border-border text-foreground-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm font-semibold truncate ${
                      isSelected ? 'text-foreground' : 'text-foreground-muted'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground-subtle truncate mt-0.5">
                    {item.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Showcase - 7 cols */}
        <div className="lg:col-span-7">
          <Card
            variant="default"
            className="p-6 sm:p-8 bg-surface border border-border shadow-sm space-y-6"
          >
            <div>
              <span className="text-xs font-mono font-bold text-accent bg-accent-subtle px-2 py-0.5 rounded">
                Workflow Specification
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2">
                {selectedCase.title}
              </h3>
              <p className="text-sm text-foreground-muted mt-2 leading-relaxed">
                {selectedCase.summary}
              </p>
            </div>

            {/* CLI Command Example */}
            <div className="rounded-medium bg-[#0d0f14] border border-[#232733] p-4 text-xs font-mono text-gray-200">
              <div className="text-gray-500 mb-1.5 flex items-center justify-between">
                <span>Terminal Execution Syntax</span>
                <Terminal className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <div className="text-emerald-400 break-all leading-relaxed">
                $ {selectedCase.command}
              </div>
            </div>

            {/* Step-by-Step Autonomous Workflow */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Autonomous Execution Steps:
              </span>
              <ol className="space-y-2.5">
                {selectedCase.workflow.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-foreground-muted"
                  >
                    <span className="w-5 h-5 rounded-full bg-surface-muted border border-border text-foreground font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <a
                href="https://github.com/eshanized/M31A#quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                Try this workflow in Quickstart
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
