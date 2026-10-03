import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageSquare, ShieldAlert, GitPullRequest, HelpCircle } from 'lucide-react';
import { GithubMark } from '@/components/site/logo';
import { Container } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';

export default function CommunityPage() {
  const channels = [
    {
      title: 'GitHub Repository',
      url: PRODUCT.repositoryUrl,
      description: 'Source code, CI release qualification matrices, and published standalone artifacts.',
      icon: GithubMark,
    },
    {
      title: 'Issue Tracker',
      url: PRODUCT.issuesUrl,
      description: 'Bug reports, architectural change proposals, and platform qualification diagnostics.',
      icon: HelpCircle,
    },
    {
      title: 'Discussions & Design Forums',
      url: PRODUCT.discussionsUrl,
      description: 'Design feedback, role state machine experiments, and provider qualification discussions.',
      icon: MessageSquare,
    },
    {
      title: 'Security Vulnerability Reporting',
      url: PRODUCT.securityReportUrl,
      description: 'Confidential security advisories and coordinated vulnerability disclosure channels.',
      icon: ShieldAlert,
    },
    {
      title: 'Contributing Guidelines',
      url: PRODUCT.contributingUrl,
      description: 'Mandatory verification gates, coding conventions, and PR validation suites.',
      icon: GitPullRequest,
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            COMMUNITY &amp; COLLABORATION
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            Work in the Open.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            M31A is open-source software dual-licensed under MIT and Apache-2.0. Explore our code,
            participate in architectural discussions, and contribute to the runtime.
          </p>
        </Container>
      </div>

      <Container className="max-w-4xl">
        <div className="space-y-4">
          {channels.map((ch) => (
            <a
              key={ch.title}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#E8523F]/50 transition-all flex items-start justify-between gap-4 block"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#18181B] text-[#E8523F] shrink-0 group-hover:scale-105 transition-transform">
                  <ch.icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#F0EDE8] group-hover:text-[#E8523F] transition-colors">
                    {ch.title}
                  </h2>
                  <p className="text-sm text-[#A3A09B] leading-relaxed mt-1">
                    {ch.description}
                  </p>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-[#6B6965] group-hover:text-[#E8523F] transition-colors shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
