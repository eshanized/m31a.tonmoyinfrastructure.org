export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = false,
  as: Component = 'div',
  ...props
}) {
  const baseClasses =
    'rounded-xl relative overflow-hidden transition-colors duration-150';

  const variantClasses = {
    default: 'bg-surface border border-border',
    soft: 'bg-surface-muted/50 border border-border',
    flat: 'bg-surface-muted border border-border-subtle',
    dark: 'bg-surface-card border border-border text-foreground',
    terminal: 'bg-[#0d0f14] border border-[#222836] text-gray-200',
  };

  const hoverClasses = hover
    ? 'hover:border-border-strong'
    : '';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
