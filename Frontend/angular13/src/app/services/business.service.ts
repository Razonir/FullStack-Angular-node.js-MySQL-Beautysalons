import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from '../model/business';
import { registerLocaleData } from '@angular/common';
import { bindCallback, map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {


  private baseURL = "https://beauty-salons-server.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

  createBusiness(business: Business){
    let registerUrl = this.baseURL+'auth/signupbusiness'
    return this.httpClient.post<any>(`${registerUrl}`,business);
  }

  getData(){
    let url = this.baseURL + 'auth/business';
    return this.httpClient.get(url);
  }


  getOne(bid:number): Observable<Business>{
    let url = this.baseURL + 'auth/business/';
    return this.httpClient.get(url + bid).pipe(
      map((business:Business) => business)
    )
  }

    bvisibilityT(bid:any){
      let businessurl = this.baseURL+'auth/business/visibalet/'
      return this.httpClient.post<any>(`${businessurl}`,bid);
  }
    bvisibilityF(bid:any){
      return this.httpClient.post<any>('https://beauty-salons-server.herokuapp.com/auth/business/visibalef/',{"bid":bid});
  }
}
