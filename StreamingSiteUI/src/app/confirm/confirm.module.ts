import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmComponent} from './confirm.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: ConfirmComponent

  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmComponent]
})
export class ConfirmModule { }
