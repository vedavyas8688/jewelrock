import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
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
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-[clamp(1.35rem,6.3vw,1.85rem)] leading-tight text-forest hover:text-forest-soft sm:gap-6 sm:py-5 sm:text-display-sm"
              >
                <span className="min-w-0">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={cx(
                    'grid size-9 shrink-0 place-items-center rounded-pill border border-line text-forest transition-[background-color,color,border-color] duration-200 ease-out-soft',
                    isOpen && 'border-forest bg-forest text-cream',
                  )}
                >
                  {isOpen ? <Minus size={17} /> : <Plus size={18} />}
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
