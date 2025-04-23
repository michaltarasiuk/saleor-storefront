'use client';

import {useRouter} from 'next/navigation';
import {RouterProvider as AriaRouterProvider} from 'react-aria-components';

declare module 'react-aria-components' {
  type Router = ReturnType<typeof useRouter>;
  type RouterOptions = Router['push'] extends (
    href: string,
    options?: infer NavigateOptions | undefined
  ) => void
    ? NavigateOptions
    : never;

  interface RouterConfig {
    routerOptions: RouterOptions;
  }
}

export function RouterProvider({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <AriaRouterProvider navigate={router.push}>{children}</AriaRouterProvider>
  );
}
