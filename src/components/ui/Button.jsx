import { ArrowRight } from 'lucide-react';
import { cx } from '../../lib/cx';

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-pill font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 ease-out-soft active:translate-y-px disabled:pointer-events-none disabled:opacity-50';

const sizes = {
  sm: 'min-h-10 px-4 text-small',
  md: 'min-h-12 px-6 text-body',
  lg: 'min-h-14 px-7 text-body',
};

const variants = {
  primary: 'bg-forest text-white hover:bg-forest-soft',
  secondary: 'border border-forest/30 text-forest hover:border-forest hover:bg-forest/5',
  ghost: 'text-forest hover:bg-forest/8',
  link: 'min-h-0 rounded-none px-0 text-forest underline-offset-4 hover:underline',
};

const lightVariants = {
  primary: 'bg-cream text-forest hover:bg-white',
  secondary: 'border border-white/35 text-white hover:border-white hover:bg-white/10',
  ghost: 'text-white hover:bg-white/10',
  link: 'min-h-0 rounded-none px-0 text-white underline-offset-4 hover:underline',
};

export function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  light = false,
  arrow = false,
  className,
  children,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const styles = light ? lightVariants : variants;
  const classes = cx(base, sizes[size], styles[variant], className);

  return (
    <Tag href={href} className={classes} {...(Tag === 'button' && !rest.type ? { type: 'button' } : {})} {...rest}>
      {children}
      {arrow ? <ArrowRight size={size === 'sm' ? 15 : 17} strokeWidth={2} aria-hidden="true" /> : null}
    </Tag>
  );
}
