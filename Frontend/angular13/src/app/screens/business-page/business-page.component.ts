import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  data:any
  constructor(private businessService:BusinessService,private route: ActivatedRoute){}
  ngOnInit(){

    const id = +this.route.snapshot.params['bid'];
    this.businessService.getOne(id).subscribe((data)=>{
      this.data=data

      
    })
  }
  
}
