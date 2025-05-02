'use client';

import * as stylex from '@stylexjs/stylex';
import NextImage, {type ImageProps as NextImageProps} from 'next/image';
import {use} from 'react';

import {
  ImageGroupGridContext,
  ImageGroupInlineStackContext,
} from './ImageGroup';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import type {AccessibilityRole} from './types/accessibility';
import {baseColors} from './variables/colors.stylex';
import {negativeSpacing} from './variables/tokens.stylex';

interface ImageProps extends NextImageProps {
  readonly accessibilityRole?: Extract<AccessibilityRole, 'decorative'>;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly cornderRadius?: CornerRadius;
}

export function Image({
  accessibilityRole,
  border = 'none',
  borderWidth = 'base',
  cornderRadius = 'none',
  ...props
}: ImageProps) {
  const grid = use(ImageGroupGridContext);
  const inlineStack = use(ImageGroupInlineStackContext);

  const nextImage = (
    <NextImage
      role={accessibilityRole}
      {...props}
      {...stylex.props(
        imageStyles.base,
        inlineStack && imageStyles.inlineStack,
        getBorderStyleStyles(border),
        getBorderWidthStyles(borderWidth),
        getCornerRadiusStyles(cornderRadius)
      )}
    />
  );
  if (!grid) {
    return nextImage;
  }
  return <div {...stylex.props(containerStyles.base)}>{nextImage}</div>;
} 

const imageStyles = stylex.create({
  base: {
    borderColor: baseColors.border,
  },
  inlineStack: {
    ':not(:first-of-type)': {
      marginInlineStart: negativeSpacing.large200,
    },
  },
});

const containerStyles = stylex.create({
  base: {
    position: 'relative',
  },
});
