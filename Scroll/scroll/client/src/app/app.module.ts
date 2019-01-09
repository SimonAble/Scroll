import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { RandomComponent } from './random/random.component';


import { PostComponent } from './post/post.component';
import { UserpostComponent } from './userpost/userpost.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    RandomComponent,
    PostComponent,
    UserpostComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    UploadModule
  ],
  providers: [UserService],

  // providers: [PostService],
  // providers: [CommentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
