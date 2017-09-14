export class Modal {

    private _id: number;
    public get id (): number { return this._id; }
    public set id (value: number) { this._id = value; }

    private _type: string;
    public get type (): string { return this._type; }
    public set type (value: string) { this._type = value; }

    private _closeOnVeilClick: boolean;
    public get closeOnVeilClick (): boolean { return this._closeOnVeilClick; }
    public set closeOnVeilClick (value: boolean) { this._closeOnVeilClick = value; }

    private _properties: {};
    public get properties (): {} { return this._properties; }
    public set properties (value: {}) { this._properties = value; }

    constructor (type?, closeOnVeilClick?, properties?) {
      this._id = this.randomNumber();
      this._type = type || 'basic';
      this._closeOnVeilClick = closeOnVeilClick || true;
      this._properties = properties || {};
    }

    private randomNumber (): number {
      return Math.floor(Math.random() * 100000) + Date.now();
    }
  }
