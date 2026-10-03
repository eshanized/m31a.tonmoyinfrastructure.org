export const PRODUCT = {
  name: 'M31A',
  fullName: 'M31 Autonomous',
  tagline: 'The model proposes. The runtime decides.',
  description:
    'A Rust-native autonomous software-engineering runtime with non-bypassable policy gates and verifiable execution.',
  longDescription:
    'M31A (M31 Autonomous) is a single-crate, high-assurance, Rust-native autonomous software engineering runtime. It provides deterministic lifecycle control, strict multi-layer security policies, resource-bounded execution, continuous verification, crash-resilient checkpoints, and local observability for autonomous coding agents.',
  version: '0.1.1',
  previousVersion: '0.1.0',
  releaseDate: '2026-10-02',
  rustVersion: '1.85+',
  edition: '2024',
  canonicalUrl: 'https://m31a.tonmoyinfrastructure.org/',
  repositoryUrl: 'https://github.com/eshanized/M31A',
  issuesUrl: 'https://github.com/eshanized/M31A/issues',
  discussionsUrl: 'https://github.com/eshanized/M31A/discussions',
  releasesUrl: 'https://github.com/eshanized/M31A/releases/latest',
  releaseTagUrl: 'https://github.com/eshanized/M31A/releases/tag/v0.1.1',
  securityReportUrl: 'https://github.com/eshanized/M31A/security/advisories/new',
  contributingUrl: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md',
  codeOfConductUrl: 'https://github.com/eshanized/M31A/blob/master/CODE_OF_CONDUCT.md',
  securityPolicyUrl: 'https://github.com/eshanized/M31A/blob/master/SECURITY.md',
  websiteUrl: 'https://m31a.tonmoyinfrastructure.org/',
  licenses: ['MIT', 'Apache-2.0'],
  licenseUrl: 'https://github.com/eshanized/M31A/blob/master/LICENSE',
  keywords: ['autonomous', 'agent', 'cli', 'tui', 'llm', 'rust', 'policy-gate', 'runtime'],
  categories: ['command-line-utilities', 'development-tools'],
  orgName: 'Tonmoy Infrastructure & Vision',
  canonicalProvider: 'NVIDIA NIM (nvidia_nim)',
  canonicalModelId: 'nvidia/nemotron-3-ultra-550b-a55b',
  canonicalProviderEndpoint: 'https://integrate.api.nvidia.com/v1',
  installCurl: 'curl -fsSL https://raw.githubusercontent.com/eshanized/M31A/master/scripts/install.sh | bash',
  installPowerShell: 'irm https://raw.githubusercontent.com/eshanized/M31A/master/scripts/install.ps1 | iex',
} as const;

export type ProductFeatureStatus = 'Available' | 'Experimental' | 'Planned' | 'Internal';

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  status: ProductFeatureStatus;
  category: 'Runtime' | 'Security' | 'Interface' | 'Persistence' | 'Observability' | 'Models' | 'Workflow';
  icon: string;
  details?: string;
  sourceRef?: string;
}

