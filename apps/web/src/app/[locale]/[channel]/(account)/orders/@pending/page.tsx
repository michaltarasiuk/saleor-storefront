import type {Locale} from '@lingui/core';
import {Trans} from '@lingui/react/macro';
import {Heading} from '@repo/ui/Heading';

import {setActiveI18nInstance} from '@/i18n/utils';

interface PendingOrdersPageProps {
  readonly params: Promise<{
    readonly locale: Locale;
  }>;
}

export default async function PendingOrdersPage({
  params,
}: PendingOrdersPageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <Heading>
      <Trans>Pending orders</Trans>
    </Heading>
  );
}
