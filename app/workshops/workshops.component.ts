import { Component } from '@angular/core';
import { SessionsService } from '../sessions/sessions.service';
import { SpeakersService } from '../speakers/speakers.service';

@Component({
  selector: 'workshops-page',
  template: require('./workshops.component.pug'),
  styles: [require('./workshops.component.styl').toString()]
})

export class WorkshopsComponent {
  IGlogo: string = require('../../assets/images/sponsors/IG-logo_400x400.png');
  workshops: string[] = [];
  speakers: string[] = [];
  modal: string[] = [];

  constructor(sessionsService : SessionsService, speakersService : SpeakersService) {
    this.workshops = sessionsService.getByType('Workshop');
    this.speakers = speakersService.getSpeakers();
  }

  speakerImg(img: string) {
    return require('../../assets/photos/speakers/' + img);
  }

  setSpeaker(speaker: any) {
    this.modal = speaker;
  }


}
