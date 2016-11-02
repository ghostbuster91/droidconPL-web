import { Component } from '@angular/core';
import { PartnersService } from './partners.service';

@Component({
  selector: 'partners',
  template: require('./partners.component.pug'),
  styles: [require('./partners.component.styl').toString()]
})

export class PartnersComponent {
  partners: string[] = [];

  constructor(partnersService : PartnersService) {
    this.partners = partnersService.getPartners();
  }

  partnerLogo(logo: string) {
    return require('../../assets/images/partners/' + logo);
  }
}
