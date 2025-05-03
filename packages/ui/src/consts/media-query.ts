export type MediaQuerySizes = typeof MediaQuerySizes;

export const MediaQuerySizes = {
  Min: {
    Small: '@media (width >= 40rem)',
    Medium: '@media (width >= 48rem)',
    Large: '@media (width >= 64rem)',
    ExtraLarge: '@media (width >= 80rem)',
    ExtraExtraLarge: '@media (width >= 96rem)',
  },
} as const;

export const MediaQueryConditions = {
  Min: {
    Small: '(min-width: 40rem)',
    Medium: '(min-width: 48rem)',
    Large: '(min-width: 64rem)',
    ExtraLarge: '(min-width: 80rem)',
    ExtraExtraLarge: '(min-width: 96rem)',
  },
} as const;
