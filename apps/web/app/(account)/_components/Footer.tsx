import {baseColors} from '@repo/ui/variables/colors.stylex';
import {borderWidth} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

export function Footer() {
  return <footer {...stylex.props(styles.base)}></footer>;
}

const styles = stylex.create({
  base: {
    marginBlockStart: 'auto',
    borderBlockStartWidth: borderWidth.base,
    borderBlockStartStyle: 'solid',
    borderBlockStartColor: baseColors.border,
  },
});
