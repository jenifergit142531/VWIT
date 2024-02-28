import { Component, Injector, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrl: './propertylist.component.css'
})
export class PropertylistComponent implements OnInit {

  properties?:any[];

  private propertyService!:PropertyService;



  constructor(private injector:Injector,private router:Router){}

  
  ngOnInit(): void {

    const myserviceInstance=this.injector.get(PropertyService);
   this.properties= myserviceInstance.getProperties();
  }

  editProperty(id:number):void{
    this.router.navigate([`editprop/${id}`]);
  }

  deleteProperty(id:number):void{
    this.propertyService.DeleteProperty(id);
     this.properties=this.propertyService.getProperties();
  }


}
