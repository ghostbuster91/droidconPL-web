import { Component } from '@angular/core';
import { SpeakersService } from './speakers.service';

@Component({
  selector: 'speakers',
  template: require('./speakers.component.pug'),
  styles: [require('./speakers.component.styl').toString()]
})

export class SpeakersComponent {
  speakers: any;
  constructor(speakersService : SpeakersService) {
    this.speakers = speakersService.getSpeakers();
  }

}
