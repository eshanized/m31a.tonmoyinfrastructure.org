const isExport = process.env.NEXT_EXPORT === 'true' || process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isExport ? { output: 'export' } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/docs',
        destination: 'https://github.com/eshanized/M31A/tree/main/docs',
        permanent: false,
      },
      {
        source: '/docs/:path*',
        destination: 'https://github.com/eshanized/M31A/tree/main/docs',
        permanent: false,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
