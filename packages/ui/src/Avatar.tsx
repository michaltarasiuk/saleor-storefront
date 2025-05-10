'use client';

import * as stylex from '@stylexjs/stylex';
import dynamic from 'next/dynamic';
import type {ImageProps} from 'next/image';
import {createContext, use} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {ProfileIcon} from './icons/ProfileIcon';
import {Text} from './Text';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

const AvatarFallbackContext = createContext<AvatarFallbackProps>({});

const SuspenseImage = dynamic(
  () => import('suspense-next-image').then(module => module.SuspenseImage),
  {
    ssr: false,
    loading: function Loading() {
      return <AvatarFallback {...use(AvatarFallbackContext)} />;
    },
  }
);

interface AvatarProps extends AvatarFallbackProps {
  readonly src: ImageProps['src'];
  readonly alt: ImageProps['alt'];
}

export function Avatar({src, alt, initials, size = 'base'}: AvatarProps) {
  return (
    <AvatarFallbackContext value={{initials, size}}>
      <div {...stylex.props(styles.base, sizeStyles[size])}>
        <ErrorBoundary
          fallback={<AvatarFallback initials={initials} size={size} />}>
          <SuspenseImage src={src} alt={alt} fill />
        </ErrorBoundary>
      </div>
    </AvatarFallbackContext>
  );
}

interface AvatarFallbackProps {
  readonly initials?: string;
  readonly size?: keyof typeof sizeStyles;
}

function AvatarFallback({initials, size}: AvatarFallbackProps) {
  return initials ? (
    <Text size={size}>{initials}</Text>
  ) : (
    <ProfileIcon aria-hidden="true" />
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
