import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from './consts/media-query';
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
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        inlineSize.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        inlineSize.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        inlineSize.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        inlineSize.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        inlineSize.extraExtraLarge,
    },
  }),
});
