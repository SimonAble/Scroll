import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scroll';
  users = [];
  newUser = {
    "name": ""
  }

  constructor(private _userService:UserService){}

  ngOnInit(){

  }

  andGetUsers(){
    let observable = this._userService.getUsers();
    observable.subscribe( (data) => {
      console.log(data);
      this.users = data['users'];
    });
  }

  destroyUser(user_id){
    let observable = this._userService.removeUser(user_id);
    observable.subscribe( (data) => {
      console.log(data);
      this.andGetUsers();
    });
  }

  makeUser(){
    let observable = this._userService.createUser(this.newUser);
    observable.subscribe( data => {
      console.log(data);
      this.andGetUsers();
      this.newUser = {
        "name": ""
      };
    });
  }
}
