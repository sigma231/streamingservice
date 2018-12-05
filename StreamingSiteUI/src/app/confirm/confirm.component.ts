import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { HomepageService } from '../homepage/homepage.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {


  otpForm: FormGroup;
  constructor(private homepageService: HomepageService, private nav: Router) { 
    const otp = new FormControl('', Validators.required);

    this.otpForm = new FormGroup({
      otp: otp
    })
  }

  ngOnInit() {
  }

  confirmCode(){
    this.homepageService.confirmUser(this.otpForm.value).subscribe(response => {
      console.log(response);
      Swal({
        title: 'Account Confirmed',
        text: 'Kindly wait as our Administrators activate your account',
        type: 'success',
      });
      this.nav.navigate(['register']);
    }, error => {
      Swal({
        title: 'Invalid PIN',
        text: 'Incorrect PIN entered please try again',
        type: 'warning',
      });
    })
  }

}
