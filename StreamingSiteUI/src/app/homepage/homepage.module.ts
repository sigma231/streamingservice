import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './homepage.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { OwlModule } from 'ngx-owl-carousel';
import { Routes, RouterModule } from '@angular/router';
import { HomepageService } from './homepage.service';



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
    RouterModule.forChild(routes),
    VgCoreModule,
    VgControlsModule
  ],
  providers: [HomepageService],
  declarations: [HomepageComponent],
  exports: [RouterModule]
})
export class HomepageModule { }

