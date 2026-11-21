import Link from 'next/link';
import {
  Layers,
  Cpu,
  Server,
  Database,
  Terminal,
  Shield,
  Binary,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

const CORE_STACK = [
  {
    name: 'Rust 2024 Edition',
    category: 'Core Language',
    description: 'Zero-cost abstractions, memory safety without garbage collection, and high throughput across 39 workspace crates.',
    link: 'https://www.rust-lang.org/',
  },
  {
    name: 'NVIDIA NIM',
    category: 'Frontier Intelligence',
    description: 'Dynamic model discovery querying /v1/models with real-time SSE streaming for Nemotron and DeepSeek R1 reasoning paths.',
    link: 'https://build.nvidia.com/',
  },
  {
    name: 'Tokio Async Runtime',
    category: 'Async Engine',
    description: 'Multi-threaded asynchronous task scheduling driving simultaneous tool invocations, background filesystem watchers, and IPC streams.',
    link: 'https://tokio.rs/',
  },
  {
    name: 'Ratatui & Crossterm',
    category: 'Terminal Interface',
    description: 'Immediate-mode TUI framework powering virtualized scrolling transcript viewports, syntax diffs, and modal dialogs.',
    link: 'https://ratatui.rs/',
  },
  {
    name: 'Bubblewrap (bwrap)',
    category: 'Linux Sandbox',
    description: 'Unprivileged Linux container isolation enforcing Mount, PID, IPC, UTS, and Network namespace boundaries.',
    link: 'https://github.com/containers/bubblewrap',
  },
  {
    name: 'SQLite 3 (rusqlite)',
    category: 'Durable Storage',
    description: 'Transactional persistence for thread sessions, turn checkpoints, pub-sub boards, and file path concurrency locks.',
    link: 'https://sqlite.org/',
  },
  {
    name: 'JSON-RPC 2.0',
    category: 'App Server Protocol',
    description: 'Standardized specification implemented across Stdio, Unix Domain Sockets, and HTTP/SSE for external tooling.',
    link: 'https://www.jsonrpc.org/specification',
  },
  {
    name: 'Tauri 2',
    category: 'Desktop Host',
    description: 'Native desktop shell integrating the Rust runtime with sessions, streaming chat, approvals, settings, and native dialogs.',
    link: 'https://tauri.app/',
  },
];

export default function ArchitectureSection() {
  return (
    <Section id="architecture" spacing="default" background="surface">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Rust Topology
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Built on proven, sovereign systems.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          Every component in M31A is selected for performance, security containment, and deterministic execution.
        </p>
      </div>

      {/* Technology Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {CORE_STACK.map((tech) => (
          <div
            key={tech.name}
            className="p-4 rounded-lg bg-surface border border-border flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-medium text-accent block mb-1">
                {tech.category}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-1.5 flex items-center justify-between">
                <span>{tech.name}</span>
                <Link
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-subtle hover:text-foreground p-0.5"
                  aria-label={`${tech.name} external link`}
                >
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Rust workspace and desktop host callout */}
      <div className="mt-8 p-5 sm:p-6 rounded-xl bg-surface-muted border border-border flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h4 className="text-sm font-semibold text-foreground">
              Rust Workspace &amp; Desktop Host
            </h4>
          </div>
          <p className="text-xs text-foreground-muted max-w-2xl leading-relaxed">
            M31A combines independently testable Rust domains with its runtime, a native Tauri desktop host, and worktree-first coordination for isolated concurrent tasks.
          </p>
        </div>

        <Link
          href="/architecture"
          className="shrink-0 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-1.5"
        >
          View Full Crate Architecture
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Section>
  );
}
