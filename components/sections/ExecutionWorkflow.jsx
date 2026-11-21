import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import AgentWorkflow from '@/components/demonstrations/AgentWorkflow';

export default function ExecutionWorkflow() {
  return (
    <Section id="workflow" spacing="default" background="soft">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Lifecycle Pipeline
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          From intent to verified execution.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          M31A executes an unbroken, verifiable multi-turn engineering loop — from symbol graph resolution to containerized compilation checks.
        </p>
      </div>

      <AgentWorkflow />
    </Section>
  );
}
