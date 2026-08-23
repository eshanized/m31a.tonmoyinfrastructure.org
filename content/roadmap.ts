export type RoadmapStatus = 'now' | 'building' | 'planned' | 'exploring';

export interface RoadmapItem {
  title: string;
  description: string;
  status: RoadmapStatus;
}

export interface RoadmapCategory {
  category: string;
  items: RoadmapItem[];
}

export const roadmapCategories: RoadmapCategory[] = [
  {
    category: 'Runtime Foundation',
    items: [
      {
        title: 'Agent runtime',
        description: 'Core execution engine with contract-bound specialized agents.',
        status: 'building',
      },
      {
        title: 'TaskGraph execution',
        description: 'Dependency-ordered task scheduling with checkpoint boundaries.',
        status: 'building',
      },
      {
        title: 'Provider abstraction',
        description: 'Provider-neutral model interface. v1 targets NVIDIA Build.',
        status: 'building',
      },
      {
        title: 'Crash recovery',
        description: 'Durable checkpoints so runs survive process and provider failures.',
        status: 'planned',
      },
    ],
  },
  {
    category: 'Repository Intelligence',
    items: [
      {
        title: 'Symbol & dependency graph',
        description: 'Structural understanding of source code, imports, and call relationships.',
        status: 'building',
      },
      {
        title: 'Impact analysis',
        description: 'Blast-radius computation that feeds planning and risk assessment.',
        status: 'planned',
      },
      {
        title: 'Code archaeology',
        description: 'Why-code-exists reasoning from Git history, blame, and decision records.',
        status: 'planned',
      },
    ],
  },
  {
    category: 'Verification & Assurance',
    items: [
      {
        title: 'Acceptance criteria verification',
        description: 'Each task carries verification strategies that produce evidence.',
        status: 'building',
      },
      {
        title: 'Regression analysis',
        description: 'Semantic regression detection across commits and branches.',
        status: 'planned',
      },
      {
        title: 'Security audit agent',
        description: 'Automated security review of generated changes before merge.',
        status: 'planned',
      },
    ],
  },
  {
    category: 'Git Intelligence',
    items: [
      {
        title: 'Branch & worktree management',
        description: 'First-class Git operations with worktree isolation per run.',
        status: 'building',
      },
      {
        title: 'Semantic commit splitting',
        description: 'Automatic decomposition of changes into logical commits.',
        status: 'planned',
      },
      {
        title: 'Protected destructive operations',
        description: 'Force push, history rewrite, and deletion require explicit approval.',
        status: 'building',
      },
    ],
  },
  {
    category: 'TUI',
    items: [
      {
        title: 'Core TUI surfaces',
        description: 'Chat, Plan, Run, Verify, Intelligence, Git, History, Project, Settings, Diagnostics.',
        status: 'building',
      },
      {
        title: 'Context panel',
        description: 'Live view of assembled agent context, symbols, and evidence.',
        status: 'planned',
      },
      {
        title: 'Command bar',
        description: 'Natural-language command entry with steering and inspection.',
        status: 'building',
      },
    ],
  },
  {
    category: 'Security',
    items: [
      {
        title: 'Capability policies',
        description: 'Per-action, per-scope permission model with allow/ask/deny/checkpoint.',
        status: 'building',
      },
      {
        title: 'Path containment',
        description: 'Filesystem writes are confined to the workspace boundary.',
        status: 'building',
      },
      {
        title: 'Prompt injection defenses',
        description: 'Untrusted repository content is isolated from system authority.',
        status: 'planned',
      },
    ],
  },
  {
    category: 'Extensions & Future',
    items: [
      {
        title: 'MCP integration',
        description: 'Model Context Protocol support for external tool connectivity.',
        status: 'exploring',
      },
      {
        title: 'Custom agents',
        description: 'User-defined agent contracts for domain-specific workflows.',
        status: 'exploring',
      },
      {
        title: 'Team workflows',
        description: 'Shared engineering state and handoffs across contributors.',
        status: 'exploring',
      },
    ],
  },
];

export const statusConfig: Record<
  RoadmapStatus,
  { label: string; className: string; dotClass: string }
> = {
  now: {
    label: 'Now',
    className: 'border-primary/30 bg-primary/10 text-primary',
    dotClass: 'bg-primary',
  },
  building: {
    label: 'Building',
    className: 'border-info/30 bg-info/10 text-info',
    dotClass: 'bg-info',
  },
  planned: {
    label: 'Planned',
    className: 'border-warning/30 bg-warning/10 text-warning',
    dotClass: 'bg-warning',
  },
  exploring: {
    label: 'Exploring',
    className: 'border-muted-foreground/30 bg-muted/40 text-muted-foreground',
    dotClass: 'bg-muted-foreground',
  },
};
