import { Component, Output, EventEmitter } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
  };

  @Output() selectDate = new EventEmitter();
  
  constructor() {
    console.log('Hello CalendarComponent Component');
  }

  onChange($event) {
    this.selectDate.emit($event.format());
  }

}
