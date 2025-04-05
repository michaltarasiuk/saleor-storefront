'use client';

import * as stylex from '@stylexjs/stylex';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {ClientGate} from './ClientGate';
import {
  ProfileIconBase,
  ProfileIconExtraLarge,
  ProfileIconLarge,
} from './icons/ProfileIcon';
import {SuspenseImage} from './SuspenseImage';
import {baseColors, borderRadius} from './tokens.stylex';

type Size = keyof typeof sizeStyles;

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly size?: Size;
}

const DefaultSize: Size = 'base';

export function Avatar({src, alt, size = DefaultSize}: AvatarProps) {
  const profileIcon = <ProfileIcon size={size} />;
  return (
    <div {...stylex.props(styles.base, sizeStyles[size])}>
      <ClientGate fallback={profileIcon}>
        {() => (
          <ErrorBoundary fallback={profileIcon}>
            <Suspense fallback={profileIcon}>
              <SuspenseImage src={src} alt={alt} fill />
            </Suspense>
          </ErrorBoundary>
        )}
      </ClientGate>
    </div>
  );
}

interface ProfileIconProps {
  readonly size: Size;
}

function ProfileIcon({size}: ProfileIconProps) {
  switch (size) {
    case 'large':
      return <ProfileIconLarge />;
    case 'extraLarge':
      return <ProfileIconExtraLarge />;
    default:
      return <ProfileIconBase />;
  }
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
