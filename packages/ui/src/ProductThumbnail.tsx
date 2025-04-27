import * as stylex from '@stylexjs/stylex';
import type {ImageProps} from 'next/image';
import Image from 'next/image';

import {Badge} from './Badge';
import {baseColors} from './variables/colors.stylex';
import {borderWidth, cornerRadius} from './variables/tokens.stylex';

interface ProductThumbnailProps {
  readonly src: ImageProps['src'];
  readonly alt: ImageProps['alt'];
  readonly badge: number;
  readonly size?: keyof typeof sizeStyles;
}

export function ProductThumbnail({
  src,
  alt,
  badge,
  size = 'base',
}: ProductThumbnailProps) {
  return (
    <div {...stylex.props(styles.base, sizeStyles[size])}>
      <Image src={src} alt={alt} fill {...stylex.props(imageStyles.base)} />
      <div {...stylex.props(badgeStyles.base)}>
        <Badge size={size}>{badge}</Badge>
      </div>
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    flexShrink: 0,
    borderRadius: cornerRadius.base,
    borderWidth: borderWidth.base,
    borderStyle: 'solid',
    borderColor: baseColors.border,
    backgroundColor: baseColors.background,
  },
});

const sizeStyles = stylex.create({
  small: {
    width: '40px',
    height: '40px',
  },
  base: {
    width: '64px',
    height: '64px',
  },
});

const imageStyles = stylex.create({
  base: {
    borderRadius: cornerRadius.base,
  },
});

const badgeStyles = stylex.create({
  base: {
    position: 'absolute',
    right: 0,
    transform: 'translate(50%, -50%)',
  },
});
