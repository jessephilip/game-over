import { ComponentRef, OnInit } from '@angular/core';
import { ModalComponent } from './../../components/modal/modal.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modal } from 'app/shared/types/modal.model';


interface ModalProperties {
  componentRef: ComponentRef<ModalComponent>;
  content?: any;
  footer?: any;
  header?: any;
  type: string;
  showVeil?: boolean;
  disableScroll?: boolean;
}

// @Injectable()
export class ModalService implements OnInit {

  public _modals: BehaviorSubject<Modal[]> = new BehaviorSubject([]);
  public modals$ = this._modals.asObservable();

  constructor () {}

  ngOnInit (): void {}

  public getModals = (): Modal[] => this._modals.getValue();
  public setModals = (value: Modal[]) => this._modals.next(value);
  public addModal = (value: Modal) => {
    const modals = this.getModals();
    modals.push(value);
    this.setModals(modals);
  }

  /**
   * Find a modal in the modal array by ID number.
   *
   * @private
   * @param id: number
   * @returns Modal
   * @memberof ModalService
   */
  private findModalById = (id: number): Modal => {
    return this.getModals().find(x => x.id === id);
  }

  public findModalByType = (type: string, singular?: boolean): Modal[] => {
    const filtered = this.getModals().filter(modal => modal.properties.type === type);
    if (filtered.length > 1 && singular) {
      throw new Error('Expected to find one modal in the modal array but found more.');
    }
    return filtered;
  }

  /**
   * Returns the position of the modal in the modal array
   *
   * @param modal: number
   * @returns number
   * @memberof ModalService
   */
  public findModalIndex = (id: number): number => {
    const modals = this._modals.getValue();
    return this.getModals().findIndex(x => x.id === id);
  }

  /**
   * Destroy the given modal from the modal array.
   *
   * @param modal: number
   * @returns Modal[]
   * @memberof ModalService
   */
  public destroyModal = (id: number): Modal[] => {
    const modals = this.getModals();
    this.findModalById(id).destroy();

    modals.splice(this.findModalIndex(id), 1);
    this.setModals(modals);
    return this.getModals();
  }

  /**
   * Destroy all the modals from the modal array
   *
   * @returns Modal[]
   * @memberof ModalService
   */
  public destroyAllModals = (): Modal[] => {
    this.setModals([]);
    return this.getModals();
  }
}
