import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  user: any;
  truck = {};
  errors = {};

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.thisUser();

    $(document).ready(function() {

        $('img').hover(function() {
            $(this).attr('src', '../assets/img/' + $(this).attr("num") + ".gif");
        },
        function(){
            $(this).attr('src', '../assets/img/' + $(this).attr("num") + ".png");
        });
    })
  }

  thisUser(){
    let observable = this._userService.getOneById();
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
        this._router.navigate(['/']);
      }
      else {
        this.user = data["user"]
        console.log("inside settings component", this.user);
      }
    });
  }

  updateSettings(id){
    let observable = this._userService.updateOne(id, this.user);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }
      else{
        this._router.navigate(['/dashboard']);
      }
    });
  }
}
