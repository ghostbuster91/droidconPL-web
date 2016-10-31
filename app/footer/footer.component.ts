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
    }
  };
  constructor() { }

}
