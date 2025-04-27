import * as stylex from '@stylexjs/stylex';

export const cornerRadius = stylex.defineVars({
  fullyRounded: '36px',
  large: '10px',
  base: '5px',
  small: '2px',
  none: '0px',
});

export const spacing = stylex.defineVars({
  large500: '38px',
  large400: '32px',
  large300: '26px',
  large200: '21px',
  large100: '17px',
  base: '14px',
  small100: '11px',
  small200: '9px',
  small300: '7px',
  small400: '5px',
  small500: '3px',
  small600: '2px',
  none: '0px',
});

export const typographyPrimary = stylex.defineVars({
  fontFamily: 'SF Pro Text',
  base: '400',
  bold: '700',
});

export const typographySecondary = stylex.defineVars({
  fontFamily: 'SF Pro Display',
  base: '400',
  bold: '700',
});

export const typographyFontSize = stylex.defineVars({
  extraLarge: 'calc(2.1rem * 0.625)', // 21px
  large: 'calc(1.9rem * 0.625)', // 19px
  medium: 'calc(1.6rem * 0.625)', // 16px
  base: 'calc(1.4rem * 0.625)', // 14px
  small: 'calc(1.2rem * 0.625)', // 12px
  extraSmall: 'calc(1rem * 0.625)', // 10px
});

export const borderWidth = stylex.defineVars({
  extraThick: '10px',
  thick: '5px',
  medium: '2px',
  base: '1px',
  none: '0px',
});

export const opacity = stylex.defineVars({
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
});