export const FEATURES: ProductFeature[] = [
  {
    id: 'autonomous-agent',
    title: 'Autonomous Execution Loop',
    description:
      'A 12-stage deterministic execution loop where the runtime owns state, scheduling, and completion criteria — not the model.',
    status: 'Available',
    category: 'Runtime',
    icon: 'Bot',
    details:
      'The LLM is treated as an untrusted reasoning component. The runtime strictly owns state, scheduling, file access, command execution, policies, verification, and completion criteria.',
    sourceRef: 'src/agent/engine.rs',
  },
  {
    id: 'policy-gates',
    title: 'Non-Bypassable Policy Gates',
    description:
      'Every side effect passes through an 11-stage policy gate before execution. No action reaches the workspace without authorization.',
    status: 'Available',
    category: 'Security',
    icon: 'ShieldCheck',
    details:
      'File writes, process spawning, Git operations, and network requests all pass through 10 authority layers. Built-in Layer 0 safety vetoes can never be weakened.',
    sourceRef: 'src/policy/matcher.rs',
  },
  {
    id: 'verification',
    title: 'Continuous Verification',
    description:
      'Multi-tier quality gates verify each action against completion criteria before the runtime accepts the result.',
    status: 'Available',
    category: 'Runtime',
    icon: 'CheckCircle2',
    details:
      'Verification states, test outputs, linters, and cryptographic SHA-256 evidence digests are collected before any mission is allowed to complete.',
    sourceRef: 'src/verification/gate.rs',
  },
  {
    id: 'terminal-tui',
    title: 'Terminal-Native Cockpit',
    description:
      'A full terminal cockpit built with Ratatui 0.30 — conversation, live activity, task graphs, approvals, and telemetry in one unified surface.',
    status: 'Available',
    category: 'Interface',
    icon: 'Terminal',
    details:
      'The TUI is a pure projection of authoritative SQLite runtime state. Guaranteed terminal raw-mode restoration with RAII TerminalGuard.',
    sourceRef: 'src/tui/app.rs',
  },
  {
    id: 'tool-system',
    title: '28 Core Typed Tools',
    description:
      'A capability-bound tool registry across 15 capability families where each tool declares risk classes and JSON schema contracts.',
    status: 'Available',
    category: 'Runtime',
    icon: 'Wrench',
    details:
      'Spans filesystem (7), repository intelligence (3), process management (5), Git (8), verification (3), and artifact storage (2).',
    sourceRef: 'docs/subsystems/TOOLS.md',
  },
  {
    id: 'git-integration',
    title: 'Git-Aware Worktree Isolation',
    description:
      'Fail-closed worktree isolation and RFC-compliant commit trailers keep agent work separate and attributable.',
    status: 'Available',
    category: 'Workflow',
    icon: 'GitBranch',
    details:
      'In production, git.execution_isolation = "required" fails closed if worktree creation cannot be verified, preventing unisolated edits to primary branch.',
    sourceRef: 'src/policy/effective.rs',
  },
  {
    id: 'task-graph',
    title: 'Task DAG & Planning',
    description:
      'Decomposed tasks modeled as a petgraph-backed directed acyclic graph with topological scheduling and differential replanning.',
    status: 'Available',
    category: 'Runtime',
    icon: 'Workflow',
    details:
      'Candidate plans are verified before admission. On crash recovery, differential DAG replanning preserves already verified tasks.',
    sourceRef: 'src/agent/intent.rs',
  },
  {
    id: 'session-continuity',
    title: 'Crash-Resilient Checkpoints',
    description:
      'Two-phase atomic checkpoints and startup crash recovery scanners preserve verified work across system crashes.',
    status: 'Available',
    category: 'Persistence',
    icon: 'Database',
    details:
      'External artifact staging followed by atomic SQLite transaction. Ambiguous and corrupt recovery states fail closed without blind auto-resume.',
    sourceRef: 'docs/subsystems/RECOVERY.md',
  },
  {
    id: 'telemetry',
    title: 'Local Observability',
    description:
      'Compact SQLite event index and append-only NDJSON execution stream with zero-leak secret redaction.',
    status: 'Available',
    category: 'Observability',
    icon: 'Activity',
    details:
      'Structured telemetry logs record proposal kinds, tool call counts, durations, and audit digests. Raw model output and arbitrary command text never enter traces.',
    sourceRef: 'src/tui/surface/telemetry.rs',
  },
  {
    id: 'secret-redactor',
    title: '5-Tier Secret Redaction',
    description:
      'Deterministic scrubbing pipeline masking API keys (NVIDIA, AWS, GitHub, OpenAI), JWTs, passwords, and private keys.',
    status: 'Available',
    category: 'Security',
    icon: 'Lock',
    details:
      'Scrubbing applies before persistence, display buffers, or logs. Includes sanitize_error preventing stack traces from leaking secrets.',
    sourceRef: 'src/policy/destination.rs',
  },
  {
    id: 'replay',
    title: 'Replay & Post-Mortem',
    description:
      'Historical event timeline with read-only playback for inspecting past execution state and decisions.',
    status: 'Available',
    category: 'Observability',
    icon: 'History',
    details:
      'Reconstruct past sessions step-by-step to inspect exact model proposals, policy decisions, tool invocations, and verification results.',
    sourceRef: 'src/tui/surface/replay.rs',
  },
  {
    id: 'model-routing',
    title: 'Model Provider Abstraction',
    description:
      'Provider-neutral trait with SSE streaming; production runtime strictly and exclusively enforces NVIDIA NIM.',
    status: 'Available',
    category: 'Models',
    icon: 'Network',
    details:
      'Retired provider IDs (openai, anthropic, gemini, ollama) are rejected deterministically. Invariant: no credential attached before endpoint trust is verified.',
    sourceRef: 'src/model/provider/mod.rs',
  },
  {
    id: 'deployment-channels',
    title: 'Deployment Channels',
    description:
      'Compile-time artifact identity separates production (m31a) from development (m31a-dev) with isolated state paths.',
    status: 'Available',
    category: 'Runtime',
    icon: 'GitFork',
    details:
      'Channel is compile-time — no runtime switch can re-channel a binary. Features transactional installer with atomic rollback seam.',
    sourceRef: 'src/deployment/channel.rs',
  },
  {
    id: 'process-confinement',
    title: 'Multi-Tier Process Confinement',
    description:
      'Defense-in-depth confinement via Linux cgroups v2, POSIX rlimits, process group isolation, and watchdog supervision.',
    status: 'Available',
    category: 'Security',
    icon: 'Cpu',
    details:
      'Deny-by-default environment contract: cmd.env_clear() strips all inherited host environment variables and secrets, blocking LD_PRELOAD.',
    sourceRef: 'src/sandbox/limits.rs',
  },
  {
    id: 'budget-enforcer',
    title: '10-Dimensional Budget Model',
    description:
      'Hard resource budget bounds across wall-clock time, memory, CPU, tokens, dollar cost, agent steps, and storage.',
    status: 'Available',
    category: 'Runtime',
    icon: 'Layers',
    details:
      'Two-phase reservation and settlement engine eliminates race conditions across concurrent agent steps.',
    sourceRef: 'docs/subsystems/AUTONOMY.md',
  },
  {
    id: 'ssrf-hardening',
    title: 'Network Destination Policy (SSRF)',
    description:
      'Strict egress filtering blocking loopback, RFC 1918 private IPs, cloud metadata (169.254.169.254), and redirect SSRF.',
    status: 'Available',
    category: 'Security',
    icon: 'Radio',
    details:
      'Asynchronous DNS pre-validation before connection and step-by-step redirect checks up to 5 hops prevent DNS rebinding attacks.',
    sourceRef: 'src/policy/destination.rs',
  },
  {
    id: 'agent-roles',
    title: '8 Canonical Agent Roles',
    description:
      'Specialized role state machines for planner, researcher, architect, implementer, reviewer, verifier, diagnostician, and integrator.',
    status: 'Available',
    category: 'Runtime',
    icon: 'Bot',
    details:
      'Anti-fake-diff reviews detect todo!() and unimplemented!() placeholders. Premature-completion rejection prevents unverified completions.',
    sourceRef: 'src/agent/registry.rs',
  },
  {
    id: 'extended-providers',
    title: 'Extended Model Providers',
    description:
      'Architectural support for additional model providers beyond NVIDIA NIM once qualification criteria are met.',
    status: 'Planned',
    category: 'Models',
    icon: 'Sparkles',
    details:
      'Currently production is strictly NVIDIA NIM. Future provider support requires native endpoint trust and parity verification.',
    sourceRef: 'docs/architecture/ARCHITECTURE.md',
  },
];

export interface ArchitectureLayerInfo {
  layer: string;
  name: string;
  subsystem: string;
  responsibilities: string;
  sourcePath: string;
  githubUrl: string;
  color: string;
}

