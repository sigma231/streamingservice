import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  otpForm: FormGroup;
  constructor() { 
    const otp = new FormControl('', Validators.required);

    this.otpForm = new FormGroup({
      otp: otp
    })
  }

  ngOnInit() {
  }

}
