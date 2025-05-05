import {assertNever} from '@repo/utils/assert-never';
import {useCallback, useSyncExternalStore} from 'react';

import type {ViewportInlineSizes} from '../consts/responsive';

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    },
    [query]
  );
  const matches = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
  return matches;
}

export function useViewportInlineSize(
  inlineSize: ViewportInlineSizes[keyof ViewportInlineSizes]
) {
  const query = mapViewportInlineSizeToMediaQuery(inlineSize);
  return useMediaQuery(query);
}

function mapViewportInlineSizeToMediaQuery(
  inlineSize: ViewportInlineSizes[keyof ViewportInlineSizes]
) {
  switch (inlineSize) {
    case '@media (width >= 40rem)':
      return '(width >= 40rem)';
    case '@media (width >= 48rem)':
      return '(width >= 48rem)';
    case '@media (width >= 64rem)':
      return '(width >= 64rem)';
    case '@media (width >= 80rem)':
      return '(width >= 80rem)';
    case '@media (width >= 96rem)':
      return '(width >= 96rem)';
    default:
      assertNever(inlineSize);
  }
}
