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
  token:any

  constructor(private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })
    if(this.token!=null){
      this.token=true;
    }
    }

  signout(){
    return localStorage.clear(),    this.goToHome();
  }  
   menuShow() {
    document.getElementById("menu")?.classList.toggle("show");
  }
   menuClose() {
    document.getElementById("menu")?.classList.remove("show");
  }
  goToHome(){
    window.location.href = "https://beautysalons.netlify.app/";
    }
}
