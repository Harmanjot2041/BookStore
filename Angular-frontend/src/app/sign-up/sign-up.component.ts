import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service: AccountService, private fb: FormBuilder,private router: Router) { }

  SignUpForm:FormBuilder|any;
  ngOnInit(): void {
    this.SignUpForm = this.fb.group(
      {
        Name: ['', Validators.required],
        Email: ['', Validators.required],
        Password: ['', Validators.required],
        Confirm: ['', Validators.required],
        
      })
  }
  Login = {
    
    email: '',
    password: '',
    role: 0,
    isActive: true,
    name: ''
  };
  error:any;
  isError = false;
  submitting:boolean|any;
  onSubmits()
  {
    this.submitting= true;
    this.isError = false;
  if(this.SignUpForm.value.Email.charAt(this.SignUpForm.value.Email.length-4) != "."||this.SignUpForm.value.Email.charAt(this.SignUpForm.value.Email.length-10) != "@")
  {
    this.error = "Invalid Email";
    this.isError = true;
    this.submitting= false;
    return;
  }
  else if(this.SignUpForm.value.Password != this.SignUpForm.value.Confirm)
  {
    this.error = "Password is Wrong";
    this.isError = true;
    this.submitting= false;
    return;
  }
    this.Login.name =this.SignUpForm.value.Name;
    this.Login.email = this.SignUpForm.value.Email;
    this.Login.password = this.SignUpForm.value.Password;
   
   
    console.log(this.Login);
    this.service.SignUp(this.Login).subscribe(res =>
      {
        console.log(res);
        this.submitting = false;
        
       this.router.navigate(['/Signin']);
      }, err=>{
        this.isError = true;
        this.error = err.error.message;
        this.submitting = false;
        console.log(err.error.message);
      })
  }

}
