import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { HomepageService } from '../homepage/homepage.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passreset2',
  templateUrl: './passreset2.component.html',
  styleUrls: ['./passreset2.component.scss']
})
export class Passreset2Component implements OnInit {
  id:number;
  passForm: FormGroup;
  constructor(private dataService: HomepageService, private nav:Router, private route: ActivatedRoute) {
    const password = new FormControl('', Validators.required);
    const c_password = new FormControl('', Validators.required);
   

    this.passForm = new FormGroup({
      password: password,
      c_password: c_password

    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    
    });
  }

  resetRequest(){
    this.dataService.resetRequest2(this.passForm.value, this.id).subscribe(data => {
      console.log(data);
      Swal({
        title: 'Account Reset',
        text: 'Password Reset Succeeded',
        type: 'success',
      });
      this.nav.navigate(['register']);
    },err => {
      Swal({
        title: 'Failed',
        text: 'Password Reset Failed, Non-matching passwords, Try again',
        type: 'warning',
      });
    }
    

    )
  }
}
