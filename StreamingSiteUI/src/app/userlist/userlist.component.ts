import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  media_listing: any;
  constructor(private data_Service: HomepageService) { }

  ngOnInit() {
    this.getUserMedia();
  }

  getUserMedia(){
    var user_data ={
      'user_id': localStorage.getItem('user_id')
    }

    this.data_Service.getUserMedia(user_data).subscribe(response => {
      this.media_listing = response;
      console.log(response);

    })

  }

}
