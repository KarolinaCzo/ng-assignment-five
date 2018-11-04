import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersArray: Array<number> = [];

  // This method gets the data (the inscementing numbers) emited by the event
  // in 'game-control' component and adds them to the 'numbersArray'
  onIncrementNumber(element: number) {
    this.numbersArray.push(element);
  }
}
