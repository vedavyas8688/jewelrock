import { useEffect } from 'react';

/**
 * Adds .is-visible to [data-reveal] elements as they enter the viewport.
 * Delay can be set per element via data-reveal-delay="120".
 * Re-runs whenever `refreshKey` (current page) changes.
 */
export function useScrollReveal(refreshKey) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('has-reveal');

    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px' },
    );

    elements.forEach((element) => {
      const delay = element.dataset.revealDelay;
      if (delay) element.style.setProperty('--reveal-delay', `${delay}ms`);
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.classList.add('is-visible');
      } else {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove('has-reveal');
    };
  }, [refreshKey]);
}
