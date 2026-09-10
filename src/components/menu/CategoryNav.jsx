import { useEffect, useRef } from 'react';
import { cx } from '../../lib/cx';

/** Sticky horizontal category chips; active chip scrolls into view. */
export function CategoryNav({ categories, activeId, onSelect }) {
  const listRef = useRef(null);

  useEffect(() => {
    const active = listRef.current?.querySelector('[aria-current="true"]');
    if (!active || !listRef.current) return;
    listRef.current.scrollTo({
      left: active.offsetLeft - (listRef.current.clientWidth - active.clientWidth) / 2,
      behavior: 'smooth',
    });
  }, [activeId]);

  return (
    <nav aria-label="Menu categories" className="sticky top-header z-30 -mx-[var(--spacing-gutter)] border-b border-line bg-cream/95 backdrop-blur-md">
      <ul ref={listRef} className="hide-scrollbar flex gap-2 overflow-x-auto px-[var(--spacing-gutter)] py-3">
        {categories.map((category) => {
          const active = category.id === activeId;
          return (
            <li key={category.id} className="shrink-0">
              <button
                type="button"
                aria-current={active || undefined}
                onClick={() => onSelect(category.id)}
                className={cx(
                  'inline-flex min-h-9 items-center rounded-pill border px-3.5 text-small transition-colors duration-150',
                  active ? 'border-forest bg-forest text-cream' : 'border-line text-ink/80 hover:border-forest hover:text-forest',
                )}
              >
                {category.title}
                {category.subtitle ? <span className="ml-1.5 hidden text-caption opacity-70 sm:inline">· {category.subtitle}</span> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
