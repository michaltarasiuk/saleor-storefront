import {TextBlock} from '@repo/ui/TextBlock';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {borderWidth, spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

export function Footer() {
  return (
    <footer {...stylex.props(styles.base)}>
      <ul {...stylex.props(listStyles.base)}>
        <li>
          <TextBlock appearance="accent">Refund Policy</TextBlock>
        </li>
        <li>
          <TextBlock appearance="accent">Shipping Policy</TextBlock>
        </li>
        <li>
          <TextBlock appearance="accent">Privacy Policy</TextBlock>
        </li>
        <li>
          <TextBlock appearance="accent">Terms of Service</TextBlock>
        </li>
      </ul>
    </footer>
  );
}

const styles = stylex.create({
  base: {
    marginBlockStart: 'auto',
    borderBlockStartWidth: borderWidth.base,
    borderBlockStartStyle: 'solid',
    borderBlockStartColor: baseColors.border,
    paddingBlock: spacing.large200,
  },
});

const listStyles = stylex.create({
  base: {
    display: 'flex',
    gap: spacing.large200,
    listStyleType: 'none',
    padding: spacing.none,
  },
});
