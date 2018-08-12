import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loginButton: boolean = true;
  

  loginForm: FormGroup;

  constructor(private auth_service: AuthService) {
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      email: email,
      password: password
    })


  }
  ngOnInit() {
    var $logo = $('#logo-scroll');
    $(document).scroll(function() {
      if ($(window).scrollTop() > 610) {
        $('.header-section').css('-webkit-animation', 'fadein 2s');
        $('.header-section').css('background', 'rgba(27, 30, 30, 1.0)').fadeIn();
       
    }
      else if($(window).scrollTop() > 0){
        $('.header-section').css('background', 'rgba(27, 30, 30, 0.5)');
        
      }
    });


  }
  login() {
    console.log("Event fired");
    console.log(this.loginForm.value);
    this.auth_service.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      if (data['success']) {
        localStorage.setItem('user_token', data['success'].token);
        console.log(localStorage.getItem('user_token'));
        this.loginButton = false;
        document.getElementById('exit_button').click();
      }
      else{
        console.log("Login failed. Wrong Username or Password ")
      }
    })



  }


}
