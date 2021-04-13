import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
 import {Router} from '@angular/router'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public service: AccountService, private fb: FormBuilder,private router: Router) { }

  SignInForm: FormControl|any;
  ngOnInit(): void {
    this.SignInForm = this.fb.group(
      {
        Email: ['', Validators.required],
        Password: ['', Validators.required],
        
      }
      
    )
    if(localStorage.getItem('Token')!= null)
        this.router.navigate(['/UserDashboard']);
  }
submitting:boolean|any;
  token:any;
  error:any;
  isError = false;
  ForgetPassword()
  {
    this.isError = false;
    if(this.SignInForm.value.Email == '')
    {
      this.isError = true;
      this.error = "Please atleast enter email :-( ";
      return;
    }
    if(this.SignInForm.value.Email.charAt(this.SignInForm.value.Email.length-4) != "."||this.SignInForm.value.Email.charAt(this.SignInForm.value.Email.length-10) != "@")
    {
      this.error = "Invalid Email";
      this.isError = true;
      return;
    }
    let obj:any = {
      email:this.SignInForm.value.Email
    }
    this.service.ForgetPassword(obj).subscribe(
      res=>{
        this.isError = true;
      this.error = "Please check your email to change password ";
      },
      err=>{
        this.isError = true;
        this.error = err.error.message;
      }
    )
  }
  onSubmits()
  {
    this.submitting = true;
    this.isError = false;
    if(this.SignInForm.value.Email.charAt(this.SignInForm.value.Email.length-4) != "."||this.SignInForm.value.Email.charAt(this.SignInForm.value.Email.length-10) != "@")
  {
    this.error = "Invalid Email";
    this.isError = true;
    this.submitting= false;
    return;
  }
    var login = this.SignInForm.value;
    this.service.Login(login).subscribe(res=>{
      this.token = res;
      console.log(this.token.token);
      this.submitting = false;
      localStorage.setItem('Token',JSON.stringify(this.token.token));
      localStorage.setItem('UserInfo',JSON.stringify(this.token.userInfo));
      window.location.reload();
      if(this.token.userInfo.role == 1)
      {
        this.router.navigate(['/Dashboard']);
        return;
      }
      this.router.navigate(['/UserDashboard']);
    },
    err=>{
    this.error = "Incorrect Email or Password";
    this.isError = true;
    this.submitting= false;
      console.error(err);
    })
  }

}
