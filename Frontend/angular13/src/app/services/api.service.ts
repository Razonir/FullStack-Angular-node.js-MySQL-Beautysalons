import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData(){
    let url ="https://api.coinlore.net/api/tickers/";
    return this.http.get(url);
  }
}
