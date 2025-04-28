import * as stylex from '@stylexjs/stylex';
import type {LinkProps} from 'react-aria-components';
import {Link as AriaLink} from 'react-aria-components';

import {baseColors, controlColors} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  spacing,
  typographyFontSize,
  typographyPrimary,
} from './variables/tokens.stylex';

export function Link(props: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={({isFocusVisible}) => {
        const {className = ''} = stylex.props(
          styles.base,
          isFocusVisible && styles.focusVisible
        );
        return className;
      }}>
      {props.children}
    </AriaLink>
  );
}

const styles = stylex.create({
  base: {
    color: baseColors.accent,
    fontFamily: typographyPrimary.fontFamily,
    fontSize: typographyFontSize.base,
    fontWeight: typographyPrimary.base,
    lineHeight: 1,
    textDecoration: 'none',
    borderRadius: cornerRadius.base,
    outline: 'none',
  },
  focusVisible: {
    outlineColor: controlColors.accent,
    outlineOffset: spacing.small400,
    outlineStyle: 'solid',
    outlineWidth: borderWidth.medium,
  },
});
