
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

import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiscoverComponent,
    UserlistComponent,
    RecentlyaddedComponent,
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    HomepageModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
