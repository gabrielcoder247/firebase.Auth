import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firebase-apps';
  constructor( private afAuth: AngularFireAuth
  ){}
  ngOnInit(){
    this.afAuth.authState
    .subscribe( user => {
      console.log(user)
    })


  }
}
