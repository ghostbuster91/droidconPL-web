import { Injectable } from '@angular/core';

@Injectable()

export class SpeakersService{

  getSpeakers() : string[]{
    return require('../../model/speakers.json');
  }

}
