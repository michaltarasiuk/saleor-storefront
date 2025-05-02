import {useSyncExternalStore} from 'react';

function getReducedMotionMediaQuery() {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

function subscribeReducedMotionMediaQuery(onChange: () => void) {
  const mediaQuery = getReducedMotionMediaQuery();
  mediaQuery.addEventListener('change', onChange);
  return () => mediaQuery.removeEventListener('change', onChange);
}

export function useReducedMotionPreference() {
  const matches = useSyncExternalStore(
    subscribeReducedMotionMediaQuery,
    function getSnapshot() {
      return getReducedMotionMediaQuery().matches;
    },
    function getServerSnapshot() {
      return false;
    }
  );
  return matches;
}
