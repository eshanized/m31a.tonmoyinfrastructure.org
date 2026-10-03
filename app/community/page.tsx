import { PRODUCT } from '@/lib/m31a/product';

export default function CommunityPage() {
  const rows = [
    ['GITHUB REPOSITORY', PRODUCT.repositoryUrl, 'Source, releases, CI evidence'],
    ['ISSUE TRACKER', PRODUCT.issuesUrl, 'Bugs, proposals, qualification reports'],
    ['DISCUSSIONS', PRODUCT.discussionsUrl, 'Design questions, usage, provider parity'],
    ['SECURITY ADVISORIES', PRODUCT.securityReportUrl, 'Private vulnerability reports — preferred route'],
    ['CONTRIBUTING', PRODUCT.contributingUrl, 'Mandatory release gates + testing pipelines'],
  ];
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[12] COMMUNITY — CHANNELS</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            Work in the open.
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        <ul className="overflow-hidden rounded-[3px] border border-[#2A2721]">
          {rows.map(([k, href, d]) => (
            <li key={k} className="border-b border-[#2A2721]/60 bg-[#141311] last:border-0 hover:bg-[#1B1A17]">
              <a href={href} target="_blank" rel="noopener noreferrer" className="block px-4 py-3.5">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[13px] font-bold tracking-wider text-[#ECE7DC]">{k}</span>
                  <span className="font-mono text-[12px] text-[#FF6B4A]">↗</span>
                </span>
                <span className="mt-0.5 block text-[13px] text-[#A8A198]">{d}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
