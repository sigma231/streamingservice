
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageModule }  from './homepage/homepage.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { DiscoverComponent } from './discover/discover.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RecentlyaddedComponent } from './recentlyadded/recentlyadded.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { AuthguardGuard } from './authguard.guard';
import { LoadingModule } from 'ngx-loading';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HomepageService } from './homepage/homepage.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { Passreset2Component } from './passreset2/passreset2.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponentComponent,
    PasswordResetComponent,
    Passreset2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    MatDialogModule,
    LoadingModule,
    DeviceDetectorModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
    
  ],
  providers: [AuthService, AuthguardGuard, HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
