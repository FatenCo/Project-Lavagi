import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }
  signup(obj:any){
  return this.httpClient.post<{ message: string}>(`${this.userURL}/signup`, obj);
  }
  login(obj:any){
    return this.httpClient.post<{ message: string, user: any}>(`${this.userURL}/login`, obj);
  }
  getUserById(id:any){
return this.httpClient.get<{user: any}>(`${this.userURL}/profile/${id}`);
  }
  editUser(obj:any){
    return this.httpClient.put<{ message: string}>(`${this.userURL}/editProfile`, obj);
  }
}
