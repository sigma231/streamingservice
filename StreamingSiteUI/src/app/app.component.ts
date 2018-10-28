import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import Swal from 'sweetalert2';

import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loginButton: boolean = true;
  logged_in: boolean = false
  userName: string;
  dataLoadedStatus: boolean = true;
  
  public loading = false;
  loginForm: FormGroup;
  registerForm: FormGroup

  constructor(private auth_service: AuthService, private nav: Router) {
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    const c_password = new FormControl('', Validators.required);
    const first_name  = new FormControl('', Validators.required);
    const second_name = new FormControl('', Validators.required);

    const login_email = new FormControl('', Validators.required);
    const login_password = new FormControl('', Validators.required);
   
    
    
   
    


    this.loginForm = new FormGroup({
      login_email: login_email,
      login_password: login_password
    })

    this.registerForm = new FormGroup({
      email: email,
      password: password,
      first_name: first_name,
      second_name: second_name,
      c_password: c_password      
     })
  }
  ngOnInit() {
    
    this.checkLogin();
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

    this.loading = true;
    console.log("Event fired");
    this.loginForm.value['email'] = this.loginForm.value['login_email'];
    this.loginForm.value['password'] = this.loginForm.value['login_password'];
    console.log(this.loginForm.value);
    this.auth_service.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      if (data['success']) {
        localStorage.setItem('user_id', data['success'].user_id);
        console.log(localStorage.getItem('user_id'));
        localStorage.setItem('user_token', data['success'].token);
        localStorage.setItem('user_name', data['success'].user);
        console.log(localStorage.getItem('user_token'));
        
        this.userName = data['success'].user;
        this.loginButton = false;
        this.logged_in = true;
        Swal({
          title: 'Sign In',
          text: 'You are now signed in',
          type: 'success',
        })
        this.loading = false;
        document.getElementById('exit_button').click();
        this.nav.navigate(['home']);
      
      } else {
        console.log("failed");
        Swal({
          title: 'Log in failed',
          text: 'Invalid login credentials',
          type: 'warning',
        });
        this.loading = false;
      }
      
    });
  }
  
  checkLogin(){
    this.loading = true;
    if(localStorage.getItem('user_name')){
      this.logged_in = true;
      this.loginButton = false;
      this.userName = localStorage.getItem('user_name');
      this.loading = false;
    }
    else{
      this.logged_in = false;
      this.loading = false;
    }
  }
  logout(){
    Swal({
      title: 'Logout?',
      text: 'Are you sure you want to log out?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Keep signed in '
    }).then(result => {
      console.log(result);
     
      if(result.value){
        localStorage.removeItem('user_name');
      this.logged_in = false;
      this.loginButton = true;
      this.nav.navigate(['register']);
      }
      
    }, ()=> console.log('Stay on this page'));
    //
    
  }


}
