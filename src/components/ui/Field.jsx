import { ChevronDown } from 'lucide-react';
import { cx } from '../../lib/cx';

const control =
  'w-full min-h-12 rounded-md border bg-paper px-4 text-body text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/10';

/**
 * Form field with label, control and error message.
 * type: input types, or 'select' / 'textarea'.
 */
export function Field({ id, label, error, hint, type = 'text', options, className, light = false, ...rest }) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const borderTone = error ? 'border-error' : light ? 'border-line-dark bg-forest-deep text-cream' : 'border-line';

  const shared = {
    id,
    name: id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    className: cx(control, borderTone),
    ...rest,
  };

  return (
    <div className={cx('flex flex-col gap-2', className)}>
      <label htmlFor={id} className={cx('text-small font-medium', light ? 'text-cream/85' : 'text-ink')}>
        {label}
        {rest.required ? <span className="text-gold"> *</span> : null}
      </label>

      {type === 'textarea' ? (
        <textarea {...shared} rows={rest.rows || 5} className={cx(shared.className, 'resize-y py-3')} />
      ) : type === 'select' ? (
        <div className="relative">
          <select {...shared} className={cx(shared.className, 'appearance-none pr-11')}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
        </div>
      ) : (
        <input type={type} {...shared} />
      )}

      {error ? (
        <p id={`${id}-error`} className="text-small text-error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-small text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
