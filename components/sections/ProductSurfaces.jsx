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
  Sparkles,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ProductSurfaces() {
  const surfaces = [
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
      terminalBg: true,
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
      terminalBg: false,
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
      terminalBg: true,
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
      terminalBg: false,
    },
  ];

  return (
    <Section id="surfaces" spacing="spacious" background="surface">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="default" className="mb-4">
          Interaction Surfaces
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Four distinct surfaces. One sovereign engine.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          M31A adapts to your engineering workflow—whether you prefer an interactive terminal UI, scriptable CLI automation, or programmatically controlling the runtime via client SDKs.
        </p>
      </div>

      <div className="space-y-8">
        {surfaces.map((surface, index) => (
          <div
            key={surface.id}
            className={`p-6 sm:p-10 rounded-large border border-border bg-surface flex flex-col lg:flex-row items-stretch gap-8 shadow-xs ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Description Column */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div>
                <Badge variant={surface.badgeVariant} className="mb-3">
                  {surface.badge}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {surface.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6">
                  {surface.description}
                </p>

                <ul className="space-y-2.5">
                  {surface.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-foreground flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={surface.linkHref}
                  className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
                >
                  {surface.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Code / Visual Column */}
            <div className="lg:w-[48%] flex flex-col justify-center">
              <div className="rounded-medium bg-[#0d0f14] border border-[#232733] p-4 sm:p-5 font-mono text-xs text-gray-200 overflow-x-auto shadow-md">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#232733] text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-gray-400 ml-1">
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
