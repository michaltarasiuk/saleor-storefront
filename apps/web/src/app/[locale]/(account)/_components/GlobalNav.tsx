'use client';

import {Trans, useLingui} from '@lingui/react/macro';
import {Avatar} from '@repo/ui/Avatar';
import {Button} from '@repo/ui/Button';
import {Container} from '@repo/ui/Container';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';

import {Routes} from '@/consts/routes';

export function GlobalNav() {
  const {t} = useLingui();
  return (
    <Container elementType="nav" style={globalNavStyles.base}>
      <Link href={Routes.Home} {...stylex.props(companyLogoLinkStyles.base)}>
        <Image
          src="/plant-logo.png"
          alt={t`Company Logo`}
          width={112}
          height={35}
        />
      </Link>
      <div {...stylex.props(globalNavStyles.userActions)}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/63648"
          alt={t`User Avatar`}
          size="large"
        />
        <Button>
          <Trans>Go to store</Trans>
        </Button>
      </div>
    </Container>
  );
}

const globalNavStyles = stylex.create({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.large200,
  },
});

const companyLogoLinkStyles = stylex.create({
  base: {
    flexShrink: 0,
  },
});
