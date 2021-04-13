import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: AdminService, private fb: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute) { }
  id:number|any;
  book:any;
  cmnts:any;
  isCmnts:boolean|any = false;
  cmntForm:FormControl|any;
  category:any;
  categoryName:any;
  totalCmnts:number|any;
  isUser = false;
  ngOnInit(): void {
   
    this.cmntForm = this.fb.group({
      bookId:[0],
      cmnt1:['']
    })
    if(localStorage.getItem('Token')!= null)
      {
        let userInfo = JSON.parse(localStorage.getItem('UserInfo')||'{}');
        if(userInfo.role == 0)
          this.isUser= true;
      }
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id = params.get('id');
      console.log(this.id);
    })
    this.service.GetBookById(this.id).subscribe(res=>
      {
        this.book = res;
        this.service.GetCategories().subscribe(res=>{
          this.category = res;
          this.category.forEach((c:any) => {
            if(c.categoryId == this.book.categoryId)
              this.categoryName = c.categoryName;
            console.log(this.categoryName)
          });
        })
        
      })
      this.service.GetCmntsById(this.id).subscribe(res=>
        {
          this.cmnts = res;
          this.totalCmnts = this.cmnts.length;
          if(this.cmnts.length >0)
          {
            this.isCmnts = true;
          }
          
        })
        
        this.category.forEach((c:any) => {
          if(c.categoryId == this.book.categoryId)
            this.categoryName = c.categoryName;
          console.log(this.categoryName)
        });
  }
  message:any;
  isMessage:boolean = false;
  onSubmits()
  {
    this.isMessage= false;
    this.cmntForm.value.bookId = +this.id;
    this.service.AddCmnt(this.cmntForm.value).subscribe(res=>{
      if(res == "1")
      {
        this.message = "Comment Added Succesfully";
        this.isMessage= true;
        window.location.reload();
      }
      
    })
  }

}
