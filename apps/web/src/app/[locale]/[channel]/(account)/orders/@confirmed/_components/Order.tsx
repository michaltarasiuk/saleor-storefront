'use client';

import {Button} from '@repo/ui/Button';
import {Image} from '@repo/ui/Image';
import {ImageGroup} from '@repo/ui/ImageGroup';
import {BlockStack, InlineStack} from '@repo/ui/Stack';
import {Text} from '@repo/ui/Text';

export function Order() {
  return (
    <BlockStack
      background="base"
      cornerRadius="large"
      padding="base"
      spacing="loose">
      <BlockStack background="subdued" cornerRadius="base" padding="base">
        <Text emphasis="bold">Confirmed</Text>
        <Text>Updated Oct 17</Text>
      </BlockStack>
      <ImageGroup variant="grid">
        <Image src="/product.png" alt="product" cornderRadius="large" fill />
        <Image src="/product.png" alt="product" cornderRadius="large" fill />
      </ImageGroup>
      <BlockStack spacing="base">
        <BlockStack>
          <Text emphasis="bold">3 items</Text>
          <Text appearance="subdued">Order #1014</Text>
        </BlockStack>
        <Text emphasis="bold">$75.55</Text>
      </BlockStack>
      <InlineStack spacing="base">
        <Button>Pay Now</Button>
        <Button variant="secondary">Manage</Button>
      </InlineStack>
    </BlockStack>
  );
}
