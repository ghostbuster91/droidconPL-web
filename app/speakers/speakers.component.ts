import { Component } from '@angular/core';
import { SpeakersService } from './speakers.service';

@Component({
  selector: 'speakers',
  template: require('./speakers.component.pug'),
  styles: [require('./speakers.component.styl').toString()]
})

export class SpeakersComponent {
  imgSrc: string = '../../assets/photos/speakers/';
  speakers: string[] = [];
  modal: string[] = [];

  websiteIcon: string = require('../../assets/images/website.svg');
  facebookIcon: string = require('../../assets/images/facebook.svg');
  twitterIcon: string = require('../../assets/images/twitter.svg');
  githubIcon: string = require('../../assets/images/github.svg');
  linkedInIcon: string = require('../../assets/images/linkedin.svg');
  googlePlusIcon: string = require('../../assets/images/google+.svg');

  constructor(speakersService : SpeakersService) {
    this.speakers = speakersService.getSpeakers();
  }

  speakerImg(img: string) {
    return require('../../assets/photos/speakers/' + img);
  }

  setSpeaker(speaker: any) {
    this.modal = speaker;
  }

}
