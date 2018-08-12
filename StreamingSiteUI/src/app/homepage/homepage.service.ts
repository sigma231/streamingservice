import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomepageService {
  api_url: string = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }
  
  checkLoginStatus(){}
  getAllMedia(){
    return this.http.get(this.api_url+ "/get_media_listing").map(response => {
        return response;
    })
  
  }
  getDiscoverMedia(){
    return this.http.get(this.api_url+ "/get_trending").map(response => {
      return response;
  })
  }
  getTrendingMedia(){

  }
}
