import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { OwlCarousel } from 'ngx-owl-carousel';
import { HomepageService } from './homepage.service';

declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css',
  '../../../node_modules/video.js/dist/video-js.css',],
  encapsulation: ViewEncapsulation.None
  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  // ]
})



export class HomepageComponent implements OnInit{
  overlayOpen: boolean = false;
  video_url: string;
  media_listing: any;
  _videoPlayer;

  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor(private nav: Router, private home_services: HomepageService) {


  }
  ngOnInit() {
    
    this.getAllMedia();


  }
  
  getNewReleases() {

  }
  getAllMedia() {
    this.home_services.getAllMedia().subscribe(data => {
      this.media_listing = data;
      console.log(data);

    })

  }

  openInfoOverlay(media_id) {
    this.overlayOpen = true;
    console.log(media_id);
    this.video_url = "http://localhost:8000/api/video/"+ media_id;

  }
  closeInfoOverlay() {
    this.overlayOpen = false;
  }

}
