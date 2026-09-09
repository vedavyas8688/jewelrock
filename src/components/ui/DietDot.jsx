import { cx } from '../../lib/cx';

const styles = {
  v: { className: 'border-veg', dot: 'bg-veg', label: 'Vegetarian' },
  nv: { className: 'border-nonveg', dot: 'bg-nonveg', label: 'Non-vegetarian' },
  e: { className: 'border-egg', dot: 'bg-egg', label: 'Contains egg' },
};

/** Indian FSSAI-style veg/non-veg square indicator. */
export function DietDot({ diet, size = 'md', className }) {
  const style = styles[diet];
  if (!style) return null;
  const box = size === 'sm' ? 'size-3' : 'size-3.5';
  const inner = size === 'sm' ? 'size-1.5' : 'size-2';

  return (
    <span
      role="img"
      aria-label={style.label}
      title={style.label}
      className={cx('grid shrink-0 place-items-center rounded-[2px] border', box, style.className, className)}
    >
      <span className={cx('rounded-full', inner, style.dot)} />
    </span>
  );
}
