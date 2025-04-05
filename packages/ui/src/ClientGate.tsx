import {ReactNode, useSyncExternalStore} from 'react';

function subscribe() {
  return () => {};
}

interface ClientGateProps {
  readonly children: () => React.ReactNode;
  readonly fallback?: ReactNode;
}

export function ClientGate({children, fallback = null}: ClientGateProps) {
  const isServer = useSyncExternalStore(
    subscribe,
    () => false,
    () => true,
  );
  return isServer ? fallback : children();
}
