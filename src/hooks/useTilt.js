import { useCallback } from 'react';

/**
 * Pointer-driven 3D tilt. Spread the returned handlers on the card element.
 * Sets --tilt-x / --tilt-y / --glare-x / --glare-y custom properties; CSS does the rest.
 */
export function useTilt(max = 8) {
  const onPointerMove = useCallback(
    (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      element.style.setProperty('--tilt-y', `${(px - 0.5) * max * 2}deg`);
      element.style.setProperty('--tilt-x', `${(0.5 - py) * max * 2}deg`);
      element.style.setProperty('--glare-x', `${px * 100}%`);
      element.style.setProperty('--glare-y', `${py * 100}%`);
    },
    [max],
  );

  const onPointerLeave = useCallback((event) => {
    const element = event.currentTarget;
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  }, []);

  return { onPointerMove, onPointerLeave };
}
