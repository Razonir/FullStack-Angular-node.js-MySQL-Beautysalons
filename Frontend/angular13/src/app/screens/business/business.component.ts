import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  data:any
  constructor(private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })
  }
}


