import { Injectable } from '@angular/core';

var _ = require('lodash');

@Injectable()

export class SponsorsService{

  getSponsors() : string[]{
    return require('../../model/sponsors.json');
  }

  getByCategory(cat: string) : string[] {
    let sponsorCategory: string [] = [];
    sponsorCategory = _.filter(require('../../model/sponsors.json'), ['sponsorPackage', cat]);
    return sponsorCategory;
  }

}
