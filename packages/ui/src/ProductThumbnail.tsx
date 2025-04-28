import * as stylex from '@stylexjs/stylex';
import type {ImageProps} from 'next/image';

import {Badge} from './Badge';
import {Image} from './Image';

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
      <Image
        src={src}
        alt={alt}
        border="base"
        borderWidth="base"
        cornderRadius="base"
        fill
      />
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

const badgeStyles = stylex.create({
  base: {
    position: 'absolute',
    right: 0,
    transform: 'translate(50%, -50%)',
  },
});
