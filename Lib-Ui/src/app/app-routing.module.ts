import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './books/books.component';
import { ViewbooksadminComponent } from './viewbooksadmin/viewbooksadmin.component';

const routes: Routes = [
  {path:'admin-login',component:AdminLoginComponent},
  {path:'viewbooks',component:ViewbooksComponent},
  {path:'home',component:HomeComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'user',component:UserComponent},
  {path:'books',component:BooksComponent},
  {path:'viewbooksadmin',component:ViewbooksadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
