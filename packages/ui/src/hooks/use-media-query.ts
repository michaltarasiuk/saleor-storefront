import {useCallback, useSyncExternalStore} from 'react';

import type {Breakpoints} from '../consts/breakpoints';

function createMediaQueryListener(onChange: () => void, query: string) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener('change', onChange);
  return () => mediaQueryList.removeEventListener('change', onChange);
}

export function useMediaQuery(breakpoint: Breakpoints[keyof Breakpoints]) {
  const media = BreakpointToMedia[breakpoint];
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const removeEventListener = createMediaQueryListener(
        onStoreChange,
        media
      );
      return removeEventListener;
    },
    [media]
  );
  const matches = useSyncExternalStore(
    subscribe,
    function getShapshot() {
      return window.matchMedia(media).matches;
    },
    function getServerSnapshot() {
      return false;
    }
  );
  return matches;
}

const BreakpointToMedia: Record<Breakpoints[keyof Breakpoints], string> = {
  '@media (width >= 40rem)': '(min-width: 40rem)',
  '@media (width >= 48rem)': '(min-width: 48rem)',
  '@media (width >= 64rem)': '(min-width: 64rem)',
  '@media (width >= 80rem)': '(min-width: 80rem)',
  '@media (width >= 96rem)': '(min-width: 96rem)',
};
