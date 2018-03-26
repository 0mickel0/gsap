import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenLite, Quart } from 'gsap';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  @ViewChild('box1') left: ElementRef;
  @ViewChild('box2') ease: ElementRef;
  @ViewChild('box31') delayTopLine: ElementRef;
  @ViewChild('box3') delay: ElementRef;
  @ViewChild('box4') color: ElementRef;
  @ViewChild('box5') from: ElementRef;
  @ViewChild('updateOutput') updateOutput: ElementRef;
  @ViewChild('completeOutput') completeOutput: ElementRef;
  public updateCount = 0;
  public updateOutputValue : number;
  public completeOutputValue = '123';

  ngOnInit() {
    TweenLite.to(this.left.nativeElement, 3, {left:600});
    TweenLite.to(this.ease.nativeElement,3, {left:"600px",ease:Quart.easeOut});
    TweenLite.to(this.delayTopLine.nativeElement, 2, {width:"660px"});
    TweenLite.to(this.delay.nativeElement, 2, {left:"600px", delay:2.5});
    TweenLite.to(this.color.nativeElement, 2, {left:"600px", backgroundColor:"white", color:"#ff5722"});
    TweenLite.from(this.from.nativeElement, 6, {opacity:0, left:"600px"});
  }

  changePosition(event){
    let increase;
    (parseInt(event.target.style.left) <= 600 && parseInt(event.target.style.left) > 0)?increase = '-=600px':increase = '+=600px';
    TweenLite.to(event.target, 0.5, {left:increase});
  }

  getStatus(event){
    TweenLite.to(event.target, 0.3, {left:"0px"}),
    TweenLite.to(event.target, 2, {left:"300px", onUpdate: this.updateHandler(), onComplete: this.completeHandler, onCompleteParams:["animation complete!"], delay:0.3});
  }

  updateHandler(){
    this.updateCount++;
    console.log('tick');
  }

  completeHandler(message){
    this.completeOutputValue = message;
    console.log(message);
  }

}
