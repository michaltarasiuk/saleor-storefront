import {setActiveI18nInstance} from '@/i18n/utils';

import type {Params} from '../../../params';
import {OrderListQuery} from '../_components/OrderListQuery';

interface ConfirmedOrdersPageProps {
  readonly params: Promise<Params>;
}

export default async function ConfirmedOrdersPage({
  params,
}: ConfirmedOrdersPageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return <OrderListQuery />;
}
