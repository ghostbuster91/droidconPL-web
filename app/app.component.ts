import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SpeakersComponent } from './speakers/speakers.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.pug'),
  styles: [require('./app.component.styl').toString()]
})

export class AppComponent {

  mainBackgroundImg: string = require('../assets/images/droidconKraków2016.png');
  calendarIcon: string = require('../assets/images/calendar.png');
  pinIcon: string = require('../assets/images/location.png');
  learnIcon: string = require('../assets/images/learn_button.png');
  teachIcon: string = require('../assets/images/teach_button.png');
  supportIcon: string = require('../assets/images/support_button.png');

}
