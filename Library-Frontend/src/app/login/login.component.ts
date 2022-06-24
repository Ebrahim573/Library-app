import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../auth-header/auth.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User= new AuthModel('','',0,'')

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    if(this._auth.loggedIn()){
      this._router.navigate(['/'])
    }
  }
  Verify=()=>{
  this._auth.login(this.User).subscribe((data)=>{
    localStorage.setItem('token',data.token)
    this._router.navigate(['/'])

    })
  }
}
