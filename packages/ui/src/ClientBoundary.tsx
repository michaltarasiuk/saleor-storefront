import {ReactNode, useSyncExternalStore} from 'react';

function noopSubscribe() {
  return () => {};
}

interface ClientGateProps {
  readonly children: () => React.ReactNode;
  readonly fallback?: ReactNode;
}

export function ClientBoundary({children, fallback = null}: ClientGateProps) {
  const isServer = useSyncExternalStore(
    noopSubscribe,
    () => false,
    () => true
  );
  return isServer ? fallback : children();
}
