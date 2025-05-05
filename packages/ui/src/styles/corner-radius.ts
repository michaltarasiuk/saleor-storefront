import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';
import {cornerRadius} from '../variables/tokens.stylex';

export type CornerRadius = 'none' | 'small' | 'base' | 'large' | 'fullyRounded';

export function getCornerRadiusStyles(
  cornerRadius: MaybeShorthandProperty<CornerRadius>
) {
  const [startStart, endEnd, startEnd, endStart] =
    normalizeCornerRadius(cornerRadius);
  return [
    borderStartStartCornerRadiusStyles.base(
      normalizeResponsiveStyle({
        default: getCornerRadiusToken(startStart),
      })
    ),
    borderEndEndCornerRadiusStyles.base(
      normalizeResponsiveStyle({
        default: getCornerRadiusToken(endEnd),
      })
    ),
    borderStartEndCornerRadiusStyles.base(
      normalizeResponsiveStyle({
        default: getCornerRadiusToken(startEnd),
      })
    ),
    borderEndStartCornerRadiusStyles.base(
      normalizeResponsiveStyle({
        default: getCornerRadiusToken(endStart),
      })
    ),
  ];
}

function normalizeCornerRadius(
  cornerRadius: MaybeShorthandProperty<CornerRadius>
) {
  if (!isArray(cornerRadius)) {
    return [cornerRadius, cornerRadius, cornerRadius, cornerRadius] as const;
  }
  switch (cornerRadius.length) {
    case 2:
      return [
        cornerRadius[1],
        cornerRadius[0],
        cornerRadius[1],
        cornerRadius[0],
      ] as const;
    case 4:
      return cornerRadius;
    default:
      assertNever(cornerRadius);
  }
}

function getCornerRadiusToken(cornerRadiusKey: CornerRadius) {
  switch (cornerRadiusKey) {
    case 'none':
      return cornerRadius.none;
    case 'small':
      return cornerRadius.small;
    case 'base':
      return cornerRadius.base;
    case 'large':
      return cornerRadius.large;
    case 'fullyRounded':
      return cornerRadius.fullyRounded;
    default:
      assertNever(cornerRadiusKey);
  }
}

const borderStartStartCornerRadiusStyles = stylex.create({
  base: (
    borderStartStartRadius: NormalizedResponsiveStyle<
      React.CSSProperties['borderStartStartRadius']
    >
  ) => ({
    borderStartStartRadius: {
      default: borderStartStartRadius.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderStartStartRadius.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderStartStartRadius.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderStartStartRadius.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderStartStartRadius.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderStartStartRadius.extraExtraLarge,
    },
  }),
});

const borderStartEndCornerRadiusStyles = stylex.create({
  base: (
    borderStartEndRadius: NormalizedResponsiveStyle<
      React.CSSProperties['borderStartEndRadius']
    >
  ) => ({
    borderStartEndRadius: {
      default: borderStartEndRadius.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderStartEndRadius.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderStartEndRadius.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderStartEndRadius.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderStartEndRadius.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderStartEndRadius.extraExtraLarge,
    },
  }),
});

const borderEndStartCornerRadiusStyles = stylex.create({
  base: (
    borderEndStartRadius: NormalizedResponsiveStyle<
      React.CSSProperties['borderEndStartRadius']
    >
  ) => ({
    borderEndStartRadius: {
      default: borderEndStartRadius.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderEndStartRadius.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderEndStartRadius.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderEndStartRadius.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderEndStartRadius.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderEndStartRadius.extraExtraLarge,
    },
  }),
});

const borderEndEndCornerRadiusStyles = stylex.create({
  base: (
    borderEndEndRadius: NormalizedResponsiveStyle<
      React.CSSProperties['borderEndEndRadius']
    >
  ) => ({
    borderEndEndRadius: {
      default: borderEndEndRadius.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderEndEndRadius.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderEndEndRadius.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderEndEndRadius.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderEndEndRadius.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderEndEndRadius.extraExtraLarge,
    },
  }),
});
