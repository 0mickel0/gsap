import { Component, OnInit, ViewChild, ElementRef, NgModule  } from '@angular/core';
import { TweenLite, Linear, yoyo, TimelineLite,Back, staggerFrom } from 'gsap';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public someRange = 1;
  public t1 = new TimelineLite({onUpdate:()=>{
    this.someRange = Math.round(this.t1.progress() * 100);
  }});
  ngOnInit() {
    this.t1.from('.brick1', 0.3, {left:"-=60px", ease:Back.easeOut})
      .from('.brick2', 0.3, {width:"0px", alpha:0}, "-=0.2")
      .staggerFrom(['.brick3','.brick4','.brick5','.brick6'], 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2)
  }

  restartTween(){
    this.t1.restart();
  }

  onChange($event){
    this.t1.progress($event/100)
  }

}
