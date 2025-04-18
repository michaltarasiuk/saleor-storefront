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
  extraLarge: 'calc(2.1rem * 0.625)',
  large: 'calc(1.9rem * 0.625)',
  medium: 'calc(1.6rem * 0.625)',
  base: 'calc(1.4rem * 0.625)',
  small: 'calc(1.2rem * 0.625)',
  extraSmall: 'calc(1rem * 0.625)',
});

export const borderWidth = stylex.defineVars({
  extraThick: '10px',
  thick: '5px',
  medium: '2px',
  base: '1px',
  none: '0px',
});

export const opacity = stylex.defineVars({
  25: '0.25',
  50: '0.5',
});
