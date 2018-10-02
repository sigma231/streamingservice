import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { OwlCarousel } from 'ngx-owl-carousel';
import { HomepageService } from './homepage.service';
import { NguCarousel,   NguCarouselStore, NguCarouselService  } from '@ngu/carousel';

import {MatDialog, MatDialogConfig} from "@angular/material";


declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss',
  '../../../node_modules/video.js/dist/video-js.css',
  ],
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
  dataLoadedStatus: boolean = true;
  private carouselToken: string;
  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor(private nav: Router, private home_services: HomepageService,private carousel: NguCarouselService) {
    

  }
  ngOnInit() {
    
 
    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 6, lg: 6, all: 0},
      slide: 2,
      speed: 400,
      
      point: {
        visible: true
      },
      load: 1,
      
      loop: true,
    }
  
 
    
    this.getAllMedia();
    
  }
  
  getNewReleases() {

  }
  

  getAllMedia() {
    this.home_services.getAllMedia().subscribe(data => {
      this.media_listing = data;
      console.log(data);
      this.dataLoaded();
    
    })

  }

  openInfoOverlay(media_id) {

    
    console.log(time);    
    this.overlayOpen = true;
    console.log(media_id);
    this.video_url = "http://localhost:8000/api/video/"+ media_id;
    var time = localStorage.getItem(this.video_url);
    console.log(time);
    var video = <HTMLVideoElement>document.getElementById('singleVideo');
    

  }
  closeInfoOverlay() {
    var video = <HTMLVideoElement>document.getElementById('singleVideo');
    var time = video.currentTime;
    console.log(time);
    localStorage.setItem(this.video_url, time.toString());
    this.overlayOpen = false;
  }
  dataLoaded(){
    this.dataLoadedStatus = false;
  }
initDataFn(key: NguCarouselStore) {
  this.carouselToken = key.token;
}

resetFn() {
  this.carousel.reset(this.carouselToken);
}

moveToSlide() {
  this.carousel.moveToSlide(this.carouselToken, 2, false);
}




}
