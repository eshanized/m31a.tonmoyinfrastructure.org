import Link from 'next/link';
import { CodeBlock } from '@/components/site/code-block';
import { PRODUCT, TOOLS_CATALOG, PLATFORMS_MATRIX, CLI_COMMAND_DEFS, ARCHITECTURE_LAYERS } from '@/lib/m31a/product';
import { ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink, Terminal, Cpu, Database, Lock, Wrench, Workflow } from 'lucide-react';

export interface DocArticle {
  toc: { id: string; title: string }[];
  content: React.ReactNode;
}

export function getDocArticle(slug: string): DocArticle {
  switch (slug) {
    case 'introduction':
      return {
        toc: [
          { id: 'overview', title: 'Overview' },
          { id: 'central-principle', title: 'The Central Principle' },
          { id: 'architectural-pillars', title: 'Architectural Pillars' },
          { id: 'what-m31a-is-not', title: 'What M31A Is Not' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A (M31 Autonomous) is a single-crate, high-assurance, Rust-native autonomous software engineering runtime. It provides deterministic lifecycle control, strict multi-layer security policies, resource-bounded execution, continuous verification, crash-resilient checkpoints, and local observability for autonomous coding agents.
            </p>

            <div id="central-principle" className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold">The Central Architectural Boundary</div>
              <h3 className="text-xl font-bold tracking-tight text-foreground mt-1">&quot;The model proposes. The runtime decides.&quot;</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Unlike ad-hoc agent scripts or loose orchestration frameworks that delegate execution authority to non-deterministic large language models, M31A treats the LLM as an untrusted reasoning component. The runtime strictly owns state, scheduling, file access, command execution, policies, verification, and completion criteria.
              </p>
            </div>

            <h2 id="architectural-pillars" className="text-xl font-bold tracking-tight text-foreground pt-4">
              6 Architectural Pillars
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="font-semibold text-primary text-sm">1. Single Trusted Kernel</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  A single clean Rust crate without foreign runtime dependencies — zero Node.js, Python, or GPU required for core runtime execution.
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="font-semibold text-primary text-sm">2. Deterministic Governance</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Every side effect passes through an 11-stage policy evaluation gate across a 10-tier authority stack.
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="font-semibold text-primary text-sm">3. Evidence-Based Completion</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  No mission or task is marked complete without deterministic, multi-tier verification evidence and cryptographic SHA-256 digests.
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="font-semibold text-primary text-sm">4. Resilient Recovery</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Two-phase atomic checkpoints, startup crash recovery scanners, and differential DAG replanning preserve verified work.
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="font-semibold text-primary text-sm">5. Bounded Confinement</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  10-dimensional hard resource budgets and platform-aware confinement (Linux cgroups v2, POSIX rlimits) eliminate runaway executions.
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/40 p-4">
                <div className="font-semibold text-primary text-sm">6. Local Observability</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  SQLite compact event indexes, append-only NDJSON execution streams, and zero-leak secret redaction before durable storage.
                </p>
              </div>
            </div>

            <h2 id="what-m31a-is-not" className="text-xl font-bold tracking-tight text-foreground pt-4">
              What M31A Is Not
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Not a generic chatbot or Copilot clone:</strong> It does not just suggest code completions; it plans, executes tools, and runs verifications in your local workspace.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Not a remote execution service:</strong> All execution happens on your local workstation or server under your direct terminal supervision.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Not an unconstrained prompt wrapper:</strong> The LLM has zero direct OS access; every action is mediated through sandboxed tools and non-bypassable policy gates.</span>
              </li>
            </ul>
          </div>
        ),
      };

    case 'installation':
      return {
        toc: [
          { id: 'quick-install', title: 'One-Liner Install Scripts' },
          { id: 'prebuilt-binaries', title: 'Standalone Binaries' },
          { id: 'source-build', title: 'Building from Source (Cargo)' },
          { id: 'deployment-channels', title: 'Deployment Channels' },
          { id: 'verification', title: 'SHA-256 Verification' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A can be installed via automated standalone binary installer scripts, downloaded directly as prebuilt archives from GitHub Releases, or compiled from source using Cargo.
            </p>

            <h2 id="quick-install" className="text-xl font-bold tracking-tight text-foreground">
              1. One-Liner Install Scripts
            </h2>
            <p className="text-sm text-muted-foreground">
              On <strong>Linux</strong> and <strong>macOS</strong>, the shell script detects host architecture, downloads the release archive, verifies SHA-256 checksums, and installs to <code className="bg-secondary px-1 py-0.5 rounded text-foreground font-mono text-xs">/usr/local/bin</code> or <code className="bg-secondary px-1 py-0.5 rounded text-foreground font-mono text-xs">~/.local/bin</code>:
            </p>
            <CodeBlock language="bash" filename="terminal" code={PRODUCT.installCurl} />

            <p className="text-sm text-muted-foreground pt-2">
              On <strong>Windows</strong> (PowerShell):
            </p>
            <CodeBlock language="powershell" filename="PowerShell" code={PRODUCT.installPowerShell} />

            <h2 id="prebuilt-binaries" className="text-xl font-bold tracking-tight text-foreground pt-4">
              2. Pre-Built Standalone Binaries
            </h2>
            <p className="text-sm text-muted-foreground">
              Download native standalone archives directly from GitHub Releases:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead className="bg-secondary/40 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-3 py-2 text-left">OS / Architecture</th>
                    <th className="px-3 py-2 text-left">Target Triple</th>
                    <th className="px-3 py-2 text-left">Archive</th>
                    <th className="px-3 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {PLATFORMS_MATRIX.map((p) => (
                    <tr key={p.targetTriple} className="hover:bg-secondary/20">
                      <td className="px-3 py-2 font-medium text-foreground">{p.os} ({p.architecture})</td>
                      <td className="px-3 py-2 font-mono text-muted-foreground">{p.targetTriple}</td>
                      <td className="px-3 py-2 font-mono text-primary">
                        <a href={`${PRODUCT.releasesUrl}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {p.archiveName}
                        </a>
                      </td>
                      <td className="px-3 py-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          p.classification === 'SUPPORTED'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : p.classification === 'CONDITIONALLY SUPPORTED'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                        }`}>
                          {p.classification}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="source-build" className="text-xl font-bold tracking-tight text-foreground pt-4">
              3. Building from Source (Cargo)
            </h2>
            <p className="text-sm text-muted-foreground">
              Requires Rust 1.85+ (Edition 2024). Compile with release optimizations:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`git clone https://github.com/eshanized/M31A.git
cd M31A
cargo build --release
cargo install --path .`} />

            <h2 id="deployment-channels" className="text-xl font-bold tracking-tight text-foreground pt-4">
              4. Deployment Channels (Production vs Development)
            </h2>
            <p className="text-sm text-muted-foreground">
              M31A enforces compile-time artifact identity. Production (<code className="text-foreground font-mono text-xs">m31a</code>) is the default. To build the isolated development channel (<code className="text-foreground font-mono text-xs">m31a-dev</code>):
            </p>
            <CodeBlock language="bash" filename="terminal" code={`# Development channel build with isolated m31a-dev state paths
cargo build --release --features development`} />

            <h2 id="verification" className="text-xl font-bold tracking-tight text-foreground pt-4">
              5. SHA-256 Integrity Verification
            </h2>
            <p className="text-sm text-muted-foreground">
              Always verify downloaded archives against their published SHA-256 signatures before installation:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`# Download archive and sha256 signature
curl -fsSL https://github.com/eshanized/M31A/releases/download/v0.1.1/m31a-linux-x64.tar.gz -o m31a-linux-x64.tar.gz
curl -fsSL https://github.com/eshanized/M31A/releases/download/v0.1.1/m31a-linux-x64.tar.gz.sha256 -o m31a-linux-x64.tar.gz.sha256

# Verify cryptographic checksum
sha256sum -c m31a-linux-x64.tar.gz.sha256`} />
          </div>
        ),
      };

    case 'quick-start':
      return {
        toc: [
          { id: 'credentials', title: '1. Configure NVIDIA NIM Credentials' },
          { id: 'first-mission', title: '2. Run Your First Mission' },
          { id: 'tui-cockpit', title: '3. Launch the Cockpit (TUI)' },
          { id: 'telemetry', title: '4. Inspect Mission Telemetry' },
          { id: 'doctor', title: '5. Environment Health Diagnostics' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Get up and running with M31A in your terminal in under 5 minutes.
            </p>

            <h2 id="credentials" className="text-xl font-bold tracking-tight text-foreground">
              1. Configure NVIDIA NIM Credentials
            </h2>
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-xs text-muted-foreground">
              <strong className="text-amber-400 font-semibold">Production Provider Invariant:</strong> M31A production supports NVIDIA NIM exclusively (<code className="text-foreground font-mono">nvidia_nim</code>). Retired provider IDs (openai, anthropic, gemini, ollama) are rejected deterministically.
            </div>
            <p className="text-sm text-muted-foreground">
              Set the environment variable or persist it locally with 0600 file permissions:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`# Option A: Environment variable
export NVIDIA_API_KEY="nvapi-..."

# Option B: Persist in local user credentials
m31a config set-credential nvidia_nim "nvapi-..."`} />

            <h2 id="first-mission" className="text-xl font-bold tracking-tight text-foreground pt-4">
              2. Run Your First Autonomous Mission
            </h2>
            <p className="text-sm text-muted-foreground">
              Execute a targeted refactoring or coding task in your workspace:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`# Run an autonomous coding mission under the "coding" profile
m31a mission run "Refactor database queries in src/repo to use parameterized statements" --profile coding`} />

            <h2 id="tui-cockpit" className="text-xl font-bold tracking-tight text-foreground pt-4">
              3. Launch the Interactive Cockpit (TUI)
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch the full Ratatui 0.30 terminal cockpit for interactive pairing, task DAG inspection, and governance reviews:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`m31a tui`} />

            <h2 id="telemetry" className="text-xl font-bold tracking-tight text-foreground pt-4">
              4. Inspect Mission Telemetry &amp; Resource Usage
            </h2>
            <p className="text-sm text-muted-foreground">
              Query the SQLite event index and token metrics for a completed mission:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`m31a telemetry inspect <MISSION_ID> --summary --spans --metrics`} />

            <h2 id="doctor" className="text-xl font-bold tracking-tight text-foreground pt-4">
              5. Environment Health Diagnostics
            </h2>
            <p className="text-sm text-muted-foreground">
              Verify platform prerequisites (Git worktree support, POSIX rlimits, cgroups v2, compiler):
            </p>
            <CodeBlock language="bash" filename="terminal" code={`m31a doctor`} />
          </div>
        ),
      };

    case 'platform-support':
      return {
        toc: [
          { id: 'support-matrix', title: 'Target Support Matrix' },
          { id: 'capability-gaps', title: 'Platform Capability Gaps' },
          { id: 'qualification-rules', title: 'Qualification Rules' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Authoritative statement on cross-platform runtime qualifications in accordance with <code className="text-primary font-mono text-xs">docs/PLATFORM-SUPPORT.md</code>.
            </p>

            <h2 id="support-matrix" className="text-xl font-bold tracking-tight text-foreground">
              Platform Classification Matrix
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead className="bg-secondary/40 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-3 py-2 text-left">Target</th>
                    <th className="px-3 py-2 text-left">Classification</th>
                    <th className="px-3 py-2 text-left">Meaning &amp; Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr className="hover:bg-secondary/20">
                    <td className="px-3 py-2 font-mono text-foreground">Linux x86_64</td>
                    <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">SUPPORTED</span></td>
                    <td className="px-3 py-2 text-muted-foreground">Release-qualified: native runtime, parity, security, CI, and artifact evidence all green.</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td className="px-3 py-2 font-mono text-foreground">macOS x86_64</td>
                    <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30">CONDITIONALLY SUPPORTED</span></td>
                    <td className="px-3 py-2 text-muted-foreground">Implemented; Seatbelt isolation is Degraded (never full sandbox); native re-verification pending macOS runner.</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td className="px-3 py-2 font-mono text-foreground">Linux aarch64</td>
                    <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-bold border border-zinc-700">COMPILE-ONLY</span></td>
                    <td className="px-3 py-2 text-muted-foreground">Compiles cleanly; no native runtime evidence — do not assume x86_64 behavior.</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td className="px-3 py-2 font-mono text-foreground">macOS aarch64</td>
                    <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-bold border border-zinc-700">COMPILE-ONLY</span></td>
                    <td className="px-3 py-2 text-muted-foreground">Compiles cleanly; native runs awaiting dedicated Apple Silicon test runner.</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td className="px-3 py-2 font-mono text-foreground">Windows x86_64</td>
                    <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-bold border border-zinc-700">COMPILE-ONLY</span></td>
                    <td className="px-3 py-2 text-muted-foreground">Compiles; Job Objects, ACLs, and ConPTY verified by contract only — native runs pending Windows runner.</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td className="px-3 py-2 font-mono text-foreground">Windows aarch64</td>
                    <td className="px-3 py-2"><span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-bold border border-zinc-700">COMPILE-ONLY</span></td>
                    <td className="px-3 py-2 text-muted-foreground">Compiles cleanly; no native runtime evidence.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="capability-gaps" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Capability Gaps &amp; Fail-Closed Behavior
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Windows:</strong> Has no file-descriptor limit, no filesystem isolation, and no network namespace isolation. Requests requiring them fail closed with typed errors — never silently.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>macOS:</strong> Memory limits are best-effort (<code className="text-foreground font-mono text-xs">RLIMIT_AS</code>); Linux uses hard kernel cgroup v2 enforcement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Windows Path Containment:</strong> Uses lexical comparison; reparse-point resolution requires privilege and is a documented limitation.</span>
              </li>
            </ul>

            <h2 id="qualification-rules" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Qualification Invariants
            </h2>
            <div className="rounded-lg border border-border bg-[#11141b] p-4 text-xs font-mono text-muted-foreground space-y-1">
              <div>- A target is SUPPORTED only with native runtime evidence. Compilation is not support.</div>
              <div>- Degraded never means Available. Unsupported never means successful.</div>
            </div>
          </div>
        ),
      };

    case 'concepts':
      return {
        toc: [
          { id: 'runtime-authority', title: 'Runtime Authority' },
          { id: 'proposal-vs-decision', title: 'The Proposal vs Decision Separation' },
          { id: 'fail-closed-philosophy', title: 'Fail-Closed Governance' },
          { id: 'state-ownership', title: 'Authoritative State Ownership' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A represents a paradigm shift from conventional &quot;agent wrappers&quot;. Instead of granting an LLM direct shell execution privileges, M31A embeds the model as an untrusted reasoning component inside a deterministic systems runtime.
            </p>

            <h2 id="runtime-authority" className="text-xl font-bold tracking-tight text-foreground">
              Runtime Authority
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In ad-hoc agent frameworks, the LLM decides when a task is finished, what commands to run, and what files to touch. When models hallucinate or encounter adversarial injections, catastrophic side effects (deleted databases, exposed credentials, infinite loops) occur.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In M31A, the runtime owns the state machine. The LLM cannot mutate workspace state, spawn child processes, or conclude a mission on its own authority.
            </p>

            <h2 id="proposal-vs-decision" className="text-xl font-bold tracking-tight text-foreground pt-4">
              The Proposal vs Decision Separation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card/40 p-4">
                <div className="font-mono text-xs text-primary font-bold uppercase mb-1">The Model (Untrusted)</div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>• Proposes structured tool calls (JSON)</li>
                  <li>• Generates candidate task decompositions</li>
                  <li>• Produces candidate source code patches</li>
                  <li>• Analyzes diagnostic compiler errors</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/40 bg-primary/5 p-4">
                <div className="font-mono text-xs text-primary font-bold uppercase mb-1">The Runtime (Authoritative)</div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>• Evaluates actions through 11-stage policy gate</li>
                  <li>• Enforces 10-dimensional resource bounds</li>
                  <li>• Confines subprocesses via cgroups and rlimits</li>
                  <li>• Verifies results against automated tests</li>
                  <li>• Commits atomic checkpoints to SQLite</li>
                </ul>
              </div>
            </div>

            <h2 id="fail-closed-philosophy" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Fail-Closed Governance
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whenever ambiguity arises — whether an ambiguous checkpoint, an unresolved policy ASK in unattended mode, an unverified worktree, or an unrecognized configuration schema — the runtime fails closed. It never guesses, assumes success, or silently bypasses checks.
            </p>
          </div>
        ),
      };

    case 'architecture':
      return {
        toc: [
          { id: 'layered-hierarchy', title: 'Layered Hierarchy (L0–L9)' },
          { id: 'unidirectional-rule', title: 'Downward Dependency Rule' },
          { id: 'hybrid-persistence', title: 'Hybrid Persistence Architecture' },
          { id: 'subsystem-table', title: 'Subsystem Breakdown' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The M31A runtime is structured into 10 downward-dependency layers (L0 to L9). Lower layers are strictly forbidden from importing or depending on higher layers.
            </p>

            <h2 id="layered-hierarchy" className="text-xl font-bold tracking-tight text-foreground">
              The 10-Layer Hierarchy (L0–L9)
            </h2>
            <div className="space-y-2">
              {ARCHITECTURE_LAYERS.map((l) => (
                <div key={l.layer} className="p-3 rounded-lg border border-border/60 bg-card/40 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 shrink-0">
                      {l.layer}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{l.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{l.responsibilities}</div>
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground shrink-0 hidden sm:block">
                    {l.sourcePath}
                  </div>
                </div>
              ))}
            </div>

            <h2 id="unidirectional-rule" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Downward Dependency Rule
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The TUI (L9) and CLI (L9) are pure projections of authoritative SQLite state (L0). If the TUI crashes or is closed, the underlying mission execution loop (L8) and sandboxed tools (L2) continue running safely in the background without state loss.
            </p>

            <h2 id="hybrid-persistence" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Hybrid Persistence Architecture
            </h2>
            <div className="rounded-xl border border-border bg-[#0d1016] p-4 font-mono text-xs text-muted-foreground space-y-1">
              <div className="text-foreground">.m31a/</div>
              <div>├── db.sqlite           # Compact relational state (WAL mode, foreign keys ON)</div>
              <div>├── telemetry/          # Append-only NDJSON execution streams with secret redaction</div>
              <div>│   └── &lt;mission_id&gt;.ndjson</div>
              <div>├── artifacts/          # Content-addressed SHA-256 immutable blob storage</div>
              <div>│   └── ab/abcd1234...bin</div>
              <div>└── staging/            # Two-phase staging buffers for uncommitted checkpoints</div>
            </div>
          </div>
        ),
      };

    case 'autonomy-loop':
      return {
        toc: [
          { id: 'twelve-stages', title: 'The 12-Stage Controller Loop' },
          { id: 'autonomy-modes', title: 'The 5 Autonomy Modes' },
          { id: 'budget-enforcer', title: '10-Dimensional Resource Budget' },
          { id: 'loop-detector', title: 'Sliding-Window Loop Detection' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Missions are orchestrated deterministically by the <code className="text-primary font-mono text-xs">AutonomyController</code> across a 12-stage execution lifecycle.
            </p>

            <h2 id="twelve-stages" className="text-xl font-bold tracking-tight text-foreground">
              The 12-Stage Execution Lifecycle
            </h2>
            <ol className="space-y-2 text-xs text-muted-foreground list-decimal list-inside">
              <li><strong className="text-foreground">Intake &amp; Validation:</strong> Ingests mission intent, resolves effective profile, validates invariants.</li>
              <li><strong className="text-foreground">Context Compilation:</strong> Gathers repository AST, workspace baseline commit, security policies.</li>
              <li><strong className="text-foreground">Plan Generation:</strong> Consults planning model to generate a candidate task DAG.</li>
              <li><strong className="text-foreground">DAG Reconciliation:</strong> Reconciles candidate plan with existing petgraph TaskGraph.</li>
              <li><strong className="text-foreground">Topological Scheduling:</strong> Selects ready tasks whose dependencies are satisfied.</li>
              <li><strong className="text-foreground">Agent Dispatch:</strong> Instantiates specialized agent role state machine.</li>
              <li><strong className="text-foreground">Two-Phase Reservation:</strong> Pre-allocates tokens, memory, and step quotas before execution.</li>
              <li><strong className="text-foreground">Tool Execution &amp; Policy Gate:</strong> Evaluates tool proposals through 11-stage policy gate.</li>
              <li><strong className="text-foreground">Post-Execution Settlement:</strong> Reconciles actual consumed resources and logs telemetry.</li>
              <li><strong className="text-foreground">Evidence-Based Verification:</strong> Runs cargo test, clippy, and syntax checks.</li>
              <li><strong className="text-foreground">Checkpointing:</strong> Captures atomic two-phase snapshot committing staged artifacts.</li>
              <li><strong className="text-foreground">Completion Gating:</strong> Evaluates completion criteria and produces signed report.</li>
            </ol>

            <h2 id="autonomy-modes" className="text-xl font-bold tracking-tight text-foreground pt-4">
              The 5 Autonomy Modes
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead className="bg-secondary/40 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-3 py-2 text-left">Mode</th>
                    <th className="px-3 py-2 text-left">Mutations Permitted?</th>
                    <th className="px-3 py-2 text-left">Approval Behavior (ASK)</th>
                    <th className="px-3 py-2 text-left">Primary Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr>
                    <td className="px-3 py-2 font-bold text-foreground">Plan</td>
                    <td className="px-3 py-2 text-red-400">No (Strictly Read-Only)</td>
                    <td className="px-3 py-2">Denied immediately</td>
                    <td className="px-3 py-2 text-muted-foreground">Architecture planning, DAG generation</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold text-foreground">Safe</td>
                    <td className="px-3 py-2 text-amber-400">Requires Approval</td>
                    <td className="px-3 py-2">Pauses mission; awaits confirmation</td>
                    <td className="px-3 py-2 text-muted-foreground">Sensitive repos, unfamiliar codebases</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold text-foreground">Assisted</td>
                    <td className="px-3 py-2 text-emerald-400">Inside Workspace</td>
                    <td className="px-3 py-2">Pauses only for external side effects</td>
                    <td className="px-3 py-2 text-muted-foreground">Standard interactive pairing (default)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold text-foreground">Autonomous</td>
                    <td className="px-3 py-2 text-emerald-400">Inside Workspace</td>
                    <td className="px-3 py-2">Pauses only on explicit policy veto</td>
                    <td className="px-3 py-2 text-muted-foreground">Self-directed refactoring and features</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold text-foreground">Unattended</td>
                    <td className="px-3 py-2 text-emerald-400">Inside Workspace</td>
                    <td className="px-3 py-2 text-red-400 font-bold">Converts ASK to DENY fail-closed</td>
                    <td className="px-3 py-2 text-muted-foreground">Headless CI/CD evaluation runners</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="budget-enforcer" className="text-xl font-bold tracking-tight text-foreground pt-4">
              10-Dimensional Resource Budget Enforcer
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              M31A clamps execution across 10 hard resource bounds: wall-clock seconds, concurrent agents, agent decision steps, model invocations, token usage, financial cost ($USD), process CPU time, memory bytes (cgroups memory.max), artifact disk storage, and task retries.
            </p>
          </div>
        ),
      };

    case 'agent-swarm':
      return {
        toc: [
          { id: 'canonical-roles', title: 'The 8 Canonical Roles' },
          { id: 'state-machines', title: 'Role State Machines' },
          { id: 'anti-fake-diff', title: 'Anti-Fake-Diff Verification' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A partitions autonomous engineering tasks across 8 specialized agent roles, each with dedicated prompt contracts, capability boundaries, and step budgets.
            </p>

            <h2 id="canonical-roles" className="text-xl font-bold tracking-tight text-foreground">
              Canonical Agent Roles
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { role: 'planner', desc: 'Analyzes objectives, decomposes requirements, and generates acyclic candidate task DAGs.' },
                { role: 'researcher', desc: 'Explores codebase structure, index symbols, reads docs, and surveys dependencies.' },
                { role: 'architect', desc: 'Defines cross-module interfaces, contract types, API boundaries, and architectural patterns.' },
                { role: 'implementer', desc: 'Authors source code modifications, writes tests, and applies targeted patches.' },
                { role: 'reviewer', desc: 'Performs semantic code reviews, auditing proposed diffs for security and regressions.' },
                { role: 'verifier', desc: 'Executes automated test suites, type checking, formatting, and produces cryptographic evidence.' },
                { role: 'diagnostician', desc: 'Analyzes failed verification runs, compiler diagnostics, and classifies failure modes.' },
                { role: 'integrator', desc: 'Consolidates verified worktrees, stages changes, generates RFC-compliant commit trailers.' },
              ].map((r) => (
                <div key={r.role} className="rounded-lg border border-border/70 bg-card/40 p-3.5">
                  <div className="font-mono font-bold text-primary text-xs uppercase">{r.role}</div>
                  <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="anti-fake-diff" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Anti-Fake-Diff Enforcement
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The <code className="text-foreground font-mono text-xs">reviewer</code> and <code className="text-foreground font-mono text-xs">verifier</code> roles actively scan proposed code modifications for placeholder shortcuts such as <code className="text-red-400 font-mono text-xs">todo!()</code>, <code className="text-red-400 font-mono text-xs">unimplemented!()</code>, or truncated comments. Any patch containing fake progress is rejected before task completion.
            </p>
          </div>
        ),
      };

    case 'policies':
      return {
        toc: [
          { id: 'outcomes', title: 'The 4 Policy Outcomes' },
          { id: 'authority-stack', title: '10-Tier Authority Stack' },
          { id: 'monotonic-rule', title: 'Monotonic Non-Weakening Merger Rule' },
          { id: 'builtin-vetoes', title: 'Layer 0 Built-in Vetoes' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The M31A policy engine enforces deterministic governance over all side effects (file mutations, child processes, Git operations, and network requests).
            </p>

            <h2 id="outcomes" className="text-xl font-bold tracking-tight text-foreground">
              The 4 Policy Outcomes
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="border border-emerald-500/40 bg-emerald-950/20 p-3 rounded-lg">
                <div className="font-bold text-emerald-400">ALLOW</div>
                <div className="text-muted-foreground mt-1">Permitted unconditionally within sandbox bounds.</div>
              </div>
              <div className="border border-red-500/40 bg-red-950/20 p-3 rounded-lg">
                <div className="font-bold text-red-400">DENY</div>
                <div className="text-muted-foreground mt-1">Forbidden fail-closed with zero side effects.</div>
              </div>
              <div className="border border-amber-500/40 bg-amber-950/20 p-3 rounded-lg">
                <div className="font-bold text-amber-400">ASK</div>
                <div className="text-muted-foreground mt-1">Requires human operator authorization. Unattended = DENY.</div>
              </div>
              <div className="border border-purple-500/40 bg-purple-950/20 p-3 rounded-lg">
                <div className="font-bold text-purple-400">ESCALATE</div>
                <div className="text-muted-foreground mt-1">Requires administrative consent or halts mission.</div>
              </div>
            </div>

            <h2 id="authority-stack" className="text-xl font-bold tracking-tight text-foreground pt-4">
              10-Tier Authority Precedence Stack
            </h2>
            <div className="rounded-xl border border-border bg-[#0d1016] p-4 font-mono text-xs text-muted-foreground space-y-1">
              <div>Layer 0: BuiltInSafety    (Hardcoded immutable safety vetoes)</div>
              <div>  ↓</div>
              <div>Layer 1: SystemAdmin      (/etc/m31/policy.toml)</div>
              <div>  ↓</div>
              <div>Layer 2: Organization     (Enterprise compliance rules)</div>
              <div>  ↓</div>
              <div>Layer 3: Workspace        (&lt;workspace&gt;/.m31/policy.toml)</div>
              <div>  ↓</div>
              <div>Layer 4: User             (~/.config/m31/policy.toml)</div>
              <div>  ↓</div>
              <div>Layer 5: Mission          (Mission-specific policy constraints)</div>
              <div>  ↓</div>
              <div>Layer 6: AgentRole        (Role-based boundary limits)</div>
              <div>  ↓</div>
              <div>Layer 7: Task             (Task-specific scope restrictions)</div>
              <div>  ↓</div>
              <div>Layer 8: SessionApproval  (Durable SQLite policy_grants from user prompts)</div>
              <div>  ↓</div>
              <div>Layer 9: DeveloperDefault (Sensible baseline engineering fallbacks)</div>
            </div>

            <h2 id="monotonic-rule" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Monotonic Non-Weakening Merger Rule
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When rules from multiple layers match a proposed action, higher authority always wins. A <code className="text-red-400 font-mono text-xs">DENY</code> decision at any higher layer completely overrides an <code className="text-emerald-400 font-mono text-xs">ALLOW</code> or <code className="text-amber-400 font-mono text-xs">ASK</code> at lower layers. Lower layers can only narrow scopes — never expand permissions.
            </p>

            <h2 id="builtin-vetoes" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Layer 0 Built-in Safety Vetoes
            </h2>
            <p className="text-sm text-muted-foreground">
              The following operations can never be permitted by any configuration or session grant:
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Access to credentials (<code className="text-foreground font-mono">**/.ssh/**</code>, <code className="text-foreground font-mono">**/.aws/**</code>, <code className="text-foreground font-mono">**/.env*</code>, <code className="text-foreground font-mono">**/*id_rsa*</code>)</li>
              <li>• OS tampering (<code className="text-foreground font-mono">/etc/sudoers*</code>, <code className="text-foreground font-mono">/etc/shadow</code>, <code className="text-foreground font-mono">/etc/m31/**</code>)</li>
              <li>• Shell profile modifications (<code className="text-foreground font-mono">**/.bashrc</code>, <code className="text-foreground font-mono">**/.zshrc</code>, <code className="text-foreground font-mono">/etc/profile</code>)</li>
              <li>• Destructive disk commands (<code className="text-foreground font-mono">rm -rf /</code>, <code className="text-foreground font-mono">mkfs*</code>, <code className="text-foreground font-mono">dd if=*</code>)</li>
            </ul>
          </div>
        ),
      };

    case 'tools':
      return {
        toc: [
          { id: 'lifecycle', title: 'Tool Execution Lifecycle' },
          { id: 'catalog', title: 'Catalog of 28 Core Tools' },
          { id: 'error-taxonomy', title: 'Tool Error Taxonomy' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A provides 28 core typed tools across 15 capability families. Every tool defines strict JSON schemas generated by <code className="text-primary font-mono text-xs">schemars</code>.
            </p>

            <h2 id="lifecycle" className="text-xl font-bold tracking-tight text-foreground">
              Tool Execution Lifecycle
            </h2>
            <div className="rounded-lg border border-border bg-[#0d1016] p-4 text-xs font-mono text-muted-foreground space-y-1">
              <div>1. Schema Validation    → Validate parameters against JSON schema contract</div>
              <div>2. Policy Evaluation    → 11-stage policy gate evaluation (ALLOW/DENY/ASK)</div>
              <div>3. Budget Pre-Allocation → Two-phase reservation of tokens and memory</div>
              <div>4. OS Confinement       → Execution in cgroups v2, POSIX rlimits, clean env</div>
              <div>5. Output Redaction     → SecretRedactor scrubs API keys before persistence</div>
            </div>

            <h2 id="catalog" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Catalog of 28 Core Tools
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead className="bg-secondary/40 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-3 py-2 text-left">Tool Name</th>
                    <th className="px-3 py-2 text-left">Category</th>
                    <th className="px-3 py-2 text-left">Risk Class</th>
                    <th className="px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {TOOLS_CATALOG.map((tool) => (
                    <tr key={tool.id} className="hover:bg-secondary/20">
                      <td className="px-3 py-2 font-mono font-bold text-foreground">{tool.name}</td>
                      <td className="px-3 py-2 text-muted-foreground">{tool.category}</td>
                      <td className="px-3 py-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          tool.riskClass === 'ReadOnly'
                            ? 'bg-blue-500/10 text-blue-400'
                            : tool.riskClass === 'WorkspaceMutation'
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}>
                          {tool.riskClass}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">{tool.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="error-taxonomy" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Canonical Tool Error Taxonomy
            </h2>
            <p className="text-sm text-muted-foreground">
              Tools return strongly typed errors categorized into standard classifications: <code className="text-foreground font-mono text-xs">Validation</code>, <code className="text-foreground font-mono text-xs">ResourceNotFound</code>, <code className="text-foreground font-mono text-xs">PreconditionFailed</code>, <code className="text-foreground font-mono text-xs">PermissionDenied</code>, <code className="text-foreground font-mono text-xs">ExecutionFailed</code>, <code className="text-foreground font-mono text-xs">ResourceExhausted</code>, and <code className="text-foreground font-mono text-xs">CapabilityUnavailable</code>.
            </p>
          </div>
        ),
      };

    case 'models':
      return {
        toc: [
          { id: 'provider-trait', title: 'Provider-Neutral Abstraction' },
          { id: 'nvidia-nim', title: 'Production Provider: NVIDIA NIM' },
          { id: 'endpoint-trust', title: 'Endpoint Trust Boundary' },
          { id: 'retired-providers', title: 'Retired Provider Rejection' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A defines a clean, provider-neutral abstraction seam (<code className="text-primary font-mono text-xs">ModelProvider</code>) supporting structured chat messages, tool definitions, token usage accounting, and SSE streaming.
            </p>

            <h2 id="provider-trait" className="text-xl font-bold tracking-tight text-foreground">
              Provider-Neutral Abstraction
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The runtime logic is strictly decoupled from model provider implementations. The model caller communicates through an async trait with built-in retry policies and token tracking.
            </p>

            <h2 id="nvidia-nim" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Production Provider: NVIDIA NIM
            </h2>
            <div className="rounded-lg border border-border bg-[#0d1016] p-4 text-xs font-mono text-muted-foreground space-y-1">
              <div>Provider:     <span className="text-foreground">nvidia_nim</span></div>
              <div>Model ID:     <span className="text-primary">nvidia/nemotron-3-ultra-550b-a55b</span></div>
              <div>Base URL:     <span className="text-foreground">https://integrate.api.nvidia.com/v1</span></div>
              <div>Streaming:    <span className="text-emerald-400">Server-Sent Events (SSE) active</span></div>
            </div>

            <h2 id="endpoint-trust" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Endpoint Trust Boundary Invariant
            </h2>
            <div className="rounded-lg border border-red-500/30 bg-red-950/15 p-4 text-xs text-muted-foreground">
              <strong className="text-red-400 font-semibold">Security Invariant:</strong> NO CREDENTIAL ATTACHED BEFORE ENDPOINT TRUST. A workspace configuration file cannot redirect a credential-bearing HTTP request to an attacker-controlled endpoint. Only trusted administrative tiers (System, User, Explicit CLI) can authorize custom endpoints.
            </div>

            <h2 id="retired-providers" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Deterministic Rejection of Retired Providers
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In production, configuring retired provider identifiers (<code className="text-foreground font-mono text-xs">openai</code>, <code className="text-foreground font-mono text-xs">anthropic</code>, <code className="text-foreground font-mono text-xs">gemini</code>, or Ollama local aliases) is rejected deterministically during configuration validation.
            </p>
          </div>
        ),
      };

    case 'git-worktree':
      return {
        toc: [
          { id: 'isolation', title: 'Worktree Isolation Authority' },
          { id: 'attribution', title: 'RFC-Compliant Commit Attribution' },
          { id: 'fail-closed-default', title: 'Fail-Closed Isolation Default' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A manages Git state as an authoritative security boundary, isolating agent mutations from the developer&apos;s primary working tree.
            </p>

            <h2 id="isolation" className="text-xl font-bold tracking-tight text-foreground">
              Worktree Isolation Authority
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All agent mutations occur inside dedicated isolated Git worktrees (<code className="text-foreground font-mono text-xs">.m31a/tw2/</code> or temporary scratch branches). The developer&apos;s active checkout remains clean and untouched until explicit verification passes.
            </p>

            <h2 id="fail-closed-default" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Fail-Closed Isolation Default
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In production (v0.1.1), <code className="text-foreground font-mono text-xs">default_execution_isolation()</code> is set to <code className="text-primary font-mono text-xs">&quot;required&quot;</code>. If worktree creation fails or the directory is not a Git repository, execution fails closed immediately. Direct primary workspace mutations are permitted only if explicitly overridden with <code className="text-foreground font-mono text-xs">git.execution_isolation = &quot;best_effort&quot;</code>, which emits a prominent isolation downgrade warning.
            </p>

            <h2 id="attribution" className="text-xl font-bold tracking-tight text-foreground pt-4">
              RFC-Compliant Commit Attribution
            </h2>
            <p className="text-sm text-muted-foreground">
              Commits created by M31A embed RFC-compliant trailers providing verifiable provenance:
            </p>
            <CodeBlock language="text" filename="commit trailer" code={`refactor(db): parameterize database query statements

M31A-Mission-ID: 019234b0-a5ef-7b23-96b0-96f7c75b001a
M31A-Agent-Role: implementer
M31A-Verified-By: verifier (evidence: sha256:7b9201f928e469c118...)`} />
          </div>
        ),
      };

    case 'verification':
      return {
        toc: [
          { id: 'philosophy', title: 'Evidence-Based Completion' },
          { id: 'verification-tiers', title: 'Multi-Tier Quality Gates' },
          { id: 'evidence-digest', title: 'Cryptographic SHA-256 Digest' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              In M31A, no task or mission is marked complete merely because the model claimed it succeeded. Completion strictly requires multi-tier cryptographic verification evidence.
            </p>

            <h2 id="philosophy" className="text-xl font-bold tracking-tight text-foreground">
              Evidence-Based Completion
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The LLM cannot declare success. The <code className="text-primary font-mono text-xs">CompletionGate</code> evaluates structured outputs from compiler checks, unit test suites, linters, and semantic reviews before certifying mission state.
            </p>

            <h2 id="verification-tiers" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Multi-Tier Quality Gates
            </h2>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-bold text-foreground">Tier 1: Syntax &amp; Compilation</span>
                  <div className="text-[11px] text-muted-foreground mt-0.5">cargo check / rustc validation</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">MANDATORY</span>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-bold text-foreground">Tier 2: Automated Unit &amp; Integration Tests</span>
                  <div className="text-[11px] text-muted-foreground mt-0.5">cargo test execution with zero failures</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">MANDATORY</span>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-bold text-foreground">Tier 3: Static Analysis &amp; Linters</span>
                  <div className="text-[11px] text-muted-foreground mt-0.5">cargo clippy -- -D warnings, cargo fmt --check</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">MANDATORY</span>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-bold text-foreground">Tier 4: Anti-Fake-Diff Review</span>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Rejects todo!(), unimplemented!(), and stub code</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">MANDATORY</span>
              </div>
            </div>

            <h2 id="evidence-digest" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Cryptographic SHA-256 Digest
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every verification result produces a content-addressed SHA-256 evidence digest that is permanently recorded in the SQLite <code className="text-foreground font-mono text-xs">checkpoints</code> table.
            </p>
          </div>
        ),
      };

    case 'checkpoints':
      return {
        toc: [
          { id: 'two-phase-protocol', title: 'Two-Phase Commit Protocol' },
          { id: 'crash-scanner', title: 'Startup Crash Scanner' },
          { id: 'failure-classifications', title: '15 Failure Classifications' },
          { id: 'differential-replanning', title: 'Differential DAG Replanning' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A includes a fault-recovery subsystem designed around atomic two-phase checkpoints, differential task replanning, and fail-closed crash scanners.
            </p>

            <h2 id="two-phase-protocol" className="text-xl font-bold tracking-tight text-foreground">
              Two-Phase Checkpoint Commit Protocol
            </h2>
            <div className="rounded-lg border border-border bg-[#0d1016] p-4 font-mono text-xs text-muted-foreground space-y-1">
              <div>Phase 1: External Artifact Staging</div>
              <div>  ├── Write patches, test logs to staging/&lt;checkpoint_id&gt;/</div>
              <div>  ├── Flush bytes with tokio::fs::File::sync_all</div>
              <div>  └── Verify content-addressed SHA-256 digests against manifest</div>
              <div>         ↓</div>
              <div>Phase 2: Atomic SQLite Transaction</div>
              <div>  ├── BEGIN TRANSACTION; INSERT INTO checkpoints ...; COMMIT;</div>
              <div>  └── Promote staged artifacts to authoritative FsArtifactStore</div>
            </div>

            <h2 id="crash-scanner" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Startup Crash Scanner
            </h2>
            <p className="text-sm text-muted-foreground">
              Upon startup, M31A scans for interrupted missions, categorizing state into 4 strict classifications:
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• <strong className="text-emerald-400">SafeToResume:</strong> Manifest valid, artifacts intact, workspace clean. Safe to continue.</li>
              <li>• <strong className="text-amber-400">NeedsRepair:</strong> Checkpoint valid, but workspace files need restoration to baseline commit.</li>
              <li>• <strong className="text-red-400">Ambiguous (Fail-Closed):</strong> Unexplained repo drift or conflicting jobs. Halts and prompts operator.</li>
              <li>• <strong className="text-red-400">Corrupt (Fail-Closed):</strong> Missing artifacts or truncated SQLite state. Halts fail-closed.</li>
            </ul>

            <h2 id="failure-classifications" className="text-xl font-bold tracking-tight text-foreground pt-4">
              15 Canonical Failure Classifications
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Errors detected during task execution are deterministically classified across 15 structured categories (<code className="text-foreground font-mono text-xs">Transient</code>, <code className="text-foreground font-mono text-xs">Timeout</code>, <code className="text-foreground font-mono text-xs">Permission</code>, <code className="text-foreground font-mono text-xs">Policy</code>, <code className="text-foreground font-mono text-xs">Compilation</code>, <code className="text-foreground font-mono text-xs">Test</code>, <code className="text-foreground font-mono text-xs">RepositoryState</code>, etc.). Security failures (<code className="text-foreground font-mono text-xs">Permission</code>, <code className="text-foreground font-mono text-xs">Policy</code>) strictly receive a retry budget of <strong>0</strong>.
            </p>
          </div>
        ),
      };

    case 'tui':
      return {
        toc: [
          { id: 'cockpit-overview', title: 'Cockpit Architecture' },
          { id: 'projection-layer', title: 'Projection of Runtime Truth' },
          { id: 'keybindings', title: 'Navigation & Key Hints' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The M31A interactive cockpit is implemented with <code className="text-primary font-mono text-xs">ratatui 0.30</code> and <code className="text-primary font-mono text-xs">crossterm 0.29</code>, guarded by RAII raw-mode terminal restoration.
            </p>

            <h2 id="cockpit-overview" className="text-xl font-bold tracking-tight text-foreground">
              Cockpit Architecture
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The cockpit contains 10 dedicated surface controllers: Mission Overview, Conversation Timeline, Task DAG Visualizer, Agent Swarm Pool, Tool Execution View, Verification Surface, Telemetry &amp; Metrics, Git Attribution, Replay Controller, and Approval Coordinator.
            </p>

            <h2 id="projection-layer" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Projection of Runtime Truth
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The TUI does not maintain duplicate business logic. It is a strict read-only projection of authoritative SQLite runtime state. Without the governed runtime bridge, composer submissions fail closed with an explicit error rather than executing unmonitored code.
            </p>

            <h2 id="keybindings" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Key Navigation Commands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
              <div className="border border-border/60 bg-card/40 p-2.5 rounded">
                <span className="text-primary font-bold">Tab</span>
                <div className="text-muted-foreground text-[11px]">Cycle surfaces</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-2.5 rounded">
                <span className="text-primary font-bold">1–9</span>
                <div className="text-muted-foreground text-[11px]">Jump to surface</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-2.5 rounded">
                <span className="text-primary font-bold">j / k</span>
                <div className="text-muted-foreground text-[11px]">Scroll timeline</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-2.5 rounded">
                <span className="text-primary font-bold">Enter</span>
                <div className="text-muted-foreground text-[11px]">Expand card / detail</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-2.5 rounded">
                <span className="text-primary font-bold">Esc</span>
                <div className="text-muted-foreground text-[11px]">Focus composer</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-2.5 rounded">
                <span className="text-primary font-bold">Ctrl+C</span>
                <div className="text-muted-foreground text-[11px]">Clean cancellation</div>
              </div>
            </div>
          </div>
        ),
      };

    case 'configuration':
      return {
        toc: [
          { id: 'hierarchy', title: '7-Tier Configuration Precedence' },
          { id: 'profiles', title: '7 Canonical Profiles' },
          { id: 'schema-example', title: 'Example TOML Configuration' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A configuration resolves hierarchically across 7 distinct tiers, enforcing monotonic security inheritance.
            </p>

            <h2 id="hierarchy" className="text-xl font-bold tracking-tight text-foreground">
              7-Tier Configuration Precedence
            </h2>
            <div className="rounded-xl border border-border bg-[#0d1016] p-4 font-mono text-xs text-muted-foreground space-y-1">
              <div>Tier 7: CLI Overrides       (--profile, --timeout, flags)</div>
              <div>  ↑</div>
              <div>Tier 6: Session Settings    (Active interactive cockpit session)</div>
              <div>  ↑</div>
              <div>Tier 5: Mission Manifest    (.m31a/mission.toml)</div>
              <div>  ↑</div>
              <div>Tier 4: Workspace Config    (&lt;workspace&gt;/.m31/config.toml)</div>
              <div>  ↑</div>
              <div>Tier 3: User Config         (~/.config/m31/config.toml)</div>
              <div>  ↑</div>
              <div>Tier 2: System Admin Config (/etc/m31/config.toml)</div>
              <div>  ↑</div>
              <div>Tier 1: Built-in Defaults   (Hardcoded in runtime binary)</div>
            </div>

            <h2 id="profiles" className="text-xl font-bold tracking-tight text-foreground pt-4">
              The 7 Canonical Profiles
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 text-xs">
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg">
                <div className="font-bold text-foreground font-mono">1. safe</div>
                <div className="text-muted-foreground mt-1">Read-only filesystem, network denied completely. All mutations require confirmation.</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg">
                <div className="font-bold text-foreground font-mono">2. coding</div>
                <div className="text-muted-foreground mt-1">Standard developer pairing. Workspace mutations permitted; Git push requires confirmation.</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg">
                <div className="font-bold text-foreground font-mono">3. research</div>
                <div className="text-muted-foreground mt-1">Codebase exploration and AST analysis. Outbound web search and documentation fetching permitted.</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg">
                <div className="font-bold text-foreground font-mono">4. autonomous</div>
                <div className="text-muted-foreground mt-1">Self-directed task execution within hard 10-dimensional budget bounds.</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg">
                <div className="font-bold text-foreground font-mono">5. ci</div>
                <div className="text-muted-foreground mt-1">Headless CI/CD. Fail-closed: any prompt for approval immediately terminates with DENY.</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg">
                <div className="font-bold text-foreground font-mono">6. security_review</div>
                <div className="text-muted-foreground mt-1">Vulnerability assessment, secret detectors, and dependency scanning.</div>
              </div>
              <div className="border border-border/60 bg-card/40 p-3 rounded-lg col-span-2">
                <div className="font-bold text-foreground font-mono">7. release</div>
                <div className="text-muted-foreground mt-1">Artifact staging, changelog preparation, and RFC-compliant commit attribution.</div>
              </div>
            </div>

            <h2 id="schema-example" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Example TOML Configuration
            </h2>
            <CodeBlock language="toml" filename="config.example.toml" code={`[runtime]
profile = "coding"
concurrency_limit = 4
workspace_root = "."
telemetry_enabled = true

[budget]
max_wall_clock_seconds = 3600
max_concurrent_agents = 4
max_agent_steps = 100
max_model_calls = 250
max_tokens = 500000
max_cost_usd = 10.00
max_cpu_seconds = 600
max_memory_bytes = 4294967296  # 4 GB
max_artifact_bytes = 104857600  # 100 MB
max_retries = 3

[policy]
default_decision = "ask"
allow_network = false
strict_workspace_root = true`} />
          </div>
        ),
      };

    case 'cli-reference':
      return {
        toc: [
          { id: 'exit-codes', title: 'Standardized Exit Codes' },
          { id: 'commands', title: 'Subcommands Catalog' },
          { id: 'machine-readable', title: 'Machine-Readable JSON Output' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Complete command-line interface reference for the <code className="text-primary font-mono text-xs">m31a</code> binary, built with <code className="text-foreground font-mono text-xs">clap 4.5</code>.
            </p>

            <h2 id="exit-codes" className="text-xl font-bold tracking-tight text-foreground">
              Standardized UNIX Exit Codes
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead className="bg-secondary/40 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-3 py-2 text-left">Code</th>
                    <th className="px-3 py-2 text-left">Meaning</th>
                    <th className="px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr>
                    <td className="px-3 py-2 font-mono font-bold text-emerald-400">0</td>
                    <td className="px-3 py-2 font-medium text-foreground">Success</td>
                    <td className="px-3 py-2 text-muted-foreground">Command completed successfully; all verification gates passed.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono font-bold text-amber-400">1</td>
                    <td className="px-3 py-2 font-medium text-foreground">Verification Failure</td>
                    <td className="px-3 py-2 text-muted-foreground">Work completed but failed automated quality checks (tests, linter).</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono font-bold text-red-400">2</td>
                    <td className="px-3 py-2 font-medium text-foreground">Policy Violation</td>
                    <td className="px-3 py-2 text-muted-foreground">Action was blocked fail-closed by security policy engine.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono font-bold text-red-400">3</td>
                    <td className="px-3 py-2 font-medium text-foreground">Budget Exhaustion</td>
                    <td className="px-3 py-2 text-muted-foreground">Mission exceeded one or more 10-dimensional hard resource bounds.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono font-bold text-red-400">4</td>
                    <td className="px-3 py-2 font-medium text-foreground">Crash / Infrastructure</td>
                    <td className="px-3 py-2 text-muted-foreground">Unexpected runtime crash, storage corruption, or system failure.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono font-bold text-amber-400">5</td>
                    <td className="px-3 py-2 font-medium text-foreground">Configuration Error</td>
                    <td className="px-3 py-2 text-muted-foreground">Invalid configuration schema or monotonic violation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="commands" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Subcommands Catalog
            </h2>
            <div className="space-y-3">
              {CLI_COMMAND_DEFS.map((cmd) => (
                <div key={cmd.command} className="rounded-lg border border-border/70 bg-card/40 p-4">
                  <div className="flex items-center justify-between">
                    <code className="text-xs font-mono font-bold text-primary">{cmd.command}</code>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground px-1.5 py-0.5 rounded bg-secondary">
                      {cmd.category}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">{cmd.summary}</p>
                  <div className="mt-2 text-[11px] font-mono text-zinc-400 bg-secondary/60 px-2.5 py-1 rounded">
                    {cmd.usage}
                  </div>
                </div>
              ))}
            </div>

            <h2 id="machine-readable" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Machine-Readable JSON Output
            </h2>
            <p className="text-sm text-muted-foreground">
              For CI/CD scripts and orchestration tools, specify <code className="text-foreground font-mono text-xs">--output json</code> or <code className="text-foreground font-mono text-xs">--output stream-json</code>:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`m31a --output json doctor
m31a --output json mission list
m31a --output stream-json mission run "Refactor logging"`} />
          </div>
        ),
      };

    case 'security':
      return {
        toc: [
          { id: 'threat-matrix', title: 'ASVS L1 Threat Coverage (11 Vectors)' },
          { id: 'secret-redactor', title: '5-Tier Secret Redaction' },
          { id: 'ssrf-defense', title: 'SSRF & Egress Policy' },
          { id: 'reporting', title: 'Vulnerability Disclosure' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A is hardened against 11 canonical security threats in accordance with OWASP ASVS L1 standards.
            </p>

            <h2 id="threat-matrix" className="text-xl font-bold tracking-tight text-foreground">
              11 Threat Vectors Hardening Matrix
            </h2>
            <p className="text-sm text-muted-foreground">
              See the interactive threat explorer on the <Link href="/security" className="text-primary hover:underline">Security page</Link> for detailed attack scenarios and mitigations.
            </p>

            <h2 id="secret-redactor" className="text-xl font-bold tracking-tight text-foreground pt-4">
              5-Tier Secret Redactor
            </h2>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div>• <strong>Tier 1:</strong> Explicit registered mission secrets and API keys.</div>
              <div>• <strong>Tier 2:</strong> Authorization headers, Bearer tokens, and JWT payloads (<code className="text-foreground font-mono">eyJ...</code>).</div>
              <div>• <strong>Tier 3:</strong> Cloud keys: NVIDIA API keys (<code className="text-foreground font-mono">nvapi-*</code>), AWS (<code className="text-foreground font-mono">AKIA*</code>), GitHub tokens (<code className="text-foreground font-mono">ghp_*</code>).</div>
              <div>• <strong>Tier 4:</strong> Database connection URLs containing passwords (<code className="text-foreground font-mono">postgres://user:pass@host/db</code>).</div>
              <div>• <strong>Tier 5:</strong> Cryptographic private key PEM blocks (RSA, EC, OpenSSH).</div>
            </div>

            <h2 id="ssrf-defense" className="text-xl font-bold tracking-tight text-foreground pt-4">
              SSRF &amp; Egress Policy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The <code className="text-foreground font-mono text-xs">NetworkDestinationPolicy</code> blocks IPv4/IPv6 loopback, RFC 1918 private subnets, and cloud metadata services (<code className="text-foreground font-mono text-xs">169.254.169.254</code>). Asynchronous DNS pre-validation and step-by-step redirect validation prevent DNS rebinding.
            </p>

            <h2 id="reporting" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Vulnerability Disclosure
            </h2>
            <p className="text-sm text-muted-foreground">
              Security vulnerabilities should be reported confidentially through GitHub Security Advisories:
            </p>
            <a
              href={PRODUCT.securityReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline pt-1"
            >
              <span>Submit a Confidential Security Advisory</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ),
      };

    case 'contributing':
      return {
        toc: [
          { id: 'development-setup', title: 'Local Development Setup' },
          { id: 'release-gates', title: 'Mandatory Release Check Gates' },
          { id: 'pull-requests', title: 'Pull Request Workflow' },
        ],
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              M31A is open-source under dual <code className="text-foreground font-mono text-xs">MIT OR Apache-2.0</code> licensing.
            </p>

            <h2 id="development-setup" className="text-xl font-bold tracking-tight text-foreground">
              Local Development Setup
            </h2>
            <CodeBlock language="bash" filename="terminal" code={`git clone https://github.com/eshanized/M31A.git
cd M31A

# Verify toolchain
cargo --version  # Rust 1.85+ required

# Run check gates
cargo check --all-targets
cargo test`} />

            <h2 id="release-gates" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Mandatory Release Gates
            </h2>
            <p className="text-sm text-muted-foreground">
              Before submitting a pull request, run the authoritative verification script:
            </p>
            <CodeBlock language="bash" filename="terminal" code={`./scripts/release-check.sh`} />
            <p className="text-xs text-muted-foreground">
              This enforces clean source git trees, formatting (<code className="font-mono text-foreground">cargo fmt --check</code>), clippy lints with zero warnings (<code className="font-mono text-foreground">cargo clippy -- -D warnings</code>), mutual exclusion between production and development features, and the full test suite.
            </p>

            <h2 id="pull-requests" className="text-xl font-bold tracking-tight text-foreground pt-4">
              Pull Request Workflow
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Review <a href={PRODUCT.contributingUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CONTRIBUTING.md</a> and <a href={`${PRODUCT.repositoryUrl}/blob/master/AGENTS.md`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AGENTS.md</a> for architectural rules. Commit messages should follow Conventional Commits.
            </p>
          </div>
        ),
      };

    default:
      return {
        toc: [],
        content: <p className="text-muted-foreground">Documentation content is being verified.</p>,
      };
  }
}
