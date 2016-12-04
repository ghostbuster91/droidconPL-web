import { Component, ContentChildren, QueryList, Input, AfterContentInit } from '@angular/core';
import { AgendaService } from './agenda.service';
import { SpeakersService } from '../speakers/speakers.service';
import { SessionsService } from '../sessions/sessions.service';

var $ = require('jquery');
var _ = require('lodash');

@Component({
  selector: 'agenda',
  template: require('./agenda.component.pug'),
  styles: [require('./agenda.component.styl').toString()]
})

export class AgendaComponent {
  agenda : Array<string>;
  agendaThursday: Array<string>;
  agendaFriday: Array<string>;
  agendaSaturday: Array<string>;
  speakers: string[] = [];
  sessions: string[] = [];

  constructor(agendaService : AgendaService, speakersService : SpeakersService, sessionsService : SessionsService){
    this.agenda = agendaService.getAgenda();
    this.agendaThursday = _.filter(this.agenda, ['dayId', 1]);
    this.agendaFriday = _.filter(this.agenda, ['dayId', 2]);
    this.agendaSaturday = _.filter(this.agenda, ['dayId', 3]);
    this.speakers = speakersService.getSpeakers();
    this.sessions = sessionsService.getSessions();
  }

  slotImg(img: string) {
    if (img) {
      return require('../../assets/images/' + img);
    } else {
      return null;
    }
  }
  getSpeaker(speakerId: number) {
    if ( speakerId ) {
      return this.speakers[speakerId - 1];
    } else {
      return null;
    }
  }
  getSpeakerImg(speakerImg: string) {
    if ( speakerImg ) {
      return require('../../assets/photos/speakers/' + speakerImg);
    } else {
      return null;
    }
  }
  getSession(sessionId: number) {
    if ( sessionId ) {
      return this.sessions[sessionId - 1];
    } else {
      return null;
    }
  }
}

@Component({
  selector: 'tabs',
  template: `
    <ul id="agenda-list">
      <li class="agenda-item" [class.active]="tab.active" *ngFor="let tab of tabs" (click)="selectTab(tab)">
        {{ tab.tabTitle }}
      </li>
    </ul>
    <ng-content></ng-content>
  `,
})
export class Tabs {
  tabs: Tab[] = [];

  addTab(tab:Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  selectTab(tab:Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true
  }
}

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  constructor(tabs: Tabs) {
    tabs.addTab(this)
  }
  @Input() tabTitle: string;
  active: any;
}

@Component({
  selector: 'agendaTable',
  template: `
  <div [innerHTML]="setContent(this.tableData)">
  </div>`
})

export class AgendaTable {
  @Input() tableData: string;
  agenda : Array<string>;

  constructor(agendaService : AgendaService){
    this.agenda = agendaService.getAgenda();
  }
  setContent(data: string) {
    if (data == '1'){
      return require('./agenda-day.component.pug');
    }
    if (data == '2'){
      return require('./agenda-day.component.pug');
    }
  }

}
