import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],


})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userName = false;
  loginButton = false;
  logged_in = false;
  trailer_video: boolean = false;
  video_url;
  constructor(private auth_service: AuthService, private nav: Router) {
    const email = new FormControl('');
    const password = new FormControl('', Validators.required);
    const phone_number = new FormControl('', Validators.required);
    const c_password = new FormControl('', Validators.required);
    const first_name = new FormControl('', Validators.required);
    const second_name = new FormControl('', Validators.required);


    this.registerForm = new FormGroup({

      password: password,
      phone_number: phone_number,
      email: email,
      first_name: first_name,
      second_name: second_name,
      c_password: c_password
    })
  }

  ngOnInit() {
    this.checkLogin();
  }
  checkLogin() {
    if (localStorage.getItem('user_name')) {
      this.logged_in = true;
      this.loginButton = false;
      this.nav.navigate(['home']);

    }
    
  }
  register() {
    console.log(this.registerForm.value);

    this.auth_service.signup(this.registerForm.value).subscribe(data => {
      console.log(data);

      if (data['token']) {
        Swal({
          title: 'Sign Up is Successful',
          text: 'Your account has been created',
          type: 'success',
        });
        this.nav.navigate(['confirm']);
        // localStorage.setItem('user_token', data['token']);
        // console.log(localStorage.setItem('user_name', data['success'].name));
        // console.log(localStorage.getItem('user_token'));
        // this.userName = data['success'].user;
        // this.loginButton = false;
        // this.logged_in = true;
        // localStorage.setItem('user_token', data['success'].token);
        // localStorage.setItem('user_name', data['success'].user);


        this.nav.navigate(['confirm']);

      }
      else {


        Swal({
          title: 'Sign Up has Failed',
          text: 'Registration Details incorrectly entered or Account already exists',
          type: 'warning',
        });

      }
    });
  }
}
