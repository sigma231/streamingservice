import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomepageService {
  api_url: string = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  checkLoginStatus() {

  }
  getAllMedia() {
    return this.http.get(this.api_url + "/get_media_listing").map(response => {
      return response;
    })

  }
  getDiscoverMedia() {
    return this.http.get(this.api_url + "/get_trending").map(response => {
      return response;
    })
  }
  getTrendingMedia() {

  }
  postMediaProgress(media_progress: any) {
    return this.http.post(this.api_url + "/post_progress", media_progress).map(response => {
      console.log(response);
      return response;
    })
  }
  getMediaProgress(media_progress: any) {
    return this.http.post(this.api_url + "/get_progress", media_progress).map(response => {
      console.log(response);
      return response;

    })
  }
  getUserMedia(user_data){
    return this.http.post(this.api_url + "/get_user_media", user_data).map(response=> {
      console.log(response);
      return response;
    })
  } 
  getCategories(){
    return this.http.get(this.api_url + "/get_category_media").map(response => {
      console.log(response);
      return response;
    })
  }


}
