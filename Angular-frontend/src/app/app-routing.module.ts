import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AddBookComponent} from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AuthGuard } from './auth.guard';
import { ViewersComponent } from './viewers/viewers.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes: Routes = [
  {path:'Dashboard',component: AdminDashboardComponent,canActivate:[AuthGuard],data :{permittedRoles:[1]}},
  {path:'Dashboard',component: UserDashboardComponent,canActivate:[AuthGuard]},
  {path:'Signin',component: SignInComponent},
  {path:'Signup',component: SignUpComponent},
  {path:'AddBook',component: AddBookComponent,canActivate:[AuthGuard],data :{permittedRoles:[1]}},
  {path:'BookDetails/:id',component: BookDetailsComponent,canActivate:[AuthGuard]},
  {path:'EditBook/:id',component: EditBookComponent,canActivate:[AuthGuard],data :{permittedRoles:[1]}},
  {path:'AddCategory',component: AddCategoryComponent,canActivate:[AuthGuard],data :{permittedRoles:[1]}},
  {path:'UserDashboard',component: UserDashboardComponent},
  {path:'temp', loadChildren:()=>import("./temp/temp.module").then(x=> x.TempModule)},
  {path:'Viewers',component: ViewersComponent,canActivate:[AuthGuard],data :{permittedRoles:[1]}},
  {path:'Profile',component: ProfileComponent,canActivate:[AuthGuard]},
  {path:'ForgetPassword/:id',component: ForgetPasswordComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
