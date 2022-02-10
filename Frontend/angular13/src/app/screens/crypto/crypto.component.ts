import { Component, OnInit ,OnChanges} from '@angular/core';
import { dataapi } from 'src/app/model/dataapi';
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
      this.change();
     // this.big();
      // for(let i=0;i<this.data.data.length;i++){
      //   for(let j=0;j<this.data.data.length;j++){
      //     if(parseInt(this.data.data[i].price_usd)>parseInt(this.data.data[j].price_usd)){
      //       let temp = this.data.data[i];
      //       this.data.data[i] = this.data.data[j];
      //       this.data.data[j] = temp;

      //     }
      //   }
      // }
    })


  }

  public change()
  {
    for(let i=0;i<this.data.data.length;i++){
      for(let j=0;j<this.data.data.length;j++){
        if(parseInt(this.data.data[i].price_usd)>parseInt(this.data.data[j].price_usd)){
          let temp = this.data.data[i];
          this.data.data[i] = this.data.data[j];
          this.data.data[j] = temp;

        }
      }
    }
  }
  

  
  public big()
  {
    let arr:Array<any>=[];
    for(let i=0;i<this.data.data.length;i++){
        if(parseInt(this.data.data[i].price_usd)<parseInt("100")){
          arr.push(this.data.data[i]);
        }
        this.data=arr;
    }
  }
}
