import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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
    RouterModule.forRoot(routes)
  ],
  declarations: [UserlistComponent]
})
export class UserlistModule { }
