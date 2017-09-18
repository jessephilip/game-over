import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class StorageService {
  public storage;

  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    this.storage = firebaseApp.storage().ref();
  }

  public uploadFile (file: File): Promise<any> {
    return new Promise ((resolve, reject) => {
      const fileRef = this.storage.child(file.name);
      fileRef.put(file)
        .then(snapshot => {
          if (snapshot.state && snapshot.state === 'success') {
            resolve(snapshot);
          } else {
            reject(snapshot);
          }
      });
    });
  };

  public getFileUrl (file: File | string): Promise<any> {
    const fileString = typeof file === 'string' ? file : file.name;
    return new Promise ((resolve, reject) => {
      const fileRef = this.storage.child(fileString);
      fileRef.getDownloadURL().then(url => resolve(url));
    });
  };

  public getFileLocation (file: File): Promise<any> {
    return new Promise ((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }
}
