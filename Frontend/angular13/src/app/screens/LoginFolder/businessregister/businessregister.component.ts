import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-businessregister',
  templateUrl: './businessregister.component.html',
  styleUrls: ['./businessregister.component.scss']
})
export class BusinessregisterComponent implements OnInit {

  business : Business = new Business();

  constructor(private businessService: BusinessService,  private router: Router) { }

  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate(['']);
  }
  onSubmit(){
    console.log(this.business);
    this.businessService.createBusiness(this.business).subscribe(
      response => this.goToHome(),
      error => console.error('Error!',error)
    );
  }

}
