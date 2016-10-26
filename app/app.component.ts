import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.pug'),
  styles: [require('./app.component.styl').toString()]
})

export class AppComponent { }
