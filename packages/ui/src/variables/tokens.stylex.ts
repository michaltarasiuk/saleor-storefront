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
  large100: '21px',
  base: '14px',
  small100: '11px',
  small200: '9px',
  small300: '7px',
  small400: '5px',
  small500: '3px',
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

export const fontSize = stylex.defineVars({
  extraLarge: '21px',
  large: '19px',
  medium: '16px',
  base: '14px',
  small: '12px',
  extraSmall: '10px',
});

export const borderWidth = stylex.defineVars({
  extraThick: '10px',
  thick: '5px',
  medium: '2px',
  base: '1px',
});
