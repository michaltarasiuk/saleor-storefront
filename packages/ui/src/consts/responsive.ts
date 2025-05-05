export type ViewportInlineSizes = typeof ViewportInlineSizes;

export const ViewportInlineSizes = {
  small: '@media (width >= 40rem)',
  medium: '@media (width >= 48rem)',
  large: '@media (width >= 64rem)',
  extraLarge: '@media (width >= 80rem)',
  extraExtraLarge: '@media (width >= 96rem)',
} as const;
