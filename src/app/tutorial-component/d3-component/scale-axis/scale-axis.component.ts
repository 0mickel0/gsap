import { Component, OnInit, ViewChild, ElementRef, NgModule  } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'scale-axis',
  templateUrl: './scale-axis.component.html',
  styleUrls: ['./scale-axis.component.scss']
})
export class ScaleAxisComponent implements OnInit {
  public rectWidth = 'San Francisco';
  public width = 300;
  public height = 300;
  public data = [100, 250, 175, 200, 120];

  ngOnInit() {
  }

}
