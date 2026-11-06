import Link from 'next/link';
import {
  Sparkles,
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
    <Section id="features" spacing="spacious" background="surface">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="crimson" className="mb-4">
          Core Capabilities
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Engineered for sovereign autonomous coding.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          Every capability in M31A is backed by a dedicated Rust crate. Explore the eight core engines that set M31A apart from conversational chat assistants.
        </p>
      </div>

      <div className="space-y-12">
        {/* Feature 1: Continuous Verification & Vibe Loop */}
        <div className="rounded-large border border-border bg-surface-subtle p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-xs">
          <div className="flex-1 space-y-4">
            <Badge variant="accent">crates/m31a-agent-engine::vibe_loop</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Continuous Verification &amp; Vibe Loop
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
              Eliminate babysitting. The Vibe Loop actively monitors your filesystem for changes, validates builds in the background, detects compiler or type diagnostics, and autonomously synthesizes corrective multi-file patches via ultra-low-latency NVIDIA NIM models.
            </p>
            <div className="p-3.5 rounded-medium bg-surface border border-border text-xs text-foreground space-y-1.5">
              <span className="font-semibold text-accent block">Why it matters:</span>
              <p className="text-foreground-muted">
                You write code in your preferred editor without interruptions. When an error occurs, M31A identifies the failure, patches the regression, and confirms the build is clean without breaking your focus.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/eshanized/M31A/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                Learn more about m31a vibe →
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-medium bg-[#0d0f14] border border-[#232733] p-4 text-xs font-mono text-gray-300 shadow-md">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#232733] text-gray-500">
              <span>m31a-watcher (debounce: 400ms)</span>
              <span className="text-emerald-400">● LIVE</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-gray-400">[Watcher] Workspace delta: 2 files modified</div>
              <div className="text-amber-400">
                [Compiler] cargo check: 1 error in crates/m31a-storage/src/lib.rs:48
              </div>
              <div className="text-indigo-300">
                [NIM] Synthesizing targeted Codex patch via nemotron-3.5-bolt...
              </div>
              <div className="text-emerald-400">
                [Patch] Applied 4-tier fuzzy patch. Re-compiling... Passed (0.18s).
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Speculative Parallel Reality Arena */}
        <div className="rounded-large border border-border bg-surface-subtle p-6 sm:p-10 flex flex-col lg:flex-row-reverse items-center gap-8 shadow-xs">
          <div className="flex-1 space-y-4">
            <Badge variant="crimson">crates/m31a-agent-engine::speculative</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Speculative Parallel Reality Arena
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
              Instead of guessing whether Approach A or Approach B is superior, M31A forks parallel isolated worktrees in temporary Bubblewrap sandboxes, generates competing implementations simultaneously, scores them across a multi-criteria matrix, and promotes the winner.
            </p>
            <div className="p-3.5 rounded-medium bg-surface border border-border text-xs text-foreground space-y-1.5">
              <span className="font-semibold text-accent-crimson block">Why it matters:</span>
              <p className="text-foreground-muted">
                Eliminates subjective guesswork for complex architectural trade-offs such as zero-copy refactoring vs memory allocation schemes.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/eshanized/M31A/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                Learn more about m31a speculate →
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-medium bg-[#0d0f14] border border-[#232733] p-4 text-xs font-mono text-gray-300 shadow-md">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#232733] text-gray-500">
              <span>Speculative Scoring Matrix</span>
              <span className="text-indigo-400">Auto-Promotion: Enabled</span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded bg-[#161a24] border border-emerald-900/50">
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Candidate A: SIMD-JSON</span>
                  <span>96 / 100 [WINNER]</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-1">
                  Tests: 100% | Speed: +380% | Blast Radius: 12 (Safe)
                </div>
              </div>
              <div className="p-2 rounded bg-[#161a24] border border-[#232733] opacity-65">
                <div className="flex justify-between text-gray-300">
                  <span>Candidate B: FlatBuffers</span>
                  <span>78 / 100</span>
                </div>
                <div className="text-[11px] text-gray-500 mt-1">
                  Tests: 100% | Speed: +410% | Blast Radius: 64 (High Risk)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Multi-Agent Swarm Orchestration */}
        <div className="rounded-large border border-border bg-surface-subtle p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-xs">
          <div className="flex-1 space-y-4">
            <Badge variant="default">crates/m31a-storage &amp; m31a-agent-engine</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Multi-Agent Swarm Orchestration
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
              Decompose sprawling engineering initiatives across specialized agents. The Architect agent produces a milestone dependency DAG, Coder agents acquire path concurrency locks to write minimal patches, and Guardian agents audit changes before the Tester executes tests.
            </p>
            <div className="p-3.5 rounded-medium bg-surface border border-border text-xs text-foreground space-y-1.5">
              <span className="font-semibold text-accent block">Why it matters:</span>
              <p className="text-foreground-muted">
                Prevents race conditions and overwrites during concurrent agent workflows via SQLite file path mutexes.
              </p>
            </div>
            <div>
              <Link
                href="/architecture"
                className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                Inspect swarm coordination architecture →
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-medium bg-[#0d0f14] border border-[#232733] p-4 text-xs font-mono text-gray-300 shadow-md">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#232733] text-gray-500">
              <span>Swarm Board (SQLite pub-sub)</span>
              <span className="text-cyan-400">m31a swarm</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="text-indigo-400">Architect: Task DAG decomposed into 4 sub-milestones</div>
              <div className="text-emerald-400">Coder-1: Acquired path lock on crates/m31a-patch</div>
              <div className="text-cyan-400">Guardian: Blast radius score = 8 (Approved)</div>
              <div className="text-purple-400">Tester: Executing headless Chromium visual assertions...</div>
            </div>
          </div>
        </div>

        {/* Feature 4: Visual TDD & Headless Chromium */}
        <div className="rounded-large border border-border bg-surface-subtle p-6 sm:p-10 flex flex-col lg:flex-row-reverse items-center gap-8 shadow-xs">
          <div className="flex-1 space-y-4">
            <Badge variant="accent">crates/m31a-verify::visual_tdd &amp; m31a-browser</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Autonomous Visual TDD Engine
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
              Verify real web applications end-to-end. M31A connects to headless Chromium via the Chrome DevTools Protocol (CDP) to assert DOM node presence, computed CSS styles, zero browser console errors, and zero HTTP 4xx/5xx network failures.
            </p>
            <div className="p-3.5 rounded-medium bg-surface border border-border text-xs text-foreground space-y-1.5">
              <span className="font-semibold text-accent block">Why it matters:</span>
              <p className="text-foreground-muted">
                Captures visual regression screenshots and formulates precise self-healing repair prompts if frontend components break.
              </p>
            </div>
            <div>
              <Link
                href="/features"
                className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                Read visual verification features →
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[48%] rounded-medium bg-[#0d0f14] border border-[#232733] p-4 text-xs font-mono text-gray-300 shadow-md">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#232733] text-gray-500">
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

        {/* Feature 5 to 8 Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {/* Code Intelligence */}
          <Card variant="default" className="p-6 bg-surface">
            <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-3">
              <Binary className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-foreground mb-1">
              AST Blast-Radius Gate
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-4">
              Cross-references symbol call-graphs and data-flow taint invariants before applying code modifications.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-ast
            </span>
          </Card>

          {/* Codex Patch Engine */}
          <Card variant="default" className="p-6 bg-surface">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
              <FileCode2 className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-foreground mb-1">
              4-Tier Fuzzy Patch Engine
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-4">
              Full OpenAI Codex patch specification support with whitespace and typographic unicode normalization.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-patch
            </span>
          </Card>

          {/* Skills and MCP */}
          <Card variant="default" className="p-6 bg-surface">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-accent-crimson mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-foreground mb-1">
              Skills &amp; MCP Host
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-4">
              Discovers YAML-frontmatter skills and connects to external Model Context Protocol tool servers.
            </p>
            <span className="text-[11px] font-mono text-foreground-subtle">
              crates/m31a-mcp
            </span>
          </Card>

          {/* Session Management */}
          <Card variant="default" className="p-6 bg-surface">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-foreground mb-1">
              SQLite Durable Storage
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed mb-4">
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
