import Link from 'next/link';
import {
  Terminal,
  Cpu,
  Server,
  Code2,
  ArrowRight,
  Check,
  Shield,
  Layers,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ProductSurfaces() {
  const surfaces = [
    {
      id: 'desktop',
      title: 'M31A Desktop',
      badge: 'Native Desktop Workspace · Preview',
      badgeVariant: 'accent',
      description:
        'A native desktop application built with Tauri 2 and the Rust runtime. It brings persistent sessions, streaming conversations, tool activity, settings, and explicit approval and question dialogs into a dedicated workspace.',
      highlights: [
        'Tauri 2 desktop host integrated with the authoritative Rust runtime',
        'Session sidebar and persistent conversation timeline',
        'Visible tool execution, approval cards, and interactive question dialogs',
        'Workspace settings and native file dialog integration',
      ],
      linkText: 'Explore desktop implementation',
      linkHref: 'https://github.com/eshanized/M31A/tree/master/apps/desktop',
      codeSnippet: `# Build the desktop workspace
cargo tauri dev --manifest-path apps/desktop/src-tauri/Cargo.toml

# Desktop host and runtime share the Rust workspace
cargo check --workspace`,
    },
    {
      id: 'cli',
      title: 'M31A CLI & TUI',
      badge: 'Terminal-First Interface',
      badgeVariant: 'accent',
      description:
        'A full-screen interactive Terminal User Interface built on Ratatui and Crossterm, alongside 54 headless CLI subcommands for scriptable automation.',
      highlights: [
        'Interactive streaming transcript with foldable DeepSeek R1 reasoning paths',
        'Fuzzy command palette (Ctrl+P) and NVIDIA NIM model switcher (Ctrl+M)',
        'SQLite session resumption (Ctrl+R) with full turn history replay',
        '54 subcommands including vibe, speculate, swarm, doctor, and setup',
      ],
      linkText: 'Explore CLI & TUI Guide',
      linkHref: '/features',
      codeSnippet: `m31a vibe --visual-url http://localhost:3000
m31a speculate "Optimize parser" "SIMD-JSON" "FlatBuffers" --promote
m31a exec --model deepseek-ai/deepseek-v4.1-flash "Analyze memory safety"`,
    },
    {
      id: 'runtime',
      title: 'M31A Agentic Runtime',
      badge: 'Autonomous Engine',
      badgeVariant: 'default',
      description:
        'The core execution engine written in Rust 2024. Coordinates models, tool dispatch, context window auto-compaction, and session state machines.',
      highlights: [
        'Dynamic NVIDIA NIM model discovery querying /v1/models in real-time',
        'Turn execution loop with automated context budget compaction',
        'Durable SQLite persistence for threads, turns, and checkpoints',
        'Integrated headless Chromium CDP visual TDD validation',
      ],
      linkText: 'Read Architecture Deep-Dive',
      linkHref: '/architecture',
      codeSnippet: `// Rust 2024 Turn Execution Engine
let turn = TurnEngine::new(config, provider, storage);
let result = turn.execute_turn(prompt, sandbox_policy).await?;
assert!(result.verified, "Turn verification gate must pass");`,
    },
    {
      id: 'app-server',
      title: 'M31A App Server',
      badge: 'JSON-RPC 2.0 Daemon',
      badgeVariant: 'default',
      description:
        'An industrial-grade JSON-RPC 2.0 daemon allowing IDE extensions, custom frontends, and CI/CD pipelines to control the agent runtime.',
      highlights: [
        'Three bidirectional transports: Stdio, Unix Domain Socket, and HTTP/SSE',
        'Over 40 RPC protocol methods (thread/*, turn/*, command/*, model/*)',
        'Streaming server-sent events for live tokens and reasoning chunks',
        'Interactive approval and human-in-the-loop question handling',
      ],
      linkText: 'Inspect JSON-RPC 2.0 Specification',
      linkHref: '/architecture',
      codeSnippet: `m31a app-server --stdio
# Or Unix Domain Socket IPC:
~/.m31a/app-server-control/app-server-control.sock
# Or Networked HTTP / SSE daemon:
m31a serve --port 8080`,
    },
    {
      id: 'sdk',
      title: 'M31A Client SDKs',
      badge: 'First-Party Libraries',
      badgeVariant: 'default',
      description:
        'Official client libraries for TypeScript and Python. Built for developers integrating autonomous agent execution into custom workflows.',
      highlights: [
        'TypeScript / Node.js (@m31a/sdk) with async iterable streaming',
        'Python (m31a) with asyncio and synchronous clients (zero external deps)',
        'Full support for reasoning chunk events and approval callbacks',
        'Mock transports for fast, deterministic unit test harnesses',
      ],
      linkText: 'View SDK Documentation',
      linkHref: '/features',
      codeSnippet: `// TypeScript SDK Quickstart
import { M31AClient, StdioTransport } from '@m31a/sdk';
const client = new M31AClient(new StdioTransport());
const thread = await client.createThread({ title: 'Refactor' });
await thread.run({ prompt: 'Implement SIMD serialization' });`,
    },
  ];

  return (
    <Section id="surfaces" spacing="default" background="surface">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Interaction Surfaces
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Multiple surfaces. One sovereign engine.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          M31A spans an interactive terminal, scriptable CLI, native desktop workspace, and first-party SDKs — all connected to the same Rust runtime.
        </p>
      </div>

      <div className="space-y-6">
        {surfaces.map((surface, index) => (
          <div
            key={surface.id}
            className={`p-6 sm:p-7 rounded-xl border border-border bg-surface flex flex-col lg:flex-row items-stretch gap-6 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Description Column */}
            <div className="flex-1 flex flex-col justify-between space-y-5">
              <div>
                <Badge variant={surface.badgeVariant} className="mb-2.5">
                  {surface.badge}
                </Badge>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  {surface.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-4">
                  {surface.description}
                </p>

                <ul className="space-y-2">
                  {surface.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-foreground flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={surface.linkHref}
                  className="text-xs sm:text-sm font-medium text-accent hover:underline inline-flex items-center gap-1.5"
                >
                  {surface.linkText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Code / Visual Column */}
            <div className="lg:w-[48%] flex flex-col justify-center">
              <div className="rounded-lg bg-[#0b0d13] border border-[#222838] p-4 font-mono text-xs text-gray-200 overflow-x-auto">
                <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-[#222838] text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-[#374151]" />
                  <span className="w-2 h-2 rounded-full bg-[#374151]" />
                  <span className="w-2 h-2 rounded-full bg-[#374151]" />
                  <span className="text-[11px] text-gray-500 ml-1">
                    {surface.id}.preview
                  </span>
                </div>
                <pre className="text-gray-300 leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{surface.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
