import {useCallback, useSyncExternalStore} from 'react';

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
