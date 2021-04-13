import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public service: AdminService, private fb: FormBuilder) { }
  bookList: any;
  myError:any;
  loading:boolean = true;
  category:any;
  searchForm:FormBuilder|any;
  categoryForm:FormBuilder|any;
  totalBooks:any;
  page:number|any=1;
  isUser= false;
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      Search:['']
    })
    this.categoryForm = this.fb.group({
      CategoryId:[0]
    })
    this.service.GetCategories().subscribe(res=>{
      this.category = res;
      console.log(this.category)
    })
    this.service.GetBooks().subscribe(res=>{
      this.bookList = res;
      this.loading = false;
      console.log(this.bookList);
    }, error=>{
      this.myError=error;
      console.log(this.myError);
    })
    if(localStorage.getItem('Token')!= null)
      {
        let userInfo = JSON.parse(localStorage.getItem('UserInfo')||'{}');
        if(userInfo.role == 0)
          this.isUser= true;
      }
  } 
  error:any;
  IsError = false;
  onCategory()
  {
    this.loading = true;
    this.IsError= false;
    this.service.CategoryWiseBooks(this.categoryForm.value.CategoryId).subscribe(res=>{
      this.bookList = res;
      if(this.bookList.length == 0)
        {
          this.error = " No Books Found by For This Cateogry ";
          this.IsError = true;
        }
      this.loading = false;

    })
    
  }
  onSubmits(){
    this.loading = true;
    this.IsError = false;
    if(this.searchForm.value.Search == '')
    {
      this.loading = false;
      window.location.reload();
      return;
      
    }
     this.service.SearchBook(this.searchForm.value.Search).subscribe(res=>{
      this.bookList = res;
      if(this.bookList.length == 0)
        {
          this.error = " No Result Found by name " + this.searchForm.value.Search;
          this.IsError = true;
        }
      this.loading = false;
      this.searchForm.value.Search = '';
      //window.location.reload();
     })
  }
  

}
