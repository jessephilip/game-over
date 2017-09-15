import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DatabaseService {

  constructor (private db: AngularFireDatabase) {}

  /**
   * Public method to return the entire game-over firebase database.
   *
   * @returns {FirebaseListObservable<any>}
   * @memberof DatabaseService
   */
  public getDatabase (): FirebaseListObservable<any> {
    return this.db.list('/');
  }
}
