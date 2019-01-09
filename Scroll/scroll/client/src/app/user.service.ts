import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get('/users');
  }
  createUser(user){
    return this._http.post('/users', user);
  }
  // process login
  getOne(user){
    return this._http.post(`/user`, user);
  }

  // gets user's data after login
  getOneById(){
    return this._http.get(`/user`);
  }

  signOff(){
    return this._http.get('/logout');
  }
  updateOne(id, user){
    return this._http.put(`/users/${id}`, user);
  }

  removeUser(id){
    return this._http.delete(`/users/${id}`);
  }
}
