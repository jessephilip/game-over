import { OnInit } from '@angular/core';
import { Modal } from 'app/shared/types/modal.model';

export class ModalService implements OnInit {

  public modals: Modal[] = [];

  constructor () {}

  ngOnInit(): void {
    this.modals.push(new Modal());
  }
}
