import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/comments');
  }
  // createOne(comment){
  //   return this._http.comment('/comments', comment);
  // }
  getOne(id){
    return this._http.get(`/comment/${id}`);
  }

  updateOne(id, comment){
    return this._http.put(`/comments/${id}`, comment);
  }

  deleteOne(id){
    return this._http.delete(`/comments/${id}`);
  }
}
