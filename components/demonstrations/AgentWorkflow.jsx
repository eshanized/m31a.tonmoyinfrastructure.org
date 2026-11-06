'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Search,
  Brain,
  Play,
  Wrench,
  FileCode2,
  CheckCircle2,
  Flag,
  ArrowRight,
  Shield,
  Layers,
} from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    id: 'intent',
    number: '01',
    label: 'User Intent',
    icon: MessageSquare,
    crate: 'm31a-cli / m31a-tui',
    summary: 'Developer enters instructions in TUI composer or via JSON-RPC client.',
    detail: 'Prompts are captured into SQLite thread sessions at ~/.m31a/storage.db. Checkpoint snapshots ensure safe rollback.',
  },
  {
    id: 'understanding',
    number: '02',
    label: 'Repo Understanding',
    icon: Search,
    crate: 'm31a-ast & m31a-tools',
    summary: 'Symbol tree generation, call graph resolution, and semantic search.',
    detail: 'AST parser indexes cross-file symbols, exports, and dependencies to calculate blast radius before changes.',
  },
  {
    id: 'planning',
    number: '03',
    label: 'Planning',
    icon: Brain,
    crate: 'm31a-agent-engine / DeepSeek R1',
    summary: 'Frontier reasoning chain structures milestones and dependency DAG.',
    detail: 'Streams thinking tokens into foldable cards. In [📋 PLAN] mode, stops here for human architect signoff.',
  },
  {
    id: 'execution',
    number: '04',
    label: 'Agent Execution',
    icon: Play,
    crate: 'm31a-agent-engine::TurnEngine',
    summary: 'Autonomous execution engine drives tool calls and context windows.',
    detail: 'Manages dynamic context windows, token budget auto-compaction, and dynamic tool schemas.',
  },
  {
    id: 'orchestration',
    number: '05',
    label: 'Tool Orchestration',
    icon: Wrench,
    crate: 'm31a-guardian & m31a-execpolicy',
    summary: 'ExecPolicy pattern matching and Guardian safety supervisor gate calls.',
    detail: 'Commands resolve to allow, prompt, or deny. Circuit breaker halts runaway actions if denials exceed 3.',
  },
  {
    id: 'patching',
    number: '06',
    label: 'Code Changes',
    icon: FileCode2,
    crate: 'm31a-patch (4-tier fuzzy)',
    summary: 'Synthesizes OpenAI Codex multi-file patches inside Bubblewrap container.',
    detail: 'Applies patches with whitespace and typographic normalization. Protected masks defend .git and .env.',
  },
  {
    id: 'verification',
    number: '07',
    label: 'Verification',
    icon: CheckCircle2,
    crate: 'm31a-verify & m31a-browser',
    summary: 'Background compiler check, test runner, and headless Chromium DOM assertions.',
    detail: 'Validates exit codes, zero console errors, zero 4xx/5xx network failures, and layout integrity.',
  },
  {
    id: 'results',
    number: '08',
    label: 'Results & Commit',
    icon: Flag,
    crate: 'm31a-git-attribution',
    summary: 'Verified diff output delivered to transcript with reproducible telemetry.',
    detail: 'Clean session summary with token expenditure, modified files, and verified test status.',
  },
];

export default function AgentWorkflow() {
  const [selectedStep, setSelectedStep] = useState(WORKFLOW_STEPS[0]);

  return (
    <div className="w-full bg-surface rounded-large border border-border p-6 md:p-10 shadow-sm relative overflow-hidden">
      {/* Header status bar */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground-subtle">
            Execution Flow
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Live Reactive Pipeline
          </span>
        </div>
        <span className="text-xs text-foreground-subtle font-mono hidden sm:inline">
          Click any phase to inspect internals
        </span>
      </div>

      {/* Workflow Nodes Grid / Sequence */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 relative">
        {/* Animated laser connector line on desktop */}
        <div className="hidden lg:block absolute top-[38px] left-4 right-4 h-[2px] bg-border -z-0 pointer-events-none overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent laser-connector" />
        </div>

        {WORKFLOW_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = selectedStep.id === step.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setSelectedStep(step)}
              className={`flex flex-col items-center text-center p-3 rounded-medium transition-all relative z-10 border ${
                isSelected
                  ? 'bg-accent-subtle/90 border-accent text-accent shadow-md -translate-y-1'
                  : 'bg-surface border-border hover:border-border-strong hover:-translate-y-0.5 text-foreground-muted hover:text-foreground'
              }`}
            >
              <span className="text-[10px] font-mono font-bold opacity-60 mb-1">
                {step.number}
              </span>
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 transition-transform duration-200 ${
                  isSelected
                    ? 'bg-accent text-white scale-110 shadow-sm'
                    : 'bg-surface-muted border border-border text-foreground-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold leading-tight line-clamp-2">
                {step.label}
              </span>

              {/* Arrow indicator between steps on desktop */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowRight className="w-3 h-3 text-border-strong" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Step Technical Deep Dive */}
      <div className="mt-8 p-6 rounded-medium bg-background-soft border border-border flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-accent bg-accent-subtle px-2 py-0.5 rounded">
              Phase {selectedStep.number}
            </span>
            <h4 className="text-lg font-bold text-foreground">
              {selectedStep.label}
            </h4>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground-subtle">
              Crate: {selectedStep.crate}
            </span>
          </div>

          <p className="text-sm font-medium text-foreground leading-relaxed">
            {selectedStep.summary}
          </p>

          <p className="text-xs text-foreground-muted leading-relaxed">
            {selectedStep.detail}
          </p>
        </div>

        <div className="flex md:flex-col items-center gap-3 shrink-0 self-stretch justify-center md:border-l md:border-border md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
          <div className="text-center">
            <span className="block text-[11px] uppercase tracking-wider text-foreground-subtle font-semibold">
              Isolation Gate
            </span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block mt-1 border border-emerald-200">
              Verified Sandboxed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
