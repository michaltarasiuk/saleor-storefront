import {env} from '@/env';
import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import {linguiConfigHelpers} from '@/i18n/utils';

export interface Params extends Record<string, string> {
  readonly locale: string;
  readonly channel: string;
}

const {locales} = linguiConfigHelpers;

export async function generateStaticParams() {
  const channels = await Array.fromAsync(getActiveChannels());
  const params: Params[] = [];
  for (const locale of locales) {
    params.push(...channels.map(channel => ({locale, channel})));
  }
  return params;
}

const ChannelsQueryDocument = graphql(`
  query Channels {
    channels {
      slug
      isActive
    }
  }
`);

async function* getActiveChannels() {
  const {channels} = await client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request(ChannelsQueryDocument);

  for (const channel of channels ?? []) {
    if (channel.isActive) {
      yield channel.slug;
    }
  }
}
