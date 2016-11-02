import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.pug'),
  styles: [require('../assets/fonts/fonts.styl').toString(), require('./app.component.styl').toString()]
})

export class AppComponent {
}
