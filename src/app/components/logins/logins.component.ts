import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public loginWithGoogle () {
    console.log('Logged in with Google');
  }

  public loginWithFacebook () {
    console.log('Logged in with Facebook');
  }

  public loginWithUsername () {
    console.log('Logged in with Username');
  }

}
