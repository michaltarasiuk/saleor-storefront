import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from './consts/responsive';
import {getSpacingToken, type Spacing} from './styles/spacing';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from './utils/responsive';

interface InlineSpacerProps {
  readonly spacing?: Spacing;
}

export function InlineSpacer({spacing = 'base'}: InlineSpacerProps) {
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
    blockSize: '100%',
    flexShrink: 0,
  },
});

const spacingStyles = stylex.create({
  base: (
    inlineSize: NormalizedResponsiveStyle<React.CSSProperties['inlineSize']>
  ) => ({
    inlineSize: {
      default: inlineSize.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        inlineSize.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        inlineSize.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        inlineSize.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        inlineSize.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        inlineSize.extraExtraLarge,
    },
  }),
});