export const ARCHITECTURE_LAYERS: ArchitectureLayerInfo[] = [
  {
    layer: 'L9',
    name: 'CLI & TUI Cockpit',
    subsystem: 'Presentation & Operator Surface',
    responsibilities: 'Command parsing (clap 4), Ratatui interactive cockpit, telemetry inspection, JSON export, eval runner.',
    sourcePath: 'src/cli, src/tui',
    githubUrl: 'https://github.com/eshanized/M31A/tree/master/src/tui',
    color: 'border-blue-500/40 bg-blue-500/5 text-blue-400',
  },
  {
    layer: 'L8',
    name: 'Autonomy Controller',
    subsystem: 'Mission Orchestration',
    responsibilities: '12-stage mission execution loop, 10-dimensional budget tracker, sliding-window loop detector, completion gates.',
    sourcePath: 'src/runtime, src/agent/engine.rs',
    githubUrl: 'https://github.com/eshanized/M31A/blob/master/src/agent/engine.rs',
    color: 'border-cyan-500/40 bg-cyan-500/5 text-cyan-400',
  },
  {
    layer: 'L7',
    name: 'Verification & Recovery',
    subsystem: 'Quality & Fault Resilience',
    responsibilities: 'Multi-tier test validation, 15 failure classifications, differential DAG replanner, two-phase atomic checkpoints.',
    sourcePath: 'src/verification, src/deployment/rollback.rs',
    githubUrl: 'https://github.com/eshanized/M31A/tree/master/src/verification',
    color: 'border-emerald-500/40 bg-emerald-500/5 text-emerald-400',
  },
  {
    layer: 'L6',
    name: 'Execution Engine',
    subsystem: 'Job & Artifact Management',
    responsibilities: 'Job manager, process tree supervisor, streaming output spools, immutable content-addressed artifact store.',
    sourcePath: 'src/agent/runner.rs',
    githubUrl: 'https://github.com/eshanized/M31A/blob/master/src/agent/runner.rs',
    color: 'border-amber-500/40 bg-amber-500/5 text-amber-400',
  },
  {
    layer: 'L5',
    name: 'Planning & DAG Engine',
    subsystem: 'Task Decomposition',
    responsibilities: 'TaskGraph reconciler, topological scheduler, candidate plan validator, petgraph dependency resolution.',
    sourcePath: 'src/agent/intent.rs',
    githubUrl: 'https://github.com/eshanized/M31A/blob/master/src/agent/intent.rs',
    color: 'border-purple-500/40 bg-purple-500/5 text-purple-400',
  },
  {
    layer: 'L4',
    name: 'Agent Coordination',
    subsystem: 'Role State Machines',
    responsibilities: '8 canonical agent roles, role state machines, context window compilers, token allocators.',
    sourcePath: 'src/agent/registry.rs, src/agent/dispatcher.rs',
    githubUrl: 'https://github.com/eshanized/M31A/blob/master/src/agent/dispatcher.rs',
    color: 'border-indigo-500/40 bg-indigo-500/5 text-indigo-400',
  },
  {
    layer: 'L3',
    name: 'Intelligence Boundary',
    subsystem: 'Model Provider & Prompt Envelopes',
    responsibilities: 'NVIDIA NIM integration, SSE parser, multi-tier SecretRedactor, XML prompt trust envelopes with attribute escaping.',
    sourcePath: 'src/model/provider, src/agent/envelope.rs',
    githubUrl: 'https://github.com/eshanized/M31A/tree/master/src/model/provider',
    color: 'border-sky-500/40 bg-sky-500/5 text-sky-400',
  },
  {
    layer: 'L2',
    name: 'Capabilities & Tools',
    subsystem: 'Tool Catalog & Confinement',
    responsibilities: '28 core tools, 15 capability families, cgroups v2 & rlimits process confinement, deny-by-default environment builder.',
    sourcePath: 'src/sandbox, docs/subsystems/TOOLS.md',
    githubUrl: 'https://github.com/eshanized/M31A/tree/master/src/sandbox',
    color: 'border-teal-500/40 bg-teal-500/5 text-teal-400',
  },
  {
    layer: 'L1',
    name: 'Security & Policy Gate',
    subsystem: 'Governance & Access Control',
    responsibilities: '11-stage policy gate, NetworkDestinationPolicy (SSRF defense), fail-closed worktree isolation, approval coordinator.',
    sourcePath: 'src/policy',
    githubUrl: 'https://github.com/eshanized/M31A/tree/master/src/policy',
    color: 'border-red-500/40 bg-red-500/5 text-red-400',
  },
  {
    layer: 'L0',
    name: 'Kernel Foundation',
    subsystem: 'Core IDs & Relational State',
    responsibilities: 'Domain-typed kernel IDs (MissionId, TaskId, etc.), SQLite migrations, shared error model, broadcast event bus.',
    sourcePath: 'Cargo.toml, src/deployment/context.rs',
    githubUrl: 'https://github.com/eshanized/M31A/blob/master/Cargo.toml',
    color: 'border-zinc-500/40 bg-zinc-500/5 text-zinc-400',
  },
];

export interface ToolItem {
  id: string;
  name: string;
  category: 'Filesystem' | 'Repository' | 'Process' | 'Git' | 'Verification' | 'Artifacts';
  parameters: string;
  riskClass: 'ReadOnly' | 'WorkspaceMutation' | 'HighRiskMutation';
  description: string;
}

