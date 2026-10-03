import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, ShieldAlert, Cpu, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { CodeBlock } from '@/components/site/code-block';
import { CLI_COMMAND_DEFS, PRODUCT } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A CLI Reference',
  description:
    'Complete CLI reference for M31A: 18 verified subcommands, clap-derive flags, machine-readable JSON outputs, and standardized UNIX exit codes.',
};

const EXIT_CODES = [
  {
    code: 0,
    name: 'SUCCESS',
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    description: 'Mission completed cleanly; all multi-tier verification gates satisfied and evidence attested.',
  },
  {
    code: 1,
    name: 'VERIFICATION_FAILED',
    badge: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    description: 'Completion criteria failed (failing tests, linter warnings in strict mode, or uncommitted edits).',
  },
  {
    code: 2,
    name: 'POLICY_VIOLATION',
    badge: 'border-red-500/30 bg-red-500/10 text-red-400',
    description: 'Operation vetoed by policy stack (unauthorized path access, network egress block, or rejected approval).',
  },
  {
    code: 3,
    name: 'BUDGET_EXHAUSTED',
    badge: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    description: 'Resource bounds exceeded on wall-clock time, memory ceiling, token quota, or step limit.',
  },
  {
    code: 4,
    name: 'CRASH_OR_PANIC',
    badge: 'border-red-500/30 bg-red-500/10 text-red-400',
    description: 'Unexpected runtime panic or unhandled exception. State checkpoint preserved for startup recovery scanner.',
  },
  {
    code: 5,
    name: 'CONFIG_ERROR',
    badge: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    description: 'Malformed config.toml, invalid profile name, missing NVIDIA credentials, or conflicting CLI arguments.',
  },
];

