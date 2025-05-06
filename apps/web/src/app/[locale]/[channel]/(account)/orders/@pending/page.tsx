import {unauthorized} from 'next/navigation';
import {Suspense} from 'react';

import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import {setActiveI18nInstance} from '@/i18n/utils';

import type {Params} from '../../../params';
import {getAuthorization} from '../../_utils/session';
import {OrderList, OrderListSkeleton} from '../_components/OrderList';

interface ConfirmedOrdersPageProps {
  readonly params: Promise<Params>;
}

const OrderList_Query = graphql(`
  query OrderList {
    me {
      ...OrderList_UserFragment
    }
  }
`);

export default async function ConfirmedOrdersPage({
  params,
}: ConfirmedOrdersPageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  const authorization = await getAuthorization();
  if (!authorization) {
    unauthorized();
  }
  const orderListPromise = client
    .setHeader(...authorization)
    .request(OrderList_Query);
  return (
    <Suspense fallback={<OrderListSkeleton />}>
      <OrderList orderListPromise={orderListPromise} />
    </Suspense>
  );
}
