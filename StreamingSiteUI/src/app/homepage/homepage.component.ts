import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';
import {OwlCarousel} from 'ngx-owl-carousel';

declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  // ]
})


export class HomepageComponent implements OnInit {
  overlayOpen: boolean = false;

  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor(private nav: Router) { 
    
   }
  ngOnInit() {
    $(document).ready(function() {
      $('#myCarousel').carousel({
    interval: 10000
      })
  });
    
  }

  openInfoOverlay(media_id){
    this.overlayOpen = true;
  }
  closeInfoOverlay(){
    this.overlayOpen = false;
  }

}
