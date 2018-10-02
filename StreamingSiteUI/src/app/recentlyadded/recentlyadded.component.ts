import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';

@Component({
  selector: 'app-recentlyadded',
  templateUrl: './recentlyadded.component.html',
  styleUrls: ['./recentlyadded.component.scss']
})
export class RecentlyaddedComponent implements OnInit {
  media_listing: any;
  dataLoadedStatus: boolean = true;
  constructor(private home_services: HomepageService) { }

  ngOnInit() {
    this.getAllMedia();

  }
  getAllMedia() {
    this.home_services.getAllMedia().subscribe(data => {
      this.media_listing = data;
      console.log(data);
      this.dataLoaded();
    
    })

  }
  dataLoaded(){
    this.dataLoadedStatus = false;
  }

}
