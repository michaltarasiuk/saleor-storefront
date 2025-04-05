'use client';

import * as stylex from '@stylexjs/stylex';
import {Suspense} from 'react';

import {ProfileIcon} from './icons/ProfileIcon';
import {SuspenseImage} from './SuspenseImage';
import {baseColors, borderRadius} from './tokens.stylex';

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly size?: keyof typeof sizeStyles;
}

export function Avatar({src, alt, size = 'base'}: AvatarProps) {
  return (
    <div {...stylex.props(styles.base, sizeStyles[size])}>
      <Suspense fallback={<ProfileIcon />}>
        <SuspenseImage src={src} alt={alt} fill />
      </Suspense>
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
});
