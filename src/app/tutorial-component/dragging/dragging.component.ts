import { Component, OnInit, ViewChild, ElementRef, NgModule  } from '@angular/core';
import { TweenLite, Linear, yoyo } from 'gsap';
import { field } from '../../shared/constatnts';

@Component({
  selector: 'dragging',
  templateUrl: './dragging.component.html',
  styleUrls: ['./dragging.component.scss']
})
export class DraggingComponent implements OnInit {
  public fields = field
  ngOnInit() {
  }

}
