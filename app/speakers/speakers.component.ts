import { Component } from '@angular/core';
import { SpeakersService } from './speakers.service';
import { SpeakerModalComponent } from '../otherViews/speakerModal.component';

@Component({
  selector: 'speakers',
  template: require('./speakers.component.pug'),
  styles: [require('./speakers.component.styl').toString()]
})

export class SpeakersComponent {
  speakers: string[] = [];
  modal: string[] = [];

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
