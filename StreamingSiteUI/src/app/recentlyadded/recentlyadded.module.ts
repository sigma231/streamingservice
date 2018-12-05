import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyaddedComponent } from './recentlyadded.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { Routes, RouterModule } from  '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecentlyaddedComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecentlyaddedComponent]
})
export class RecentlyaddedModule { }
