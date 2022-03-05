import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "https://beauty-salons-server.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createUser(user: User){
    let registerUrl = this.baseURL+'auth/signup'
    return this.httpClient.post<any>(`${registerUrl}`,user);
  }
  
  allUsers(){
    let users = this.baseURL+'auth/users'
    return this.httpClient.get(users);
  }

  removeuser(uid:any){
    let users = this.baseURL+'auth/users/'
    return this.httpClient.delete(users+uid).subscribe(data =>{
      console.log(data);
    });
  }

  roleuser(uid:any,role:any){
    let users = this.baseURL+'auth/users/'
    return this.httpClient.delete(users+uid).subscribe(data =>{
      console.log(data);
    });
  }

  

  getUserDetails(uid:any){
    return this.httpClient.post<any>('https://beauty-salons-server.herokuapp.com/auth',{"uid":uid});
  }

  
  
    login(body:any){
    return this.httpClient.post<any>('https://beauty-salons-server.herokuapp.com/auth/login', body,{
      observe:'body'
    });
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


}
