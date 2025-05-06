'use client';

import {assertNever} from '@repo/utils/assert-never';
import {use} from 'react';

import {graphql, useFragment} from '@/graphql/codegen';
import type {OrderListQuery} from '@/graphql/codegen/graphql';

import {OrdersGrid, OrdersGridSkeleton} from './OrdersGrid';
import {OrdersTable, OrdersTableSkeleton} from './OrdersTable';
import {OrdersViewContext} from './OrdersViewToggle';

const OrderList_UserFragment = graphql(`
  fragment OrderList_UserFragment on User {
    ...OrdersGrid_UserFragment
  }
`);

interface OrderListProps {
  readonly orderListPromise: Promise<OrderListQuery>;
}

export function OrderList({orderListPromise}: OrderListProps) {
  const orderList = use(orderListPromise);
  const me = useFragment(OrderList_UserFragment, orderList.me);
  if (!me) {
    throw new Error('User not found');
  }
  const {viewType} = use(OrdersViewContext);
  switch (viewType) {
    case 'grid':
      return <OrdersGrid user={me} />;
    case 'table':
      return <OrdersTable />;
    default:
      assertNever(viewType);
  }
}

export function OrderListSkeleton() {
  const {viewType} = use(OrdersViewContext);
  switch (viewType) {
    case 'grid':
      return <OrdersGridSkeleton />;
    case 'table':
      return <OrdersTableSkeleton />;
    default:
  }
}
