import { Component, OnInit, ViewChild, ElementRef, NgModule  } from '@angular/core';
import { TweenLite, Linear, yoyo } from 'gsap';

@Component({
  selector: 'yoyo',
  templateUrl: './yoyo.component.html',
  styleUrls: ['./yoyo.component.scss']
})
export class YoyoComponent implements OnInit {
  public repeat: number;
  public delay: number = 1;
  ngOnInit() {
  }

  playTween(event){
    let playerAnimation = TweenLite.to('.yoyo', this.delay, {left:"300px",
    repeat:4, yoyo:true});
    playerAnimation.restart();
  }

}
