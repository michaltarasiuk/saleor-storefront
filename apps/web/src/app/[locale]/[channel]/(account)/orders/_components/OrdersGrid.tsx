import {Trans} from '@lingui/react/macro';
import {Button} from '@repo/ui/Button';
import {Grid} from '@repo/ui/Grid';
import {GridItem} from '@repo/ui/GridItem';
import {SuccessIcon} from '@repo/ui/icons/SuccessIcon';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';
import {baseColors} from '@repo/ui/variables/colors.stylex';

import {type FragmentType, graphql, useFragment} from '@/graphql/codegen';

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

const OrderCard_OrderFragment = graphql(/* GraphQL */ `
  fragment OrderCard_OrderFragment on Order {
    number
  }
`);

interface OrderCardProps {
  readonly order: FragmentType<typeof OrderCard_OrderFragment>;
}

export function OrderCard(props: OrderCardProps) {
  const order = useFragment(OrderCard_OrderFragment, props.order);
  return (
    <BlockStack
      background="base"
      cornerRadius="large"
      padding="loose"
      spacing="loose">
      <Grid
        columns={[18, 'fill']}
        rows={['auto', 'auto']}
        background="subdued"
        cornerRadius="base"
        padding="loose"
        spacing={['none', 'extraTight']}>
        <GridItem>
          <SuccessIcon aria-hidden="true" stroke={baseColors.icon} />
        </GridItem>
        <GridItem>
          <Text emphasis="bold">Confirmed</Text>
        </GridItem>
        <div />
        <GridItem>
          <Text>Updated Oct 17</Text>
        </GridItem>
      </Grid>
      <BlockStack>
        <Text emphasis="bold">
          <Trans>3 items</Trans>
        </Text>
        <Text appearance="subdued">Order #{order.number}</Text>
      </BlockStack>
      <Text emphasis="bold">$75.55</Text>
      <InlineStack spacing="base">
        <Button>Pay Now</Button>
        <Button variant="secondary">Manage</Button>
      </InlineStack>
    </BlockStack>
  );
}
