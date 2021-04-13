import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl =environment.apiUrl+"BookStore";

  constructor(private http: HttpClient) { }

  tempApiUrl:any;
  GetBooks()
  {
    this.tempApiUrl = this.apiUrl+"/GetBooks";
    return this.http.get(this.tempApiUrl);
  }
  AddBook(book:any)
  {
    this.tempApiUrl=this.apiUrl+"/AddBook";
     return this.http.post(this.tempApiUrl,book);
  }
  GetBookById(id:number)
  { 
    this.tempApiUrl=this.apiUrl+"/GetBookById"
    return this.http.get(this.tempApiUrl+"?id="+id);
  }
  DeleteBook(id:number)
  { 
    this.tempApiUrl=this.apiUrl+"/Delete"
    return this.http.delete(this.tempApiUrl+"?id="+id);
  }
  EditBook(book:any)
  {
    this.tempApiUrl=this.apiUrl+"/EditBook";
     return this.http.post(this.tempApiUrl,book);
  }

  AddCategory(category:any)
  {
    this.tempApiUrl = this.apiUrl+"/AddCategory";
    return this.http.post(this.tempApiUrl,category);
  }
  GetCategories()
  {
    this.tempApiUrl = this.apiUrl+"/GetCategories";
    return this.http.get(this.tempApiUrl);
  }
  SearchBook(name:string)
  {
    this.tempApiUrl = this.apiUrl+"/SearchBook";
    return this.http.get(this.tempApiUrl+"?name="+name);
  }
  CategoryWiseBooks(CategoryId:number)
  {
    this.tempApiUrl = this.apiUrl+"/CategoryWiseBooks";
    return this.http.get(this.tempApiUrl+"?id="+CategoryId);
  }
  Users()
  {
    this.tempApiUrl = this.apiUrl + "/Users";
    return this.http.get(this.tempApiUrl);
  }
  MakeAdmin(id:number)
  {
    this.tempApiUrl = this.apiUrl + "/MakeAdmin";
    return this.http.get(this.tempApiUrl+"?id="+id);
  }
  BlockUser(id:number)
  {
    
    this.tempApiUrl = this.apiUrl + "/BlockUser";
    return this.http.get(this.tempApiUrl+"?id="+id);
  }
  AddCmnt(cmnt:any)
  {
    this.tempApiUrl = this.apiUrl + "/AddCmnt";
    return this.http.post(this.tempApiUrl,cmnt);
  }
  GetCmntsById(id:number)
  {
    this.tempApiUrl = this.apiUrl + "/GetCmntsById";
    return this.http.get(this.tempApiUrl+"?id="+id);
  }
  

}
