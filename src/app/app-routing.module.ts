import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './tutorial-component/tutorial.component';
import { DraggingComponent } from './tutorial-component/dragging/dragging.component';
import { WheelComponent } from './tutorial-component/wheel/wheel.component';
import { D3Component } from './tutorial-component/d3-component/d3.component';

const routes: Routes = [
  { path: '', redirectTo: '/tutorial', pathMatch: 'full' },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'dragging', component: DraggingComponent },
  { path: 'wheel', component: WheelComponent },
  { path: 'd3', component: D3Component },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
