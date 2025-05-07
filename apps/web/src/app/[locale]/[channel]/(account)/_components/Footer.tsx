'use client';

import {Trans} from '@lingui/react/macro';
import type {ViewportInlineSizes} from '@repo/ui/consts/responsive';
import {Link} from '@repo/ui/Link';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {borderWidth, spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

import {Routes} from '@/consts/routes';

export function Footer() {
  return (
    <footer {...stylex.props(footerStyles.base)}>
      <ul {...stylex.props(linkListStyles.list)}>
        <li>
          <Link href={Routes.refundPolicy}>
            <Trans>Refund Policy</Trans>
          </Link>
        </li>
        <li>
          <Link href={Routes.shippingPolicy}>
            <Trans>Shipping Policy</Trans>
          </Link>
        </li>
        <li>
          <Link href={Routes.privacyPolicy}>
            <Trans>Privacy Policy</Trans>
          </Link>
        </li>
        <li>
          <Link href={Routes.termsOfService}>
            <Trans>Terms of Service</Trans>
          </Link>
        </li>
      </ul>
    </footer>
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
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]: 'row',
    },
    gap: {
      default: spacing.base,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        spacing.large200,
    },
    listStyleType: 'none',
    padding: spacing.none,
  },
});
