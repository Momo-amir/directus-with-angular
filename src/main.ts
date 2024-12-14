import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    { provide: 'environment', useValue: environment },
    provideHttpClient(withInterceptorsFromDi()),
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));
