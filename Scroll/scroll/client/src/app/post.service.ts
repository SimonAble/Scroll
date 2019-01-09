import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/posts');
  }
  createOne(post){
    return this._http.post('/posts', post);
  }
  getOne(id){
    return this._http.get(`/post/${id}`);
  }
  getUserPosts(userId){
    return this._http.get(`/posts/${userId}`);
  }

  updateOne(id, post){
    return this._http.put(`/posts/${id}`, post);
  }

  deleteOne(id){
    return this._http.delete(`/posts/${id}`);
  }

}
