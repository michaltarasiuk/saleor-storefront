import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://88702d75fb8078b5aedf48498e57755e@o4509151372836864.ingest.de.sentry.io/4509151532941392',
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
