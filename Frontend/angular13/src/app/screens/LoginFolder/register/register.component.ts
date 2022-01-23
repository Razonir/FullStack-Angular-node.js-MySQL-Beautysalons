import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService,  private router: Router) { }

  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate(['']);
  }
  onSubmit(){
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(
      response => this.goToHome(),
      error => console.error('Error!',error)
    );
  }

}
