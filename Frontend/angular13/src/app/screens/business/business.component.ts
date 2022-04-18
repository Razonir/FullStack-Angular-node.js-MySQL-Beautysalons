import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  data:any
  businesscity:string =''
  itype:string =''
  type:string = ''
  constructor(private router: Router,private businessService:BusinessService,private userService:UserService){}
  ngOnInit(){
    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })
    this.type = history.state.data.name
    
  }
  
  city(icity:string){
    let len = this.businesscity.length;
    if(icity.substring(0,len)==this.businesscity){
        return true;
    }
    return false;
  }

  btype(itype:string){
    if(this.type===''){
      return false;
    }
    if(this.type===this.itype){
      return true;
    }
    return false;
  }
}