export const TOOLS_CATALOG: ToolItem[] = [
  // Filesystem Tools (7)
  {
    id: 'read_file',
    name: 'read_file',
    category: 'Filesystem',
    parameters: 'path: String, offset: Option<u64>, limit: Option<u64>',
    riskClass: 'ReadOnly',
    description: 'Reads file content within workspace root with optional byte pagination.',
  },
  {
    id: 'write_file',
    name: 'write_file',
    category: 'Filesystem',
    parameters: 'path: String, content: String, create_parents: bool',
    riskClass: 'WorkspaceMutation',
    description: 'Overwrites or creates a new file at specified workspace path.',
  },
  {
    id: 'edit_file',
    name: 'edit_file',
    category: 'Filesystem',
    parameters: 'path: String, edits: Vec<TextEdit>',
    riskClass: 'WorkspaceMutation',
    description: 'Applies targeted line/range substitutions to an existing file.',
  },
  {
    id: 'apply_patch',
    name: 'apply_patch',
    category: 'Filesystem',
    parameters: 'patch: String, strip: Option<u32>',
    riskClass: 'WorkspaceMutation',
    description: 'Applies a unified diff patch (git diff format) to workspace files.',
  },
  {
    id: 'list_files',
    name: 'list_files',
    category: 'Filesystem',
    parameters: 'path: Option<String>, recursive: bool',
    riskClass: 'ReadOnly',
    description: 'Lists entries in workspace directory with size and type attributes.',
  },
  {
    id: 'glob',
    name: 'glob',
    category: 'Filesystem',
    parameters: 'pattern: String, base_path: Option<String>',
    riskClass: 'ReadOnly',
    description: 'Finds workspace files matching a glob pattern (e.g. src/**/*.rs).',
  },
  {
    id: 'grep',
    name: 'grep',
    category: 'Filesystem',
    parameters: 'query: String, path: Option<String>, case_insensitive: bool',
    riskClass: 'ReadOnly',
    description: 'Searches file contents using regular expressions or literal strings.',
  },

  // Repository Intelligence Tools (3)
  {
    id: 'repo_search',
    name: 'repo_search',
    category: 'Repository',
    parameters: 'query: String, limit: Option<usize>',
    riskClass: 'ReadOnly',
    description: 'Performs semantic or symbol-based search across repository codebase indexes.',
  },
  {
    id: 'repo_symbols',
    name: 'repo_symbols',
    category: 'Repository',
    parameters: 'path: String',
    riskClass: 'ReadOnly',
    description: 'Extracts AST definitions, functions, structs, traits, and enums from a file.',
  },
  {
    id: 'repo_dependencies',
    name: 'repo_dependencies',
    category: 'Repository',
    parameters: 'manifest_path: Option<String>',
    riskClass: 'ReadOnly',
    description: 'Analyzes package dependencies from Cargo.toml or package manifests.',
  },

  // Process & Background Job Tools (5)
  {
    id: 'run_command',
    name: 'run_command',
    category: 'Process',
    parameters: 'command: String, args: Vec<String>, timeout_secs: Option<u64>',
    riskClass: 'HighRiskMutation',
    description: 'Spawns a synchronous child process under POSIX rlimits and cgroups confinement.',
  },
  {
    id: 'start_job',
    name: 'start_job',
    category: 'Process',
    parameters: 'command: String, args: Vec<String>, env: HashMap<String, String>',
    riskClass: 'HighRiskMutation',
    description: 'Launches an asynchronous background job with streaming spool output.',
  },
  {
    id: 'job_status',
    name: 'job_status',
    category: 'Process',
    parameters: 'job_id: String',
    riskClass: 'ReadOnly',
    description: 'Inspects current status (Running, Completed, Failed) of a background job.',
  },
  {
    id: 'job_output',
    name: 'job_output',
    category: 'Process',
    parameters: 'job_id: String, offset: Option<u64>, limit: Option<u64>',
    riskClass: 'ReadOnly',
    description: 'Reads streaming stdout/stderr output from a running or completed job.',
  },
  {
    id: 'job_stop',
    name: 'job_stop',
    category: 'Process',
    parameters: 'job_id: String, force: bool',
    riskClass: 'HighRiskMutation',
    description: 'Sends SIGTERM / SIGKILL to a background job process tree.',
  },

  // Git Tools (8)
  {
    id: 'git_status',
    name: 'git_status',
    category: 'Git',
    parameters: 'None',
    riskClass: 'ReadOnly',
    description: 'Returns clean/dirty state, staged changes, and untracked files.',
  },
  {
    id: 'git_diff',
    name: 'git_diff',
    category: 'Git',
    parameters: 'staged: bool, commit: Option<String>',
    riskClass: 'ReadOnly',
    description: 'Computes unified diff of working tree changes or specific commits.',
  },
  {
    id: 'git_log',
    name: 'git_log',
    category: 'Git',
    parameters: 'limit: Option<usize>, revision: Option<String>',
    riskClass: 'ReadOnly',
    description: 'Retrieves commit history with hashes, author info, and trailer blocks.',
  },
  {
    id: 'git_show',
    name: 'git_show',
    category: 'Git',
    parameters: 'object: String',
    riskClass: 'ReadOnly',
    description: 'Shows detailed commit metadata, commit message, and full patch diff.',
  },
  {
    id: 'git_branch',
    name: 'git_branch',
    category: 'Git',
    parameters: 'action: String, branch_name: Option<String>',
    riskClass: 'WorkspaceMutation',
    description: 'Lists, creates, or switches branches within the local repository.',
  },
  {
    id: 'git_checkout',
    name: 'git_checkout',
    category: 'Git',
    parameters: 'target: String, create: bool',
    riskClass: 'WorkspaceMutation',
    description: 'Checks out a branch or reverts specified files to HEAD revision.',
  },
  {
    id: 'git_add',
    name: 'git_add',
    category: 'Git',
    parameters: 'paths: Vec<String>',
    riskClass: 'WorkspaceMutation',
    description: 'Stages specified file modifications or untracked files for commit.',
  },
  {
    id: 'git_commit',
    name: 'git_commit',
    category: 'Git',
    parameters: 'message: String, trailers: Option<HashMap<String, String>>',
    riskClass: 'WorkspaceMutation',
    description: 'Creates a new Git commit with RFC-compliant M31A attribution trailers.',
  },

  // QA & Verification Tools (3)
  {
    id: 'run_tests',
    name: 'run_tests',
    category: 'Verification',
    parameters: 'filter: Option<String>, package: Option<String>',
    riskClass: 'HighRiskMutation',
    description: 'Executes project test suites (cargo test, etc.) and parses structured test results.',
  },
  {
    id: 'run_formatter',
    name: 'run_formatter',
    category: 'Verification',
    parameters: 'check: bool, files: Vec<String>',
    riskClass: 'WorkspaceMutation',
    description: 'Runs code formatting (cargo fmt, etc.) in check or modification mode.',
  },
  {
    id: 'run_linter',
    name: 'run_linter',
    category: 'Verification',
    parameters: 'fix: bool',
    riskClass: 'HighRiskMutation',
    description: 'Executes static analysis and linter suites (cargo clippy, etc.).',
  },

  // Artifact Management Tools (2)
  {
    id: 'create_artifact',
    name: 'create_artifact',
    category: 'Artifacts',
    parameters: 'name: String, data: String, mime_type: String',
    riskClass: 'WorkspaceMutation',
    description: 'Stores an immutable content-addressed artifact with streaming quota checks.',
  },
  {
    id: 'read_artifact',
    name: 'read_artifact',
    category: 'Artifacts',
    parameters: 'artifact_id: String',
    riskClass: 'ReadOnly',
    description: 'Retrieves content and metadata of a previously stored artifact by ID.',
  },
];

export interface PlatformSupportItem {
  os: string;
  architecture: string;
  targetTriple: string;
  archiveName: string;
  classification: 'SUPPORTED' | 'CONDITIONALLY SUPPORTED' | 'COMPILE-ONLY';
  details: string;
}

