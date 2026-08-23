export interface ArchitectureLayer {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'interaction',
    name: 'Interaction',
    description: 'How developers communicate with the runtime.',
    responsibilities: ['CLI', 'TUI', 'Commands', 'Checkpoints'],
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    description: 'How M31A understands code and assembles context.',
    responsibilities: ['Models', 'Context assembly', 'Repository intelligence', 'Research'],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'How intent becomes structured, verifiable work.',
    responsibilities: ['Requirements', 'Plans', 'TaskGraph', 'Decisions'],
  },
  {
    id: 'execution',
    name: 'Execution',
    description: 'How agents operate tools and produce changes.',
    responsibilities: ['Agents', 'Tools', 'Shell', 'Git', 'Worktrees', 'MCP'],
  },
  {
    id: 'assurance',
    name: 'Assurance',
    description: 'How M31A proves work is correct and safe.',
    responsibilities: ['Tests', 'Verification', 'Security', 'Review'],
  },
  {
    id: 'memory',
    name: 'Memory',
    description: 'How engineering state persists across sessions.',
    responsibilities: ['Sessions', 'Runs', 'Events', 'Artifacts', 'Learnings'],
  },
];

export interface WorkflowStep {
  id: string;
  label: string;
  description: string;
}

export const engineeringLoop: WorkflowStep[] = [
  { id: 'intent', label: 'Intent', description: 'Natural-language goal from the developer.' },
  { id: 'understanding', label: 'Understanding', description: 'Repository intelligence and codebase analysis.' },
  { id: 'impact', label: 'Impact', description: 'Blast-radius computation for proposed changes.' },
  { id: 'research', label: 'Research', description: 'Technical investigation with evidence classification.' },
  { id: 'plan', label: 'Plan', description: 'TaskGraph with dependencies, waves, and checkpoints.' },
  { id: 'execution', label: 'Execution', description: 'Specialized agents execute tasks through contracts.' },
  { id: 'verification', label: 'Verification', description: 'Acceptance criteria checked with evidence.' },
  { id: 'result', label: 'Durable Result', description: 'Verified work persisted to engineering state.' },
];

export interface ComparisonRow {
  approach: string;
  conversation: 'full' | 'partial' | 'limited';
  durableState: 'full' | 'partial' | 'limited';
  explicitPlanning: 'full' | 'partial' | 'limited';
  verification: 'full' | 'partial' | 'limited';
  repoIntelligence: 'full' | 'partial' | 'limited';
  highlight?: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    approach: 'Generic coding chatbot',
    conversation: 'full',
    durableState: 'limited',
    explicitPlanning: 'limited',
    verification: 'limited',
    repoIntelligence: 'limited',
  },
  {
    approach: 'Traditional coding agent',
    conversation: 'full',
    durableState: 'partial',
    explicitPlanning: 'partial',
    verification: 'partial',
    repoIntelligence: 'full',
  },
  {
    approach: 'Workflow framework',
    conversation: 'partial',
    durableState: 'full',
    explicitPlanning: 'full',
    verification: 'full',
    repoIntelligence: 'limited',
  },
  {
    approach: 'M31A',
    conversation: 'full',
    durableState: 'full',
    explicitPlanning: 'full',
    verification: 'full',
    repoIntelligence: 'full',
    highlight: true,
  },
];

export interface AgentRole {
  name: string;
  responsibility: string;
}

export const agentRoles: AgentRole[] = [
  { name: 'Explorer', responsibility: 'Maps repository structure and symbols' },
  { name: 'Researcher', responsibility: 'Investigates technical questions with evidence' },
  { name: 'Architect', responsibility: 'Designs structural changes and interfaces' },
  { name: 'Planner', responsibility: 'Decomposes work into TaskGraph' },
  { name: 'Implementer', responsibility: 'Writes and modifies code' },
  { name: 'Tester', responsibility: 'Creates and runs tests' },
  { name: 'Debugger', responsibility: 'Diagnoses failures and finds root causes' },
  { name: 'Verifier', responsibility: 'Confirms acceptance criteria with evidence' },
  { name: 'Reviewer', responsibility: 'Reviews changes for quality and correctness' },
  { name: 'Security Auditor', responsibility: 'Checks for vulnerabilities and unsafe patterns' },
  { name: 'Git Specialist', responsibility: 'Manages branches, commits, and history' },
  { name: 'Release Engineer', responsibility: 'Prepares releases and changelogs' },
];

export interface NaturalLanguageWorkflow {
  query: string;
  steps: { phase: string; detail: string }[];
}

