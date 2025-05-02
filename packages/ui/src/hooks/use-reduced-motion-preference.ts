import {useSyncExternalStore} from 'react';

function getReducedMotionMediaQuery() {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

function subscribeToMediaQueryChanges(onChange: () => void) {
  const mediaQuery = getReducedMotionMediaQuery();
  mediaQuery.addEventListener('change', onChange);
  return () => mediaQuery.removeEventListener('change', onChange);
}

export function useReducedMotionPreference() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMediaQueryChanges,
    () => getReducedMotionMediaQuery().matches,
    () => false
  );
  return prefersReducedMotion;
}
