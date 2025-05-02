import {assertNever} from '@repo/utils/assert-never';
import {useCallback, useSyncExternalStore} from 'react';

import type {Breakpoints} from '../consts/breakpoints';

function createMediaQueryListener(onChange: () => void, query: string) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener('change', onChange);
  return () => {
    mediaQueryList.removeEventListener('change', onChange);
  };
}

export function useMediaQuery(breakpoint: Breakpoints[keyof Breakpoints]) {
  const media = mapBreakpointToMedia(breakpoint);
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

function mapBreakpointToMedia(breakpoint: Breakpoints[keyof Breakpoints]) {
  switch (breakpoint) {
    case '@media (width >= 40rem)':
      return '(min-width: 40rem)';
    case '@media (width >= 48rem)':
      return '(min-width: 48rem)';
    case '@media (width >= 64rem)':
      return '(min-width: 64rem)';
    case '@media (width >= 80rem)':
      return '(min-width: 80rem)';
    case '@media (width >= 96rem)':
      return '(min-width: 96rem)';
    default:
      assertNever(breakpoint);
  }
}
