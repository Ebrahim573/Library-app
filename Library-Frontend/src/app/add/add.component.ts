import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/book.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  Book:any = new BookModel("","","","")


  constructor(public book:BookService, private _route:Router) { }
  

  ngOnInit(): void {
  }
  submitBook(){
    this.book.postBook(this.Book)
    this._route.navigate(['/'])
  }

}
