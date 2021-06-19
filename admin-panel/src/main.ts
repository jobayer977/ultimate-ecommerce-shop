import '@angular/compiler';

import * as Sentry from '@sentry/angular';

import { AppModule } from './app/@core/app.module';
import { Integrations } from '@sentry/tracing';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

Sentry.init({
  dsn: 'https://63099a7d22274deba0349eaac77a8568@o871183.ingest.sentry.io/5824626',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['ishopw.herokuapp.com', environment.API_ENDPOINT],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
