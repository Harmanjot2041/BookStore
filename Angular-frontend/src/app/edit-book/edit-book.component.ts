import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(public service: AdminService, private fb: FormBuilder,private router: Router,private activatedRoute: ActivatedRoute) { }

  bookForm: FormControl|any;
  category:any;
  id:number|any;
  book:any;
  ngOnInit(): void {
    this.bookForm = this.fb.group(
      {
        CategoryId: [0, Validators.required],
        BookName: ['', Validators.required],
        AuthorName: ['', Validators.required],
        BookPrice: ['', Validators.required],
        NoOfBooks: ['', Validators.required],
        ShippingAllowed: ['', Validators.required],
        BookImage: [''],
        Discription: ['', Validators.required],
        
      }
    )
     this.service.GetCategories().subscribe(res=>{
       this.category = res;
       
     })
     this.activatedRoute.paramMap.subscribe(params=>{
      this.id = params.get('id');
    })
    this.service.GetBookById(this.id).subscribe(res=>
      {
        this.book = res;
        console.log(res);
        this.bookForm.setValue({
          CategoryId: this.book.categoryId,
          BookName: this.book.bookName,
          AuthorName: this.book.authorName,
          BookPrice: this.book.bookPrice,
          NoOfBooks: this.book.noOfBooks,
          ShippingAllowed: this.book.shippingAllowed,
          BookImage: '',
          Discription: this.book.discription
        })
     
    
      })
    
  }

  myError:any;
  isImageChanged:boolean|any = false;
  onSubmits=()=>{
    
    var result;
    this.bookForm.value.BookImage=this.url;
    this.bookForm.value.CategoryId = +this.bookForm.value.CategoryId;
    this.book.categoryId = this.bookForm.value.CategoryId;
    this.book.bookName = this.bookForm.value.BookName;
    this.book.authorName = this.bookForm.value.AuthorName;
    this.book.bookPrice = this.bookForm.value.BookPrice ;
    this.book.noOfBooks = this.bookForm.value.NoOfBooks ;
    this.book.shippingAllowed = this.bookForm.value.ShippingAllowed;
    if(this.isImageChanged)
    {
      this.book.bookImage = this.bookForm.value.BookImage;
    }
    this.book.discription = this.bookForm.value.Discription;
    console.log(this.book);
    this.service.EditBook(this.book).subscribe(res=>
      {
        result= res;
        
        this.router.navigate(['/Dashboard']);
      }, error=>{
        this.myError=error;
        console.log(this.myError);
      });
      
    
  }
  url:any;
  onChange=(e:any)=>{
    this.isImageChanged = true;
    console.log(e.target.files);
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;

      }
    }
  }

}
