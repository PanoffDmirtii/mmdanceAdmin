import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  calendarPlugins = [dayGridPlugin, interactionPlugin];

  calendarEvents = [
    { title: 'jhagsdfhgasjdgfj', start: '2020-01-08' }
  ];

  constructor() { }

  handleDateClick(arg) {
    console.log(arg.dateStr);
    console.log(arg.view);
  }


  addEvent() {
    this.calendarEvents = this.calendarEvents.concat(
    { title: 'event 2', start: '2019-04-02' }
    );
  }

  modifyTitle(eventIndex, newTitle) {
    const calendarEvents = this.calendarEvents.slice(); // a clone
    const singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }

}
