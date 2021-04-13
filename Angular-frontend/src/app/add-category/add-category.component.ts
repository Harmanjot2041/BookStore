import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(public service: AdminService, private fb: FormBuilder,private router: Router) { }
  categoryForm:any;
  ngOnInit(): void {
    this.categoryForm = this.fb.group(
      {
        
        categoryName: ['', Validators.required],
        
      })
  }
  myError:any;
  onSubmits=()=>{
    console.log(this.categoryForm.value);
    var result;
    
    this.service.AddCategory(this.categoryForm.value).subscribe(res=>
      {
        result= res;
        console.log(result);
      }, error=>{
        this.myError=error;
        console.log(this.myError);
      });
      this.router.navigate(['/Dashboard']);
    
  }

}
