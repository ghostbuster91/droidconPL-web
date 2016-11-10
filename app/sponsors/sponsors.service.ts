import { Injectable } from '@angular/core';

@Injectable()

export class SponsorsService{

  getSponsors() : string[]{
    return require('../../model/sponsors.json');
  }

}
