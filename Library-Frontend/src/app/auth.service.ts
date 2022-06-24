import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // server_address:string = 'api';

  constructor(public http:HttpClient) { }
  login(authData:any){
    return this.http.post<any>(`http://localhost:3000/login`,authData)
  
    }
    loggedIn(){
      return !!localStorage.getItem('token')
      
    }
    getToken(){
      
      return localStorage.getItem('token')
    }
  saveCred(userData:any){
    console.log(userData.email)
    return this.http.post(`http://localhost:3000/signup`,userData).subscribe()
    }
  }
