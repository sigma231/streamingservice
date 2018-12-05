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
  
  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  // ]
})



export class HomepageComponent implements OnInit{
  overlayOpen: boolean = false;
  video_url: string;
  media_id: number;
  media_listing: any;
  _videoPlayer;
  dataLoadedStatus: boolean = true;
  film_progress: number;
  private carouselToken: string;
  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor(private nav: Router, private home_services: HomepageService,private carousel: NguCarouselService) {
    

  }
  ngOnInit() { 
    this.checkLogin();
    this.getAllMedia();
    
  }

  checkLogin(){
    console.log(localStorage.getItem('user_name'));
    if(!localStorage.getItem('user_name')){
      this.nav.navigate(['register']);
      
    }
    
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

  openInfoOverlay(media_id, id) {

    
    console.log(time);
    this.media_id = id
    console.log(id);
    this.overlayOpen = true;
    console.log(media_id);
    var user_id = localStorage.getItem('user_id');
    this.video_url = "http://www.jaluotv.com/server/api/video/"+ media_id;
    var progress_details = {
      'movie_Id': this.media_id,
      'user_id': user_id 
    };
    console.log(progress_details);
    console.log(progress_details);
    
    this.home_services.getMediaProgress(progress_details).subscribe(response => {
      console.log(response);
      
      this.film_progress = response[Object.keys(response).length -1].progress;
      console.log(this.film_progress);
      var video = <HTMLVideoElement>document.getElementById('singleVideo');
      video.currentTime = this.film_progress;
      
        });
    var time = localStorage.getItem(this.video_url);
    console.log(time);

    
    

  }
  getCategoryData(){
    this.home_services.getCategories().subscribe(response => {

      console.log(response);
    })
  }
  
  loadProgressData(e){
    var video = <HTMLVideoElement>document.getElementById('singleVideo');
    
    console.log("I ran");
  }
  onPlayerReady(e){
    console.log("this one ran");
     
  }
  closeInfoOverlay() {  
    var video = <HTMLVideoElement>document.getElementById('singleVideo');
    
    var time = video.currentTime;
    console.log(time);
    var video_progress_details = {
      'user_id': localStorage.getItem('user_id'),
      'movie_Id': this.media_id,
      'progress': time
    }
    this.home_services.postMediaProgress(video_progress_details).subscribe(response => {
      console.log(response);
    })
    
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
