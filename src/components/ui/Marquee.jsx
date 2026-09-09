import { cx } from '../../lib/cx';

/**
 * Infinite horizontal ticker. Content is duplicated for a seamless loop;
 * pauses on hover. speed = seconds per full loop.
 */
export function Marquee({ items, separator = '✦', speed = 40, className, itemClassName, separatorClassName }) {
  const row = (ariaHidden) => (
    <ul className="marquee-track flex shrink-0 items-center" aria-hidden={ariaHidden || undefined} style={{ '--marquee-speed': `${speed}s` }}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-center">
          <span className={cx('whitespace-nowrap px-6', itemClassName)}>{item}</span>
          <span className={cx('text-gold', separatorClassName)} aria-hidden="true">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cx('marquee flex overflow-hidden', className)}>
      {row(false)}
      {row(true)}
    </div>
  );
}
