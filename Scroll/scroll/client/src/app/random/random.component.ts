import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  settingsClick = false;
  
  title = "scroll";
  cards = [];
  errors = {};
  user: any;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.thisUser();
    this.getAllCards();

    $(document).ready(function(){
      // $("html, body").animate({ scrollTop: 0 }, "slow");

      // Add post
    });
  }

  getAllCards(){
    let observable = this._postService.getAll();
    observable.subscribe( data => {
      var tempCards = data['posts']
      for (let i = tempCards.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = tempCards[i];
        tempCards[i] = tempCards[j];
        tempCards[j] = temp;
      }
      this.cards = tempCards;
      console.log(data);
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

  settings_clicked() {
    if(this.settingsClick) {
      this.settingsClick = false;
    }
    else{
      this.settingsClick = true;
    }
  }

}
