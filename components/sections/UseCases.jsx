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
    summary: 'Automated compiler repair loop while you focus on architecture.',
    workflow: [
      'Passively observes workspace files with configurable debounce',
      'Catches compiler diagnostics and broken imports in real time',
      'Generates and applies minimal single-turn Codex auto-repairs',
      'Keeps dev server running without context switching',
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
    summary: 'Evaluates pending diffs against AST symbol relationships and data-flow invariants.',
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
    <Section id="use-cases" spacing="default" background="surface">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Practical Workflows
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Real engineering tasks.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          M31A executes substantive developer tasks — from full-stack features to speculative performance experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
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
                className={`w-full text-left p-3.5 rounded-lg border transition-colors flex items-center gap-3 ${
                  isSelected
                    ? 'bg-surface border-accent'
                    : 'bg-surface-muted border-border hover:border-border-strong text-foreground-muted'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-accent text-white'
                      : 'bg-surface border border-border text-foreground-muted'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xs sm:text-sm font-medium truncate ${
                      isSelected ? 'text-foreground font-semibold' : 'text-foreground-muted'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-foreground-subtle truncate mt-0.5">
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
            className="p-5 sm:p-7 bg-surface border border-border space-y-5"
          >
            <div>
              <span className="text-xs font-mono font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/20">
                Workflow Specification
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-2">
                {selectedCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted mt-1 leading-relaxed">
                {selectedCase.summary}
              </p>
            </div>

            {/* CLI Command Example */}
            <div className="rounded-lg bg-[#0b0d13] border border-[#222838] p-3.5 text-xs font-mono text-gray-200">
              <div className="text-gray-500 mb-1 flex items-center justify-between text-[11px]">
                <span>Terminal Command</span>
                <Terminal className="w-3 h-3 text-gray-500" />
              </div>
              <div className="text-emerald-400 break-all leading-relaxed">
                $ {selectedCase.command}
              </div>
            </div>

            {/* Step-by-Step Autonomous Workflow */}
            <div className="space-y-2.5">
              <span className="text-xs font-medium text-foreground block">
                Autonomous Execution Steps:
              </span>
              <ol className="space-y-2">
                {selectedCase.workflow.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted"
                  >
                    <span className="w-4 h-4 rounded bg-surface-muted border border-border text-foreground font-mono text-[10px] font-medium flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between">
              <a
                href="https://github.com/eshanized/M31A#quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
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
