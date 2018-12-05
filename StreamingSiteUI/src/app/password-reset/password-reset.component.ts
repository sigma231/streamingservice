import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { HomepageService } from '../homepage/homepage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {



  emailForm: FormGroup;
  constructor(private dataService: HomepageService, private nav:Router) {
    const email = new FormControl('');
    const phone_number = new FormControl('');


    this.emailForm = new FormGroup({
      email: email,
      phone_number: phone_number
    })
  }


  ngOnInit() {
  }
  resetRequest(){
    this.dataService.resetRequest(this.emailForm.value).subscribe(data => {
      console.log(data);
      Swal({
        title: 'Account Confirmed',
        text: 'Password Reset Link sent',
        type: 'success',
      });
      this.nav.navigate(['register']);
    }, err => {
      Swal({
        title: 'Account Does not Exist',
        text: 'Could not send reset link',
        type: 'warning',
      });
    }

    );
  }

}
