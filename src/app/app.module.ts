import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial-component/tutorial.component';
import { KindOfPlayerComponent } from './tutorial-component/kind-of-player/kind-of-player.component';
import { YoyoComponent } from './tutorial-component/yoyo/yoyo.component';
import { TimelineComponent } from './tutorial-component/timeline/timeline.component';
import { DraggingComponent } from './tutorial-component/dragging/dragging.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    KindOfPlayerComponent,
    YoyoComponent,
    TimelineComponent,
    DraggingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
