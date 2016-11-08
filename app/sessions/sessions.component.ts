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
  imgSrc: string = '../../assets/photos/speakers/';

  websiteIcon: string = require('../../assets/images/website.svg');
  facebookIcon: string = require('../../assets/images/facebook.svg');
  twitterIcon: string = require('../../assets/images/twitter.svg');
  githubIcon: string = require('../../assets/images/github.svg');
  linkedInIcon: string = require('../../assets/images/linkedin.svg');
  googlePlusIcon: string = require('../../assets/images/google+.svg');

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
