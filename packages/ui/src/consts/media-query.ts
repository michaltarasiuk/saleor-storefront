export type MediaQuerySizes = typeof MediaQuerySizes;

export const MediaQuerySizes = {
  small: '@media (width >= 40rem)',
  medium: '@media (width >= 48rem)',
  large: '@media (width >= 64rem)',
  extraLarge: '@media (width >= 80rem)',
  extraExtraLarge: '@media (width >= 96rem)',
} as const;

export const MediaQueryConditions = {
  small: '(min-width: 40rem)',
  medium: '(min-width: 48rem)',
  large: '(min-width: 64rem)',
  extraLarge: '(min-width: 80rem)',
  extraExtraLarge: '(min-width: 96rem)',
} as const;
