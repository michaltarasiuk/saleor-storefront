'use client';

import {Trans, useLingui} from '@lingui/react/macro';
import {Avatar} from '@repo/ui/Avatar';
import {Button} from '@repo/ui/Button';
import {Container} from '@repo/ui/Container';
import {Image} from '@repo/ui/Image';
import {Link} from '@repo/ui/Link';
import {InlineStack} from '@repo/ui/Stack';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

import {Routes} from '@/consts/routes';

export function Header() {
  return (
    <header {...stylex.props(styles.header)}>
      <GlobalNav />
    </header>
  );
}

function GlobalNav() {
  const {t} = useLingui();
  return (
    <Container elementType="nav" style={styles.globalNav}>
      <Link href={Routes.home} style={styles.companyLogoLink}>
        <Image
          src="/plant-logo.png"
          alt={t`Company Logo`}
          width={112}
          height={35}
          priority
        />
      </Link>
      <InlineStack blockAligment="center" spacing="base">
        <Avatar
          src="https://avatars.githubusercontent.com/u/63648"
          alt={t`User Avatar`}
          size="large"
        />
        <Button>
          <Trans>Go to store</Trans>
        </Button>
      </InlineStack>
    </Container>
  );
}

const styles = stylex.create({
  header: {
    backgroundColor: baseColors.background,
    paddingBlock: spacing.large400,
  },
  globalNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyLogoLink: {
    flexShrink: 0,
  },
});
