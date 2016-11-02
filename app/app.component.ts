import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, NavigationEnd } from '@angular/router';
var $ = require('jquery');

@Component({
  selector: 'my-app',
  template: require('./app.component.pug'),
  styles: [require('../assets/fonts/fonts.styl').toString(), require('./app.component.styl').toString()]
})

export class AppComponent {
  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
}
