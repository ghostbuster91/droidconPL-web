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
    NavbarComponent
  ],
  providers: [ SpeakersService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
