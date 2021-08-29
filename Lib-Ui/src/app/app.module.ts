import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { ViewbooksadminComponent } from './viewbooksadmin/viewbooksadmin.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ViewbooksComponent,
    AdminLoginComponent,
    HomeComponent,
    AddbookComponent,
    UserComponent,
    BooksComponent,
    ViewbooksadminComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
