import { cx } from '../../lib/cx';

const tones = {
  cream: 'bg-cream',
  deep: 'bg-cream-deep',
  paper: 'bg-paper',
  forest: 'bg-forest text-cream on-dark',
  night: 'bg-forest-deep text-cream on-dark',
};

/**
 * Page section wrapper. Owns vertical rhythm and surface tone.
 * tight: shorter padding. bleed: no horizontal container (children manage width).
 */
export function Section({ id, tone = 'cream', tight = false, bleed = false, className, children, ...rest }) {
  return (
    <section
      id={id}
      className={cx(tones[tone], tight ? 'py-section-tight' : 'py-section', className)}
      {...rest}
    >
      {bleed ? children : <div className="container-site">{children}</div>}
    </section>
  );
}
