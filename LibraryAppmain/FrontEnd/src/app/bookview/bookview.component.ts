import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  books={

    author:"",
    bookname:"",
    imageurl:"",
    synopsis:""

  }

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("bookdata")
    this.bookservice.getbookdata(BookId).subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
    })
  }

}
