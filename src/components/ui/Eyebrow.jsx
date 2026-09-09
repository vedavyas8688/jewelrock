import { cx } from '../../lib/cx';

export function Eyebrow({ children, light = false, className }) {
  return (
    <p
      className={cx(
        'eyebrow-brush',
        light ? 'eyebrow-brush--light' : 'eyebrow-brush--dark',
        className,
      )}
    >
      <span className="eyebrow-brush__text">
        {children}
      </span>
    </p>
  );
}
