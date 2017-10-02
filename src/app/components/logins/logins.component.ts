import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {

  public user;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getUser().subscribe(user => {
      this.user = user;
    });
  }

  public loginWithGoogle () {
    this.auth.googleLogin();
  }

  public loginWithFacebook () {
    console.log('Logged in with Facebook');
  }

  public loginWithUsername () {
    console.log('Logged in with Username');
  }

  public logout () {
    this.auth.logout();
  }

}
