import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  api_url: string = "http://www.jaluotv.com/server/api"


  login(loginForm: any){
    console.log("loginForm = " + loginForm);

    return this.http.post(this.api_url+ "/login", loginForm).map(response =>{
      console.log(response);
      return response;
    })
  }
  signup(signupForm: any){
    console.log("signup Form = " + signupForm);

    return this.http.post(this.api_url + "/register", signupForm).map(response => {
      console.log(response);
      return response;
    })
  }
}
