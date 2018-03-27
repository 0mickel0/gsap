import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenLite, Linear } from 'gsap';

@Component({
  selector: 'kind-of-player',
  templateUrl: './kind-of-player.component.html',
  styleUrls: ['./kind-of-player.component.scss']
})
export class KindOfPlayerComponent implements OnInit {
  @ViewChild('cursor') cursor: ElementRef;
  public playerAnimation;

  ngOnInit() {
    this.playerAnimation = TweenLite.to(this.cursor.nativeElement, 10, {left:"665px",
      ease:Linear.easeNone});
  }
  playTween(event){
    this.playerAnimation.play();
  }
  pauseTween(event){
    this.playerAnimation.pause();
  }
  resumeTween(event){
    this.playerAnimation.resume();
  }
  reverseTween(event){
    this.playerAnimation.reverse();
  }
  play5Tween(event){
    this.playerAnimation.play(5);
  }
  reverse1Tween(event){
    this.playerAnimation.reverse(1);
  }
  seek3Tween(event){
    this.playerAnimation.seek(3);
  }
  timeScale05Tween(event){
    this.playerAnimation.timeScale(0.5);
  }
  timeScale1Tween(event){
    this.playerAnimation.timeScale(1);
  }
  timeScale2Tween(event){
    this.playerAnimation.timeScale(2);
  }
  restartTween(event){
    this.playerAnimation.restart();
  }

}
