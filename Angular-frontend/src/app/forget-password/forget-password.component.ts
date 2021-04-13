import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {Router,ActivatedRoute} from '@angular/router';
import {AccountService} from '../account.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public service: AccountService, private fb: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute) { }
  ChangePassword:FormControl|any;
  id:number|any;
  ngOnInit(): void {
    this.ChangePassword = this.fb.group(
      {
        NewPassword: ['', Validators.required],
        Confirm: ['', Validators.required],
        
      })
      this.activatedRoute.paramMap.subscribe(params=>{
        this.id = params.get('id');
        console.log(this.id);
      })
  }
  submitting = false;
  isError:boolean|any;
  error:any;
  ChangedDetails:any = {
    loginId:0,
    oldPassword:'',
    newPassword:''
  }
  onSubmits()
  {
    this.isError= false;
    this.submitting = true;
    
    
    if(this.ChangePassword.value.NewPassword != this.ChangePassword.value.Confirm)
    {
      this.error = "please confirm new password"
      this.isError= true;
      this.submitting = false;
      return;
    }
    
    this.ChangedDetails ={
      loginId :+this.id,
      oldPassword:'',
      newPassword:this.ChangePassword.value.NewPassword
    }
    this.service.PasswordChange(this.ChangedDetails).subscribe(res=>{
      if(res == "1")
      {
        this.submitting= false;
        alert("Password Changed Successfully..");
        this.router.navigate(['/Signin']);
        
      }
    })
  }

}
