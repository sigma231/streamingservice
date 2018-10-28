import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecentlyaddedComponent } from './recentlyadded/recentlyadded.component';
import { DiscoverComponent } from './discover/discover.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard';


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
    path: 'register',
    loadChildren: '../app/register/register.module#RegisterModule',
    canActivate: [AuthguardGuard]
   },
   { path: '**', redirectTo: 'home', pathMatch: 'full' }
   
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