export const PLATFORMS_MATRIX: PlatformSupportItem[] = [
  {
    os: 'Linux',
    architecture: 'x86_64',
    targetTriple: 'x86_64-unknown-linux-gnu',
    archiveName: 'm31a-linux-x64.tar.gz',
    classification: 'SUPPORTED',
    details: 'Release-qualified: native runtime, parity, security, CI, and artifact evidence all green. Hard cgroups v2 enforcement.',
  },
  {
    os: 'macOS',
    architecture: 'Intel (x86_64)',
    targetTriple: 'x86_64-apple-darwin',
    archiveName: 'm31a-darwin-x64.tar.gz',
    classification: 'CONDITIONALLY SUPPORTED',
    details: 'Implemented; Seatbelt isolation is Degraded (never full sandbox); native re-verification pending a macOS runner.',
  },
  {
    os: 'Linux',
    architecture: 'ARM64 (aarch64)',
    targetTriple: 'aarch64-unknown-linux-gnu',
    archiveName: 'm31a-linux-arm64.tar.gz',
    classification: 'COMPILE-ONLY',
    details: 'Compiles; published for cross-compilation testing; no native runtime evidence — do not assume x86_64 behavior.',
  },
  {
    os: 'macOS',
    architecture: 'Apple Silicon (aarch64)',
    targetTriple: 'aarch64-apple-darwin',
    archiveName: 'm31a-darwin-arm64.tar.gz',
    classification: 'COMPILE-ONLY',
    details: 'Compiles; native runtime execution awaiting dedicated Apple Silicon test runner.',
  },
  {
    os: 'Windows',
    architecture: 'x86_64',
    targetTriple: 'x86_64-pc-windows-msvc',
    archiveName: 'm31a-windows-x64.zip',
    classification: 'COMPILE-ONLY',
    details: 'Compiles; Job Objects, ACLs, and ConPTY verified by contract only — native runs pending Windows runner.',
  },
  {
    os: 'Windows',
    architecture: 'ARM64 (aarch64)',
    targetTriple: 'aarch64-pc-windows-msvc',
    archiveName: 'm31a-windows-arm64.zip',
    classification: 'COMPILE-ONLY',
    details: 'Compiles; no native runtime evidence.',
  },
];

export interface CliCommandDef {
  command: string;
  summary: string;
  category: 'Core' | 'Mission & Task' | 'Inspection' | 'Diagnostics' | 'Configuration' | 'Deployment';
  usage: string;
  flags?: { flag: string; description: string }[];
  examples: string[];
}

export const CLI_COMMAND_DEFS: CliCommandDef[] = [
  {
    command: 'm31a / m31a tui',
    summary: 'Launch the interactive Ratatui cockpit interface.',
    category: 'Core',
    usage: 'm31a [OPTIONS] or m31a tui',
    flags: [
      { flag: '-p, --profile <NAME>', description: 'Activate named profile (safe, coding, research, etc.)' },
      { flag: '--workspace <DIR>', description: 'Target workspace directory' },
      { flag: '--model <MODEL>', description: 'Override model name' },
    ],
    examples: ['m31a', 'm31a tui --profile coding', 'm31a --workspace /path/to/project'],
  },
  {
    command: 'm31a mission run',
    summary: 'Start an autonomous software engineering mission.',
    category: 'Mission & Task',
    usage: 'm31a mission run <PROMPT> [OPTIONS]',
    flags: [
      { flag: '-p, --profile <NAME>', description: 'Configuration profile for this mission' },
      { flag: '--wait-for-approval', description: 'Wait for operator approval when policy triggers ASK' },
    ],
    examples: [
      'm31a mission run "Refactor database queries to use parameterized statements" --profile coding',
      'm31a mission run "Fix clippy warnings in src/agent" --wait-for-approval',
    ],
  },
  {
    command: 'm31a mission list',
    summary: 'List all recorded missions in the current workspace.',
    category: 'Mission & Task',
    usage: 'm31a mission list [--all]',
    flags: [{ flag: '--all', description: 'Include completed, paused, and cancelled missions' }],
    examples: ['m31a mission list', 'm31a mission list --all'],
  },
  {
    command: 'm31a mission show',
    summary: 'Display detailed mission status, task DAG, and budget consumption.',
    category: 'Mission & Task',
    usage: 'm31a mission show <MISSION_ID>',
    examples: ['m31a mission show 019234b0-a5ef-7b23-96b0-96f7c75b001a'],
  },
  {
    command: 'm31a mission pause / resume / cancel',
    summary: 'Control the lifecycle state of an active mission.',
    category: 'Mission & Task',
    usage: 'm31a mission [pause|resume|cancel] <MISSION_ID>',
    examples: [
      'm31a mission pause <MISSION_ID>',
      'm31a mission resume <MISSION_ID>',
      'm31a mission cancel <MISSION_ID>',
    ],
  },
  {
    command: 'm31a task list / show',
    summary: 'Inspect individual tasks in the mission DAG and their verification evidence.',
    category: 'Mission & Task',
    usage: 'm31a task list <MISSION_ID> or m31a task show <TASK_ID>',
    examples: ['m31a task list <MISSION_ID>', 'm31a task show <TASK_ID>'],
  },
  {
    command: 'm31a agent list',
    summary: 'Inspect active and idle agents across the 8 canonical roles.',
    category: 'Inspection',
    usage: 'm31a agent list',
    examples: ['m31a agent list'],
  },
  {
    command: 'm31a capability list',
    summary: 'List all 15 core capability families and operational availability.',
    category: 'Inspection',
    usage: 'm31a capability list',
    examples: ['m31a capability list'],
  },
  {
    command: 'm31a policy check',
    summary: 'Dry-run evaluate an action or tool against active policy layers.',
    category: 'Inspection',
    usage: 'm31a policy check <TOOL> [-m <MISSION_ID>]',
    flags: [{ flag: '-m, --mission-id <ID>', description: 'Optional mission context for policy evaluation' }],
    examples: ['m31a policy check write_file', 'm31a policy check run_command -m <ID>'],
  },
  {
    command: 'm31a checkpoint list / restore',
    summary: 'Manage atomic two-phase mission checkpoints and rollback.',
    category: 'Inspection',
    usage: 'm31a checkpoint list <MISSION_ID> or m31a checkpoint restore <CHECKPOINT_ID>',
    examples: ['m31a checkpoint list <MISSION_ID>', 'm31a checkpoint restore <CHECKPOINT_ID>'],
  },
  {
    command: 'm31a artifact list / show',
    summary: 'Inspect content-addressed immutable execution artifacts and SHA-256 digests.',
    category: 'Inspection',
    usage: 'm31a artifact list <MISSION_ID> or m31a artifact show <ARTIFACT_ID>',
    examples: ['m31a artifact list <MISSION_ID>', 'm31a artifact show <ARTIFACT_ID>'],
  },
  {
    command: 'm31a doctor',
    summary: 'Run comprehensive environmental diagnostic probes.',
    category: 'Diagnostics',
    usage: 'm31a doctor [--json]',
    flags: [{ flag: '--json', description: 'Emit machine-readable JSON health report' }],
    examples: ['m31a doctor', 'm31a doctor --json'],
  },
  {
    command: 'm31a telemetry inspect',
    summary: 'Inspect execution traces, hierarchical spans, metrics, and token usage.',
    category: 'Diagnostics',
    usage: 'm31a telemetry inspect <MISSION_ID> [OPTIONS]',
    flags: [
      { flag: '--summary', description: 'Display duration, tokens, and financial cost summary' },
      { flag: '--spans', description: 'Display hierarchical execution spans' },
      { flag: '--metrics', description: 'Print sampled timeseries metrics' },
      { flag: '--export <FORMAT>', description: 'Export telemetry data in json or ndjson' },
    ],
    examples: [
      'm31a telemetry inspect <MISSION_ID> --summary',
      'm31a telemetry inspect <MISSION_ID> --spans --metrics',
    ],
  },
  {
    command: 'm31a config validate / get / set / sources',
    summary: 'Inspect, validate, and manage hierarchical configuration across 7 tiers.',
    category: 'Configuration',
    usage: 'm31a config [validate|get|set|sources|explain]',
    examples: [
      'm31a config validate',
      'm31a config get runtime.profile',
      'm31a config set policy.default_decision ask',
      'm31a config sources',
    ],
  },
  {
    command: 'm31a eval run',
    summary: 'Execute autonomous evaluation harness benchmark scenarios.',
    category: 'Diagnostics',
    usage: 'm31a eval run [--scenario <ID>|--all] [OPTIONS]',
    flags: [
      { flag: '-s, --scenario <ID>', description: 'Target specific scenario (a, b, c, etc.)' },
      { flag: '--all', description: 'Execute all canonical acceptance scenarios' },
      { flag: '-i, --iterations <N>', description: 'Number of benchmark iterations' },
    ],
    examples: ['m31a eval run --all', 'm31a eval run -s a -i 3'],
  },
  {
    command: 'm31a init',
    summary: 'Initialize workspace onboarding state (idempotent; use --force to re-enter setup).',
    category: 'Core',
    usage: 'm31a init [--force]',
    flags: [{ flag: '--force', description: 'Explicitly re-enter first-run onboarding' }],
    examples: ['m31a init', 'm31a init --force'],
  },
  {
    command: 'm31a version / deployment',
    summary: 'Display deployment channel, build identity, commit hash, and artifact details.',
    category: 'Deployment',
    usage: 'm31a version [--verbose] or m31a deployment [--verbose]',
    flags: [{ flag: '--verbose', description: 'Show complete build identity and paths' }],
    examples: ['m31a version', 'm31a version --verbose', 'm31a deployment'],
  },
  {
    command: 'm31a update / rollback',
    summary: 'Transactional binary update from manifest and atomic rollback to previous binary.',
    category: 'Deployment',
    usage: 'm31a update --manifest <path> [--check] or m31a rollback',
    flags: [
      { flag: '--manifest <PATH>', description: 'Path to deployment manifest' },
      { flag: '--check', description: 'Dry-run verify without applying update' },
    ],
    examples: ['m31a update --manifest manifest.json --check', 'm31a rollback'],
  },
];

