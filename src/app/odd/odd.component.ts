import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // Create an @Input: number, to hold the value of the number and then to display it in the component
  @Input()
  number;

  constructor() {}

  ngOnInit() {}
}
