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
    <div className="w-full bg-surface rounded-xl border border-border p-5 md:p-8 relative overflow-hidden">
      {/* Header status bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-foreground-subtle">
            Execution Flow
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Reactive Pipeline
          </span>
        </div>
        <span className="text-xs text-foreground-subtle font-mono hidden sm:inline">
          Select a phase to inspect crate internals
        </span>
      </div>

      {/* Workflow Nodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative">
        {WORKFLOW_STEPS.map((step) => {
          const Icon = step.icon;
          const isSelected = selectedStep.id === step.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setSelectedStep(step)}
              aria-label={`${step.number} ${step.label}`}
              className={`flex flex-col items-center text-center p-2.5 rounded-lg transition-colors relative z-10 border text-left ${
                isSelected
                  ? 'bg-accent-subtle border-accent text-accent'
                  : 'bg-surface border-border hover:border-border-strong text-foreground-muted hover:text-foreground'
              }`}
            >
              <span className="text-[10px] font-mono opacity-60 mb-1 tabular-nums">
                {step.number}
              </span>
              <div
                className={`w-7 h-7 rounded-md flex items-center justify-center mb-1.5 transition-colors ${
                  isSelected
                    ? 'bg-accent text-white'
                    : 'bg-surface-muted border border-border text-foreground-muted'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-medium leading-tight line-clamp-2">
                {step.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Technical Deep Dive */}
      <div className="mt-6 p-4 sm:p-5 rounded-lg bg-surface-muted border border-border flex flex-col md:flex-row items-start justify-between gap-5">
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/20">
              Phase {selectedStep.number}
            </span>
            <h4 className="text-sm font-semibold text-foreground">
              {selectedStep.label}
            </h4>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground-subtle">
              Crate: {selectedStep.crate}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
            {selectedStep.summary}
          </p>

          <p className="text-xs text-foreground-muted leading-relaxed">
            {selectedStep.detail}
          </p>
        </div>

        <div className="flex md:flex-col items-center gap-2 shrink-0 self-stretch justify-center md:border-l md:border-border md:pl-5 pt-3 md:pt-0 border-t md:border-t-0">
          <div className="text-center">
            <span className="block text-[11px] font-mono text-foreground-subtle">
              Isolation Gate
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block mt-1 border border-emerald-500/20">
              Verified Sandboxed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
