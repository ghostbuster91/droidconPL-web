import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './main.styl';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
