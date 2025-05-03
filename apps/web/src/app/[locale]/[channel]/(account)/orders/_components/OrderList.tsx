'use client';

import {Trans} from '@lingui/react/macro';
import {Button} from '@repo/ui/Button';
import {Divider} from '@repo/ui/Divider';
import {Grid} from '@repo/ui/Grid';
import {GridItem} from '@repo/ui/GridItem';
import {SuccessIcon} from '@repo/ui/icons/SuccessIcon';
import {Image} from '@repo/ui/Image';
import {ImageGroup} from '@repo/ui/ImageGroup';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {View} from '@repo/ui/View';
import {assertNever} from '@repo/utils/assert-never';
import {use} from 'react';

import {OrdersViewContext} from './OrdersViewToggle';

export function OrderList() {
  const {viewType} = use(OrdersViewContext);
  switch (viewType) {
    case 'grid':
      return <OrderListGrid />;
    case 'table':
      return <OrderListTable />;
    default:
      assertNever(viewType);
  }
}

function OrderListGrid() {
  return (
    <Grid columns={['fill', 'fill', 'fill']} spacing="loose">
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </Grid>
  );
}

function OrderCard() {
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
        <Text emphasis="bold">3 items</Text>
        <Text appearance="subdued">Order #123456789</Text>
      </BlockStack>
      <Text emphasis="bold">$75.55</Text>
      <InlineStack spacing="base">
        <Button>Pay Now</Button>
        <Button variant="secondary">Manage</Button>
      </InlineStack>
    </BlockStack>
  );
}

function OrderListTable() {
  return (
    <View background="base" cornerRadius="large">
      <Grid
        columns={['auto', 'auto', 'auto', 'auto']}
        padding={['base', 'loose']}
        spacing={['none', 'loose']}>
        <GridItem />
        <GridItem>
          <Text appearance="subdued">
            <Trans>Order</Trans>
          </Text>
        </GridItem>
        <GridItem>
          <Text appearance="subdued">
            <Trans>Items</Trans>
          </Text>
        </GridItem>
        <GridItem>
          <Text appearance="subdued">
            <Trans>Total</Trans>
          </Text>
        </GridItem>
      </Grid>
      <Divider />
      <Grid
        columns={['auto', 'auto', 'auto', 'auto']}
        padding="loose"
        spacing="loose">
        <GridItem>
          <ImageGroup variant="inlineStack">
            <Image
              src="/product.png"
              alt="Example Product"
              width={44}
              height={44}
              border="base"
              borderWidth="medium"
              cornderRadius="fullyRounded"
            />
            <Image
              src="/product.png"
              alt="Example Product"
              width={44}
              height={44}
              border="base"
              borderWidth="medium"
              cornderRadius="fullyRounded"
            />
            <Image
              src="/product.png"
              alt="Example Product"
              width={44}
              height={44}
              border="base"
              borderWidth="medium"
              cornderRadius="fullyRounded"
            />
          </ImageGroup>
        </GridItem>
      </Grid>
    </View>
  );
}
