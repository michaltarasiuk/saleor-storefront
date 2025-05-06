import {Trans} from '@lingui/react/macro';
import {Button} from '@repo/ui/Button';
import {Grid} from '@repo/ui/Grid';
import {GridItem} from '@repo/ui/GridItem';
import {SuccessIcon} from '@repo/ui/icons/SuccessIcon';
import {SkeletonImage} from '@repo/ui/SkeletonImage';
import {SkeletonText} from '@repo/ui/SkeletonText';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';
import {baseColors} from '@repo/ui/variables/colors.stylex';

import {type FragmentType, graphql, useFragment} from '@/graphql/codegen';

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
        blockAlignment="center"
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
        <GridItem />
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

export function OrderCardSkeleton() {
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
          <SkeletonImage blockSize={18} />
        </GridItem>
        <GridItem>
          <SkeletonText />
        </GridItem>
        <GridItem />
        <GridItem>
          <SkeletonText />
        </GridItem>
      </Grid>
      <BlockStack>
        <SkeletonText />
        <SkeletonText />
      </BlockStack>
      <SkeletonText />
      <InlineStack spacing="base">
        <Button isDisabled>Pay Now</Button>
        <Button variant="secondary" isDisabled>
          Manage
        </Button>
      </InlineStack>
    </BlockStack>
  );
}
