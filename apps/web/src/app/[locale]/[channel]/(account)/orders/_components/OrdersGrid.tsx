import {Grid} from '@repo/ui/Grid';

import {type FragmentType, graphql, useFragment} from '@/graphql/codegen';

import {OrderCard, OrderCardSkeleton} from './OrderCard';

const OrdersGrid_UserFragment = graphql(`
  fragment OrdersGrid_UserFragment on User {
    orders(first: 10) {
      edges {
        node {
          id
          ...OrderCard_OrderFragment
        }
      }
    }
  }
`);

interface OrdersGridProps {
  readonly user: FragmentType<typeof OrdersGrid_UserFragment>;
}

export function OrdersGrid(props: OrdersGridProps) {
  const user = useFragment(OrdersGrid_UserFragment, props.user);
  return (
    <Grid columns={['fill', 'fill', 'fill']} spacing="loose">
      {user.orders?.edges.map(({node}) => (
        <OrderCard key={node.id} order={node} />
      ))}
    </Grid>
  );
}

export function OrdersGridSkeleton() {
  return (
    <Grid columns={['fill', 'fill', 'fill']} spacing="loose">
      <OrderCardSkeleton />
      <OrderCardSkeleton />
      <OrderCardSkeleton />
    </Grid>
  );
}
