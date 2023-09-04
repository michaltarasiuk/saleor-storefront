import {useRouter} from 'next/navigation';
import {useTransition} from 'react';

import {PRODUCTS_PAGE_SERACH_PARAM_KEYS} from '@/app/[channel]/[locale]/(shop)/_consts';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

export function useSearchProducts() {
  const router = useRouter();
  const [isSearching, startTransition] = useTransition();

  function searchProducts(keyTerm: string) {
    const pathname = formatPathname(APP_ROUTES.PRODUCTS);

    startTransition(() => {
      router.push(
        keyTerm
          ? `${pathname}?${PRODUCTS_PAGE_SERACH_PARAM_KEYS.SEARCH}=${keyTerm}`
          : pathname,
      );
    });
  }
  return [isSearching, searchProducts] as const;
}