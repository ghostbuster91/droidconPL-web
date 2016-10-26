import { Component } from '@angular/core';

import './footer.styl';

@Component({
  selector: 'app-footer',
  template: require('./footer.component.pug')
})

export class FooterComponent {
  socialAssets = {
    "droidconGlobal": {
      "href": "",
      "imgSrc": "assets/DroidCon_Logo.png",
      "alt": "droidcon global logo"
    },
    "facebook": {
      "href": "https://www.facebook.com/droidconpl",
      "imgSrc": "assets/facebook.svg",
      "alt": "facebook logo"
    },
    "twitter": {
      "href": "https://twitter.com/droidconkr",
      "imgSrc": "assets/twitter.svg",
      "alt": "twitter logo"
    },
    "github": {
      "href": "https://github.com/droidconpl",
      "imgSrc": "assets/github.svg",
      "alt": "github logo"
    },
    "googlePlus": {
      "href": "https://plus.google.com/u/3/+droidconKrak%C3%B3wPL",
      "imgSrc": "assets/google+.svg",
      "alt": "Google Plus logo"
    },
    "youTube": {
      "href": "https://www.youtube.com/watch?v=Dg-dbrP9PaM&list=PLvpKlOXx1MBMfL4llJOi0VX6LcQVP0Su0",
      "imgSrc": "assets/youtube.svg",
      "alt": "YouTube logo"
    }
  };

  constructor() {

  }
}