export const CLI_COMMANDS = CLI_COMMAND_DEFS;

export interface ChangelogItem {
  version: string;
  date: string;
  tagUrl: string;
  summary: string;
  sections: { title: string; items: string[] }[];
}

export const CHANGELOG_ENTRIES: ChangelogItem[] = [
  {
    version: '0.1.1',
    date: '2026-10-02',
    tagUrl: 'https://github.com/eshanized/M31A/releases/tag/v0.1.1',
    summary: 'Deployment & Release Channels, Fail-Closed Worktree Isolation, Egress SSRF Hardening, and Output Security Contracts.',
    sections: [
      {
        title: 'Deployment & Release Channels (DEVELOPMENT vs PRODUCTION)',
        items: [
          'One core runtime, two isolated deployment channels: production (m31a, default build) and development (m31a-dev, --features development). Channel is compile-time artifact identity.',
          'New src/deployment/ subsystem: DeploymentChannel/UpdateChannel, immutable DeploymentContext, ReleaseArtifact model, versioned DeploymentManifest (schema v1), transactional Installer (stage → verify → atomic replace), channel-safe update discovery, and rollback seam.',
          'CLI subcommands: m31a version [--verbose], m31a deployment [--verbose], m31a update --manifest <file> [--check], m31a rollback; channel-aware m31a --version.',
          'PlatformPaths and persistence paths are channel-aware: development uses isolated m31a-dev global state; production paths are unchanged.',
        ],
      },
      {
        title: 'Security & Policy Hardening',
        items: [
          'Fail-Closed Worktree Isolation: default_execution_isolation() set to "required". Governed production runs fail closed if worktree creation cannot be verified.',
          'Egress & SSRF Hardening: centralized NetworkDestinationPolicy blocking IPv4/IPv6 loopback, RFC 1918 private subnets, cloud metadata (169.254.169.254), link-local, and carrier NAT. Async DNS pre-validation and step-by-step redirect verification up to 5 hops.',
          'XML TrustEnvelope Hardening: strict attribute escaping (&, <, >, ", \', control chars, newlines) preventing XML injection and tag breakouts.',
          'Expanded Secret Redactor: added scrubbing for NVIDIA API keys, GitLab tokens, database URLs with passwords, basic/digest auth headers, and env credential pairs.',
          'Structural Telemetry & Logging: runner step events, SSE parser logs, and pipeline diagnostics emit structural metadata only, strictly preventing raw model proposals or arbitrary command output from entering logs.',
          'Stage 10 Output Security Contract: formalized PipelineOutputEvidence disambiguating raw execution output, model-visible projections, redacted diagnostic evidence, and SHA-256 cryptographic audit digests.',
          'Process Environment & Shell Security: child processes strictly clear host environment variables (env_clear()) installing only trusted baselines.',
        ],
      },
    ],
  },
  {
    version: '0.1.0',
    date: '2026-09-25',
    tagUrl: 'https://github.com/eshanized/M31A/releases/tag/v0.1.0',
    summary: 'Initial production foundation: single-crate runtime kernel, 11-stage policy gate, 28 core tools, and Ratatui cockpit.',
    sections: [
      {
        title: 'Runtime Kernel (L0–L2)',
        items: [
          'Single-crate Rust-native autonomous runtime with zero foreign runtime dependencies (no Node.js, Python, or GPU required).',
          'Domain-typed kernel IDs: MissionId, TaskId, SessionId, AgentId, CheckpointId, ArtifactId.',
          'Immutable content-addressed artifact store with SHA-256 integrity verification.',
          'SQLite-backed durable persistence with 19 incremental migration files and WAL mode.',
          'Two-phase atomic checkpoints with CheckpointIntegrityValidator.',
          'Startup crash scanner and automatic recovery classification.',
        ],
      },
      {
        title: 'Security & Policy Engine (L1)',
        items: [
          '11-stage policy gate with ALLOW / DENY / ASK / ESCALATE decision matrix.',
          '10-tier precedence model for policy resolution with monotonic non-weakening merger rules.',
          'SecretRedactor with multi-tier deterministic scrubbing pipeline (nvapi-*, ghp_*, sk-*, AKIA*, JWTs, RSA private keys).',
          'TrustEnvelope::wrap_untrusted with SHA-256 integrity digest for prompt injection defense.',
          'ApprovalCoordinator fail-closed ASK semantics in unattended mode.',
          'Multi-tier process confinement: Linux cgroups v2, POSIX rlimits, process group isolation, and watchdog supervision.',
          'ASVS L1 coverage across all 11 documented threat vectors.',
        ],
      },
      {
        title: 'Capabilities, Planning & Agent Swarm (L3–L5)',
        items: [
          '28 core tools with typed parameter schemas and execution risk classifications.',
          '8 canonical agent roles: planner, researcher, architect, implementer, reviewer, verifier, diagnostician, integrator.',
          'NVIDIA NIM provider integration with SSE streaming.',
          'Directed acyclic task graph with petgraph-backed dependency resolution and differential DAG replanning.',
        ],
      },
      {
        title: 'CLI & TUI Cockpit (L9)',
        items: [
          'Ratatui 0.30 TUI cockpit with RAII TerminalGuard for raw-mode restoration.',
          'Full clap-derive CLI with machine-readable --output json and stream-json modes.',
          'Standardized UNIX exit codes: 0 (success), 1 (verification failure), 2 (policy violation), 3 (budget exhaustion), 4 (crash), 5 (config error).',
        ],
      },
    ],
  },
];

