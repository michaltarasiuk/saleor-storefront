'use client';

import * as stylex from '@stylexjs/stylex';
import type {ImageProps} from 'next/image';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {ClientGate} from './ClientGate';
import {ProfileIcon} from './icons/ProfileIcon';
import {SuspenseImage} from './SuspenseImage';
import {Text} from './Text';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

interface AvatarProps {
  readonly src: ImageProps['src'];
  readonly alt: ImageProps['alt'];
  readonly initials?: string;
  readonly size?: keyof typeof sizeStyles;
}

export function Avatar({src, alt, initials, size = 'base'}: AvatarProps) {
  const fallback = initials ? (
    <Text size={size}>{initials}</Text>
  ) : (
    <ProfileIcon aria-hidden="true" />
  );
  return (
    <div {...stylex.props(styles.base, sizeStyles[size])}>
      <ClientGate fallback={fallback}>
        {() => (
          <ErrorBoundary fallback={fallback}>
            <Suspense fallback={fallback}>
              <SuspenseImage src={src} alt={alt} fill />
            </Suspense>
          </ErrorBoundary>
        )}
      </ClientGate>
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    overflow: 'hidden',
    padding: spacing.small500,
    borderRadius: cornerRadius.fullyRounded,
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
