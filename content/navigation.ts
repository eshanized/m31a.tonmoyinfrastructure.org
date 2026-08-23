export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#verification', label: 'Verification' },
  { href: '/#architecture', label: 'Architecture' },
  { href: '/docs', label: 'Docs' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/contributing', label: 'Contributing' },
];

export const footerLinks = {
  product: [
    { href: '/docs', label: 'Documentation' },
    { href: '/docs/architecture', label: 'Architecture' },
    { href: '/docs/security', label: 'Security' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/changelog', label: 'Changelog' },
  ],
  community: [
    { href: 'https://github.com/eshanized/M31A', label: 'GitHub Repository' },
    { href: 'https://github.com/eshanized/M31A/issues', label: 'Issue Tracker' },
    { href: 'https://github.com/eshanized/M31A/pulls', label: 'Pull Requests' },
    { href: '/contributing', label: 'Contributing' },
  ],
  resources: [
    { href: '/docs/quickstart', label: 'Quickstart' },
    { href: '/docs/installation', label: 'Installation' },
    { href: '/docs/concepts', label: 'Concepts' },
    { href: '/docs/tui', label: 'TUI Reference' },
  ],
};

export const GITLAB_URL = 'https://github.com/eshanized/M31A';
export const GITLAB_ISSUES_URL = 'https://github.com/eshanized/M31A/issues';
export const GITLAB_MR_URL = 'https://github.com/eshanized/M31A/pulls';
