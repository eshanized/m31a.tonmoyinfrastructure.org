import Container from './Container';

export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  containerSize = 'default',
  spacing = 'default',
  background = 'transparent',
}) {
  const spacingClasses = {
    none: 'py-0',
    compact: 'py-12 md:py-16',
    default: 'py-16 md:py-24',
    spacious: 'py-20 md:py-32',
  };

  const bgClasses = {
    transparent: 'bg-transparent',
    surface: 'bg-surface',
    soft: 'bg-background-soft border-y border-border',
    subtle: 'bg-surface-subtle',
    dark: 'bg-background-dark text-foreground-inverse border-y border-border-dark',
  };

  return (
    <section
      id={id}
      className={`relative w-full ${spacingClasses[spacing] || spacingClasses.default} ${bgClasses[background] || bgClasses.transparent} ${className}`}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
