import { Injectable } from '@angular/core';

@Injectable()

export class AgendaService{

  getAgenda() : string[]{
    return require('../../model/agenda.json');
  }

}
