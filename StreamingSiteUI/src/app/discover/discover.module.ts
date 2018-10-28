import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover.component';


const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent

  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiscoverComponent]
})
export class DiscoverModule { }
