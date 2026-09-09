import { useEffect, useState } from 'react';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/** Animates 0 → target once `start` is true. Respects reduced motion. */
export function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return undefined;
    }

    let frame;
    const began = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - began) / duration);
      setValue(Math.round(target * easeOut(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);

  return value;
}
