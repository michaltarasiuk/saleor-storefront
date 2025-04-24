'use client';

import {Trans} from '@lingui/react/macro';
import {Container} from '@repo/ui/Container';
import {Link} from '@repo/ui/Link';
import type {Breakpoints} from '@repo/ui/types/breakpoints';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {borderWidth, spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

import {Routes} from '@/consts/routes';

export function Footer() {
  return (
    <Container elementType="footer" style={footerStyles.base}>
      <ul {...stylex.props(linkListStyles.list)}>
        <li>
          <Link href={Routes.RefundPolicy}>
            <Trans>Refund Policy</Trans>
          </Link>
        </li>
        <li>
          <Link href={Routes.ShippingPolicy}>
            <Trans>Shipping Policy</Trans>
          </Link>
        </li>
        <li>
          <Link href={Routes.PrivacyPolicy}>
            <Trans>Privacy Policy</Trans>
          </Link>
        </li>
        <li>
          <Link href={Routes.TermsOfService}>
            <Trans>Terms of Service</Trans>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

const footerStyles = stylex.create({
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
