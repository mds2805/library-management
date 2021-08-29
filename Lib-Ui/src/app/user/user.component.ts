import { Component, OnInit } from '@angular/core';
import {userService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Array<any> = [];

  constructor(private userService:userService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data=> {
      this.user = data;
    });
  }

  deleteUser(users:any) {
    this.user.splice(users-1,1)
     this.userService.deleteUser(users).subscribe((result)=>{
    console.warn("result",result)
  })
  }

}
