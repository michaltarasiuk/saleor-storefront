'use client';

import {isNodeEnvironment} from '@repo/utils/execution-environment';
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';

interface QueryClientProviderProps {
  readonly children: React.ReactNode;
}

export function QueryClientProvider({children}: QueryClientProviderProps) {
  const queryClient = getQueryClient();
  return (
    <ReactQueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {children}
        <ReactQueryDevtools />
      </ReactQueryStreamedHydration>
    </ReactQueryClientProvider>
  );
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isNodeEnvironment) {
    return makeQueryClient();
  } else {
    browserQueryClient ??= makeQueryClient();
    return browserQueryClient;
  }
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}