export const naturalLanguageWorkflows: NaturalLanguageWorkflow[] = [
  {
    query: 'implement organization-level RBAC',
    steps: [
      { phase: 'Analysis', detail: 'Map auth system, identify affected files' },
      { phase: 'Plan', detail: '5 tasks · 2 waves · role model → guards → persistence' },
      { phase: 'Action', detail: 'Implementer executes tasks in dependency order' },
      { phase: 'Evidence', detail: 'Unit + integration tests verify role enforcement' },
    ],
  },
  {
    query: 'explain the authentication flow',
    steps: [
      { phase: 'Analysis', detail: 'Trace auth pipeline from middleware to tokens' },
      { phase: 'Research', detail: 'Cross-reference with Git history and docs' },
      { phase: 'Action', detail: 'Produce annotated explanation with evidence' },
      { phase: 'Evidence', detail: 'Each claim linked to source and commit' },
    ],
  },
  {
    query: 'what breaks if I change this interface?',
    steps: [
      { phase: 'Analysis', detail: 'Compute impact across dependency graph' },
      { phase: 'Research', detail: 'Identify callers, tests, and contract obligations' },
      { phase: 'Action', detail: 'Report blast radius with risk assessment' },
      { phase: 'Evidence', detail: 'File list, test coverage, and API surface' },
    ],
  },
  {
    query: 'find the regression introduced after commit X',
    steps: [
      { phase: 'Analysis', detail: 'Diff commits, isolate changed behavior' },
      { phase: 'Research', detail: 'Run tests at each commit, trace failure' },
      { phase: 'Action', detail: 'Identify root cause commit and responsible change' },
      { phase: 'Evidence', detail: 'Failing test output and commit diff' },
    ],
  },
  {
    query: 'review my current branch',
    steps: [
      { phase: 'Analysis', detail: 'Parse branch diff against base' },
      { phase: 'Research', detail: 'Check conventions, test coverage, security' },
      { phase: 'Action', detail: 'Produce review with issues and suggestions' },
      { phase: 'Evidence', detail: 'Each finding linked to specific code lines' },
    ],
  },
  {
    query: 'prepare a release',
    steps: [
      { phase: 'Analysis', detail: 'Collect commits since last release tag' },
      { phase: 'Research', detail: 'Classify changes: feat, fix, break, docs' },
      { phase: 'Action', detail: 'Generate changelog and version bump' },
      { phase: 'Evidence', detail: 'Semantic commit log and release notes' },
    ],
  },
];

export interface TuiView {
  id: string;
  name: string;
  description: string;
  content: string;
}

export const tuiViews: TuiView[] = [
  {
    id: 'plan',
    name: 'Plan',
    description: 'Review the TaskGraph before execution.',
    content: `PLAN · Run 84F2 · feature/rbac

 5 tasks · 2 waves · MEDIUM

 Wave 1
   T1  Role model           ●done
   T2  Authorization service ●done

 Wave 2
   T3  Route guards         ●running
   T4  Persistence          ○pending

 Final
   T5  Verification         ○pending

 Risk: API compatibility
 Checkpoint: after each wave

 [ Run ]  [ Inspect ]  [ Edit ]`,
  },
  {
    id: 'run',
    name: 'Run',
    description: 'Live execution dashboard.',
    content: `M31A · RUN 84F2 · feature/rbac

PLAN
  5 tasks · 2 waves · MEDIUM

EXECUTION
  ✓ Role model
  ✓ Authorization service
  ● Route guards
  ○ Persistence
  ○ Verification

CURRENT
  Implementer · edit_file · 3 files · 00:42

VERIFICATION
  0/5 complete

> steer the run or inspect details...`,
  },
  {
    id: 'verify',
    name: 'Verify',
    description: 'Acceptance criteria and evidence.',
    content: `VERIFICATION · Run 84F2

 REQ-AUTH-01  Roles can be assigned      ✓ VERIFIED
 REQ-AUTH-02  Roles can be checked       ✓ VERIFIED
 REQ-AUTH-03  Permission inheritance     ✓ VERIFIED
 REQ-AUTH-04  Expired tokens rejected    ✓ VERIFIED
 REQ-AUTH-05  Cross-org access blocked   ● RUNNING

 Evidence: 47 checks · 0 failures
 Coverage: 94.2%

 [ Export report ]`,
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Branch state, diffs, and history.',
    content: `GIT · feature/rbac

 Branch:    feature/rbac
 Base:      main
 Status:    3 ahead · 0 behind
 Worktree:  .m31a/worktrees/rbac

 Recent
   a13f9b  feat(auth): enforce role guards
   8c2e1d  feat(auth): add organization roles
   2f4a8b  test(auth): add authorization matrix

 [ Commit ]  [ Split ]  [ Diff ]`,
  },
  {
    id: 'impact',
    name: 'Impact',
    description: 'Blast-radius analysis for a proposed change.',
    content: `IMPACT ANALYSIS

 Replace UserRepository interface

 Severity: HIGH

 14 source files
  8 tests
  2 interfaces
  1 DI module

 Risk
   API compatibility
   generic type inference
   fixture breakage

 Recommendation: split into
   T1 (interface) → T2 (impl) → T3 (tests)`,
  },
  {
    id: 'checkpoint',
    name: 'Checkpoint',
    description: 'Recovery state after interruption.',
    content: `M31A stopped unexpectedly.

 Run 84F2 preserved.

 Last checkpoint:
   Task 3 · Route guards

 State
   2 tasks completed
   1 task running
   2 tasks pending

 [ Resume Run ]
 [ Inspect State ]
 [ Replan ]`,
  },
];

