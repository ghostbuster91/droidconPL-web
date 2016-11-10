import { Component } from '@angular/core';
import { SponsorsService } from './sponsors.service';

@Component({
  selector: 'sponsors',
  template: require('./sponsors.component.pug'),
  styles: [require('./sponsors.component.styl').toString()]
})

export class SponsorsComponent {
  sponsors: string[] = [];

  constructor(sponsorsService : SponsorsService) {
    this.sponsors = sponsorsService.getSponsors();
  }

  sponsorLogo(logo: string) {
    return require('../../assets/images/sponsors/' + logo);
  }

}
