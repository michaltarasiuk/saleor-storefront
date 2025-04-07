'use client';

import * as stylex from '@stylexjs/stylex';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {ClientBoundary} from './ClientBoundary';
import {ProfileIcon} from './icons/ProfileIcon';
import {SuspenseImage} from './SuspenseImage';
import {TextBlock} from './TextBlock';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly initials?: string;
  readonly size?: keyof typeof avatarSizeStyles;
}

export function Avatar({src, alt, initials, size = 'base'}: AvatarProps) {
  const fallback = initials ? (
    <TextBlock>{initials}</TextBlock>
  ) : (
    <ProfileIcon size={size} />
  );
  return (
    <div {...stylex.props(avatarStyles.base, avatarSizeStyles[size])}>
      <ClientBoundary fallback={fallback}>
        {() => (
          <ErrorBoundary fallback={fallback}>
            <Suspense fallback={fallback}>
              <SuspenseImage src={src} alt={alt} fill />
            </Suspense>
          </ErrorBoundary>
        )}
      </ClientBoundary>
    </div>
  );
}

const avatarStyles = stylex.create({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: cornerRadius.fullyRounded,
    backgroundColor: baseColors.backgroundSubdued,
  },
});

const avatarSizeStyles = stylex.create({
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
