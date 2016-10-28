import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersService } from './speakers/speakers.service';

@NgModule({
  imports:      [
    NgbModule.forRoot(),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    SpeakersComponent
  ],
  providers: [ SpeakersService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
