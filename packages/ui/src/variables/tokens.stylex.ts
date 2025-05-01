import * as stylex from '@stylexjs/stylex';

export const cornerRadius = stylex.defineVars({
  fullyRounded: '36px',
  large: '10px',
  base: '5px',
  small: '2px',
  none: '0px',
});

export const spacing = stylex.defineVars({
  large500: 'calc(3.8rem * 0.625)', // 38px
  large400: 'calc(3.2rem * 0.625)', // 32px
  large300: 'calc(2.6rem * 0.625)', // 26px
  large200: 'calc(2.1rem * 0.625)', // 21px
  large100: 'calc(1.7rem * 0.625)', // 17px
  base: 'calc(1.4rem * 0.625)', // 14px
  small100: 'calc(1.1rem * 0.625)', // 11px
  small200: 'calc(0.9rem * 0.625)', // 9px
  small300: 'calc(0.7rem * 0.625)', // 7px
  small400: 'calc(0.5rem * 0.625)', // 5px
  small500: 'calc(0.3rem * 0.625)', // 3px
  small600: 'calc(0.2rem * 0.625)', // 2px
  none: 'calc(0rem * 0.625)', // 0px
});

export const negativeSpacing = stylex.defineVars({
  large200: '-21px',
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
