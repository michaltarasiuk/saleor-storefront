import {Avatar} from '@repo/ui/Avatar';
import {Container} from '@repo/ui/Container';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';

import {Routes} from '@/consts/routes';

export function GlobalNav() {
  return (
    <Container tag="nav" style={globalNavStyles.base}>
      <Link href={Routes.Home} {...stylex.props(companyLogoLinkStyles.base)}>
        <CompanyLogo />
      </Link>
      <Avatar
        src="https://avatars.githubusercontent.com/u/69385846?v=4"
        alt="User Avatar"
        size="large"
      />
    </Container>
  );
}

function CompanyLogo() {
  return (
    <Image src="/plant-logo.png" alt="Company Logo" width={112} height={35} />
  );
}

const globalNavStyles = stylex.create({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: '32px',
  },
});

const companyLogoLinkStyles = stylex.create({
  base: {
    flexShrink: 0,
  },
});
