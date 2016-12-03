import { Injectable } from '@angular/core';
var _ = require('lodash');
@Injectable()

export class SessionsService{

  getSessions() : string[]{
    return require('../../model/sessions.json');
  }

  getByType(sessionType: string) : string[] {
    let sessionsByType: string[] = [];
    sessionsByType = _.filter(require('../../model/sessions.json'), ['sessionType', sessionType]);
    return sessionsByType;
  }

}
