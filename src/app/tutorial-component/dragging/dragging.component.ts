import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, NgModule  } from '@angular/core';
import { TweenLite } from 'gsap';
import Draggable from 'gsap/Draggable';
import { field } from '../../shared/constatnts';

@Component({
  selector: 'dragging',
  templateUrl: './dragging.component.html',
  styleUrls: ['./dragging.component.scss']
})
export class DraggingComponent implements OnInit {
  public fields = field;
  ngOnInit() {
    Draggable.create('.moveAble', {
      bounds: '.container-wrapper',
      edgeResistance: 1,
      dragResistance: .15,
      type: 'x,y'
    });
    Draggable.create('.block', {
      bounds: '.field',
      edgeResistance: 1,
      dragResistance: .15,
      type: 'x,y'
    });
  }
}
