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
  category_data:any;
  constructor(private home_services: HomepageService) { }


  ngOnInit() {
    this.getCategoryData();
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
  getCategoryData(){
    this.home_services.getCategories().subscribe(response => {
      this.category_data = response;
    })
  }


}
