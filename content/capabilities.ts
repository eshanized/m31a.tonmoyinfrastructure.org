import {
  Boxes,
  GitBranch,
  Workflow,
  Bot,
  ShieldCheck,
  CheckCircle2,
  GitCommitHorizontal,
  Lock,
  BrainCog,
  Search,
  History,
  Network,
  type LucideIcon,
} from 'lucide-react';

export interface Capability {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  terminalContent: string;
}

export const capabilities: Capability[] = [
  {
    id: 'repository-intelligence',
    icon: Boxes,
    title: 'Repository Intelligence',
    description:
      'M31A builds a structural understanding of your codebase before changing it. Source code, symbols, imports, calls, tests, APIs, build systems, configuration, documentation, and Git history are all part of the model.',
    terminalContent: `Repository
 ├── packages
 │   ├── core
 │   ├── auth
 │   └── api
 ├── symbols
 │   ├── 1,247 defined
 │   └── 892 exported
 ├── imports
 │   └── 3,401 edges
 ├── calls
 │   └── 2,108 edges
 ├── tests
 │   ├── 342 unit
 │   └── 87 integration
 ├── APIs
 │   └── 24 endpoints
 └── Git history
     └── 4,891 commits`,
  },
  {
    id: 'impact-analysis',
    icon: Network,
    title: 'Impact Analysis',
    description:
      'Before a single file is changed, M31A computes the blast radius of a modification. Impact analysis feeds planning — it determines task ordering, risk mitigation, and verification strategy.',
    terminalContent: `Replace UserRepository interface

Impact: HIGH

14 source files
8 tests
2 interfaces
1 dependency injection module

Risk:
  API compatibility
  generic type inference
  fixture breakage

Feeds into: planning, task graph`,
  },
  {
    id: 'planning',
    icon: Workflow,
    title: 'Planning & TaskGraph',
    description:
      'Work is decomposed into a TaskGraph of dependent, verifiable tasks. Each task carries requirements, acceptance criteria, verification strategy, risk assessment, and checkpoint boundaries.',
    terminalContent: `TaskGraph

T1 ─────┐
        ├── T3 ─── T5
T2 ─────┘
        └── T4

5 tasks · 2 waves · MEDIUM

Wave 1: T1, T2 (parallel)
Wave 2: T3, T4
Final:  T5 (verification)

Checkpoints: after each wave`,
  },
  {
    id: 'autonomous-execution',
    icon: Bot,
    title: 'Autonomous Execution',
    description:
      'Specialized agents execute tasks through explicit contracts. Each role has a defined input, output, and verification obligation. They are not personalities — they are bounded engineering functions.',
    terminalContent: `Supervisor
 ├── Explorer
 ├── Researcher
 ├── Architect
 ├── Planner
 ├── Implementer
 ├── Tester
 ├── Debugger
 ├── Verifier
 ├── Reviewer
 ├── Security Auditor
 ├── Git Specialist
 └── Release Engineer

Contract-bound · Not personalities`,
  },
  {
    id: 'verification',
    icon: CheckCircle2,
    title: 'Verification',
    description:
      '"Done" is not evidence. Every acceptance criterion produces a verification strategy that runs tests, analysis, or commands and collects proof. Model confidence does not equal correctness.',
    terminalContent: `REQ-AUTH-04

Expired access tokens must be rejected.

✓ unit tests        12 passed
✓ integration tests  8 passed
✓ API verification   4 passed
✓ regression scan   23 passed

Result: VERIFIED

Evidence: 47 checks · 0 failures`,
  },
  {
    id: 'git-intelligence',
    icon: GitBranch,
    title: 'Git Intelligence',
    description:
      'Git is a first-class domain. M31A understands branch state, worktrees, diffs, history, and semantic commits. Destructive operations are protected by default.',
    terminalContent: `> Split my current changes into logical commits.

Detected 4 groups.

1  feat(auth): add organization roles
2  feat(auth): enforce role guards
3  test(auth): add authorization matrix
4  docs(auth): document role semantics

[ Accept ]  [ Customize ]`,
  },
  {
    id: 'safe-autonomy',
    icon: Lock,
    title: 'Safe Autonomy',
    description:
      'A capability-based permission model governs every action. Low-risk work moves automatically. Irreversible actions stop for human approval. Repository content is untrusted by default.',
    terminalContent: `Capability Policies

filesystem.write    repository  ALLOW
git.commit          branch      ALLOW
git.push            remote       ASK
git.force_push      remote      DENY
database.migrate    production  CHECKPOINT
shell.exec          any         ASK

Low-risk → automatic
Irreversible → human approval`,
  },
  {
    id: 'engineering-memory',
    icon: BrainCog,
    title: 'Persistent Engineering Memory',
    description:
      'Model context is disposable. Engineering state is durable. M31A preserves project state, runs, requirements, decisions, research, plans, verification, learnings, and handoffs across sessions.',
    terminalContent: `.m31a/

 project
 requirements
 roadmap
 decisions
 research
 plans
 tasks
 runs
 verification
 handoffs
 learnings

State survives context loss.`,
  },
  {
    id: 'context-engineering',
    icon: Network,
    title: 'Context Engineering',
    description:
      'M31A does not dump the entire repository into every request. It assembles focused context from project state, repository structure, the current task, relevant symbols, tests, and Git history.',
    terminalContent: `Context Assembly

 project context
 + repository context
 + current task
 + relevant symbols
 + relevant tests
 + git history
 + decisions
 ↓
 focused agent context

→ better reasoning
→ less noise
→ lower token waste`,
  },
  {
    id: 'code-archaeology',
    icon: History,
    title: 'Code Archaeology',
    description:
      'M31A answers why code exists by combining current state with Git history, blame, tests, dependency graphs, and architecture decisions. It distinguishes evidence from inference.',
    terminalContent: `> Why does AuthorizationService exist?

Introduced: commit a13f9b
Original problem: cross-org access
Current callers: 17
Original rationale: still relevant

Evidence: git blame, commit msg
Inference: caller count

[ Open history ]  [ Open callers ]`,
  },
  {
    id: 'research',
    icon: Search,
    title: 'Research',
    description:
      'M31A researches repository behavior, dependencies, architecture, Git history, package legitimacy, and external technical information. Results clearly distinguish verified facts from inference.',
    terminalContent: `> research replacing the redis client

Research
  architecture      VERIFIED
  existing patterns VERIFIED
  dependency options INFERRED
  compatibility     VERIFIED
  security          VERIFIED
  migration        UNRESOLVED
  recommendation   INFERRED`,
  },
  {
    id: 'failure-recovery',
    icon: ShieldCheck,
    title: 'Failure Recovery',
    description:
      'M31A does not collapse when an agent fails. Failed tasks can be retried, repaired, replanned, or cancelled. Durable checkpoints preserve state across process crashes and provider failures.',
    terminalContent: `RUN FAILED

Task 4 · Persistence integration

Failure: integration test failed
Cause: expected organization_id column missing

Recovery:
  [ Repair ]  [ Retry ]
  [ Replan ] [ Inspect ]
  [ Stop ]

State preserved · Checkpoint intact`,
  },
];
