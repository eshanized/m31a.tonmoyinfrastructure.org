export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '/#product-demo' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Security', href: '/security' },
  { label: 'Alternatives', href: '/alternatives' },
  { label: 'Docs', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com/eshanized/M31A' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Security', href: '/security' },
    { label: 'Terminal Cockpit', href: '/terminal-coding-agent' },
    { label: 'Linux Confinement', href: '/ai-coding-agent-linux' },
    { label: 'CLI Reference', href: '/cli' },
    { label: 'Download', href: '/download' },
  ],
  comparisons: [
    { label: 'Alternatives Hub', href: '/alternatives' },
    { label: 'Cursor Alternative', href: '/alternatives/cursor' },
    { label: 'Claude Code Comparison', href: '/alternatives/claude-code' },
    { label: 'OpenCode Comparison', href: '/alternatives/opencode' },
    { label: 'Free AI Coding Agent', href: '/free-ai-coding-agent' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Community', href: '/community' },
    { label: 'About', href: '/about' },
    { label: 'Contributing', href: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md' },
  ],
  connect: [
    { label: 'GitHub', href: 'https://github.com/eshanized/M31A' },
    { label: 'Issues', href: 'https://github.com/eshanized/M31A/issues' },
    { label: 'Security Policy', href: 'https://github.com/eshanized/M31A/blob/master/SECURITY.md' },
    { label: 'License', href: 'https://github.com/eshanized/M31A/blob/master/LICENSE' },
  ],
};
