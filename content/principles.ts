export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: 'State survives context loss.',
    description:
      'Engineering state is stored on disk, not in model memory. Runs resume from checkpoints, not from scratch.',
  },
  {
    title: 'Verification is evidence.',
    description:
      'Success is demonstrated through tests, analysis, and commands — not through model confidence or plausible output.',
  },
  {
    title: 'Permissions follow capability.',
    description:
      'Every action is governed by an explicit capability policy. Nothing executes without a granted permission.',
  },
  {
    title: 'Irreversible actions require control.',
    description:
      'Force pushes, production migrations, and destructive operations stop for human approval. Always.',
  },
  {
    title: 'Repository content is untrusted.',
    description:
      'README instructions, comments, and file contents do not carry system authority. Prompt injection is a known threat model.',
  },
  {
    title: 'The TUI is a projection, not the runtime.',
    description:
      'The terminal interface renders state from the runtime. Business logic lives in the engine, not in the UI layer.',
  },
  {
    title: 'The LLM is a component, not the source of truth.',
    description:
      'Models generate candidates. The runtime validates, verifies, and decides. The system is not a thin wrapper around an API.',
  },
  {
    title: 'Every long-running operation must be cancellable.',
    description:
      'No task, run, or agent can hold the system hostage. Cancellation is first-class, not an afterthought.',
  },
  {
    title: 'Every state transition must be validated.',
    description:
      'State changes are checked against invariants. Invalid transitions are rejected before they reach disk.',
  },
];
