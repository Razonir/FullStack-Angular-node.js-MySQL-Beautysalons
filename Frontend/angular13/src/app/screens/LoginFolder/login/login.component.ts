import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { User } from '../../../model/user';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private userService: UserService,
    private router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    }  
  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate(['']);
  }
 
  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data.token);
            localStorage.setItem("uid",data.uid);
            localStorage.setItem('token', data.token);
            this.router.navigate(['/']);
          },
          error => { }
        );
    }
  }

}
