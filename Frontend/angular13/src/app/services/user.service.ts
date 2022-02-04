import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  createUser(user: User){
    let registerUrl = this.baseURL+'auth/signup'
    return this.httpClient.post<any>(`${registerUrl}`,user);
  }

}
