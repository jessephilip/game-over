import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class StorageService {
  public storage;

  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    this.storage = firebaseApp.storage().ref();
    // .storage().ref().child('/stuff');
    // storageRef.getDownloadURL().then(result => console.log(result));
  }
}
