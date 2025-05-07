import {Trans} from '@lingui/react/macro';
import {Button} from '@repo/ui/Button';
import {Grid} from '@repo/ui/Grid';
import {GridItem} from '@repo/ui/GridItem';
import {ClockIcon} from '@repo/ui/icons/ClockIcon';
import {ErrorIcon} from '@repo/ui/icons/ErrorIcon';
import {HollowCircleIcon} from '@repo/ui/icons/HollowCircleIcon';
import {InfoIcon} from '@repo/ui/icons/InfoIcon';
import {ReturnIcon} from '@repo/ui/icons/ReturnIcon';
import {SuccessIcon} from '@repo/ui/icons/SuccessIcon';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {assertNever} from '@repo/utils/assert-never';

import {type FragmentType, graphql, useFragment} from '@/graphql/codegen';
import {OrderStatus} from '@/graphql/codegen/graphql';

const OrderCard_OrderFragment = graphql(`
  fragment OrderCard_OrderFragment on Order {
    number
    ...OrderIcon_OrderFragment
    ...OrderStatusText_OrderFragment
  }
`);

interface OrderCardProps {
  readonly order: FragmentType<typeof OrderCard_OrderFragment>;
}

export function OrderCard(props: OrderCardProps) {
  const {number, ...order} = useFragment(OrderCard_OrderFragment, props.order);
  return (
    <BlockStack
      background="base"
      cornerRadius="large"
      padding="loose"
      spacing="loose">
      <Grid
        columns={[18, 'fill']}
        rows={['auto', 'auto']}
        blockAlignment="center"
        background="subdued"
        cornerRadius="base"
        padding="loose"
        spacing={['none', 'extraTight']}>
        <GridItem>
          <OrderIcon
            aria-hidden="true"
            stroke={baseColors.icon}
            order={order}
          />
        </GridItem>
        <GridItem>
          <Text emphasis="bold">
            <OrderStatusText order={order} />
          </Text>
        </GridItem>
        <GridItem />
        <GridItem>
          <Text>Updated Oct 17</Text>
        </GridItem>
      </Grid>
      <BlockStack>
        <Text emphasis="bold">
          <Trans>3 items</Trans>
        </Text>
        <Text appearance="subdued">
          <Trans>Order #{number}</Trans>
        </Text>
      </BlockStack>
      <Text emphasis="bold">$75.55</Text>
      <InlineStack spacing="base">
        <Button>
          <Trans>Pay Now</Trans>
        </Button>
        <Button variant="secondary">
          <Trans>Manage</Trans>
        </Button>
      </InlineStack>
    </BlockStack>
  );
}

const OrderStatusText_OrderFragment = graphql(`
  fragment OrderStatusText_OrderFragment on Order {
    status
  }
`);

interface OrderStatusTextProps {
  readonly order: FragmentType<typeof OrderStatusText_OrderFragment>;
}

function OrderStatusText(props: OrderStatusTextProps) {
  const {status} = useFragment(OrderStatusText_OrderFragment, props.order);
  switch (status) {
    case OrderStatus.Canceled:
      return <Trans>Canceld</Trans>;
    case OrderStatus.Draft:
      return <Trans>Draft</Trans>;
    case OrderStatus.Expired:
      return <Trans>Expired</Trans>;
    case OrderStatus.Unconfirmed:
      return <Trans>Unconfirmed</Trans>;
    case OrderStatus.Unfulfilled:
      return <Trans>Unfulfilled</Trans>;
    case OrderStatus.Fulfilled:
      return <Trans>Fulfilled</Trans>;
    case OrderStatus.PartiallyFulfilled:
      return <Trans>Partially Fulfilled</Trans>;
    case OrderStatus.Returned:
      return <Trans>Returned</Trans>;
    case OrderStatus.PartiallyReturned:
      return <Trans>Returned</Trans>;
    default:
      assertNever(status);
  }
}

const OrderIcon_OrderFragment = graphql(`
  fragment OrderIcon_OrderFragment on Order {
    status
  }
`);

interface OrderIconProps extends Omit<React.ComponentProps<'svg'>, 'order'> {
  readonly order: FragmentType<typeof OrderIcon_OrderFragment>;
}

function OrderIcon({order, ...props}: OrderIconProps) {
  const {status} = useFragment(OrderIcon_OrderFragment, order);
  switch (status) {
    case OrderStatus.Canceled:
      return <ErrorIcon {...props} />;
    case OrderStatus.Draft:
    case OrderStatus.Unfulfilled:
      return <HollowCircleIcon {...props} />;
    case OrderStatus.Expired:
      return <ClockIcon {...props} />;
    case OrderStatus.Unconfirmed:
      return <InfoIcon {...props} />;
    case OrderStatus.Returned:
    case OrderStatus.PartiallyReturned:
      return <ReturnIcon {...props} />;
    case OrderStatus.Fulfilled:
    case OrderStatus.PartiallyFulfilled:
      return <SuccessIcon {...props} />;
    default:
      assertNever(status);
  }
}
