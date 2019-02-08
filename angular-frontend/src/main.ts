import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/modules/root/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* 
    platformBrowserDynamic is a function used to bootstrap an Angular application.
    BrowserModule is a module that provides all kinds of services and directives one usually 
    wants to use in an Angular application like ngIf.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
