import { useCountUp } from '../../hooks/useCountUp';

/** Number that counts up when `start` flips true. */
export function CountUp({ value, start, suffix = '', duration, className }) {
  const current = useCountUp(value, start, duration);
  return (
    <span className={className}>
      {current.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
