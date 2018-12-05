import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { UserlistComponent } from './userlist.component'; 

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent

  }
]

@NgModule({
  imports: [
    CommonModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserlistComponent]
})
export class UserlistModule { }
