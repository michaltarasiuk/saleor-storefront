'use client';

import {assertNever} from '@repo/utils/assert-never';
import {Suspense, use} from 'react';

import {client} from '@/graphql/client';
import {graphql, useFragment} from '@/graphql/codegen';
import type {OrderListQuery} from '@/graphql/codegen/graphql';

import {OrdersGrid} from './OrdersGrid';
import {OrdersViewContext} from './OrdersViewToggle';

const OrderList_Query = graphql(`
  query OrderList {
    user {
      ...OrderList_UserFragment
    }
  }
`);

export function OrderListQuery() {
  const orderListPromise = client.request(OrderList_Query);
  return (
    <Suspense fallback={<OrderListSkeleton />}>
      <OrderList orderListPromise={orderListPromise} />
    </Suspense>
  );
}

const OrderList_UserFragment = graphql(`
  fragment OrderList_UserFragment on User {
    ...OrdersGrid_UserFragment
  }
`);

interface OrderListProps {
  readonly orderListPromise: Promise<OrderListQuery>;
}

function OrderList({orderListPromise}: OrderListProps) {
  const orderList = use(orderListPromise);
  const user = useFragment(OrderList_UserFragment, orderList.user);
  if (!user) {
    throw new Error('User not found');
  }
  const {viewType} = use(OrdersViewContext);
  switch (viewType) {
    case 'grid':
      return <OrdersGrid user={user} />;
    case 'table':
      return null;
    default:
      assertNever(viewType);
  }
}

function OrderListSkeleton() {
  return null;
}
