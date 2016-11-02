import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';

const appRoutes: Routes = [
  { path: 'speakers', component: SpeakersComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(
  appRoutes
);
