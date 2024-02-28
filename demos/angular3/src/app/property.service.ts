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
}
