import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  media_listing: any;
  dataLoadedStatus: boolean = true;
  category_data: any;
  overlayOpen: boolean = false;
  video_url: string;
  media_id: number;
  
  _videoPlayer;
  film_progress: number;
  constructor(private home_services: HomepageService,private nav:Router) { }

  ngOnInit() {
    this.checkLogin();
    this.getUserMedia();
  }
  checkLogin(){
    console.log(localStorage.getItem('user_name'));
    if(!localStorage.getItem('user_name')){
      this.nav.navigate(['register']);
      
    }
    
  }

  getUserMedia(){
    var user_data ={
      'user_id': localStorage.getItem('user_id')
    }

    this.home_services.getUserMedia(user_data).subscribe(response => {
      this.media_listing = response;
      console.log(response);

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
  loadProgressData(e){
    var video = <HTMLVideoElement>document.getElementById('singleVideo');
    
    console.log("I ran");
  }
  onPlayerReady(e){
    console.log("this one ran");
  }
  dataLoaded(){
    this.dataLoadedStatus = false;
  }
  getCategoryData(){
    this.home_services.getCategories().subscribe(response => {
      this.category_data = response;
    })
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

}
