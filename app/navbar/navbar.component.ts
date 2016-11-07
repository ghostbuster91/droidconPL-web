import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: require('./navbar.component.pug'),
  styles: [require('./navbar.component.styl').toString()]
})

export class NavbarComponent {
  navbarLogo = require('../../assets/images/droidcon-logo-simple.png');


}
