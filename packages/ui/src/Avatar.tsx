'use client';

import {ProfileIcon} from '@repo/ui/icons/ProfileIcon';
import * as stylex from '@stylexjs/stylex';

import {baseColors, borderRadius} from './tokens.stylex';

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly initials: string;
  readonly size?: keyof typeof sizeStyles;
}

export function Avatar({size = 'base'}: AvatarProps) {
  return (
    <div {...stylex.props(styles.base, sizeStyles[size])}>
      <ProfileIcon />
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.fullyRounded,
    backgroundColor: baseColors.backgroundSubdued,
  },
});

const sizeStyles = stylex.create({
  base: {
    width: '32px',
    height: '32px',
  },
  large: {
    width: '39px',
    height: '39px',
  },
  extraLarge: {
    width: '47px',
    height: '47px',
  },
  fill: {
    width: '100%',
    height: '100%',
  },
});
