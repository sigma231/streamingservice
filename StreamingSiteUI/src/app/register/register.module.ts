import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import  { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
