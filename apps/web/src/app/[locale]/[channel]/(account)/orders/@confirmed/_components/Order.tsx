'use client';

import {Button} from '@repo/ui/Button';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';

export function Order() {
  return (
    <BlockStack
      background="base"
      cornerRadius="large"
      padding="loose"
      spacing="loose">
      <BlockStack background="subdued" cornerRadius="base" padding="base">
        <Text emphasis="bold">Confirmed</Text>
        <Text>Updated Oct 17</Text>
      </BlockStack>
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
