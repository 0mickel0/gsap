import { Component, OnInit, ViewChild, ElementRef, NgModule  } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'd3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {
  public rectWidth = 100;
  public height = 300;
  public data = [100, 250, 175, 200, 120];

  ngOnInit() {
    let svg = d3.select('svg');
    let enter = svg.selectAll('rect')
      .data(this.data)
      .enter().append('rect')
      .attr('class', d => (d === 100)? 'sto': '')
      .attr('x', (d,i)=>  i * this.rectWidth)
      .attr('y', d => this.height - d)
      .attr('width', this.rectWidth)
      .attr('height', d => d)
      .attr('fill', d => (d===250) ? 'blue': '#444a8e63')
      .attr('stroke', 'white')
    console.log(enter.data())
    svg.selectAll('text')
      .data(this.data)
      .enter().append('text')
      .attr('x', (d,i)=>  i * this.rectWidth + this.rectWidth/2)
      .attr('y', d => this.height - d - 20)
      .attr('fill', 'white')
      .text(d => d)
  }

}
