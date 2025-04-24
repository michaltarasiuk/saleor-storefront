import type {ReactNode} from 'react';
import {useIsSSR} from 'react-aria';

interface ClientGateProps {
  readonly children: () => React.ReactNode;
  readonly fallback?: ReactNode;
}

export function ClientGate({children, fallback = null}: ClientGateProps) {
  return useIsSSR() ? fallback : children();
}
