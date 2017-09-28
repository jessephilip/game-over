export class Modal {

    private _id: number;
    public get id (): number { return this._id; }
    public set id (value: number) { this._id = value; }

    private _properties: any;
    public get properties (): any { return this._properties; }
    public set properties (value: any) { this._properties = value; }

    constructor (properties?: any) {
      this._id = this.randomNumber();
      this._properties = properties || {};

      // error checking
      if (this.hasProperties && properties.type.toLowerCase() === 'bubble') {
        if (!this.properties.coordinates) {
          throw new Error('Bubble modals require coordinate information so they can be placed correctly on the page.');
        }
      }

      if (this.hasProperties && properties.type.toLowerCase() === 'shelf') {
        if (!this.properties.location) {
          throw new Error('Shelf modals require location information so they can be placed correctly on the page.');
        }
      }
    }

    private randomNumber = (): number => Math.floor(Math.random() * 100000) + Date.now();
    public hasProperties = (): boolean => Object.keys(this.properties).length > 0;
  }
