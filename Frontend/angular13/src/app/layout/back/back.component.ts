import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  data:any
  datauser:any
  constructor(private businessService:BusinessService , private userService:UserService){}
  ngOnInit(){


    this.businessService.getData().subscribe((data)=>{
      this.data=data
    })

    this.userService.allUsers().subscribe((datauser)=>{
      this.datauser=datauser
    })
  }

  bvisibilityt(bid:string) {
    return this.businessService.bvisibilityT(bid);
  }
  bvisibilityf(bid:string) {
    return this.businessService.bvisibilityF(bid);
  }

  removeUser(uid:string) {
    return this.userService.removeuser(uid), window.location.reload();
  }


}


