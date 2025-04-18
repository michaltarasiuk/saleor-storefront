import type {Locale} from '@lingui/core';
import {Trans} from '@lingui/react/macro';
import {HeadingGroup} from '@repo/ui/Heading';

import {setActiveI18nInstance} from '@/i18n/utils';

import {PageTitle} from '../_components/PageTitle';
import {OrderTabs} from './_components/OrderTabs';

interface Params {
  readonly locale: Locale;
}

interface OrdersLayoutProps {
  readonly confirmed: React.ReactNode;
  readonly pending: React.ReactNode;
  readonly params: Promise<Params>;
}

export default async function OrdersLayout({
  confirmed,
  pending,
  params,
}: OrdersLayoutProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <>
      <PageTitle>
        <Trans>Orders</Trans>
      </PageTitle>
      <HeadingGroup>
        <OrderTabs confirmedTab={confirmed} pendingTab={pending} />
      </HeadingGroup>
    </>
  );
}
