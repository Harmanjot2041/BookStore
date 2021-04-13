import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../environments/environment';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl =environment.apiUrl+"Account";
  constructor(private http: HttpClient) { }
  tempApiUrl:any;
  SignUp(login:any)
  {
    this.tempApiUrl = this.apiUrl+ "/SignUp";
    return this.http.post(this.tempApiUrl,login);
  }
  Login(login:any)
  {
    this.tempApiUrl = this.apiUrl+ "/Login";
    return this.http.post(this.tempApiUrl,login);
    
    // setTimeout(()=>{
    //   console.log("waiting..")
    // },1000)
    
  }
  PasswordChange(ChangedDetails:any)
  {
    this.tempApiUrl = this.apiUrl+ "/PasswordChange";
    return this.http.post(this.tempApiUrl,ChangedDetails);
  }
  ForgetPassword(email:any)
  {
    this.tempApiUrl = this.apiUrl+ "/ForgetPassword";
    return this.http.post(this.tempApiUrl,email);
  }
}
