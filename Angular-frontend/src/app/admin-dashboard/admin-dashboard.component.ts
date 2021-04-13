import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public service: AdminService, private fb: FormBuilder,private router: Router) { }
  bookList: any;
  myError:any;
  loading:boolean = true;
  ngOnInit(): void {
    this.service.GetBooks().subscribe(res=>{
      this.bookList = res;
      this.loading = false;
      console.log(this.bookList);
    }, error=>{
      this.myError=error;
      console.log(this.myError);
    })
  }
  delete:boolean|any;
  Delete(id:number)
  {
    this.delete = true;
    alert("Are you sure you wanna Delete .??");
    this.service.DeleteBook(id).subscribe(
      res=>{
        console.log(res);
        window.location.reload();
      },err=>{
        console.log(err);
      }
    )
    
  }

}
