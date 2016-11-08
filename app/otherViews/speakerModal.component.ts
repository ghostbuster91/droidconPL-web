import { Component, Input } from '@angular/core';

@Component({
  selector: 'speaker-modal',
  template: require('./speakerModal.component.pug'),
  styles: [require('./speakerModal.component.styl').toString()]
})

export class SpeakerModalComponent {
  @Input() modal: string[] = [];

  imgSrc: string = '../../assets/photos/speakers/';
  websiteIcon: string = require('../../assets/images/website.svg');
  facebookIcon: string = require('../../assets/images/facebook.svg');
  twitterIcon: string = require('../../assets/images/twitter.svg');
  githubIcon: string = require('../../assets/images/github.svg');
  linkedInIcon: string = require('../../assets/images/linkedin.svg');
  googlePlusIcon: string = require('../../assets/images/google+.svg');

  constructor() { }

}
