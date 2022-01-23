import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from '../model/business';
import { registerLocaleData } from '@angular/common';
import { bindCallback } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {


  private baseURL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  createBusiness(business: Business){
    let registerUrl = this.baseURL+'auth/signupbusiness'
    return this.httpClient.post<any>(`${registerUrl}`,business);
  }
  getData(){
    let url = this.baseURL + 'auth/business';
    return this.httpClient.get(url);
  }

  getOne(){
    let url = this.baseURL + 'auth/business/1';
    return this.httpClient.get(url);
  }
}
