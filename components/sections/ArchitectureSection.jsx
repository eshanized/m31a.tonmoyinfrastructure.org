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
    description: 'Zero-cost abstractions, memory safety without garbage collection, and blazing throughput across 39 workspace crates.',
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
    name: 'Bazel 7',
    category: 'Hermetic Monorepo Build',
    description: 'Hermetic, reproducible enterprise build and test automation covering all crates and native platform binaries.',
    link: 'https://bazel.build/',
  },
];

export default function ArchitectureSection() {
  return (
    <Section id="architecture" spacing="spacious" background="surface">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="default" className="mb-4">
          Decoupled Rust Topology
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Built on sovereign, proven technology.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          Every component in M31A is selected for performance, security containment, and sovereign operability. No proprietary wrappers. No hidden cloud dependencies.
        </p>
      </div>

      {/* Technology Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CORE_STACK.map((tech) => (
          <div
            key={tech.name}
            className="p-5 rounded-medium bg-surface-subtle border border-border hover:border-border-strong transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-accent block mb-1">
                {tech.category}
              </span>
              <h3 className="text-base font-bold text-foreground mb-2 flex items-center justify-between">
                <span>{tech.name}</span>
                <Link
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-subtle hover:text-foreground p-1"
                  aria-label={`${tech.name} external link`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 39 Crates Monorepo Callout Banner */}
      <div className="mt-10 p-6 sm:p-8 rounded-large bg-surface border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h4 className="text-lg font-bold text-foreground">
              39 Decoupled Domain Crates
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-foreground-muted max-w-2xl leading-relaxed">
            From <code className="font-mono">m31a-sandbox</code> to <code className="font-mono">m31a-patch</code> and <code className="font-mono">m31a-app-server</code>, domain boundaries prevent spaghettified logic and ensure individual components can be tested and reused independently.
          </p>
        </div>

        <Link
          href="/architecture"
          className="shrink-0 px-5 py-2.5 rounded-full bg-foreground text-surface text-xs font-semibold hover:bg-black transition-colors inline-flex items-center gap-1.5"
        >
          View Full Crate Architecture
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Section>
  );
}
