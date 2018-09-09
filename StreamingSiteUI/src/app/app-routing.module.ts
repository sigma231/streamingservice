import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'; 
import { RecentlyaddedComponent } from './recentlyadded/recentlyadded.component';
import { DiscoverComponent } from './discover/discover.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard' 

const routes: Routes = [
  {
    path:'',
    redirectTo:  'register',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
   },
   {
     path: 'recently_added',
     component: RecentlyaddedComponent
   },
   {
     path: 'discover',
     component: DiscoverComponent
   },
   {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthguardGuard]
   },
   { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
