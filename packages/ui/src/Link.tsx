import * as stylex from '@stylexjs/stylex';
import {Link as AriaLink, LinkProps} from 'react-aria-components';

import {baseColors} from './variables/colors.stylex';
import {typographyFontSize, typographyPrimary} from './variables/tokens.stylex';

export function Link(props: LinkProps) {
  return (
    <AriaLink {...props} {...stylex.props(styles.base)}>
      {props.children}
    </AriaLink>
  );
}

const styles = stylex.create({
  base: {
    fontFamily: typographyPrimary.fontFamily,
    fontWeight: typographyPrimary.base,
    fontSize: typographyFontSize.base,
    color: baseColors.accent,
    lineHeight: 1,
    textDecoration: 'none',
  },
});
