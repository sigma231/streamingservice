import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyaddedComponent } from './recentlyadded.component';
import { Routes, RouterModule } from  '@angular/router';

const routes: Routes = [
  {
    path: ' ',
    component: RecentlyaddedComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecentlyaddedComponent]
})
export class RecentlyaddedModule { }
