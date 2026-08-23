export interface DocContent {
  slug: string;
  title: string;
  description: string;
  sections: DocSection[];
}

export interface DocSection {
  heading: string;
  body?: string;
  code?: { language: string; content: string };
  list?: string[];
  callout?: { type: 'info' | 'warning' | 'success'; text: string };
}

export const docsContent: Record<string, DocContent> = {
  introduction: {
    slug: 'introduction',
    title: 'Introduction',
    description: 'What M31A is and why it exists.',
    sections: [
      {
        heading: 'What M31A Is',
        body: 'M31A is a persistent software-engineering agent runtime that turns natural-language intent into verified, resumable engineering work. It lives in the developer\'s terminal and operates around engineering state — not merely conversation.',
      },
      {
        heading: 'Why M31A Exists',
        body: 'Conventional coding agents think in conversations. They lose state between turns, skip explicit planning, and cannot prove their work. M31A exists because "done" is not evidence — engineering work requires planning, verification, and durable state.',
        list: [
          'Model context is disposable; engineering state is durable.',
          'Verification requires evidence, not model confidence.',
          'Repository content and model output are untrusted by default.',
          'Irreversible actions require human control.',
        ],
      },
      {
        heading: 'Core Loop',
        body: 'Every piece of work follows the same engineering loop: intent, understanding, impact, research, plan, execution, verification, durable result.',
        code: {
          language: 'text',
          content: 'intent\n  → understanding\n  → impact\n  → research\n  → plan\n  → execution\n  → verification\n  → durable result',
        },
      },
    ],
  },
  installation: {
    slug: 'installation',
    title: 'Installation',
    description: 'Clone, build, and run M31A.',
    sections: [
      {
        heading: 'Prerequisites',
        body: 'M31A is built with Go. You need a working Go toolchain to build the runtime.',
        list: [
          'Go 1.22+ installed',
          'A model provider API key (v1 targets NVIDIA Build)',
          'Git installed and configured',
        ],
      },
      {
        heading: 'Clone and Build',
        code: {
          language: 'bash',
          content: 'git clone https://github.com/eshanized/M31A.git\ncd M31A\n\ngo build ./cmd/m31a\n./m31a',
        },
      },
      {
        heading: 'Provider Setup',
        body: 'M31A v1 targets nvidia/nemotron-3-ultra-550b-a55b through NVIDIA Build. The runtime architecture is provider-independent.',
        code: {
          language: 'bash',
          content: 'export NVIDIA_API_KEY="your-key-here"\nm31a',
        },
        callout: { type: 'warning', text: 'Never commit a real API key to version control. Use environment variables or a secrets manager.' },
      },
    ],
  },
  quickstart: {
    slug: 'quickstart',
    title: 'Quickstart',
    description: 'From zero to verified work in three steps.',
    sections: [
      {
        heading: '1. Install',
        code: {
          language: 'bash',
          content: 'git clone https://github.com/eshanized/M31A.git\ncd M31A\ngo build ./cmd/m31a',
        },
      },
      {
        heading: '2. Start',
        code: {
          language: 'bash',
          content: 'export NVIDIA_API_KEY="..."\n./m31a',
        },
      },
      {
        heading: '3. Describe the Work',
        body: 'Start with an explanation request to verify M31A can read your codebase, then move to implementation.',
        code: {
          language: 'text',
          content: '> explain how authentication works\n\n  # M31A traces the auth pipeline and\n  # produces an annotated explanation.\n\n> add organization-level RBAC\n\n  # M31A analyzes impact, creates a plan,\n  # executes tasks, and verifies the result.',
        },
        callout: { type: 'success', text: 'The progression from explanation to implementation is the recommended first workflow.' },
      },
    ],
  },
  'engineering-runs': {
    slug: 'engineering-runs',
    title: 'Engineering Runs',
    description: 'How intent becomes a resumable run.',
    sections: [
      {
        heading: 'What Is a Run?',
        body: 'A run is the unit of engineering work in M31A. It begins with a natural-language intent and ends with verified, persisted results. Runs are resumable — they survive crashes, provider failures, and context loss.',
      },
      {
        heading: 'Run Lifecycle',
        body: 'A run progresses through distinct phases, each producing durable state.',
        list: [
          'Intent: the developer describes the goal.',
          'Analysis: repository intelligence and impact analysis.',
          'Planning: TaskGraph generation with dependencies and waves.',
          'Execution: specialized agents execute tasks.',
          'Verification: acceptance criteria checked with evidence.',
          'Persistence: run state saved to .m31a/.',
        ],
      },
      {
        heading: 'Resumability',
        body: 'Runs checkpoint their state after each wave. If M31A stops — due to a crash, a provider timeout, or manual cancellation — the run can be resumed from the last checkpoint.',
        code: {
          language: 'text',
          content: 'M31A stopped unexpectedly.\nRun 84F2 preserved.\n\nLast checkpoint:\n  Task 3 · Route guards\n\n[ Resume Run ]  [ Inspect State ]',
        },
      },
    ],
  },
  taskgraph: {
    slug: 'taskgraph',
    title: 'TaskGraph',
    description: 'Dependency-ordered, verifiable tasks.',
    sections: [
      {
        heading: 'What Is a TaskGraph?',
        body: 'A TaskGraph is the structured plan M31A generates for a run. It decomposes work into dependent, verifiable tasks. Each task carries requirements, acceptance criteria, verification strategy, risk assessment, and checkpoint boundaries.',
      },
      {
        heading: 'Structure',
        code: {
          language: 'text',
          content: 'TaskGraph\n\nT1 ─────┐\n        ├── T3 ─── T5\nT2 ─────┘\n        └── T4\n\n5 tasks · 2 waves · MEDIUM\n\nWave 1: T1, T2 (parallel)\nWave 2: T3, T4\nFinal:  T5 (verification)',
        },
      },
      {
        heading: 'Execution Waves',
        body: 'Tasks within a wave execute in parallel. Waves execute sequentially, with a checkpoint after each wave. This ensures that dependent tasks always have their prerequisites met.',
        callout: { type: 'info', text: 'Impact analysis feeds the TaskGraph — task ordering is determined by blast radius, not guesswork.' },
      },
    ],
  },
  agents: {
    slug: 'agents',
    title: 'Agents',
    description: 'Contract-bound specialized roles.',
    sections: [
      {
        heading: 'Agent Architecture',
        body: 'M31A uses specialized agents, each with a defined contract: specific inputs, specific outputs, and specific verification obligations. They are not personalities or simulated team members — they are bounded engineering functions.',
      },
      {
        heading: 'Available Agents',
        list: [
          'Explorer: maps repository structure and symbols',
          'Researcher: investigates technical questions with evidence',
          'Architect: designs structural changes and interfaces',
          'Planner: decomposes work into TaskGraph',
          'Implementer: writes and modifies code',
          'Tester: creates and runs tests',
          'Debugger: diagnoses failures and finds root causes',
          'Verifier: confirms acceptance criteria with evidence',
          'Reviewer: reviews changes for quality and correctness',
          'Security Auditor: checks for vulnerabilities and unsafe patterns',
          'Git Specialist: manages branches, commits, and history',
          'Release Engineer: prepares releases and changelogs',
        ],
      },
      {
        heading: 'Contracts',
        body: 'Each agent operates through an explicit contract that defines what it can do, what it must produce, and how its output is verified. The Supervisor coordinates agent execution within the TaskGraph.',
        callout: { type: 'info', text: 'Agents are contract-bound roles, not personalities. The system does not simulate a "team" — it dispatches bounded engineering functions.' },
      },
    ],
  },
  verification: {
    slug: 'verification',
    title: 'Verification',
    description: 'Evidence over confidence.',
    sections: [
      {
        heading: 'Principle',
        body: 'M31A does not treat model confidence as correctness. Every acceptance criterion produces a verification strategy that runs tests, analysis, or commands and collects evidence. A task is only "done" when its acceptance criteria are verified.',
      },
      {
        heading: 'Verification Flow',
        code: {
          language: 'text',
          content: 'Acceptance criterion\n      ↓\nverification strategy\n      ↓\ntests / analysis / commands\n      ↓\nevidence\n      ↓\nverified',
        },
      },
      {
        heading: 'Example',
        code: {
          language: 'text',
          content: 'REQ-AUTH-04\nExpired access tokens must be rejected.\n\n✓ unit tests        12 passed\n✓ integration tests  8 passed\n✓ API verification   4 passed\n✓ regression scan   23 passed\n\nResult: VERIFIED\nEvidence: 47 checks · 0 failures',
        },
        callout: { type: 'warning', text: 'Model confidence does not equal correctness. Verification is evidence.' },
      },
    ],
  },
  permissions: {
    slug: 'permissions',
    title: 'Permissions',
    description: 'Capability-based safety model.',
    sections: [
      {
        heading: 'Capability Policies',
        body: 'Every action M31A takes is governed by a capability-based permission model. Actions are scoped by target (repository, branch, remote, production) and governed by one of four policies: ALLOW, ASK, CHECKPOINT, DENY.',
        code: {
          language: 'text',
          content: 'filesystem.write    repository  ALLOW\ngit.commit          branch      ALLOW\ngit.push            remote       ASK\ngit.force_push      remote      DENY\ndatabase.migrate    production  CHECKPOINT',
        },
      },
      {
        heading: 'Policy Levels',
        list: [
          'ALLOW: the action executes automatically.',
          'ASK: the action pauses for human approval.',
          'CHECKPOINT: the action creates a checkpoint before executing.',
          'DENY: the action is blocked unconditionally.',
        ],
        callout: { type: 'info', text: 'Low-risk work can move automatically. Irreversible actions stop for human approval.' },
      },
    ],
  },
  'repository-intelligence': {
    slug: 'repository-intelligence',
    title: 'Repository Intelligence',
    description: 'Structural codebase understanding.',
    sections: [
      {
        heading: 'What M31A Understands',
        body: 'Before changing a single file, M31A builds a structural model of the codebase. This model includes:',
        list: [
          'Source code and symbols',
          'Dependencies and imports',
          'Call relationships',
          'Tests and coverage',
          'Build systems and configuration',
          'Documentation',
          'Git history and blame',
          'Architecture and conventions',
        ],
      },
      {
        heading: 'Repository Model',
        code: {
          language: 'text',
          content: 'Repository\n ├── packages\n ├── symbols\n ├── imports\n ├── calls\n ├── tests\n ├── APIs\n └── Git history',
        },
      },
      {
        heading: 'Impact Analysis',
        body: 'Impact analysis computes the blast radius of a proposed change. It identifies affected source files, tests, interfaces, and dependency injection modules. This feeds planning — it determines task ordering and risk mitigation.',
      },
    ],
  },
  configuration: {
    slug: 'configuration',
    title: 'Configuration',
    description: 'Runtime, provider, and project settings.',
    sections: [
      {
        heading: 'Configuration Sources',
        body: 'M31A reads configuration from multiple sources, with later sources overriding earlier ones:',
        list: [
          'Built-in defaults',
          'Global configuration file (~/.m31a/config)',
          'Project configuration file (.m31a/config)',
          'Environment variables',
          'Command-line flags',
        ],
      },
      {
        heading: 'Provider Configuration',
        body: 'M31A is provider-neutral. v1 targets NVIDIA Build with nvidia/nemotron-3-ultra-550b-a55b.',
        code: {
          language: 'bash',
          content: 'export NVIDIA_API_KEY="your-key"',
        },
      },
    ],
  },
  providers: {
    slug: 'providers',
    title: 'Providers',
    description: 'Model provider setup and abstraction.',
    sections: [
      {
        heading: 'Provider-Neutral Architecture',
        body: 'M31A\'s runtime architecture is provider-independent. The model is a component, not the source of truth. Models generate candidates; the runtime validates, verifies, and decides.',
      },
      {
        heading: 'v1 Provider',
        body: 'The initial release targets NVIDIA Build with nvidia/nemotron-3-ultra-550b-a55b.',
        code: {
          language: 'bash',
          content: 'export NVIDIA_API_KEY="your-key"\nm31a',
        },
        callout: { type: 'info', text: 'The runtime architecture supports adding additional providers. The model interface is abstracted from the rest of the system.' },
      },
    ],
  },
  tools: {
    slug: 'tools',
    title: 'Tools',
    description: 'Built-in tools and capabilities.',
    sections: [
      {
        heading: 'Built-in Tools',
        body: 'M31A agents interact with the system through tools. Each tool is governed by the capability permission model.',
        list: [
          'edit_file: modify source files within the workspace',
          'read_file: read file contents',
          'shell_exec: execute shell commands (ASK by default)',
          'git_commit: create commits on the current branch',
          'git_diff: inspect changes',
          'run_tests: execute test suites',
          'search: query repository symbols and structure',
        ],
      },
      {
        heading: 'Tool Safety',
        body: 'Every tool invocation is checked against the capability policies before execution. Tools that operate outside the workspace boundary or touch irreversible state are blocked or require approval.',
      },
    ],
  },
  'git-workflows': {
    slug: 'git-workflows',
    title: 'Git Workflows',
    description: 'Branches, worktrees, semantic commits.',
    sections: [
      {
        heading: 'First-Class Git',
        body: 'Git is a first-class domain in M31A. The system understands branch state, worktrees, diffs, history, and semantic commits. Each run can operate in an isolated worktree for safety.',
      },
      {
        heading: 'Semantic Commit Splitting',
        code: {
          language: 'text',
          content: '> Split my current changes into logical commits.\n\nDetected 4 groups.\n\n1  feat(auth): add organization roles\n2  feat(auth): enforce role guards\n3  test(auth): add authorization matrix\n4  docs(auth): document role semantics\n\n[ Accept ]  [ Customize ]',
        },
      },
      {
        heading: 'Protected Operations',
        body: 'Destructive operations — force push, history rewrite, branch deletion — require explicit human approval. The permission model enforces this by default.',
        callout: { type: 'warning', text: 'git.force_push is DENY by default on remote branches. Override requires explicit configuration.' },
      },
    ],
  },
  tui: {
    slug: 'tui',
    title: 'TUI',
    description: 'Terminal interface surfaces and navigation.',
    sections: [
      {
        heading: 'TUI Surfaces',
        body: 'The TUI provides multiple surfaces for interacting with the runtime:',
        list: [
          'Chat: natural-language interaction',
          'Plan: TaskGraph review before execution',
          'Run: live execution dashboard',
          'Verify: acceptance criteria and evidence',
          'Intelligence: repository model and impact analysis',
          'Git: branch state, diffs, and history',
          'History: past runs and decisions',
          'Project: project-level configuration',
          'Settings: runtime configuration',
          'Diagnostics: system health and debugging',
        ],
      },
      {
        heading: 'TUI Architecture',
        body: 'The TUI is a projection of the runtime. It renders state from the engine — it does not own business logic. All state transitions are validated by the runtime before they reach disk.',
        callout: { type: 'info', text: 'The TUI is a projection, not the runtime. Business logic lives in the engine.' },
      },
    ],
  },
  security: {
    slug: 'security',
    title: 'Security',
    description: 'Threat model and defenses.',
    sections: [
      {
        heading: 'Threat Model',
        body: 'M31A treats two categories of input as untrusted: model-generated commands and repository content. README instructions, comments, and file contents do not carry system authority.',
      },
      {
        heading: 'Defenses',
        list: [
          'Least privilege: capabilities are granted minimally',
          'Path containment: filesystem writes confined to workspace',
          'Secret protection: API keys never committed or logged',
          'Shell safety: shell execution requires approval by default',
          'Git safety: destructive operations blocked by default',
          'Checkpointing: state saved before risky operations',
          'Prompt injection defenses: untrusted content isolated from system authority',
        ],
      },
      {
        heading: 'Example: Path Containment',
        code: {
          language: 'text',
          content: 'REQUEST\n  write ../../etc/passwd\n\nM31A POLICY\n  [x] path outside workspace\n  [x] write capability denied\n\nACTION BLOCKED',
        },
        callout: { type: 'warning', text: 'Repository content is untrusted. Instructions in files do not elevate capabilities.' },
      },
    ],
  },
  extensions: {
    slug: 'extensions',
    title: 'Extensions',
    description: 'Custom agents and tools.',
    sections: [
      {
        heading: 'Custom Agents',
        body: 'M31A supports user-defined agent contracts for domain-specific workflows. A custom agent defines its input contract, output contract, and verification obligations.',
        callout: { type: 'info', text: 'Custom agents are an exploring-stage feature. The contract format is under development.' },
      },
      {
        heading: 'Custom Tools',
        body: 'Tools can be extended to support domain-specific operations. Each custom tool must declare its capability requirements and be approved in the project configuration.',
      },
    ],
  },
  mcp: {
    slug: 'mcp',
    title: 'MCP',
    description: 'Model Context Protocol integration.',
    sections: [
      {
        heading: 'MCP Support',
        body: 'M31A is exploring Model Context Protocol (MCP) support for external tool connectivity. MCP would allow M31A to connect to external services and data sources through a standardized protocol.',
        callout: { type: 'info', text: 'MCP integration is in the exploring phase. The architecture is designed to accommodate it.' },
      },
      {
        heading: 'Use Cases',
        list: [
          'Connecting to external issue trackers',
          'Reading from external documentation sources',
          'Interfacing with CI/CD systems',
          'Accessing monitoring and observability data',
        ],
      },
    ],
  },
  architecture: {
    slug: 'architecture',
    title: 'Architecture',
    description: 'System layers and data flow.',
    sections: [
      {
        heading: 'Six Layers',
        body: 'M31A separates concerns into six layers, each with clear responsibilities:',
        list: [
          'Interaction: CLI, TUI, commands, checkpoints',
          'Intelligence: models, context, repository intelligence, research',
          'Engineering: requirements, plans, TaskGraph, decisions',
          'Execution: agents, tools, shell, Git, worktrees, MCP',
          'Assurance: tests, verification, security, review',
          'Memory: sessions, runs, events, artifacts, learnings',
        ],
      },
      {
        heading: 'Data Flow',
        code: {
          language: 'text',
          content: '                    M31A\n                     │\n        ┌────────────┼────────────┐\n        │            │            │\n   Interaction  Intelligence  Engineering\n        │            │            │\n        └────────────┼────────────┘\n                     │\n                 Execution\n                     │\n                 Assurance\n                     │\n                  Memory',
        },
      },
      {
        heading: 'Key Principle',
        body: 'The LLM is a component, not the source of truth. Models generate candidates. The runtime validates, verifies, and decides. The system is not a thin wrapper around an API.',
        callout: { type: 'info', text: 'The TUI is a projection of the runtime. Business logic lives in the engine, not in the UI layer.' },
      },
    ],
  },
  troubleshooting: {
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and recovery.',
    sections: [
      {
        heading: 'Run Failed to Start',
        body: 'If a run fails to start, check that your provider API key is set and valid.',
        code: {
          language: 'bash',
          content: 'echo $NVIDIA_API_KEY',
        },
      },
      {
        heading: 'Run Crashed',
        body: 'If M31A stops unexpectedly, the run state is preserved. Use the crash recovery interface to resume.',
        code: {
          language: 'text',
          content: 'M31A stopped unexpectedly.\nRun 84F2 preserved.\n\n[ Resume Run ]  [ Inspect State ]',
        },
      },
      {
        heading: 'Permission Denied',
        body: 'If an action is blocked by the capability policy, check the permission configuration in .m31a/config. The policy model is designed to be restrictive by default.',
        callout: { type: 'warning', text: 'Never disable safety policies to work around a block. Investigate why the action was blocked first.' },
      },
    ],
  },
};