export interface DocNavItem {
  slug: string;
  title: string;
  description: string;
}

export interface DocNavSection {
  section: string;
  items: DocNavItem[];
}

export const docsNav: DocNavSection[] = [
  {
    section: 'Getting Started',
    items: [
      { slug: 'introduction', title: 'Introduction', description: 'What M31A is and why it exists.' },
      { slug: 'installation', title: 'Installation', description: 'Clone, build, and run M31A.' },
      { slug: 'quickstart', title: 'Quickstart', description: 'From zero to verified work in three steps.' },
    ],
  },
  {
    section: 'Concepts',
    items: [
      { slug: 'engineering-runs', title: 'Engineering Runs', description: 'How intent becomes a resumable run.' },
      { slug: 'taskgraph', title: 'TaskGraph', description: 'Dependency-ordered, verifiable tasks.' },
      { slug: 'agents', title: 'Agents', description: 'Contract-bound specialized roles.' },
      { slug: 'verification', title: 'Verification', description: 'Evidence over confidence.' },
      { slug: 'permissions', title: 'Permissions', description: 'Capability-based safety model.' },
      { slug: 'repository-intelligence', title: 'Repository Intelligence', description: 'Structural codebase understanding.' },
    ],
  },
  {
    section: 'Reference',
    items: [
      { slug: 'configuration', title: 'Configuration', description: 'Runtime, provider, and project settings.' },
      { slug: 'providers', title: 'Providers', description: 'Model provider setup and abstraction.' },
      { slug: 'tools', title: 'Tools', description: 'Built-in tools and capabilities.' },
      { slug: 'git-workflows', title: 'Git Workflows', description: 'Branches, worktrees, semantic commits.' },
      { slug: 'tui', title: 'TUI', description: 'Terminal interface surfaces and navigation.' },
      { slug: 'security', title: 'Security', description: 'Threat model and defenses.' },
      { slug: 'extensions', title: 'Extensions', description: 'Custom agents and tools.' },
      { slug: 'mcp', title: 'MCP', description: 'Model Context Protocol integration.' },
      { slug: 'architecture', title: 'Architecture', description: 'System layers and data flow.' },
      { slug: 'troubleshooting', title: 'Troubleshooting', description: 'Common issues and recovery.' },
    ],
  },
];

export interface ChangelogEntry {
  version: string;
  status: string;
  highlights: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    version: 'v0.1.0',
    status: 'Building',
    highlights: [
      'Core agent runtime with contract-bound specialized agents',
      'TaskGraph execution with dependency-ordered scheduling',
      'Provider abstraction targeting NVIDIA Build (nemotron-3-ultra-550b-a55b)',
      'Capability-based permission model with allow/ask/deny/checkpoint',
      'Git branch and worktree management with protected destructive operations',
      'Engineering state persistence in .m31a/ directory',
      'Core TUI surfaces: Chat, Plan, Run, Verify, Git',
    ],
  },
];

export const securityExamples = [
  {
    title: 'Path Containment',
    content: `REQUEST
  write ../../etc/passwd

M31A POLICY
  [x] path outside workspace
  [x] write capability denied

ACTION BLOCKED`,
  },
  {
    title: 'Untrusted Content',
    content: `Repository content is untrusted.

README instructions
  ≠
M31A system authority

Instructions in files do not
elevate capabilities.`,
  },
  {
    title: 'Irreversible Action',
    content: `REQUEST
  git push --force origin main

M31A POLICY
  [x] force_push capability
  [x] remote scope: ASK

⏸  Waiting for approval...

  [ Allow ]  [ Deny ]`,
  },
];
