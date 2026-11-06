'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Code2,
  Terminal,
  Cpu,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  Network,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

const SDK_TABS = [
  {
    id: 'typescript',
    name: 'TypeScript / Node.js',
    package: '@m31a/sdk',
    install: 'pnpm add @m31a/sdk',
    href: 'https://www.npmjs.com/package/@m31a/sdk',
    highlights: [
      'Async iterable token and reasoning stream parsing',
      'Event callbacks: onReasoning, onContent, onToolStarted',
      'Interactive approval request handler callbacks',
      'Stdio, UDS, and HTTP/SSE transport implementations',
    ],
    code: `import { M31AClient, StdioTransport } from '@m31a/sdk';

// Launch M31A daemon as managed child process
const transport = new StdioTransport({
  command: 'm31a',
  args: ['app-server', '--stdio'],
});

const client = new M31AClient(transport);
await client.connect();

// Create thread session backed by SQLite
const thread = await client.createThread({
  title: 'Autonomous Refactoring',
  cwd: process.cwd(),
});

// Run autonomous turn with live streaming
const turn = await thread.run({
  prompt: 'Refactor rate limiter to use SIMD atomic CAS',
  onReasoning: (chunk) => process.stdout.write(\`[Thinking]: \${chunk}\`),
  onContent: (chunk) => process.stdout.write(chunk),
  onToolStarted: (event) => console.log(\`Tool: \${event.tool}\`),
  onApprovalRequested: async () => ({ decision: 'allow' }),
});

await turn.wait();
await client.disconnect();`,
  },
  {
    id: 'python',
    name: 'Python (asyncio & sync)',
    package: 'm31a',
    install: 'pip install m31a',
    href: 'https://pypi.org/project/m31a/',
    highlights: [
      'Zero external dependencies (pure Python standard library)',
      'Asynchronous (AsyncM31AClient) and synchronous (SyncM31AClient)',
      'Unix Domain Socket (UDS) IPC for high-throughput local operations',
      'Thread snapshot and checkpoint restoration helpers',
    ],
    code: `import asyncio
from m31a import AsyncM31AClient, UdsTransport

async def main():
    # Connect via local Unix Domain Socket
    transport = UdsTransport()
    async with AsyncM31AClient(transport) as client:
        # Check daemon diagnostics
        diag = await client.get_diagnostics()
        print(f"Connected to M31A v{diag['version']}")

        # Initialize thread
        thread = await client.create_thread(title="FastAPI optimization")

        # Stream reasoning and content chunks
        async for chunk in thread.stream_turn("Optimize router dispatch with SIMD"):
            if chunk.kind == "reasoning":
                print(f"[Reasoning]: {chunk.text}", end="", flush=True)
            elif chunk.kind == "content":
                print(chunk.text, end="", flush=True)

if __name__ == "__main__":
    asyncio.run(main())`,
  },
];

export default function SDKSection() {
  const [activeTab, setActiveTab] = useState(SDK_TABS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="sdk" spacing="spacious" background="soft">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="accent" className="mb-4">
          Client Libraries
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Build on the M31A runtime.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          Control the M31A agent runtime programmatically. Our official TypeScript and Python SDKs provide clean, typed interfaces over JSON-RPC 2.0 with native streaming and approval hooks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info & Transport Details - 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 p-1 bg-surface rounded-medium border border-border">
            {SDK_TABS.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded-small transition-all ${
                    isActive
                      ? 'bg-foreground text-surface shadow-xs'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className="p-6 rounded-medium bg-surface border border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-accent">
                Package: {activeTab.package}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(activeTab.install)}
                className="text-xs text-foreground-subtle hover:text-foreground inline-flex items-center gap-1 font-mono"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{activeTab.install}</span>
              </button>
            </div>

            <ul className="space-y-2 pt-2 border-t border-border">
              {activeTab.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href={activeTab.href}
                className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                View full {activeTab.name} SDK reference
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Supported Transports Box */}
          <div className="p-4 rounded-medium bg-surface-muted border border-border space-y-2 text-xs">
            <span className="font-semibold text-foreground uppercase tracking-wider block">
              Interchangeable IPC Transports
            </span>
            <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px] text-foreground-muted">
              <div className="p-2 rounded bg-surface border border-border text-center">
                Stdio
              </div>
              <div className="p-2 rounded bg-surface border border-border text-center">
                Unix Socket
              </div>
              <div className="p-2 rounded bg-surface border border-border text-center">
                HTTP / SSE
              </div>
            </div>
          </div>
        </div>

        {/* Right Code Example Card - 7 cols */}
        <div className="lg:col-span-7">
          <div className="rounded-large bg-[#0d0f14] border border-[#232733] shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-[#13161f] border-b border-[#232733] text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent" />
                <span>example.{activeTab.id === 'typescript' ? 'ts' : 'py'}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(activeTab.code)}
                className="hover:text-gray-200 transition-colors inline-flex items-center gap-1 text-[11px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-5 text-xs font-mono text-gray-200 leading-relaxed overflow-x-auto whitespace-pre">
              <code>{activeTab.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
}
