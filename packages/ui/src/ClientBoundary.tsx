import type {ReactNode} from 'react';
import {useSyncExternalStore} from 'react';

function noopSubscribe() {
  return () => {};
}

interface ClientBoundaryProps {
  readonly children: () => React.ReactNode;
  readonly fallback?: ReactNode;
}

export function ClientBoundary({
  children,
  fallback = null,
}: ClientBoundaryProps) {
  const isServer = useSyncExternalStore(
    noopSubscribe,
    () => false,
    () => true
  );
  return isServer ? fallback : children();
}
