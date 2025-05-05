import type {ViewportInlineSizes} from '../consts/responsive';

export type ResponsiveStyle<T> = {
  readonly default: T;
} & {
  readonly [k in keyof typeof ViewportInlineSizes]?: T;
};

export type NormalizedResponsiveStyle<T> = Required<ResponsiveStyle<T>>;

export function normalizeResponsiveStyle<T>(
  styles: ResponsiveStyle<T>
): NormalizedResponsiveStyle<T> {
  const normalizedStyles = {
    default: styles.default,
    small: styles.small ?? styles.default,
    medium: styles.medium ?? styles.small ?? styles.default,
    large: styles.large ?? styles.medium ?? styles.small ?? styles.default,
    extraLarge:
      styles.extraLarge ??
      styles.large ??
      styles.medium ??
      styles.small ??
      styles.default,
    extraExtraLarge:
      styles.extraExtraLarge ??
      styles.extraLarge ??
      styles.large ??
      styles.medium ??
      styles.small ??
      styles.default,
  };
  return normalizedStyles;
}
