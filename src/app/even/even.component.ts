import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // Create an @Input: number, to hold the value of the number and then to display it in the component
  @Input()
  number;

  constructor() {}

  ngOnInit() {}
}
