import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "scroll";
  user = {
    "email": '',
    "password": ''
  }
  errors = {};
  constructor(
    private _userService: UserService, 
    private _router: Router
  ) { }

  ngOnInit() {
  }
  login(){
    let observable = this._userService.getOne(this.user);
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/dashboard']);
      }
    });
  }

}
