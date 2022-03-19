import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {TokenService} from "../token.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private fb : FormBuilder
  ) { }

  loginForm:any = this.fb.group({
    email:['',[/*Validators.email,*/Validators.required]],
    password:['', Validators.required]
  })
  ngOnInit(): void {
  }

  logIn(): void {
    this.authService.login({email: this.loginForm.value.email, password: this.loginForm.value.password}).subscribe(res => {
      this.tokenService.saveAccessToken(res.access_token);
      this.tokenService.saveRefreshToken(res.refresh_token);
      //console.log(/*this.authService.getUserData()*/ 'USER')
      //console.log(res.access_token)
    })
  }
}