export const CHANGELOG = CHANGELOG_ENTRIES;

export interface RoadmapEntry {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'Future';
  reference?: string;
}

export const ROADMAP_ITEMS: RoadmapEntry[] = [
  {
    title: 'Single Trusted Kernel & Layered Architecture (L0–L9)',
    description: 'Single-crate Rust runtime with zero foreign runtime dependencies, strict downward-dependency layered hierarchy.',
    status: 'Completed',
    reference: 'docs/architecture/ARCHITECTURE.md',
  },
  {
    title: 'Non-Bypassable 11-Stage Policy Gate',
    description: 'Deterministic security governance with 10 authority layers, fail-closed approval, and ASVS L1 threat mitigations.',
    status: 'Completed',
    reference: 'docs/subsystems/POLICY.md',
  },
  {
    title: 'Continuous Evidence-Based Verification',
    description: 'Multi-tier verification gates requiring cryptographic test evidence before mission completion confirmation.',
    status: 'Completed',
    reference: 'src/verification/gate.rs',
  },
  {
    title: 'Crash-Resilient Two-Phase Checkpoints',
    description: 'Two-phase commit protocol with startup crash recovery scanner and differential DAG replanner.',
    status: 'Completed',
    reference: 'docs/subsystems/RECOVERY.md',
  },
  {
    title: 'Deployment & Release Channels',
    description: 'Compile-time artifact identity separating production (m31a) from development (m31a-dev) with transactional installer.',
    status: 'Completed',
    reference: 'docs/RELEASE.md',
  },
  {
    title: 'SSRF & Egress Hardening',
    description: 'NetworkDestinationPolicy blocking private subnets, cloud metadata, with async DNS pre-validation and hop verification.',
    status: 'Completed',
    reference: 'src/policy/destination.rs',
  },
  {
    title: 'Replay & Post-Mortem Inspection Surface',
    description: 'Historical event timeline with read-only playback and state reconstruction in the TUI cockpit.',
    status: 'Completed',
    reference: 'src/tui/surface/replay.rs',
  },
  {
    title: 'Cross-Platform Native Runtime Qualification',
    description: 'Expanding native runner qualification evidence for macOS and Windows beyond the current compile-only status.',
    status: 'In Progress',
    reference: 'docs/PLATFORM-SUPPORT.md',
  },
  {
    title: 'Composable Skills Extension System',
    description: 'Structured domain workflow packs extending agent capabilities with strict policy subordination.',
    status: 'In Progress',
    reference: 'docs/subsystems/PLUGIN.md',
  },
  {
    title: 'Extended Model Provider Parity Validation',
    description: 'Parity testing and trust-envelope qualification for additional model providers beyond production NVIDIA NIM.',
    status: 'Planned',
    reference: 'src/model/provider/mod.rs',
  },
  {
    title: 'Federated Enterprise Policy Management',
    description: 'Centralized organization-tier policy distribution and cryptographic signature verification.',
    status: 'Future',
    reference: 'docs/subsystems/POLICY.md',
  },
];

export const ROADMAP = ROADMAP_ITEMS;

export interface DocTopic {
  slug: string;
  title: string;
  description: string;
  section: 'getting-started' | 'concepts' | 'reference';
  order: number;
}

export type DocPageMeta = DocTopic;

export const DOC_SECTIONS = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'concepts', label: 'Concepts & Architecture' },
  { id: 'reference', label: 'Reference Manual' },
] as const;

