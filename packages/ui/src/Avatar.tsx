'use client';

import * as stylex from '@stylexjs/stylex';
import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {ClientBoundary} from './ClientBoundary';
import {ProfileIcon} from './icons/ProfileIcon';
import {SuspenseImage} from './SuspenseImage';
import {Text} from './Text';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

interface AvatarProps {
  readonly src: string;
  readonly alt: string;
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

const styles = stylex.create({
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

const sizeStyles = stylex.create({
  base: {
    width: '32px',
    height: '32px',
    padding: '3.711px',
  },
  large: {
    width: '39px',
    height: '39px',
    padding: '3.656px',
  },
  extraLarge: {
    width: '47px',
    height: '47px',
    padding: '3.692px',
  },
});
