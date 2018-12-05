import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';


const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent

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
  declarations: [DiscoverComponent]
})
export class DiscoverModule { }
