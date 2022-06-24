import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Booklist : BookModel[] | any 

  constructor(private _book:BookService,private _route:Router) { }

  ngOnInit(): void {
    this._book.getBook().subscribe((data)=>{
      this.Booklist = JSON.parse(JSON.stringify(data))
      console.log(this.Booklist)
    })
  }
  update(updID:any){
   localStorage.setItem('updateProductID',updID.toString())
   this._route.navigate(['update'])

  }
  delete(bookId:any){
    this._book.deleteBook(bookId).subscribe(()=>{
      localStorage.removeItem('updateProductID')
    })
    window.location.reload()
  }

}
