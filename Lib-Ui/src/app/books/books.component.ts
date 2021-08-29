import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { books } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {

  // @Input()
  // books: books = new books;
  
  // @Output()
  // bookAddedEvent = new EventEmitter();
  // http: any;
  // constructor(private bookService: BookService,
  //   private activedRoute: ActivatedRoute,
  //   private router: Router,
  //   private httpClient: HttpClient) { }

  

  // private url = 'http://localhost:8080/books/add';
  constructor(private http:HttpClient,private router:Router) {}
  onSubmit(data:any) {
    this.http.post('http://localhost:8080/books/add',data)
    .subscribe((result=>{
      console.warn("result",result)
      this.router.navigate(['/viewbooksadmin']);
    }))
    console.warn(data);
    
  }
  
  // saveBook() {

  //   const uploadData = new FormData();

  //   this.httpClient.post("http://localhost:8080/books/add", book)
  //     .subscribe((response) => {
  //       // if (response.status === 200) {
  //         this.bookService.addBook(this.book).subscribe(
  //           (book) => {
  //             this.bookAddedEvent.emit();
  //             this.router.navigate(['viewbooks']);
  //           }
  //         );
  //         console.log('added book');
        // } else {
        //   console.log('not added');
        // }
      // }
      // );
  // }
}
