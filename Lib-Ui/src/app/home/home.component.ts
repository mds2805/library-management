import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private http:HttpClient,private router:Router) { }

  onSubmit(data:any) {
    this.http.post('http://localhost:8080/user/add',data)
    .subscribe((result=>{
      console.warn("result",result)
      this.router.navigate(['/viewbooks']);
    }))
    console.warn(data);
    
  }
  registerForm = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)
  })
  get userid () {
    return this.registerForm.get('id') as FormControl
  }
  get username () {
    return this.registerForm.get('name') as FormControl
  }
  get useraddress () {
    return this.registerForm.get('address') as FormControl
  }
}
