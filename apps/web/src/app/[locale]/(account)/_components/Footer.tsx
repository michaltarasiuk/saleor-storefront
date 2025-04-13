'use client';

import {Trans} from '@lingui/react/macro';
import {Container} from '@repo/ui/Container';
import {Text} from '@repo/ui/Text';
import {Breakpoints} from '@repo/ui/types/breakpoints';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {borderWidth, spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

export function Footer() {
  return (
    <Container elementType="footer" style={styles.base}>
      <ul {...stylex.props(linkListStyles.list)}>
        <li>
          <Text appearance="accent">
            <Trans>Refund Policy</Trans>
          </Text>
        </li>
        <li>
          <Text appearance="accent">
            <Trans>Shipping Policy</Trans>
          </Text>
        </li>
        <li>
          <Text appearance="accent">
            <Trans>Privacy Policy</Trans>
          </Text>
        </li>
        <li>
          <Text appearance="accent">
            <Trans>Terms of Service</Trans>
          </Text>
        </li>
      </ul>
    </Container>
  );
}

const styles = stylex.create({
  base: {
    width: '100%',
    marginBlockStart: 'auto',
    borderBlockStartWidth: borderWidth.base,
    borderBlockStartStyle: 'solid',
    borderBlockStartColor: baseColors.border,
    paddingBlock: spacing.large200,
  },
});

const linkListStyles = stylex.create({
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      default: 'column',
      ['@media (width >= 40rem)' satisfies Breakpoints['Sm']]: 'row',
    },
    gap: {
      default: spacing.base,
      ['@media (width >= 40rem)' satisfies Breakpoints['Sm']]: spacing.large200,
    },
    listStyleType: 'none',
    padding: spacing.none,
  },
});
