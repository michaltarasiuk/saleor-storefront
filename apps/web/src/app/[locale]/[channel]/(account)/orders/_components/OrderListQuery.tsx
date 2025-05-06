import {Suspense} from 'react';

import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import type {OrderListQuery} from '@/graphql/codegen/graphql';

import {getAuthorization} from '../../_utils/cookies';
import {OrderList, OrderListSkeleton} from './OrderList';

const OrderList_Query = graphql(`
  query OrderList {
    me {
      ...OrderList_UserFragment
    }
  }
`);

export async function OrderListQuery() {
  const orderListPromise = client
    .setHeader(...(await getAuthorization()))
    .request(OrderList_Query);
  return (
    <Suspense fallback={<OrderListSkeleton />}>
      <OrderList orderListPromise={orderListPromise} />
    </Suspense>
  );
}
