import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {cornerRadius} from '../variables/tokens.stylex';

export type CornerRadius = 'none' | 'small' | 'base' | 'large' | 'fullyRounded';

export function getCornerRadiusStyles(
  cornerRadius: MaybeShorthandProperty<CornerRadius>
) {
  const [startStart, endEnd, startEnd, endStart] =
    normalizeCornerRadius(cornerRadius);
  return [
    borderStartStartCornerRadiusStyles.default(
      getCornerRadiusToken(startStart)
    ),
    borderEndEndCornerRadiusStyles.default(getCornerRadiusToken(endEnd)),
    borderStartEndCornerRadiusStyles.default(getCornerRadiusToken(startEnd)),
    borderEndStartCornerRadiusStyles.default(getCornerRadiusToken(endStart)),
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
  default: (
    borderStartStartRadius: React.CSSProperties['borderStartStartRadius']
  ) => ({
    borderStartStartRadius,
  }),
  small: (
    borderStartStartRadius: React.CSSProperties['borderStartStartRadius']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderStartStartRadius,
    },
  }),
  medium: (
    borderStartStartRadius: React.CSSProperties['borderStartStartRadius']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderStartStartRadius,
    },
  }),
  large: (
    borderStartStartRadius: React.CSSProperties['borderStartStartRadius']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderStartStartRadius,
    },
  }),
  extraLarge: (
    borderStartStartRadius: React.CSSProperties['borderStartStartRadius']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderStartStartRadius,
    },
  }),
  extraExtraLarge: borderStartStartRadius => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderStartStartRadius,
    },
  }),
});

const borderStartEndCornerRadiusStyles = stylex.create({
  default: (
    borderStartEndRadius: React.CSSProperties['borderStartEndRadius']
  ) => ({
    borderStartEndRadius,
  }),
  small: (
    borderStartEndRadius: React.CSSProperties['borderStartEndRadius']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderStartEndRadius,
    },
  }),
  medium: (
    borderStartEndRadius: React.CSSProperties['borderStartEndRadius']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderStartEndRadius,
    },
  }),
  large: (
    borderStartEndRadius: React.CSSProperties['borderStartEndRadius']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderStartEndRadius,
    },
  }),
  extraLarge: (
    borderStartEndRadius: React.CSSProperties['borderStartEndRadius']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderStartEndRadius,
    },
  }),
  extraExtraLarge: borderStartStartRadius => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderStartStartRadius,
    },
  }),
});

const borderEndStartCornerRadiusStyles = stylex.create({
  default: (
    borderEndStartRadius: React.CSSProperties['borderEndStartRadius']
  ) => ({
    borderEndStartRadius,
  }),
  small: (
    borderEndStartRadius: React.CSSProperties['borderEndStartRadius']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderEndStartRadius,
    },
  }),
  medium: (
    borderEndStartRadius: React.CSSProperties['borderEndStartRadius']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderEndStartRadius,
    },
  }),
  large: (
    borderEndStartRadius: React.CSSProperties['borderEndStartRadius']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderEndStartRadius,
    },
  }),
  extraLarge: (
    borderEndStartRadius: React.CSSProperties['borderEndStartRadius']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderEndStartRadius,
    },
  }),
  extraExtraLarge: borderStartStartRadius => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderStartStartRadius,
    },
  }),
});

const borderEndEndCornerRadiusStyles = stylex.create({
  default: (borderEndEndRadius: React.CSSProperties['borderEndEndRadius']) => ({
    borderEndEndRadius,
  }),
  small: (borderEndEndRadius: React.CSSProperties['borderEndEndRadius']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderEndEndRadius,
    },
  }),
  medium: (borderEndEndRadius: React.CSSProperties['borderEndEndRadius']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderEndEndRadius,
    },
  }),
  large: (borderEndEndRadius: React.CSSProperties['borderEndEndRadius']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderEndEndRadius,
    },
  }),
  extraLarge: (
    borderEndEndRadius: React.CSSProperties['borderEndEndRadius']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderEndEndRadius,
    },
  }),
  extraExtraLarge: borderStartStartRadius => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderStartStartRadius,
    },
  }),
});
