import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-viewbooksadmin',
  templateUrl: './viewbooksadmin.component.html',
  styleUrls: ['./viewbooksadmin.component.css']
})
export class ViewbooksadminComponent implements OnInit {

  book: Array<any> = [];
  b_id:any;

  constructor(private bookService:BookService) { }


  ngOnInit() {
    this.bookService.getAll().subscribe(data=> {
      this.book = data;
    });
  }
  deleteBook(book:any) {
    this.book.splice(book-1,1)
     this.bookService.deleteBook(book).subscribe((result)=>{
    console.warn("result",result)
  })
  }

}
