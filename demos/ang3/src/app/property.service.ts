import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  private properties:any[]=[

    {id:1,pname:'avisa',ptype:'holiday home',price:30000},
    {id:2,pname:'demeter',ptype:'coliving',price:8000},
    {id:3,pname:'ivory',ptype:'holiday home',price:15000}
  ]

  getProperties():any[]{
    return this.properties;
  }

  getProprtyById(id:number):any{
    return this.properties.find(property=>property.id==id);
  }

  addProperty(property:any):void
  {
    this.properties.push({...property,id:this.properties.length+1});
  }

  updateProperty(updatedProperty:any):void
  {
      const index=this.properties.findIndex(property=>property.id==updatedProperty.id);
      if(index!=-1)
      {
        this.properties[index]=updatedProperty;
      }
  }

  DeleteProperty(id:number):void
  {
     this.properties=this.properties.filter(property=>property.id!==id);
  }
}
