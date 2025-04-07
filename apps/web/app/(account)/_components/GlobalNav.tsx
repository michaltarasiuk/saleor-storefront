import {Avatar} from '@repo/ui/Avatar';
import {Button} from '@repo/ui/Button';
import {Container} from '@repo/ui/Container';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';

import {Routes} from '@/consts/routes';

export function GlobalNav() {
  return (
    <div {...stylex.props(globalNavStyles.wrapper)}>
      <Container style={globalNavStyles.base}>
        <Link href={Routes.Home} {...stylex.props(companyLogoLinkStyles.base)}>
          <CompanyLogo />
        </Link>
        <div {...stylex.props(globalNavStyles.userActions)}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/69385846?v=4"
            alt="User Avatar"
            size="large"
          />
          <Button>Go to store</Button>
        </div>
      </Container>
    </div>
  );
}

function CompanyLogo() {
  return (
    <Image src="/plant-logo.png" alt="Company Logo" width={112} height={35} />
  );
}

const globalNavStyles = stylex.create({
  wrapper: {
    backgroundColor: baseColors.background,
  },
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: spacing.large400,
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
