import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from './consts/media-query';
import {getSpacingToken, type Spacing} from './styles/spacing.stylex';
import {
  type NormalizedMediaQueryStyle,
  normalizeMediaQueryStyle,
} from './utils/media-query';

interface BlockSpacerProps {
  readonly spacing?: Spacing;
}

export function BlockSpacer({spacing = 'base'}: BlockSpacerProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        spacingStyles.base(
          normalizeMediaQueryStyle({
            default: getSpacingToken(spacing),
          })
        )
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    inlineSize: '100%',
    flexShrink: 0,
  },
});

const spacingStyles = stylex.create({
  base: (
    blockSize: NormalizedMediaQueryStyle<React.CSSProperties['blockSize']>
  ) => ({
    blockSize: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        blockSize.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        blockSize.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        blockSize.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        blockSize.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        blockSize.extraExtraLarge,
    },
  }),
});
