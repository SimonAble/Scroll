import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
    user: any;
    posts: any;

  constructor(private _postService: PostService, private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.thisUser();


  }
  thisUser(){
    let observable = this._userService.getOneById();
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
        this._router.navigate(['/']);
      }
      else {
        this.user = data["user"];
        let userId = this.user._id;
        console.log(userId);
        this.getPosts(userId);
      }
    });
  }
  getPosts(userId){
    let observable = this._postService.getUserPosts(userId);
      observable.subscribe(data => {
        if(data['status'] == "not ok"){
          this.errrors = data['errors']['errors'];
          this._router.navigate(['/']);
        }else{
          this.posts = data["posts"];
          console.log(this.posts);
        }
      });
  }

}
