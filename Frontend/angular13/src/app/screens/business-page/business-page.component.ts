import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  data:any
  constructor(private businessService:BusinessService){}
  ngOnInit(){
    this.businessService.getOne().subscribe((data)=>{
      console.warn("data",data);
      this.data=data
    })
  }
}
