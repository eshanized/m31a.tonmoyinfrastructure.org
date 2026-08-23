import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { SectionWrapper } from '@/components/site/section-header';
import { CodeBlock } from '@/components/site/code-block';
import { Button } from '@/components/ui/button';
import { Github, Bug, GitPullRequest, FileText, Terminal } from 'lucide-react';
import { GITLAB_URL, GITLAB_ISSUES_URL, GITLAB_MR_URL } from '@/content/navigation';

export const metadata: Metadata = {
  title: 'Contributing',
  description: 'How to contribute to the M31A open-source project.',
};

export default function ContributingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SectionWrapper>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">Contributing</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              M31A is an open-source engineering project. Contributions are welcome.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="mb-3 text-xl font-semibold">Getting Started</h2>
                <p className="text-sm text-muted-foreground">
                  Fork the repository, create a feature branch, and open a merge request. For
                  significant changes, open an issue first to discuss the approach.
                </p>
                <div className="mt-4">
                  <CodeBlock
                    language="bash"
                    code={`git clone https://github.com/eshanized/M31A.git\ncd M31A\ngit checkout -b feature/your-feature\n\ngo build ./cmd/m31a\n# make your changes\ngit push origin feature/your-feature\n# open a pull request on GitHub`}
                  />
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-semibold">Ways to Contribute</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Bug, title: 'Report Issues', desc: 'Found a bug? Open an issue with reproduction steps.', href: GITLAB_ISSUES_URL },
                    { icon: GitPullRequest, title: 'Pull Requests', desc: 'Submit code changes through pull requests.', href: GITLAB_MR_URL },
                    { icon: FileText, title: 'Improve Docs', desc: 'Documentation improvements are always welcome.', href: '/docs' },
                    { icon: Terminal, title: 'Feature Ideas', desc: 'Have an idea? Open an issue with the "proposal" label.', href: GITLAB_ISSUES_URL },
                  ].map(({ icon: Icon, title, desc, href }) => (
                    <a
                      key={title}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group rounded-lg border border-border bg-card/40 p-5 transition-all hover:border-primary/30"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="mt-3 font-sans text-sm font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold">Engineering Principles</h2>
                <p className="text-sm text-muted-foreground">
                  When contributing, keep these principles in mind:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'State survives context loss — every state transition must be durable.',
                    'Verification is evidence — changes should include or update tests.',
                    'Repository content is untrusted — never trust input without validation.',
                    'The LLM is a component, not the source of truth.',
                    'Every long-running operation must be cancellable.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-background/50 p-6 text-center">
                <h2 className="text-lg font-semibold">Ready to contribute?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  View the repository and start contributing on GitHub.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Button asChild>
                    <Link href={GITLAB_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={GITLAB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
                      Browse Issues
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
