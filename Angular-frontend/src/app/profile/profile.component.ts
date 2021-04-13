import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {Router} from '@angular/router';
import {AccountService} from '../account.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public service: AccountService, private fb: FormBuilder,private router: Router) { }
  user:any;
  ChangePassword:FormControl|any;
  ngOnInit(): void {
    if(localStorage.getItem('Token')!= null)
      {
        this.user = JSON.parse(localStorage.getItem('UserInfo')||'{}');
      }
      this.ChangePassword = this.fb.group(
        {
          OldPassword: ['', Validators.required],
          NewPassword: ['', Validators.required],
          Confirm: ['', Validators.required],
          
        })
  }
  isClicked = false;
  submitting = false;
  isError:boolean|any;
  error:any;
  OnChangePasssword()
  {
    this.isClicked = true;
  }
  ChangedDetails:any = {
    loginId:0,
    oldPassword:'',
    newPassword:''
  }
  onSubmits()
  {
    this.isError= false;
    this.submitting = true;
    console.log(this.ChangePassword.value.OldPassword );
    console.log(this.user.password);
    if(this.ChangePassword.value.OldPassword != this.user.password)
    {
      this.error = "Wrong Password";
      this.submitting = false;
      this.isError = true;

      return;
    }
    if(this.ChangePassword.value.NewPassword != this.ChangePassword.value.Confirm)
    {
      this.error = "please confirm new password"
      this.isError= true;
      this.submitting = false;
      return;
    }
    
    this.ChangedDetails ={
      loginId :+this.user.loginId,
      oldPassword:this.ChangePassword.value.OldPassword,
      newPassword:this.ChangePassword.value.NewPassword
    }
    this.service.PasswordChange(this.ChangedDetails).subscribe(res=>{
      if(res == "1")
      {
        this.submitting= false;
        alert("Password Changed Successfully..");
        this.isClicked = false;
      }
    })
  }
}
