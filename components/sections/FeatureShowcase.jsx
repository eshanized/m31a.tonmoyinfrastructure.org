import Link from 'next/link';
import {
  GitBranch,
  Users2,
  Eye,
  FileCode2,
  Database,
  Cpu,
  Shield,
  ArrowRight,
  CheckCircle2,
  Binary,
  Layers,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function FeatureShowcase() {
  return (
    <Section id="features" spacing="default" background="surface">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Core Engines
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Engineered for autonomous coding.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          Every capability in M31A is backed by a dedicated Rust crate. Explore the core subsystems that drive autonomous planning, editing, and verification.
        </p>
      </div>

      <div className="space-y-6">
        {/* Feature 1: Continuous Verification & Vibe Loop */}
        <div className="rounded-xl border border-border bg-surface-subtle p-6 sm:p-7 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 space-y-3.5">
            <Badge variant="accent">crates/m31a-agent-engine::vibe_loop</Badge>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Continuous Watcher &amp; Auto-Repair
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Monitors the workspace filesystem for edits, executes compiler diagnostics in the background, and synthesizes targeted multi-file patches via low-latency NVIDIA NIM models.
            </p>
            <div className="p-3 rounded-lg bg-surface border border-border text-xs text-foreground space-y-1">
              <span className="font-medium text-accent block">Operation:</span>
              <p className="text-foreground-muted">
                You write code in your editor without context switching. When diagnostics fail, M31A isolates the regression, synthesizes a patch, and verifies compilation.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/eshanized/M31A/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
              >
                Learn more about m31a vibe →
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-lg bg-[#0b0d13] border border-[#222838] p-4 text-xs font-mono text-gray-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222838] text-gray-400">
              <span>m31a-watcher (debounce: 400ms)</span>
              <span className="text-emerald-400">● LIVE</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-gray-400">[Watcher] Workspace delta: 2 files modified</div>
              <div className="text-amber-400">
                [Compiler] cargo check: 1 error in crates/m31a-storage/src/lib.rs:48
              </div>
              <div className="text-gray-300">
                [NIM] Synthesizing targeted Codex patch via nemotron-3.5-bolt...
              </div>
              <div className="text-emerald-400">
                [Patch] Applied 4-tier fuzzy patch. Re-compiling... Passed (0.18s).
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Speculative Parallel Reality Arena */}
        <div className="rounded-xl border border-border bg-surface-subtle p-6 sm:p-7 flex flex-col lg:flex-row-reverse items-center gap-6">
          <div className="flex-1 space-y-3.5">
            <Badge variant="default">crates/m31a-agent-engine::speculative</Badge>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Parallel Worktree Exploration
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Forks isolated Git worktrees inside temporary Bubblewrap sandboxes to implement competing architectural hypotheses concurrently, scoring outcomes across compiler checks, benchmark throughput, and blast radius.
            </p>
            <div className="p-3 rounded-lg bg-surface border border-border text-xs text-foreground space-y-1">
              <span className="font-medium text-foreground block">Evaluation:</span>
              <p className="text-foreground-muted">
                Resolves complex trade-offs (e.g. zero-copy refactoring vs memory allocation schemes) using verifiable compiler metrics and test scores.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/eshanized/M31A/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
              >
                Learn more about m31a speculate →
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-lg bg-[#0b0d13] border border-[#222838] p-4 text-xs font-mono text-gray-300">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#222838] text-gray-400">
              <span>Speculative Scoring Matrix</span>
              <span className="text-gray-400">Auto-Promotion: Enabled</span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded bg-[#121622] border border-emerald-900/50">
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Candidate A: SIMD-JSON</span>
                  <span className="tabular-nums">96 / 100 [WINNER]</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-1 tabular-nums">
                  Tests: 100% | Speed: +380% | Blast Radius: 12 (Safe)
                </div>
              </div>
              <div className="p-2 rounded bg-[#121622] border border-[#222838] opacity-75">
                <div className="flex justify-between text-gray-300">
                  <span>Candidate B: FlatBuffers</span>
                  <span className="tabular-nums">78 / 100</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-1 tabular-nums">
                  Tests: 100% | Speed: +410% | Blast Radius: 64 (High Risk)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Multi-Agent Swarm Orchestration */}
        <div className="rounded-xl border border-border bg-surface-subtle p-6 sm:p-7 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 space-y-3.5">
            <Badge variant="default">crates/m31a-storage &amp; m31a-agent-engine</Badge>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Multi-Agent Swarm Orchestration
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Decomposes complex engineering tasks across specialized agents. The Architect produces a milestone dependency DAG, Coder agents acquire path concurrency locks, and Guardian audits changes before the Tester executes assertions.
            </p>
            <div className="p-3 rounded-lg bg-surface border border-border text-xs text-foreground space-y-1">
              <span className="font-medium text-foreground block">Safety:</span>
              <p className="text-foreground-muted">
                Prevents race conditions and overwrites during concurrent agent workflows via SQLite file path mutexes.
              </p>
            </div>
            <div>
              <Link
                href="/architecture"
                className="text-xs sm:text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
              >
                Inspect swarm coordination architecture →
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-lg bg-[#0b0d13] border border-[#222838] p-4 text-xs font-mono text-gray-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222838] text-gray-400">
              <span>Swarm Board (SQLite pub-sub)</span>
              <span className="text-gray-300">m31a swarm</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="text-gray-300">Architect: Task DAG decomposed into 4 sub-milestones</div>
              <div className="text-emerald-400">Coder-1: Acquired path lock on crates/m31a-patch</div>
              <div className="text-gray-300">Guardian: Blast radius score = 8 (Approved)</div>
              <div className="text-gray-400">Tester: Executing headless Chromium visual assertions...</div>
            </div>
          </div>
        </div>

        {/* Feature 4: Visual TDD & Headless Chromium */}
        <div className="rounded-xl border border-border bg-surface-subtle p-6 sm:p-7 flex flex-col lg:flex-row-reverse items-center gap-6">
          <div className="flex-1 space-y-3.5">
            <Badge variant="default">crates/m31a-verify::visual_tdd &amp; m31a-browser</Badge>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Autonomous Visual TDD Engine
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Verifies web applications end-to-end. M31A connects to headless Chromium via the Chrome DevTools Protocol (CDP) to assert DOM node presence, computed CSS styles, zero console errors, and zero HTTP 4xx/5xx network failures.
            </p>
            <div className="p-3 rounded-lg bg-surface border border-border text-xs text-foreground space-y-1">
              <span className="font-medium text-foreground block">Verification:</span>
              <p className="text-foreground-muted">
                Captures visual regression screenshots and formulates precise self-healing repair prompts if frontend components break.
              </p>
            </div>
            <div>
              <Link
                href="/features"
                className="text-xs sm:text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
              >
                Read visual verification features →
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-lg bg-[#0b0d13] border border-[#222838] p-4 text-xs font-mono text-gray-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222838] text-gray-400">
              <span>CDP Headless Inspector</span>
              <span className="text-emerald-400">DOM: Verified</span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="text-emerald-400">✓ Console errors: 0 detected</div>
              <div className="text-emerald-400">✓ Network status: 0 HTTP 4xx/5xx failures</div>
              <div className="text-emerald-400">✓ Computed style: button.background = #15171b</div>
              <div className="text-gray-400">✓ Captured visual snapshot: .m31a/artifacts/snap_01.png</div>
            </div>
          </div>
        </div>

        {/* Feature 5 to 8 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Code Intelligence */}
          <Card variant="default" className="p-5 bg-surface border border-border">
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <Binary className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              AST Blast-Radius Gate
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-3">
              Cross-references symbol call-graphs and data-flow invariants before applying code modifications.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-ast
            </span>
          </Card>

          {/* Codex Patch Engine */}
          <Card variant="default" className="p-5 bg-surface border border-border">
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <FileCode2 className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              4-Tier Fuzzy Patch Engine
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-3">
              Full OpenAI Codex patch specification support with whitespace and typographic unicode normalization.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-patch
            </span>
          </Card>

          {/* Skills and MCP */}
          <Card variant="default" className="p-5 bg-surface border border-border">
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              Skills &amp; MCP Host
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-3">
              Discovers YAML-frontmatter skills and connects to external Model Context Protocol tool servers.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-mcp
            </span>
          </Card>

          {/* Session Management */}
          <Card variant="default" className="p-5 bg-surface border border-border">
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <Database className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              SQLite Durable Storage
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-3">
              Thread branching, turn checkpointing, token accounting, and session resumption with zero data loss.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-storage
            </span>
          </Card>
        </div>
      </div>
    </Section>
  );
}
