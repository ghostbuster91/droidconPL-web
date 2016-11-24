import { Component } from '@angular/core';

@Component({
  selector: 'workshops-page',
  template: require('./workshops.component.pug'),
  styles: [require('./workshops.component.styl').toString()]
})

export class WorkshopsComponent {
  constructor() {}

  IGlogo: string = require('../../assets/images/sponsors/IG-logo_400x400.png');

}
