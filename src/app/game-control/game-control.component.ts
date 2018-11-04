import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // The @Output decorator let's parent components (like 'app.component')
  // listen to events
  @Output()
  // We need to emit an event to let the parent component ('app.component')
  // react to changes. We're emitting the changing number.
  getIncrementingNumberValue: EventEmitter<number> = new EventEmitter<number>();

  // Created two variables to define the number and the interval
  // (how often the number is going to change)
  incrementingNumber = 0;
  interval = setInterval(() => {}, 1000);

  constructor() {}

  ngOnInit() {}

  // This method is called when 'Start' button is being clicked.
  // It increments the number and emits the event (informs the 'app.component'
  // about the changes) every second.
  onIncrementNumber() {
    this.interval = setInterval(() => {
      this.getIncrementingNumberValue.emit(this.incrementingNumber++);
    }, 1000);
  }

  // This method is called when 'Stop' button is being clicked.
  // It stops the 'interval' which increments the number and emits the event
  // (from the 'onIncrementNumber()' method).
  onStopIncrementing() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
