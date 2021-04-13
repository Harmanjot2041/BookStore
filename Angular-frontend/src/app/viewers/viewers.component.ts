import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-viewers',
  templateUrl: './viewers.component.html',
  styleUrls: ['./viewers.component.css']
})
export class ViewersComponent implements OnInit {

  constructor(public service: AdminService, private fb: FormBuilder,private router: Router) { }
  Users:any;
  ngOnInit(): void {
    this.service.Users().subscribe(res=>
      {
        this.Users = res;
      })

  }
  
  MakeAdmin(id:number)
  {
    this.service.MakeAdmin(id).subscribe(
      res=>{
          if(res == "1")
          {
            alert("Admin Added Successfully");
          }
          window.location.reload();
      }
    )
  }
  

  Block(id:number)
  {
    this.service.BlockUser(id).subscribe(
      res=>{
          if(res == "1")
          {
            alert("Usre Blocked Successfully");
          }
          window.location.reload();
      }
    )
  }
  

}
