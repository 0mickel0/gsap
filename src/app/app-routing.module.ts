import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './tutorial-component/tutorial.component';
import { DraggingComponent } from './tutorial-component/dragging/dragging.component';

const routes: Routes = [
  { path: '', redirectTo: '/tutorial', pathMatch: 'full' },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'dragging', component: DraggingComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
