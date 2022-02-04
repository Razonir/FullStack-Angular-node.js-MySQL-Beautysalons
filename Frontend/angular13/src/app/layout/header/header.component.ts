import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDetails:any
  data:any
  constructor(private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    console.log(localStorage.getItem("uid"));
    let uid = localStorage.getItem("uid");
    this.userService.getUserDetails(uid).subscribe((data)=>{
      this.userDetails = data.userDetails;
    });


  }


  signout(){
    return localStorage.clear(),    window.location.reload();
  }
}
