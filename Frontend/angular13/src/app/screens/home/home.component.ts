import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { BusinessService } from 'src/app/services/business.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  userDetails:any
  data:any
  constructor(private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    console.log(localStorage.getItem("uid"));
    let uid = localStorage.getItem("uid");
    this.userService.getUserDetails(uid).subscribe((data)=>{
      this.userDetails = data.userDetails;
    });
    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })
  }
}
