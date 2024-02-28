export class Property {
    id:number=0;
    pname:string='';
    ptype:string='';
    price:number=0


    constructor(id:number,pname:string,ptype:string,price:number)
    {
        this.id=id;
        this.pname=pname;
        this.ptype=ptype;
        this.price=price;
    }

}
