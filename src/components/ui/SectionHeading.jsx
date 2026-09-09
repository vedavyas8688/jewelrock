import { cx } from '../../lib/cx';
import { Eyebrow } from './Eyebrow';

/**
 * Section heading block: optional eyebrow, title, lede, optional action slot.
 * align: 'left' | 'center' | 'split' (title left, action right on desktop)
 */
export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  align = 'left',
  light = false,
  as: Tag = 'h2',
  size = 'lg',
  className,
}) {
  const titleSize = size === 'xl' ? 'text-display-xl' : size === 'md' ? 'text-display-md' : 'text-display-lg';
  const isSplit = align === 'split';

  return (
    <div
      className={cx(
        isSplit && 'flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      <div className={cx(align === 'center' && 'flex flex-col items-center', 'max-w-2xl')}>
        {eyebrow ? <Eyebrow light={light} className="mb-4">{eyebrow}</Eyebrow> : null}
        <Tag className={cx(titleSize, light && 'text-cream')}>{title}</Tag>
        {text ? (
          <p className={cx('mt-4 max-w-prose text-lede', light ? 'text-cream/75' : 'text-muted')}>{text}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
