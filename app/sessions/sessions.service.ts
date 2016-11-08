import { Injectable } from '@angular/core';

@Injectable()

export class SessionsService{

  getSessions() : string[]{
    return require('../../model/sessions.json');
  }

}
