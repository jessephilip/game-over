import { Component, OnInit } from '@angular/core';

// services
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.scss']
})
export class BrandHeaderComponent implements OnInit {

  public welcomeMessage = 'Welcome';
  public title = 'Game Over';
  public loggedIn = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getUser().subscribe(user => {
      if (user && user.uid) {
        this.loggedIn = true;
        this.welcomeMessage = `Welcome ${user.displayName}`;
      } else {
        this.loggedIn = false;
        this.welcomeMessage = 'Welcome';
      }
    });
  }

  public googleLogin () {
    this.auth.googleLogin();
  }

  public logout () {
    this.auth.logout();
  }
}
