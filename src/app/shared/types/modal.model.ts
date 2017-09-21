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
    }

    private randomNumber = (): number => Math.floor(Math.random() * 100000) + Date.now();
    public hasProperties = (): boolean => Object.keys(this.properties).length > 0;
  }
