import { Component } from '@angular/core';
import { SpeakersComponent } from '../speakers/speakers.component';
import { PartnersComponent } from '../partners/partners.component';
import { SpeakersService } from '../speakers/speakers.service';

@Component({
  selector: 'home-page',
  template: require('./home.component.pug'),
  styles: [require('./home.component.styl').toString(), require('../speakers/speakers.component.styl').toString()]
})

export class HomeComponent {
  mainBackgroundImg: string = require('../../assets/images/droidconKraków2016.png');
  calendarIcon: string = require('../../assets/images/calendar.png');
  pinIcon: string = require('../../assets/images/location.png');
  learnIcon: string = require('../../assets/images/learn_button.png');
  teachIcon: string = require('../../assets/images/teach_button.png');
  supportIcon: string = require('../../assets/images/support_button.png');
  speakerPreview: string[] = [];
  constructor(speakersService : SpeakersService) {
    this.speakerPreview = speakersService.getSpeakersPreview();
  }
  speakerPreviewImg(img: string) {
    return require('../../assets/photos/speakers/' + img);
  }
}
