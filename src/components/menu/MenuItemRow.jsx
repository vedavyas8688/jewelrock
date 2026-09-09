import { formatPrice } from '../../lib/format';
import { DietDot } from '../ui/DietDot';
import { cx } from '../../lib/cx';

export function MenuItemRow({ item, diet, showDiet = true }) {
  const resolvedDiet = item.diet || diet;

  return (
    <li className="py-2.5">
      <div className="flex items-baseline gap-3">
        {showDiet ? <DietDot diet={resolvedDiet} size="sm" className="translate-y-px" /> : null}
        <span className={cx('text-body text-ink', showDiet ? '' : 'font-medium')}>{item.name}</span>
        <span className="price-leader" aria-hidden="true" />
        <span className={cx('shrink-0 font-medium tabular-nums', item.price == null ? 'text-caption text-muted' : 'text-gold')}>
          {formatPrice(item.price)}
        </span>
      </div>
      {item.note ? <p className={cx('mt-0.5 text-small text-muted', showDiet && 'pl-6')}>{item.note}</p> : null}
    </li>
  );
}
