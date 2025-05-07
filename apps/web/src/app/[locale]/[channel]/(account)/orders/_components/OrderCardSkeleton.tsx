import {Trans} from '@lingui/react/macro';
import {Button} from '@repo/ui/Button';
import {Grid} from '@repo/ui/Grid';
import {GridItem} from '@repo/ui/GridItem';
import {SkeletonImage} from '@repo/ui/SkeletonImage';
import {SkeletonText} from '@repo/ui/SkeletonText';
import {BlockStack, InlineStack} from '@repo/ui/Stack';

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
          <SkeletonText inlineSize="large" />
        </GridItem>
        <GridItem />
        <GridItem>
          <SkeletonText />
        </GridItem>
      </Grid>
      <BlockStack>
        <SkeletonText inlineSize="base" />
        <SkeletonText />
      </BlockStack>
      <SkeletonText />
      <InlineStack spacing="base">
        <Button isDisabled>
          <Trans>Pay Now</Trans>
        </Button>
        <Button variant="secondary" isDisabled>
          <Trans>Manage</Trans>
        </Button>
      </InlineStack>
    </BlockStack>
  );
}
