import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router'
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit { 

  constructor(public service: AdminService, private fb: FormBuilder,private router: Router) { }

  bookForm: FormControl|any;
  category:any;
  ngOnInit(): void {
    this.bookForm = this.fb.group(
      {
        CategoryId: [0, Validators.required],
        BookName: ['', Validators.required],
        AuthorName: ['', Validators.required],
        BookPrice: ['', Validators.required],
        NoOfBooks: ['', Validators.required],
        ShippingAllowed: ['', Validators.required],
        BookImage: ['', Validators.required],
        Discription: ['', Validators.required],
        
      }
    )
     this.service.GetCategories().subscribe(res=>{
       this.category = res;
       console.log(this.category)
     })
    
  }
  myError:any;
  submitting:boolean|any;
  onSubmits=()=>{
    this.submitting = true;
    console.log(this.bookForm.value);
    var result;
    this.bookForm.value.BookImage=this.url;
    this.bookForm.value.CategoryId = +this.bookForm.value.CategoryId;
    console.log(this.bookForm.value);
    
    this.service.AddBook(this.bookForm.value).subscribe(res=>
      {
        result= res;
        this.submitting = false;
        this.router.navigate(['/Dashboard']);
      }, error=>{
        this.myError=error;
        console.log(this.myError);
      });
      
    
  }
  url:any;
  onChange=(e:any)=>{
    console.log(e.target.files);
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log(this.url);
      }
    }
  }
  handlechange(e:any)
  {
    console.log(e);
  }



}
