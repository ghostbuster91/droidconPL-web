import { Injectable } from '@angular/core';

@Injectable()

export class PartnersService{

  getPartners() : string[]{
    return require('../../model/partners.json');
  }
 
}
