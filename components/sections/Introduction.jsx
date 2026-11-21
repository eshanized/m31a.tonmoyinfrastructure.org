import Link from 'next/link';
import {
  Terminal,
  Cpu,
  Shield,
  Layers,
  ArrowRight,
  Workflow,
  Code2,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Introduction() {
  return (
    <Section id="introduction" spacing="default" background="soft">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Architecture
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Engineered from first principles.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          A sovereign software engineering runtime built as a modular 39-crate Rust workspace. M31A pairs frontier models with kernel-level Linux namespaces to plan, execute, and verify complete developer tasks.
        </p>
      </div>

      {/* Asymmetric Product Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Core Runtime Hero Card - 7 cols */}
        <Card
          variant="default"
          className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between bg-surface border border-border"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-medium text-accent px-2 py-0.5 rounded bg-accent-subtle">
                crates/m31a-agent-engine
              </span>
              <Cpu className="w-4 h-4 text-foreground-muted" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2">
              Autonomous Agent Runtime
            </h3>

            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
              Coordinates prompt turn decomposition, dynamic context windows, token budget auto-compaction, and multi-step tool loops. Powered by NVIDIA NIM frontier intelligence including DeepSeek R1 and Nemotron reasoning paths.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
              <div className="p-3 rounded-md bg-surface-muted border border-border/50">
                <span className="text-xs font-medium text-foreground block">
                  39-Crate Monorepo
                </span>
                <span className="text-[11px] text-foreground-muted">
                  Strictly decoupled domain architecture
                </span>
              </div>
              <div className="p-3 rounded-md bg-surface-muted border border-border/50">
                <span className="text-xs font-medium text-foreground block">
                  Dynamic Discovery
                </span>
                <span className="text-[11px] text-foreground-muted">
                  Live NIM model catalog via /v1/models
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 flex items-center justify-between">
            <Link
              href="/architecture"
              className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
            >
              Explore Rust workspace architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>

        {/* Terminal First Interface - 5 cols */}
        <Card
          variant="terminal"
          className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-medium text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800">
                crates/m31a-tui
              </span>
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">
              Ratatui Terminal UI
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
              A full-screen terminal experience featuring streaming markdown transcripts, collapsible DeepSeek R1 reasoning blocks, fuzzy palettes, and SQLite session resumption.
            </p>

            <div className="font-mono text-xs bg-[#090b10] p-3 rounded border border-[#1e2434] text-gray-300 space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Modes</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-[#161a26] border border-[#262e42] text-gray-300 text-[10px]">Tab</kbd> Build / Plan</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Model switcher</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-[#161a26] border border-[#262e42] text-gray-300 text-[10px]">Ctrl+M</kbd></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Command palette</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-[#161a26] border border-[#262e42] text-gray-300 text-[10px]">Ctrl+P</kbd></span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#1e2434]">
            <Link
              href="/features"
              className="text-xs font-medium text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              Explore TUI capabilities
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>

        {/* Tool Orchestration - 4 cols */}
        <Card
          variant="default"
          className="md:col-span-4 p-5 flex flex-col justify-between bg-surface border border-border"
        >
          <div>
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <Workflow className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1.5">
              18-Tool Orchestration
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Filesystem search, atomic patching with 4-tier fuzzy seek, multi-agent spawning, and headless browser validation.
            </p>
          </div>
          <Link
            href="/features"
            className="mt-4 text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
          >
            Inspect tool catalog →
          </Link>
        </Card>

        {/* Defense-in-Depth Security - 4 cols */}
        <Card
          variant="default"
          className="md:col-span-4 p-5 flex flex-col justify-between bg-surface border border-border"
        >
          <div>
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1.5">
              Defense-in-Depth Security
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Linux Bubblewrap namespace containment with read-only masks over <code className="font-mono">.git</code> and <code className="font-mono">.env</code>, plus Guardian circuit-breakers.
            </p>
          </div>
          <Link
            href="/architecture"
            className="mt-4 text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
          >
            Review security model →
          </Link>
        </Card>

        {/* SDK & App Server - 4 cols */}
        <Card
          variant="default"
          className="md:col-span-4 p-5 flex flex-col justify-between bg-surface border border-border"
        >
          <div>
            <div className="w-7 h-7 rounded-md bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-3">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1.5">
              JSON-RPC 2.0 &amp; SDKs
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Unix Domain Socket, Stdio, and HTTP/SSE transports. First-party TypeScript (<code className="font-mono">@m31a/sdk</code>) and Python (<code className="font-mono">m31a</code>) libraries.
            </p>
          </div>
          <Link
            href="/features"
            className="mt-4 text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
          >
            Explore client SDKs →
          </Link>
        </Card>
      </div>
    </Section>
  );
}
