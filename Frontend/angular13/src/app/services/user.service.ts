import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createUser(user: User){
    let registerUrl = this.baseURL+'auth/signup'
    return this.httpClient.post<any>(`${registerUrl}`,user);
  }
  
  getUserDetails(uid:any){
    return this.httpClient.post<any>('http://localhost:3000/auth',{"uid":uid});
  }

    login(body:any){
    return this.httpClient.post<any>('http://localhost:3000/auth/login', body,{
      observe:'body'
    });
  }

}