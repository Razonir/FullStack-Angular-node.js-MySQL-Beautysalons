import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public user = "";
  public email = "";
  public password = "";

  constructor() { }

  ngOnInit(): void {
    
  }
  open(){
    alert(this.user);
  }
}
