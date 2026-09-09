import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { cx } from '../../lib/cx';

/**
 * Accessible accordion. items: [{ q, a }]. One open at a time by default.
 */
export function Accordion({ items, defaultOpen = 0, className }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={cx('divide-y divide-line border-y border-line', className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.q}>
            <h3 className="font-body font-normal">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-display-sm font-display text-forest hover:text-forest-soft"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={cx(
                    'grid size-9 shrink-0 place-items-center rounded-pill border border-line text-forest transition-[transform,background-color,color] duration-200 ease-out-soft',
                    isOpen && 'rotate-45 bg-forest text-cream',
                  )}
                >
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
              hidden={!isOpen && undefined}
            >
              <div>
                <p className="max-w-prose pb-6 text-body text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
