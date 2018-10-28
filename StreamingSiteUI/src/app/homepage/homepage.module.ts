import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './homepage.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { OwlModule } from 'ngx-owl-carousel';
import { Routes, RouterModule } from '@angular/router';
import { HomepageService } from './homepage.service';
import { NguCarouselService, NguCarouselModule } from '@ngu/carousel';



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
    VgControlsModule,
    VgOverlayPlayModule,
    NguCarouselModule
  ],
  providers: [HomepageService, NguCarouselService],
  declarations: [HomepageComponent],
  exports: [RouterModule]
})
export class HomepageModule { }

