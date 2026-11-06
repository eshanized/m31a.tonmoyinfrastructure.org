import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import AgentWorkflow from '@/components/demonstrations/AgentWorkflow';

export default function ExecutionWorkflow() {
  return (
    <Section id="workflow" spacing="spacious" background="soft">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="accent" className="mb-4">
          Lifecycle Pipeline
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          From idea to verified implementation.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          Unlike conversational chatbots that dump disconnected snippets into a chat window, M31A executes an unbroken, verifiable multi-turn engineering loop.
        </p>
      </div>

      <AgentWorkflow />
    </Section>
  );
}
