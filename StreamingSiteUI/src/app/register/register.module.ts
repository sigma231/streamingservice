import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import  { RegisterComponent } from './register.component';
import { VgCoreModule } from 'videogular2/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './confirm/confirm.component';



const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,  
    RouterModule.forChild(routes),
    SweetAlert2Module
  ],
  declarations: [RegisterComponent, ConfirmComponent]
})
export class RegisterModule { }
