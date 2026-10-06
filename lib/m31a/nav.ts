export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '/#product-demo' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Security', href: '/security' },
  { label: 'Docs', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com/eshanized/M31A' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Security', href: '/security' },
    { label: 'CLI', href: '/cli' },
    { label: 'Download', href: '/download' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Contributing', href: 'https://github.com/eshanized/M31A/blob/master/CONTRIBUTING.md' },
  ],
  connect: [
    { label: 'GitHub', href: 'https://github.com/eshanized/M31A' },
    { label: 'Issues', href: 'https://github.com/eshanized/M31A/issues' },
    { label: 'Security Policy', href: 'https://github.com/eshanized/M31A/blob/master/SECURITY.md' },
    { label: 'License', href: 'https://github.com/eshanized/M31A/blob/master/LICENSE' },
  ],
};
