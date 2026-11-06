import Link from 'next/link';
import {
  Layers,
  Cpu,
  Server,
  Shield,
  FileCode2,
  Database,
  ArrowRight,
  Terminal,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'System Architecture & 39-Crate Topology',
  description:
    'Detailed architectural breakdown of M31A: 39 decoupled Rust crates, multi-turn execution pipelines, Bubblewrap containment, and NVIDIA NIM integration.',
};

const ARCHITECTURE_LAYERS = [
  {
    layer: '1. User Interaction & Client Layer',
    crates: [
      { name: 'm31a-cli', desc: '54 headless subcommands, global flags, and environment resolution.' },
      { name: 'm31a-tui', desc: 'Full-screen Ratatui terminal UI with streaming transcripts and fuzzy palette.' },
      { name: '@m31a/sdk', desc: 'First-party TypeScript / Node.js client library with async iterable streaming.' },
      { name: 'm31a (Python)', desc: 'Pure Python asyncio and synchronous client library (zero external deps).' },
    ],
  },
  {
    layer: '2. Application Server & Protocol Daemon',
    crates: [
      { name: 'm31a-app-server', desc: 'Standard JSON-RPC 2.0 daemon implementing over 40 RPC protocol methods.' },
      { name: 'Transports', desc: 'Stdio (child process), Unix Domain Socket (~/.m31a/app-server-control.sock), and HTTP/SSE.' },
      { name: 'm31a-mcp', desc: 'Model Context Protocol (MCP) host connecting external tool servers.' },
    ],
  },
  {
    layer: '3. Autonomous Agent Core & Verification',
    crates: [
      { name: 'm31a-agent-engine', desc: 'Turn execution loop, context auto-compaction, vibe loop, and speculative arena.' },
      { name: 'm31a-verify', desc: 'Visual TDD DOM assertion engine and semantic AST blast-radius gate.' },
      { name: 'm31a-browser', desc: 'Headless Chromium CDP connection for zero-console-error frontend verification.' },
      { name: 'm31a-watcher', desc: 'Filesystem event debouncer and workspace state monitor.' },
      { name: 'm31a-elicitation', desc: 'Interactive human-in-the-loop question and approval coordination.' },
    ],
  },
  {
    layer: '4. Provider & Frontier Inference',
    crates: [
      { name: 'm31a-provider', desc: 'NVIDIA NIM SSE streaming client with dynamic /v1/models discovery.' },
      { name: 'm31a-prompts', desc: 'System prompt compiler, skill injection, and tool schema synthesizer.' },
      { name: 'm31a-compaction', desc: 'Sliding-window context compression preserving active goals and file edits.' },
    ],
  },
  {
    layer: '5. Security, Isolation & Safety Supervision',
    crates: [
      { name: 'm31a-sandbox', desc: 'Bubblewrap Linux container isolation: Mount, PID, IPC, UTS, and Network namespaces.' },
      { name: 'm31a-execpolicy', desc: 'Prefix pattern rules, PatternToken::Alts, and LAN network destination filtering.' },
      { name: 'm31a-guardian', desc: 'Autonomous safety supervisor with sliding-window circuit breaker (window: 5, max: 3).' },
      { name: 'm31a-trust', desc: 'Workspace trust boundaries and Git hook protection.' },
    ],
  },
  {
    layer: '6. Tools & Mutation Engines',
    crates: [
      { name: 'm31a-tools', desc: '18-tool orchestration suite covering execution, filesystem, and swarms.' },
      { name: 'm31a-patch', desc: 'OpenAI Codex multi-file patch engine with 4-tier fuzzy match (seek_sequence).' },
      { name: 'm31a-code-mode', desc: 'Script pragmas, yield runtime, and nested await tools.<name>() execution.' },
      { name: 'm31a-ast', desc: 'Tree-sitter symbol cross-referencing and data-flow taint tracking.' },
      { name: 'm31a-diff', desc: 'Colorized unified diff generator with syntax highlighting.' },
      { name: 'm31a-shell & m31a-proc', desc: 'Child process supervision, timeout handling, and stdin streaming.' },
    ],
  },
  {
    layer: '7. Durable Persistence & State',
    crates: [
      { name: 'm31a-storage', desc: 'Transactional SQLite database engine at ~/.m31a/storage.db.' },
      { name: 'Threads & Checkpoints', desc: 'Session branching, historical rollbacks, and token expenditure ledgers.' },
      { name: 'Pub-Sub Board & Locks', desc: 'Multi-agent pub-sub messaging and granular file path concurrency mutexes.' },
    ],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="w-full bg-background py-16 md:py-24">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="accent" className="mb-4">
            System Topology
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Modular 39-crate Rust workspace.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
            M31A is decoupled into distinct architectural layers in Rust 2024. Domain boundaries ensure each component—from Bubblewrap container sandboxing to OpenAI Codex multi-file patch generation—remains strictly testable, verifiable, and isolated.
          </p>
        </div>

        {/* High-Level Architecture Flowchart Visual */}
        <div className="my-12 p-8 rounded-large bg-surface border border-border shadow-xs">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-accent" />
            Layered Execution Topology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-medium bg-surface-muted border border-border space-y-2">
              <span className="font-bold text-foreground block uppercase text-[11px] tracking-wider">
                Interaction Surfaces
              </span>
              <p className="text-foreground-muted">m31a CLI (54 subcommands)</p>
              <p className="text-foreground-muted">m31a-tui (Ratatui / Crossterm)</p>
              <p className="text-foreground-muted">TypeScript &amp; Python SDKs</p>
            </div>

            <div className="p-4 rounded-medium bg-accent-subtle/50 border border-accent/20 space-y-2">
              <span className="font-bold text-accent block uppercase text-[11px] tracking-wider">
                Autonomous Core
              </span>
              <p className="text-foreground">m31a-agent-engine (Turn Loop)</p>
              <p className="text-foreground">m31a-provider (NVIDIA NIM SSE)</p>
              <p className="text-foreground">m31a-verify (Visual TDD &amp; AST)</p>
            </div>

            <div className="p-4 rounded-medium bg-red-50/60 border border-red-200/80 space-y-2">
              <span className="font-bold text-accent-crimson block uppercase text-[11px] tracking-wider">
                Containment &amp; Storage
              </span>
              <p className="text-foreground">m31a-sandbox (Bubblewrap)</p>
              <p className="text-foreground">m31a-guardian (Circuit Breaker)</p>
              <p className="text-foreground">m31a-storage (SQLite Engine)</p>
            </div>
          </div>
        </div>

        {/* Detailed Layer Breakdown */}
        <div className="space-y-10">
          {ARCHITECTURE_LAYERS.map((layer) => (
            <div key={layer.layer} className="space-y-4">
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">
                {layer.layer}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {layer.crates.map((c) => (
                  <div
                    key={c.name}
                    className="p-4 rounded-medium bg-surface border border-border flex flex-col justify-between hover:border-border-strong transition-all"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-accent block mb-1">
                        {c.name}
                      </span>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-16 p-8 rounded-large bg-background-soft border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-foreground">
              Deepen your understanding
            </h4>
            <p className="text-xs text-foreground-muted mt-1">
              Read the complete system architecture manual and sequence diagrams in the docs.
            </p>
          </div>
          <Button
            href="https://github.com/eshanized/M31A/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            System Architecture Docs
          </Button>
        </div>
      </Container>
    </div>
  );
}
