'use client';

import * as stylex from '@stylexjs/stylex';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {ClientBoundary} from './ClientBoundary';
import {ProfileIcon} from './icons/ProfileIcon';
import {SuspenseImage} from './SuspenseImage';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly size?: keyof typeof avatarSizeStyles;
}

export function Avatar({src, alt, size = 'base'}: AvatarProps) {
  return (
    <div {...stylex.props(avatarStyles.base, avatarSizeStyles[size])}>
      <ClientBoundary fallback={<ProfileIcon size={size} />}>
        {() => (
          <ErrorBoundary fallback={<ProfileIcon size={size} />}>
            <Suspense fallback={<ProfileIcon size={size} />}>
              <SuspenseImage
                src={src}
                alt={alt}
                fill
                {...stylex.props(avatarImageStyles.base)}
              />
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

const avatarImageStyles = stylex.create({
  base: {
    flexShrink: 0,
  },
});
