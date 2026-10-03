export interface NavItem {
  index: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { index: '01', label: 'OVERVIEW', href: '/#overview' },
  { index: '02', label: 'RUNTIME', href: '/#runtime' },
  { index: '03', label: 'ARCHITECTURE', href: '/architecture' },
  { index: '04', label: 'SECURITY', href: '/security' },
  { index: '05', label: 'DOCS', href: '/docs' },
  { index: '06', label: 'CLI', href: '/cli' },
];

export const NAV_MORE: NavItem[] = [
  { index: '07', label: 'CHANGELOG', href: '/changelog' },
  { index: '08', label: 'ROADMAP', href: '/roadmap' },
  { index: '09', label: 'FEATURES', href: '/features' },
  { index: '10', label: 'DOWNLOAD', href: '/download' },
];

export const FOOTER_LINKS = {
  runtime: [
    { label: 'Overview', href: '/#overview' },
    { label: 'Runtime monitor', href: '/#runtime' },
    { label: 'Architecture L0–L9', href: '/architecture' },
    { label: 'Policy engine', href: '/#policy' },
    { label: 'Verification', href: '/#verification' },
  ],
  assurance: [
    { label: 'Security model', href: '/security' },
    { label: 'CLI reference', href: '/cli' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  source: [
    { label: 'GitHub repository', href: 'https://github.com/eshanized/M31A' },
    { label: 'Issue tracker', href: 'https://github.com/eshanized/M31A/issues' },
    { label: 'Contributing guide', href: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md' },
    { label: 'Code of conduct', href: 'https://github.com/eshanized/M31A/blob/master/CODE_OF_CONDUCT.md' },
    { label: 'MIT / Apache-2.0 license', href: 'https://github.com/eshanized/M31A/blob/master/LICENSE' },
    { label: 'Security policy', href: 'https://github.com/eshanized/M31A/blob/master/SECURITY.md' },
  ],
};
