
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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiscoverComponent,
    UserlistComponent,
    RecentlyaddedComponent,
    UserprofileComponent,
    DialogComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    HomepageModule,
    MatDialogModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
    
  ],
  providers: [AuthService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
