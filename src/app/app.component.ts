import {ModalService} from './shared/services/modal.service';
import {Modal} from './shared/types/modal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public modals: Modal[] = [];

  constructor (private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modal$.subscribe(modals => this.modals = modals);
  }
}
