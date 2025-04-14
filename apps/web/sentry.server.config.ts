// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://88702d75fb8078b5aedf48498e57755e@o4509151372836864.ingest.de.sentry.io/4509151532941392',
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
