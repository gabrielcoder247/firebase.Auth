import { Component, OnInit } from '@angular/core';
import {LoginService}  from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:LoginService) { }

  ngOnInit() {
  }
  loginGoogle(){
    console.log("logged in ...");
    this.service.login();
  }

}
