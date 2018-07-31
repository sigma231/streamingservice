import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './homepage.component';
import { OwlModule } from 'ngx-owl-carousel';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    OwlModule,
    RouterModule.forChild(routes)
  ],

  declarations: [HomepageComponent],
  exports: [RouterModule]
})
export class HomepageModule { }
