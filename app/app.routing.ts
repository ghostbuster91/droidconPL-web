import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';
import { CodeOfConductComponent } from './otherViews/codeOfConduct.component';

const appRoutes: Routes = [
  { path: 'codeOfConduct', component: CodeOfConductComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
