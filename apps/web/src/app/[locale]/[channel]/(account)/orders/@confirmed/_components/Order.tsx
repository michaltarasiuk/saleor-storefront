'use client';

import {Button} from '@repo/ui/Button';
import {Grid} from '@repo/ui/Grid';
import {GridItem} from '@repo/ui/GridItem';
import {SuccessIcon} from '@repo/ui/icons/SuccessIcon';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';
import {baseColors} from '@repo/ui/variables/colors.stylex';

export function Order() {
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
