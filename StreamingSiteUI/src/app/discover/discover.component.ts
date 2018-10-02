import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  media_listing: any;
  dataLoadedStatus: boolean = true;
  constructor(private home_services: HomepageService) { }


  ngOnInit() {
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
