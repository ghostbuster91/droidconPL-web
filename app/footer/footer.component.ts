import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: require('./footer.component.pug'),
  styles: [require('./footer.component.styl').toString()]
})

export class FooterComponent {
  socialAssets = {
    "droidconGlobal": {
      "href": "",
      "imgSrc": require("../../assets/images/DroidCon_Logo.png"),
      "alt": "droidcon global logo"
    },
    "facebook": {
      "href": "https://www.facebook.com/droidconpl",
      "imgSrc": require("../../assets/images/facebook.svg"),
      "alt": "facebook logo"
    },
    "twitter": {
      "href": "https://twitter.com/droidconkr",
      "imgSrc": require("../../assets/images/twitter.svg"),
      "alt": "twitter logo"
    },
    "github": {
      "href": "https://github.com/droidconpl",
      "imgSrc": require("../../assets/images/github.svg"),
      "alt": "github logo"
    },
    "googlePlus": {
      "href": "https://plus.google.com/u/3/+droidconKrak%C3%B3wPL",
      "imgSrc": require("../../assets/images/google+.svg"),
      "alt": "Google Plus logo"
    },
    "youTube": {
      "href": "https://www.youtube.com/watch?v=Dg-dbrP9PaM&list=PLvpKlOXx1MBMfL4llJOi0VX6LcQVP0Su0",
      "imgSrc": require("../../assets/images/youtube.svg"),
      "alt": "YouTube logo"
    }
  };
  constructor() { }

}
