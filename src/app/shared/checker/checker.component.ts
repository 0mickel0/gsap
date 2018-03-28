import { Component, Input } from '@angular/core';

@Component({
  selector: 'checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.scss']
})

export class CheckerComponent {
  @Input() public player: string;
  constructor() { }
}
