import { Component } from '@angular/core';
import { SponsorsService } from './sponsors.service';

var _ = require('lodash');

@Component({
  selector: 'sponsors',
  template: require('./sponsors.component.pug'),
  styles: [require('./sponsors.component.styl').toString()]
})

export class SponsorsComponent {
  bronzeSponsors: string[] = [];
  travelPartners: string[] = [];
  productPartners: string[] = [];

  constructor(sponsorsService : SponsorsService) {
    this.bronzeSponsors = sponsorsService.getByCategory('Bronze Sponsor');
    this.productPartners = sponsorsService.getByCategory('Product');
    this.travelPartners = sponsorsService.getByCategory('Travel');
  }

  sponsorLogo(logo: string) {
    return require('../../assets/images/sponsors/' + logo);
  }

}
