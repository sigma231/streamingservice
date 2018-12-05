import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecentlyaddedComponent } from './recentlyadded/recentlyadded.component';
import { DiscoverComponent } from './discover/discover.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { Passreset2Component } from './passreset2/passreset2.component';


const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: '../app/homepage/homepage.module#HomepageModule'
   },
   {
     path: 'added',
     loadChildren: '../app/recentlyadded/recentlyadded.module#RecentlyaddedModule'
   },
   {
     path: 'movies',
     loadChildren: '../app/discover/discover.module#DiscoverModule'
   },
  {
    path: 'user_list',
    loadChildren: '../app/userlist/userlist.module#UserlistModule'
  },
  {
    path: 'confirm',
    loadChildren: '../app/confirm/confirm.module#ConfirmModule' 
  },
  {
    path: 'resetpassword',
    component: PasswordResetComponent
  },
  {
    path: 'passreset2/:id',
    component: Passreset2Component
  },
   {
    path: 'register',
    loadChildren: '../app/register/register.module#RegisterModule'
    // canActivate: [AuthguardGuard]
   },

   { path: '**', redirectTo: 'register', pathMatch: 'full' },
   { path: '', redirectTo:'register', pathMatch: 'full'}
   
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
