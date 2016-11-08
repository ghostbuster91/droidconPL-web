import { Component } from '@angular/core';
import { SessionsService } from './sessions.service';
import { SpeakersService } from '../speakers/speakers.service';

@Component({
  selector: 'sessions',
  template: require('./sessions.component.pug'),
  styles: [require('./sessions.component.styl').toString()]
})

export class SessionsComponent {
  sessions: string[] = [];
  speakers: string[] = [];
  modal: string[] = [];

  constructor(sessionsService : SessionsService, speakersService : SpeakersService ) {
    this.sessions = sessionsService.getSessions();
    this.speakers = speakersService.getSpeakers();
  }

  speakerImg(img: string) {
    return require('../../assets/photos/speakers/' + img);
  }

  setSpeaker(speaker: any) {
    this.modal = speaker;
  }
}
