import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = "scroll";
  add_post = false;
  add_postText = false;
  settingsClick = false;

  opened_notes = false;
  opened_comment = false;
  rebloged_post = false;
  liked_post = false;

  user: any;
  errors = {};

  cards = [];

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.thisUser();
    this.getAllCards();

    console.log('made it to dashboard')
      $(document).ready(function(){
        // $("html, body").animate({ scrollTop: 0 }, "slow");


        // Add post
        $('.fa-plus').mouseover(function() {
          $('.add_post_text').css("visibility","visible");
          $('.add_post_text').hide();
          $('.add_post_text').fadeIn(400);
        });

        $('.fa-plus').mouseout(function() {
          $('.add_post_text').fadeOut(400, function(){
            $('.add_post_text').css("visibility","hidden");
          });
        });
      });
    }

  thisUser(){
    let observable = this._userService.getOneById();
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
        this._router.navigate(['/']);
      } else {
        this.user = data["user"]
      }
    });
  }
  logout(){
    let observable = this._userService.signOff();
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

  getAllCards(){
    let observable = this._postService.getAll();
    observable.subscribe( data => {
      this.cards = data['posts'];
      console.log(data);
    });
  }


//<<-----for controlling the form dropdown----->>

  settings_clicked() {
    if(this.settingsClick) {
      this.settingsClick = false;
    }
    else{
      this.settingsClick = true;
    }
  }

  add_post_clicked() {
    if(this.add_post) {
      this.add_post = false;
    }
    else{
      this.add_post = true;
    }
  }

  text_click() {
    if(this.add_postText) {
      this.add_postText = false;
    }
    else{
      this.add_postText = true;
    }
  }


//<<-----for liking, commenting, and reblogging----->>



  notes_clicked() {
    console.log("Notes Button Clicked");
  }

  comment_clicked() {
    console.log("Comments Button Clicked");
    if(this.opened_comment) {
      this.opened_comment = false;
    }
    else{
      this.opened_comment = true;
    }
  }

  reblog_clicked() {
    console.log("Reblog Button Clicked");
  }

  likes_clicked() {
    console.log("Like Button clicked");
  }


  comment_post(post_id) {

  }


}
