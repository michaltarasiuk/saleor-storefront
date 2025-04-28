import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MaybeShorthandProperty} from '../types/shorthand';
import {cornerRadius} from '../variables/tokens.stylex';

type BorderStartStartCornerRadius = keyof typeof borderStartStartCornerRadius;
type BorderStartEndCornerRadius = keyof typeof borderStartEndCornerRadius;
type BorderEndStartCornerRadius = keyof typeof borderEndStartCornerRadius;
type BorderEndEndCornerRadius = keyof typeof borderEndEndCornerRadius;

type BorderStartCornerRadius = BorderStartStartCornerRadius &
  BorderStartEndCornerRadius;
type BorderEndCornerRadius = BorderEndStartCornerRadius &
  BorderEndEndCornerRadius;

export type CornerRadius = MaybeShorthandProperty<
  BorderStartCornerRadius & BorderEndCornerRadius
>;

export function getCornerRadiusStyles(cornerRadius: CornerRadius) {
  const [startStart, endEnd, startEnd, endStart] =
    normalizeCornerRadius(cornerRadius);
  return [
    borderStartStartCornerRadius[startStart],
    borderEndEndCornerRadius[endEnd],
    borderStartEndCornerRadius[startEnd],
    borderEndStartCornerRadius[endStart],
  ];
}

function normalizeCornerRadius(cornerRadius: CornerRadius) {
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

const borderStartStartCornerRadius = stylex.create({
  fullyRounded: {
    borderStartStartRadius: cornerRadius.fullyRounded,
  },
  large: {
    borderStartStartRadius: cornerRadius.large,
  },
  base: {
    borderStartStartRadius: cornerRadius.base,
  },
  small: {
    borderStartStartRadius: cornerRadius.small,
  },
  none: {
    borderStartStartRadius: cornerRadius.none,
  },
});

const borderStartEndCornerRadius = stylex.create({
  fullyRounded: {
    borderStartEndRadius: cornerRadius.fullyRounded,
  },
  large: {
    borderStartEndRadius: cornerRadius.large,
  },
  base: {
    borderStartEndRadius: cornerRadius.base,
  },
  small: {
    borderStartEndRadius: cornerRadius.small,
  },
  none: {
    borderStartEndRadius: cornerRadius.none,
  },
});

const borderEndStartCornerRadius = stylex.create({
  fullyRounded: {
    borderEndStartRadius: cornerRadius.fullyRounded,
  },
  large: {
    borderEndStartRadius: cornerRadius.large,
  },
  base: {
    borderEndStartRadius: cornerRadius.base,
  },
  small: {
    borderEndStartRadius: cornerRadius.small,
  },
  none: {
    borderEndStartRadius: cornerRadius.none,
  },
});

const borderEndEndCornerRadius = stylex.create({
  fullyRounded: {
    borderEndEndRadius: cornerRadius.fullyRounded,
  },
  large: {
    borderEndEndRadius: cornerRadius.large,
  },
  base: {
    borderEndEndRadius: cornerRadius.base,
  },
  small: {
    borderEndEndRadius: cornerRadius.small,
  },
  none: {
    borderEndEndRadius: cornerRadius.none,
  },
});
