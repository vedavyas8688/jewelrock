import { home } from '../../data/content';
import { Marquee } from '../ui/Marquee';

/** Thin dark ticker strip under the hero — dish names on a loop. */
export function Ticker() {
  return (
    <div className="on-dark border-y border-line-dark bg-forest-deep py-4 text-cream">
      <Marquee items={home.ticker.items} speed={45} itemClassName="font-display text-display-sm text-cream/90" separatorClassName="text-gold-light text-[10px]" />
    </div>
  );
}
