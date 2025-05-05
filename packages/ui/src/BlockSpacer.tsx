import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from './consts/responsive';
import {getSpacingToken, type Spacing} from './styles/spacing';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from './utils/responsive';

interface BlockSpacerProps {
  readonly spacing?: Spacing;
}

export function BlockSpacer({spacing = 'base'}: BlockSpacerProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        spacingStyles.base(
          normalizeResponsiveStyle({
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
    blockSize: NormalizedResponsiveStyle<React.CSSProperties['blockSize']>
  ) => ({
    blockSize: {
      default: blockSize.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        blockSize.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        blockSize.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        blockSize.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        blockSize.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        blockSize.extraExtraLarge,
    },
  }),
});
