import * as stylex from '@stylexjs/stylex';
import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components';

import {baseColors, controlColors} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  spacing,
  typographyFontSize,
  typographyPrimary,
} from './variables/tokens.stylex';

interface LinkProps extends Omit<AriaLinkProps, 'style'> {
  readonly style?: stylex.StyleXStyles;
}

export function Link({style, ...props}: LinkProps) {
  return (
    <AriaLink
      className={({isFocusVisible}) => {
        const {className = ''} = stylex.props(
          style,
          styles.base,
          isFocusVisible && styles.focusVisible
        );
        return className;
      }}
      {...props}>
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
