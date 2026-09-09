import { useEffect } from 'react';

/** Locks page scroll while `locked` is true (mobile menu, lightbox). */
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
