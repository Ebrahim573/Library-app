import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // server_address:string = 'api';

  constructor(private _http:HttpClient) { }
  getBook(){
    return this._http.get(`http://localhost:3000/book`)
  }
  postBook(book:any){
    return this._http.post<any>(`http://localhost:3000/add`,book).subscribe()
  }
  deleteBook(delBook:any){
    console.log(delBook)
    return this._http.delete(`http://localhost:3000/book/remove/`+delBook)
  }
  editBookget(bookId:any){
    return this._http.get(`http://localhost:3000/edit/`+bookId)

  }
  updateBook(updateBook:any){
    console.log("book",updateBook)
    return this._http.put(`http://localhost:3000/update`,updateBook).subscribe()
  }
  
  
}
