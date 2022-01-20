import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  data:any
  constructor(private api:ApiService){}
  ngOnInit(){
    this.api.getData().subscribe((data)=>{
      console.warn("data",data);
      this.data=data
    })
  }

  

}
