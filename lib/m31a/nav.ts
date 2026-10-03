export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Security', href: '/security' },
  { label: 'Docs', href: '/docs' },
  { label: 'CLI', href: '/cli' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Roadmap', href: '/roadmap' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Security', href: '/security' },
    { label: 'Docs', href: '/docs' },
    { label: 'Download', href: '/download' },
    { label: 'CLI Reference', href: '/cli' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  community: [
    { label: 'GitHub Repository', href: 'https://github.com/eshanized/M31A' },
    { label: 'Issue Tracker', href: 'https://github.com/eshanized/M31A/issues' },
    { label: 'Discussions', href: 'https://github.com/eshanized/M31A/discussions' },
    { label: 'Security Advisories', href: 'https://github.com/eshanized/M31A/security/advisories/new' },
    { label: 'Contributing Guide', href: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md' },
    { label: 'Community Overview', href: '/community' },
    { label: 'About M31A', href: '/about' },
  ],
  legal: [
    { label: 'MIT / Apache-2.0 License', href: 'https://github.com/eshanized/M31A/blob/master/LICENSE' },
    { label: 'Security Policy', href: 'https://github.com/eshanized/M31A/blob/master/SECURITY.md' },
    { label: 'Code of Conduct', href: 'https://github.com/eshanized/M31A/blob/master/CODE_OF_CONDUCT.md' },
  ],
};
