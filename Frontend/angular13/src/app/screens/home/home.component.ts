import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data:any
  constructor(private businessService:BusinessService){}
  ngOnInit(){
    this.businessService.getData().subscribe((data)=>{
      console.warn("data",data);
      this.data=data
    })
  }
}
