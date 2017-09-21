import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { Modal } from '../../shared/types/modal.model';

/**
 * Creates a modal that pops up on the screen
 *  @param properties: {}
 *    @default none
 *    the properties that define the modal are contained here.
 *    @property showVeil: boolean
 *    @property title: string
 *    @property type: string
 *    @property veilClick: function
 *    @property showCancel: boolean
 *
 * @export
 * @class ModalComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('modal') modal: Modal;

  public classes: string[] = ['modal'];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    if (!this.modal || !this.modal.hasProperties()) {
      throw new Error ('no properties on this modal');
    }

    if (this.modal.properties && this.modal.properties.type) {
      this.classes.push(this.modal.properties.type.toLowerCase());
    }
  }

  public displayClasses (): string {
    return this.classes.join(' ');
  }

  public cancel (modal: Modal): void {
    this.modalService.destroyModal(modal);
  }

}
