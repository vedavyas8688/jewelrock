import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView]. Flips to true once the element enters the viewport
 * (once only — used to start counters / word reveals).
 */
export function useInView({ threshold = 0.25, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
}
