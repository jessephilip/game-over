import { ComponentRef } from '@angular/core';
// import { ModalComponent } from './../../components/modal/modal.component';
import { OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modal } from 'app/shared/types/modal.model';

export class ModalService implements OnInit {

  public _modal: BehaviorSubject<any> = new BehaviorSubject(null);
  public modal$ = this._modal.asObservable();

  constructor () {}

  ngOnInit (): void {}

  public getModal = (): { component: any, container: ComponentRef<any> } => this._modal.getValue();
  public setModal = (value: { component: any, container: ComponentRef<any> }) => this._modal.next(value);

  // /**
  //  * Find a modal in the modal array by ID number.
  //  *
  //  * @private
  //  * @param id: number
  //  * @returns Modal
  //  * @memberof ModalService
  //  */
  // private findModalById = (id: number): Modal => {
  //   return this.getModals().find(x => x.id === id);
  // }

  // /**
  //  * Returns the position of the modal in the modal array
  //  *
  //  * @param modal: Modal or number
  //  * @returns number
  //  * @memberof ModalService
  //  */
  // public findModalIndex = (modal: Modal | number): number => {
  //   const trove = typeof modal === 'number' ? modal : modal.id;
  //   const modals = this._modal.getValue();
  //   return this.getModals().findIndex(x => x.id === trove);
  // }

  // /**
  //  * Destroy the given modal from the modal array.
  //  *
  //  * @param modal: Modal or number
  //  * @returns Modal[]
  //  * @memberof ModalService
  //  */
  // public destroyModal = (modal: Modal | number): Modal[] => {
  //   const trove = typeof modal === 'number' ? modal : modal.id;
  //   const modals = this.getModals();
  //   modals.splice(this.findModalIndex(trove), 1);
  //   this.setModals(modals);
  //   return this.getModals();
  // }

  // /**
  //  * Destroy all the modals from the modal array
  //  *
  //  * @returns Modal[]
  //  * @memberof ModalService
  //  */
  // public destroyAllModals = (): Modal[] => {
  //   this.setModals([]);
  //   return this.getModals();
  // }

  // /**
  //  * Add modal to the modal array
  //  *
  //  * @param modal: Modal
  //  * @returns Modal[]
  //  * @memberof ModalService
  //  */
  // public addModal = (modal: Modal): Modal[] => {
  //   const modals = this.getModals();
  //   modals.push(modal);
  //   this.setModals(modals);
  //   return this.getModals();
  // }
}
