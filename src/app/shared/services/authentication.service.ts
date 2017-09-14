import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  constructor (private auth: AngularFireAuth) {}

  public getUser () {
    return this.auth.authState;
  }

  /**
   * Logs the user in using AngularFire2's Authentication.
   *
   * @memberof AuthenticationService
   */
  public googleLogin () {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  public logout () {
    return this.auth.auth.signOut();
  }
}
