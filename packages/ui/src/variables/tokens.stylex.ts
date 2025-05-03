import * as stylex from '@stylexjs/stylex';

export const cornerRadius = stylex.defineVars({
  fullyRounded: stylex.types.length('36px'),
  large: stylex.types.length('10px'),
  base: stylex.types.length('5px'),
  small: stylex.types.length('2px'),
  none: stylex.types.length('0px'),
});

export const spacing = stylex.defineVars({
  large500: stylex.types.length('calc(3.8rem * 0.625)'), // 38px
  large400: stylex.types.length('calc(3.2rem * 0.625)'), // 32px
  large300: stylex.types.length('calc(2.6rem * 0.625)'), // 26px
  large200: stylex.types.length('calc(2.1rem * 0.625)'), // 21px
  large100: stylex.types.length('calc(1.7rem * 0.625)'), // 17px
  base: stylex.types.length('calc(1.4rem * 0.625)'), // 14px
  small100: stylex.types.length('calc(1.1rem * 0.625)'), // 11px
  small200: stylex.types.length('calc(0.9rem * 0.625)'), // 9px
  small300: stylex.types.length('calc(0.7rem * 0.625)'), // 7px
  small400: stylex.types.length('calc(0.5rem * 0.625)'), // 5px
  small500: stylex.types.length('calc(0.3rem * 0.625)'), // 3px
  small600: stylex.types.length('calc(0.2rem * 0.625)'), // 2px
  none: stylex.types.length('calc(0rem * 0.625)'), // 0px
});

export const negativeSpacing = stylex.defineVars({
  large200: stylex.types.length('calc(2.1rem * -0.625)'), // -21px
});

export const typographyPrimary = stylex.defineVars({
  fontFamily: 'SF Pro Text',
  base: stylex.types.integer(400),
  bold: stylex.types.integer(700),
});

export const typographySecondary = stylex.defineVars({
  fontFamily: 'SF Pro Display',
  base: stylex.types.integer(400),
  bold: stylex.types.integer(700),
});

export const typographyFontSize = stylex.defineVars({
  extraLarge: stylex.types.length('calc(2.1rem * 0.625)'), // 21px
  large: stylex.types.length('calc(1.9rem * 0.625)'), // 19px
  medium: stylex.types.length('calc(1.6rem * 0.625)'), // 16px
  base: stylex.types.length('calc(1.4rem * 0.625)'), // 14px
  small: stylex.types.length('calc(1.2rem * 0.625)'), // 12px
  extraSmall: stylex.types.length('calc(1rem * 0.625)'), // 10px
});

export const borderWidth = stylex.defineVars({
  extraThick: stylex.types.length('10px'),
  thick: stylex.types.length('5px'),
  medium: stylex.types.length('2px'),
  base: stylex.types.length('1px'),
  none: stylex.types.length('0px'),
});

export const opacity = stylex.defineVars({
  10: stylex.types.number(0.1),
  20: stylex.types.number(0.2),
  30: stylex.types.number(0.3),
  40: stylex.types.number(0.4),
  50: stylex.types.number(0.5),
  60: stylex.types.number(0.6),
  70: stylex.types.number(0.7),
  80: stylex.types.number(0.8),
  90: stylex.types.number(0.9),
});
