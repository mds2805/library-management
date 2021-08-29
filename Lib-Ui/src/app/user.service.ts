import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class userService {
  
    constructor(private httpClient:HttpClient) { }
  
    api = "http://localhost:8080/books"
  
    getAll(): Observable<any> {
     return this.httpClient.get("http://localhost:8080/user");
    }
    deleteUser(id: string){
        return this.httpClient.delete("http://localhost:8080/user"+"/"+ id);
      }
  }  