export default function CliPage() {
  const categories = Array.from(new Set(CLI_COMMAND_DEFS.map((c) => c.category)));

  return (
    <>
      {/* Header */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="CLI Reference"
            title="18 Command Interfaces Built on Clap"
            description="The M31A command line interface provides dual operating modes: an interactive Ratatui cockpit and headless machine-readable automation for CI/CD pipelines."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#cat-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="rounded-md border border-border/60 bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {cat} ({CLI_COMMAND_DEFS.filter((c) => c.category === cat).length})
              </a>
            ))}
            <a
              href="#exit-codes"
              className="rounded-md border border-border/60 bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              Exit Codes (0–5)
            </a>
            <a
              href="#machine-readable"
              className="rounded-md border border-border/60 bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              JSON & Automation
            </a>
          </div>
        </Container>
      </Section>

      {/* Quick Start Cards */}
      <Section className="border-b border-border/40">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Interactive Cockpit Mode"
                description="Default invocation launches the full Ratatui TUI cockpit with RAII terminal protection."
              />
              <div className="mt-6">
                <CodeBlock
                  filename="terminal"
                  language="bash"
                  code={`# Launch interactive cockpit in current workspace
m31a

# Launch with explicit profile and custom model
m31a tui --profile coding --model nvidia/nemotron-3-ultra-550b-a55b

# Specify alternate workspace directory
m31a --workspace /path/to/project`}
                />
              </div>
            </div>
            <div>
              <SectionHeader
                title="Diagnostics & Environment"
                description="Verify sandbox capabilities, SQLite persistence, and provider connectivity before mission dispatch."
              />
              <div className="mt-6">
                <CodeBlock
                  filename="terminal"
                  language="bash"
                  code={`# Comprehensive diagnostic health check
m31a doctor

# Inspect deployment context and active release channel
m31a deployment --verbose

# Verify version identity, commit hash, and build features
m31a version --verbose`}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Commands by Category */}
      {categories.map((category) => {
        const catId = `cat-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const commands = CLI_COMMAND_DEFS.filter((c) => c.category === category);
        return (
          <Section key={category} id={catId} className="border-b border-border/40 py-12 scroll-mt-16">
            <Container>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">Subsystem Category</span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{category} Commands</h3>
                </div>
                <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {commands.length} {commands.length === 1 ? 'command' : 'commands'}
                </span>
              </div>

              <div className="space-y-6">
                {commands.map((cmd) => (
                  <div
                    key={cmd.command}
                    className="rounded-xl border border-border/60 bg-card/40 p-6 transition-all hover:border-primary/30"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Terminal className="h-4 w-4" />
                          </div>
                          <div>
                            <code className="font-mono text-base font-semibold text-primary">
                              {cmd.command}
                            </code>
                          </div>
                        </div>
                        <span className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                          {cmd.category}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground">{cmd.summary}</p>

                      <div className="space-y-2">
                        <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">Usage Syntax</div>
                        <div className="rounded-lg border border-border/50 bg-black/40 px-3 py-2 font-mono text-xs text-zinc-300">
                          {cmd.usage}
                        </div>
                      </div>

                      {cmd.flags && cmd.flags.length > 0 && (
                        <div className="space-y-2">
                          <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">Options & Flags</div>
                          <div className="overflow-x-auto rounded-lg border border-border/40">
                            <table className="w-full text-left font-mono text-xs">
                              <tbody className="divide-y divide-border/40">
                                {cmd.flags.map((f) => (
                                  <tr key={f.flag} className="hover:bg-muted/20">
                                    <td className="whitespace-nowrap px-3 py-2 font-medium text-primary">
                                      {f.flag}
                                    </td>
                                    <td className="px-3 py-2 text-muted-foreground font-sans text-xs">
                                      {f.description}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {cmd.examples && cmd.examples.length > 0 && (
                        <div className="space-y-2">
                          <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">Examples</div>
                          <CodeBlock
                            language="bash"
                            code={cmd.examples.join('\n')}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Standardized UNIX Exit Codes */}
      <Section id="exit-codes" className="border-b border-border/40 scroll-mt-16">
        <Container>
          <SectionHeader
            eyebrow="Process Invariants"
            title="Standardized UNIX Exit Codes"
            description="M31A defines deterministic, machine-parsable process exit codes across headless and CI/CD pipelines to guarantee programmatic fault detection."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXIT_CODES.map((item) => (
              <div
                key={item.code}
                className="rounded-xl border border-border/60 bg-card/40 p-5 transition-all hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold text-foreground">exit {item.code}</span>
                  </div>
                  <span className={`rounded-md border px-2 py-0.5 font-mono text-xs font-semibold ${item.badge}`}>
                    {item.name}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Machine-Readable JSON & CI/CD */}
      <Section id="machine-readable" className="border-b border-border/40 scroll-mt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Headless Automation"
                title="Machine-Readable Output Contracts"
                description="Every diagnostic and mission command supports structured JSON emission for integration into GitHub Actions, GitLab CI, and corporate orchestrators."
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">--output json</strong>: Emits single root JSON document upon mission or inspection completion.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">--output stream-json</strong>: Streams line-delimited NDJSON events with typed timestamps and state deltas.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Zero Leaks</strong>: SecretRedactor scrubs credential tokens before JSON serialization.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <CodeBlock
                filename="ci-headless.sh"
                language="bash"
                code={`# Automated CI pipeline execution with JSON report
m31a mission run "Run cargo clippy and cargo test --all" \\
  --profile safe \\
  --output json > mission_report.json

# Check exit status deterministically
EXIT_STATUS=$?
if [ $EXIT_STATUS -eq 0 ]; then
  echo "Mission verified cleanly"
elif [ $EXIT_STATUS -eq 1 ]; then
  echo "Verification gates failed"
elif [ $EXIT_STATUS -eq 2 ]; then
  echo "Policy violation vetoed execution"
fi`}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Interactive Slash Commands note */}
      <Section>
        <Container>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Looking for In-Cockpit Slash Commands?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Inside the interactive Ratatui cockpit, M31A provides runtime control commands like <code className="text-primary font-mono">/help</code>, <code className="text-primary font-mono">/profile</code>, <code className="text-primary font-mono">/status</code>, and <code className="text-primary font-mono">/exit</code>.
                </p>
              </div>
              <Link
                href="/docs/tui"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Read TUI Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
