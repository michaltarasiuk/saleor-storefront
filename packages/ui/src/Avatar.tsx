'use client';

import {ProfileIcon} from '@repo/ui/icons/ProfileIcon';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import {useState} from 'react';

import {baseColors, borderRadius} from './tokens.stylex';

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly initials: string;
  readonly size?: keyof typeof sizeStyles;
}

export function Avatar({src, alt, size = 'base'}: AvatarProps) {
  const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>(
    'loading',
  );
  return (
    <div {...stylex.props(styles.base, sizeStyles[size])}>
      {status !== 'loaded' && <ProfileIcon />}
      {status !== 'error' && (
        <Image
          src={src}
          alt={alt}
          fill
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          {...stylex.props(status === 'loading' && styles.hidden)}
        />
      )}
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
  hidden: {
    visibility: 'hidden',
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
