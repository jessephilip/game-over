import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { DatabaseService } from '../../shared/services/database.service';
import { ModalService } from '../../shared/services/modal.service';
import { StorageService } from 'app/shared/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private db: DatabaseService,
    private auth: AuthenticationService,
    private modalService: ModalService,
    private storageService: StorageService) {
    this.db.getDatabase().subscribe(results => console.log('db: ', results));
    this.auth.getUser().subscribe(user => console.log('user: ', user));
    console.log(this.storageService.storageTest());
  }

  ngOnInit() {
  }

}
