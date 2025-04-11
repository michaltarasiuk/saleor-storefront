import {useSyncExternalStore} from 'react';

function getPrefersReducedMotionMediaQuery() {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

function handleMediaQueryChange(onChange: () => void) {
  const mediaQuery = getPrefersReducedMotionMediaQuery();
  mediaQuery.addEventListener('change', onChange);
  return function cleanup() {
    mediaQuery.removeEventListener('change', onChange);
  };
}

export function usePrefersReducedMotion() {
  const prefersReducedMotion = useSyncExternalStore(
    handleMediaQueryChange,
    () => getPrefersReducedMotionMediaQuery().matches,
    () => false
  );
  return prefersReducedMotion;
}
