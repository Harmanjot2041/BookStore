import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewersComponent } from './viewers/viewers.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [ 
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookComponent,
    AddCategoryComponent,
    ViewersComponent,
    ProfileComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