export const DOCS: DocTopic[] = [
  // Getting Started
  { slug: 'introduction', title: 'Introduction', description: 'What M31A is, architectural principles, and what it is not.', section: 'getting-started', order: 1 },
  { slug: 'installation', title: 'Installation Guide', description: 'Install standalone binaries or build from source with Cargo.', section: 'getting-started', order: 2 },
  { slug: 'quick-start', title: 'Quick Start', description: 'Configure credentials, launch the cockpit, and run your first mission.', section: 'getting-started', order: 3 },
  { slug: 'platform-support', title: 'Platform Qualification', description: 'Authoritative support matrix for Linux, macOS, and Windows.', section: 'getting-started', order: 4 },

  // Concepts & Architecture
  { slug: 'concepts', title: 'Core Concepts', description: 'The model proposes. The runtime decides. Runtime authority explained.', section: 'concepts', order: 1 },
  { slug: 'architecture', title: 'Runtime Architecture (L0–L9)', description: 'Strict 10-layer hierarchy, downward dependencies, and hybrid persistence.', section: 'concepts', order: 2 },
  { slug: 'autonomy-loop', title: '12-Stage Autonomy Loop', description: 'The 12-stage execution lifecycle, loop detector, and 10-dimensional budget model.', section: 'concepts', order: 3 },
  { slug: 'agent-swarm', title: '8 Canonical Agent Roles', description: 'Specialized role state machines: planner, researcher, implementer, verifier, etc.', section: 'concepts', order: 4 },
  { slug: 'policies', title: '11-Stage Policy Gate', description: 'Security governance, 10-tier authority stack, and monotonic merger rules.', section: 'concepts', order: 5 },
  { slug: 'tools', title: '28 Core Tools Catalog', description: 'Typed tool execution lifecycle, risk classes, and parameter schemas.', section: 'concepts', order: 6 },
  { slug: 'models', title: 'Models & Provider Trust', description: 'NVIDIA NIM integration, endpoint trust boundaries, and SSE streaming.', section: 'concepts', order: 7 },
  { slug: 'git-worktree', title: 'Git Attribution & Worktrees', description: 'Fail-closed worktree isolation and RFC-compliant commit trailers.', section: 'concepts', order: 8 },
  { slug: 'verification', title: 'Evidence-Based Verification', description: 'Multi-tier verification checks and cryptographic completion evidence.', section: 'concepts', order: 9 },
  { slug: 'checkpoints', title: 'Checkpoints & Fault Recovery', description: 'Two-phase commits, startup crash scanners, and 15 failure classifications.', section: 'concepts', order: 10 },
  { slug: 'tui', title: 'TUI Cockpit Manual', description: 'Terminal UI surfaces, navigation router, and RAII TerminalGuard.', section: 'concepts', order: 11 },

  // Reference
  { slug: 'configuration', title: 'Configuration Reference', description: '7-tier precedence hierarchy and canonical configuration profiles.', section: 'reference', order: 1 },
  { slug: 'cli-reference', title: 'CLI Reference & Exit Codes', description: 'Complete CLI subcommand catalog, arguments, flags, and exit codes.', section: 'reference', order: 2 },
  { slug: 'security', title: 'Security Architecture & ASVS L1', description: '11-threat matrix, SecretRedactor pipeline, and SSRF destination policy.', section: 'reference', order: 3 },
  { slug: 'contributing', title: 'Contributing & Verification', description: 'Contributing guidelines, mandatory release gates, and testing pipelines.', section: 'reference', order: 4 },
];

export interface TuiSurfaceShowcase {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  sourceFile: string;
  shortcuts: string[];
}

export const TUI_SURFACES: TuiSurfaceShowcase[] = [
  {
    id: 'dashboard',
    name: 'Mission Cockpit',
    shortDesc: 'Primary operational cockpit header and status',
    description: 'Displays mission ID, active profile, current autonomy mode, active NVIDIA NIM model, elapsed time, step counters, and token consumption.',
    sourceFile: 'src/tui/screens/session_cockpit.rs',
    shortcuts: ['F1: Help', 'Tab: Next Surface', 'Esc: Focus Composer'],
  },
  {
    id: 'conversation',
    name: 'Conversation & Governance Timeline',
    shortDesc: 'Interactive chat feed with contextual governance cards',
    description: 'Presents the operator conversation timeline interleaved with explicit governance cards: plan review, task approval, tool execution previews, and verification outcomes.',
    sourceFile: 'src/tui/surface/conversation.rs',
    shortcuts: ['j/k: Scroll', 'Enter: Expand Card', 'a: Authorize'],
  },
  {
    id: 'tasks',
    name: 'Task DAG Visualizer',
    shortDesc: 'Petgraph dependency tree of candidate and active tasks',
    description: 'Visual representation of decomposed tasks, tracking states (Pending, Running, Succeeded, Failed), blocking dependencies, and differential replan revisions.',
    sourceFile: 'src/tui/surface/tasks.rs',
    shortcuts: ['Arrow keys: Navigate DAG', 'Space: Inspect Task Evidence'],
  },
  {
    id: 'agents',
    name: 'Agent Swarm Pool',
    shortDesc: 'Role state machine monitors for active agent instances',
    description: 'Monitors the 8 canonical roles (planner, researcher, architect, implementer, reviewer, verifier, diagnostician, integrator) with active step counts and memory contexts.',
    sourceFile: 'src/tui/surface/agents.rs',
    shortcuts: ['1-8: Filter Role', 'i: Inspect Context Window'],
  },
  {
    id: 'tools',
    name: 'Tool Execution Surface',
    shortDesc: 'Real-time observation of tool dispatches and spools',
    description: 'Displays schema validation, pre-admission budget grants, sandboxed execution output, streaming stdout/stderr, and sanitized diagnostic evidence.',
    sourceFile: 'src/tui/surface/tools.rs',
    shortcuts: ['f: Follow Spool', 'x: Abort Tool Execution'],
  },
  {
    id: 'verification',
    name: 'Verification & Quality Gates',
    shortDesc: 'Cryptographic test results, linters, and semantic reviews',
    description: 'Shows live cargo test results, clippy diagnostics, fmt checks, and SHA-256 evidence digests required before completion gate approval.',
    sourceFile: 'src/tui/surface/verification.rs',
    shortcuts: ['v: Re-verify Gate', 'd: View Diagnostics Diff'],
  },
  {
    id: 'telemetry',
    name: 'Telemetry & Metric Gauges',
    shortDesc: 'High-density resource consumption monitors',
    description: 'Visual gauges tracking the 10-dimensional budget model: token rate, CPU seconds, memory RSS against cgroup ceilings, and cumulative storage quotas.',
    sourceFile: 'src/tui/surface/telemetry.rs',
    shortcuts: ['m: Toggle Metrics View', 'e: Export NDJSON'],
  },
  {
    id: 'git',
    name: 'Git Attribution & Worktree',
    shortDesc: 'Worktree isolation monitor and commit trailer review',
    description: 'Tracks isolated worktree state, staged file diffs, change authoritativeness, and RFC-compliant M31A attribution trailers.',
    sourceFile: 'src/tui/surface/git.rs',
    shortcuts: ['d: View Unified Diff', 'c: Review Commit Trailer'],
  },
  {
    id: 'replay',
    name: 'Replay & Post-Mortem',
    shortDesc: 'Historical event stream scrubbing and step playback',
    description: 'Read-only time-travel inspection allowing developers to scrub backward through events, inspect exact model proposals, and review policy decisions.',
    sourceFile: 'src/tui/surface/replay.rs',
    shortcuts: ['h/l: Step Back/Forward', 'Space: Play/Pause'],
  },
  {
    id: 'approvals',
    name: 'Approval Coordinator Modal',
    shortDesc: 'Fail-closed operator approval dialogue for ASK decisions',
    description: 'Rendered when policy triggers an ASK outcome. Displays proposed command, target path, risk class, and blast radius before granting durable permission.',
    sourceFile: 'src/tui/approval.rs',
    shortcuts: ['y: Allow Once', 'a: Allow Always', 'n: Deny (Fail-Closed)'],
  },
];
