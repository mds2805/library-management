import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { books } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  api = "http://localhost:8080/books"

  getAll(): Observable<any> {
   return this.httpClient.get("http://localhost:8080/books");
  }

  // addBook(book: string) {
  //   this.httpClient.post(this.api, { book })
  //     .subscribe((response: any) => {
  //       const book = new (response.book)
  //       book.b_id = response.b_id;
  //       book.b_name = response.b_name;
  //       book.author = response.author;
  //     })

  // }

  getOne(b_id:any): Observable<any> {
    return this.httpClient.get("http://localhost:8080/books" + "/" + b_id);
   }

  addBook(books:books): Observable<any> {
    return this.httpClient.post("http://localhost:8080/books/add", books);
  }

  deleteBook(b_id: string){
    return this.httpClient.delete("http://localhost:8080/books"+"/"+ b_id);
  }

}
