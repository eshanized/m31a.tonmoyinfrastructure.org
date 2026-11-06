import Link from 'next/link';
import {
  Terminal,
  Cpu,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  Workflow,
  Code2,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Introduction() {
  return (
    <Section id="introduction" spacing="spacious" background="soft">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="accent" className="mb-4">
          Architectural Foundation
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Meet M31A.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          An autonomous software engineering runtime built from first principles as a modular 39-crate Rust workspace. M31A bridges frontier intelligence with kernel-level container containment to plan, execute, and verify complete developer workflows.
        </p>
      </div>

      {/* Asymmetric Product Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Core Runtime Hero Card - 7 cols */}
        <Card
          variant="default"
          className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-surface border border-border hover:border-border-strong transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                crates/m31a-agent-engine
              </span>
              <Cpu className="w-5 h-5 text-accent" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">
              Autonomous Agent Runtime
            </h3>

            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Coordinates prompt turn decomposition, dynamic context windows, token budget auto-compaction, and multi-step tool loops. Powered by NVIDIA NIM frontier intelligence including DeepSeek R1 and Nemotron reasoning paths.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
              <div className="p-3 rounded-small bg-surface-muted">
                <span className="text-xs font-semibold text-foreground block">
                  39-Crate Monorepo
                </span>
                <span className="text-xs text-foreground-subtle">
                  Strictly decoupled domain architecture
                </span>
              </div>
              <div className="p-3 rounded-small bg-surface-muted">
                <span className="text-xs font-semibold text-foreground block">
                  Dynamic Discovery
                </span>
                <span className="text-xs text-foreground-subtle">
                  Live NIM model catalog via /v1/models
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between">
            <Link
              href="/architecture"
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
            >
              Explore Rust workspace architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>

        {/* Terminal First Interface - 5 cols */}
        <Card
          variant="terminal"
          className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                crates/m31a-tui
              </span>
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Ratatui Terminal UI
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              A full-screen terminal experience featuring streaming markdown transcripts, collapsible DeepSeek R1 reasoning blocks, fuzzy palettes, and SQLite session resumption.
            </p>

            <div className="font-mono text-xs bg-[#06070a] p-3 rounded border border-gray-800 text-gray-400 space-y-1">
              <div>Tab: [⚡ BUILD] vs [📋 PLAN] modes</div>
              <div>Ctrl+M: Model switcher dialog</div>
              <div>Ctrl+P: Fuzzy command palette</div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-gray-800">
            <Link
              href="/features"
              className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              Explore TUI capabilities
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>

        {/* Tool Orchestration - 4 cols */}
        <Card
          variant="default"
          className="md:col-span-4 p-6 flex flex-col justify-between bg-surface"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-4">
              <Workflow className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              18-Tool Orchestration
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Filesystem search, atomic patching with 4-tier fuzzy seek, multi-agent spawning, and headless browser validation.
            </p>
          </div>
          <Link
            href="/features"
            className="mt-4 text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
          >
            Inspect tool catalog →
          </Link>
        </Card>

        {/* Defense-in-Depth Security - 4 cols */}
        <Card
          variant="default"
          className="md:col-span-4 p-6 flex flex-col justify-between bg-surface"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-accent-crimson mb-4">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Defense-in-Depth Security
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Linux Bubblewrap namespace containment with read-only masks over <code className="font-mono">.git</code> and <code className="font-mono">.env</code>, plus Guardian circuit-breakers.
            </p>
          </div>
          <Link
            href="/architecture"
            className="mt-4 text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
          >
            Review security model →
          </Link>
        </Card>

        {/* SDK & App Server - 4 cols */}
        <Card
          variant="default"
          className="md:col-span-4 p-6 flex flex-col justify-between bg-surface"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <Code2 className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              JSON-RPC 2.0 &amp; SDKs
            </h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Unix Domain Socket, Stdio, and HTTP/SSE transports. First-party TypeScript (<code className="font-mono">@m31a/sdk</code>) and Python (<code className="font-mono">m31a</code>) libraries.
            </p>
          </div>
          <Link
            href="/features"
            className="mt-4 text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
          >
            Explore client SDKs →
          </Link>
        </Card>
      </div>
    </Section>
  );
}
