import {useSyncExternalStore} from 'react';

function getReducedMotionMediaQuery() {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

function subscribeReducedMotionMediaQuery(onChange: () => void) {
  const media = getReducedMotionMediaQuery();
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

export function useReducedMotionPreference() {
  const matches = useSyncExternalStore(
    subscribeReducedMotionMediaQuery,
    () => getReducedMotionMediaQuery().matches,
    () => false
  );
  return matches;
}
