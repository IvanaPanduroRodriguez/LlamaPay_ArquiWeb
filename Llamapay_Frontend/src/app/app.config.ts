import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
<<<<<<< HEAD
    provideHttpClient(withFetch()), provideCharts(withDefaultRegisterables()), provideCharts(withDefaultRegisterables()),
=======
    provideHttpClient(withFetch()), provideCharts(withDefaultRegisterables()),
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
  ],
};
