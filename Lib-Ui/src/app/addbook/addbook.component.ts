import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ViewbooksComponent } from '../viewbooks/viewbooks.component';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  submitted = false;
  book: any;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  
    }
  newBook(): void {
    this.submitted = false;
    this.book = new this.book();
  }

  save() {
    this.bookService
     .addBook(this.book).subscribe(data => {
       console.log(data)
       this.book = new this.book();
       this.gotoList();
     });
     
     
    }
    
    onsubmit() {
      this.submitted= true;
      this.save();
    }
  gotoList() {
    this.router.navigate(['/viewbooks']);
  }

}


  


