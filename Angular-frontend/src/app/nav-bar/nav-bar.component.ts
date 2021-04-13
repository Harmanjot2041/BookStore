import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authGuard: AuthGuard, private router : Router) { }
  IsAuthenticate:boolean|any;
  userInfo:any;
  ngOnInit(): void {
    if(localStorage.getItem('Token')!= null)
      {
        this.IsAuthenticate = true;
        this.userInfo = JSON.parse(localStorage.getItem('UserInfo')||'{}');
      }
    else
      this.IsAuthenticate = false;
  }
  onLogout(){
    alert("Are you sure you want to logout ..?");
    localStorage.removeItem('Token');
    localStorage.removeItem('UserInfo');
    window.location.reload();
    this.router.navigate(['/Signin']);
  }

}
