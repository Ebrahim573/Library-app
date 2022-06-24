import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/book.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Book:any = new BookModel("","","","")

  constructor(public book:BookService,private _route:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("updateProductID");
    this.book.editBookget(bookId)
    .subscribe((data)=>{
      this.Book = JSON.parse(JSON.stringify(data))
      console.log(this.Book)
    })
  }
editBook(){
this.book.updateBook(this.Book)
localStorage.removeItem("updateProductID")
this._route.navigate(['/'])
  }

}
