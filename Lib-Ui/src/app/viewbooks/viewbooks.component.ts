import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  book: Array<any> = [];
  b_id:any;
  search: any;

  constructor(private bookService:BookService) { }

  ngOnInit()  {
   this.bookService.getAll().subscribe(data=> {
     this.book = data;
   });

   

  
  }
 

}
function getOne(book: any, any: any) {
  throw new Error('Function not implemented.');
}

