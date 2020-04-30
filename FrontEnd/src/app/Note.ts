
export class Note {
    
    private _text : string;
    private _id : string;
    private _name : string;
  
    constructor(name:string, text:string) 
    {
        this._name=name;
        this._text=text;
     }

    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
    }
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    public get text() : string {
        return this._text;
    }
    public set text(v : string) {
        this._text = v;
    }
    


}
