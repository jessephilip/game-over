import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class StorageService {
  private STORAGEURL = 'gs://game-over-2450b.appspot.com/';
  // private storage = firebase.storage();

  constructor () {}

  public storageTest = () => {
    return firebase.app();
  }
}
