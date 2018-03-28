import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenLite, Quart } from 'gsap';
import Draggable from 'gsap/Draggable';

@Component({
  selector: 'wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {
  public rotationSnap  = 90;
  ngOnInit() {
    Draggable.create('.wrapper', {
      type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable!
      throwProps:true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
      snap(endValue) {
        console.log('12');
        return Math.round(endValue / this.rotationSnap) * this.rotationSnap;
      }
    });
  }
  snapP(event){
    console.log(event);
    console.log('123');
  }
}
