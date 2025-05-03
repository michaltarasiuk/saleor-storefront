import {useCallback, useSyncExternalStore} from 'react';

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener('change', onStoreChange);
      return () => media.removeEventListener('change', onStoreChange);
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
