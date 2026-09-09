import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLockBody } from '../../hooks/useLockBody';

export function Lightbox({ items, index, onClose, onStep }) {
  const item = items[index];
  useLockBody(Boolean(item));

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onStep(1);
      if (event.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose, onStep]);

  if (!item) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label={item.alt} className="on-dark fixed inset-0 z-[70] flex flex-col bg-forest-deep/95 text-cream backdrop-blur-sm" onClick={onClose}>
      <div className="flex items-center justify-between p-4 sm:p-6">
        <p className="text-small text-cream/70">
          {index + 1} / {items.length}
        </p>
        <button type="button" onClick={onClose} aria-label="Close" className="grid size-11 place-items-center rounded-pill border border-line-dark hover:border-gold-light hover:text-gold-light">
          <X size={20} />
        </button>
      </div>
      <figure className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16" onClick={(event) => event.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-lift" />
        <figcaption className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-pill bg-forest-deep/80 px-4 py-2 text-small text-cream/85">{item.alt}</figcaption>
        <button type="button" onClick={() => onStep(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-pill bg-cream/90 text-forest hover:bg-white sm:left-6">
          <ChevronLeft size={20} />
        </button>
        <button type="button" onClick={() => onStep(1)} aria-label="Next image" className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-pill bg-cream/90 text-forest hover:bg-white sm:right-6">
          <ChevronRight size={20} />
        </button>
      </figure>
    </div>
  );
}
