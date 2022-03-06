import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { BusinessService } from 'src/app/services/business.service';
import { UserService } from 'src/app/services/user.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  data:any
  constructor(private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    AOS.init();
    console.log(localStorage.getItem("uid"));
    let uid = localStorage.getItem("uid");

    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })
  }
}
