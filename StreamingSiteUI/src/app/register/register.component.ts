import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  

})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userName = false;
  loginButton = false;
  logged_in = false; 

  constructor(private auth_service: AuthService, private nav: Router) {
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    const c_password = new FormControl('', Validators.required);
    const first_name  = new FormControl('', Validators.required);
    const second_name = new FormControl('', Validators.required);


    this.registerForm = new FormGroup({
      email: email,
      password: password,
      first_name: first_name,
      second_name: second_name,
      c_password: c_password      
     }) 
   }

  ngOnInit() {
  }
  register  (){
    console.log(this.registerForm.value);
    this.auth_service.signup(this.registerForm.value).subscribe(data=> {
      console.log(data);

      if(data['success']){
        localStorage.setItem('user_token', data['success'].token);
        console.log(localStorage.setItem('user_name', data['success'].name));
        console.log(localStorage.getItem('user_token'));
        this.userName = data['success'].user;
        this.loginButton = false;
        this.logged_in = true;
        localStorage.setItem('user_token', data['success'].token);
        localStorage.setItem('user_name', data['success'].user);
        document.getElementById('registration_exit_button').click();
        this.nav.navigate(['home']);  
       
      }
      else  
      {
        console.log("Registration Failed");
      }
    })
  }
}
