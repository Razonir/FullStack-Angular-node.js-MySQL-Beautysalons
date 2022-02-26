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
  businessname:string =''
  businesscity:string =''
  constructor(private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })
  }
  
  city(icity:string){
    let len = this.businesscity.length;
    if(icity.substring(0,len)==this.businesscity){
        return true;
    }
    return false;
  }

  name(iname:string){
    if(this.businessname===''){
      return false;
    }
    let len = this.businessname.length;
    if(iname.substring(0,len)==this.businessname){
        return true;
    }
    return false;
  }
}


