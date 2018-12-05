import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomepageService {
  api_url: string = "http://www.jaluotv.com/server/api";

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
  confirmUser(otp: any) {
    return this.http.post(this.api_url + "/confirm_code", otp).map(response => {
      console.log(response);
      return response;

    })
  }
  getUserMedia(user_data) {
    return this.http.post(this.api_url + "/get_user_media", user_data).map(response => {
      console.log(response);
      return response;
    })
  }
  getCategories() {
    return this.http.get(this.api_url + "/get_category_media").map(response => {
      console.log(response);
      return response;
    })
  }
  resetRequest(email: any) {
    console.log(email);
    return this.http.post(this.api_url + '/password_reset', email).map(response => {
      console.log(response);
      return response;
    })
  }
  resetRequest2(password: any, id) {

    password['id'] = id;
    console.log(password);
    
    return this.http.post(this.api_url + '/password_change', password).map(response => {
      console.log(response);
      return response;
    })
  }


}
