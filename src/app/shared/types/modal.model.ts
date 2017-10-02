import { ComponentRef } from '@angular/core';
import { ModalComponent } from './../../components/modal/modal.component';

interface ModalProperties {
  componentRef: ComponentRef<ModalComponent>;
  content?: any;
  footer?: any;
  header?: any;
  type: string;
  showVeil?: boolean;
  disableScroll?: boolean;
}

export class Modal {

    private _id: number;
    public get id (): number { return this._id; }
    public set id (value: number) { this._id = value; }

    /**
     * Different properties for the modal:
     * @prop Content: Component to be placed in the ng-template
     * @prop Type: Keyword denoting the type of modal
     *
     * @private
     * @type {*}
     * @memberof Modal
     */
    private _properties: ModalProperties;
    public get properties (): ModalProperties { return this._properties; }
    public set properties (value: ModalProperties) { this._properties = value; }

    constructor (properties: ModalProperties) {
      this._id = this.randomNumber();
      this._properties = properties;
      this.decorateModal(properties);
    }

    private randomNumber = (): number => Math.floor(Math.random() * 100000) + Date.now();
    public hasProperties = (): boolean => Object.keys(this.properties).length > 0;
    public destroy = () => this.properties.componentRef.destroy();

    private decorateModal (props: ModalProperties) {
      if (!props.componentRef) {
        throw new Error('Modals must have a componentRef passed to them in their properties.');
      }

      for (const key in props) {
        if (props[key] !== undefined || props[key] !== null) {
          this.properties.componentRef.instance[key] = props[key];
        }
      }
      this.properties.componentRef.instance.id = this.id;
    }
  }
