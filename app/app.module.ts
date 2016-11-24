import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng2-inline-svg';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersService } from './speakers/speakers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnersService } from './partners/partners.service';
import { CodeOfConductComponent } from './otherViews/codeOfConduct.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionsService } from './sessions/sessions.service';
import { SpeakerModalComponent } from './otherViews/speakerModal.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorsService } from './sponsors/sponsors.service';
import { WorkshopsComponent } from './workshops/workshops.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    InlineSVGModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SpeakersComponent,
    NavbarComponent,
    PartnersComponent,
    CodeOfConductComponent,
    SessionsComponent,
    SpeakerModalComponent,
    SponsorsComponent,
    WorkshopsComponent
  ],
  providers: [ SpeakersService, PartnersService, SessionsService, SponsorsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
