import {setActiveI18nInstance} from '@/i18n/utils';

import type {Params} from '../../../params';
import {OrderList} from '../_components/OrderList';

interface PendingOrdersPageProps {
  readonly params: Promise<Params>;
}

export default async function PendingOrdersPage({
  params,
}: PendingOrdersPageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return <OrderList />;
}
