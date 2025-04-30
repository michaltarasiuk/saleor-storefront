import {env} from '@/env';
import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import {linguiConfigHelpers} from '@/i18n/config';

export interface Params extends Record<string, string> {
  readonly locale: string;
  readonly channel: string;
}

const {locales} = linguiConfigHelpers;

export async function generateStaticParams(): Promise<Params[]> {
  const activeChannels = await getActiveChannels();
  return activeChannels.flatMap(channel =>
    locales.map(locale => ({locale, channel}))
  );
}

const ChannelsQueryDocument = graphql(`
  query Channels {
    channels {
      slug
      isActive
    }
  }
`);

async function getActiveChannels() {
  const {channels} = await client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request(ChannelsQueryDocument);

  return (channels ?? [])
    .filter(channel => channel.isActive)
    .map(channel => channel.slug);
}
