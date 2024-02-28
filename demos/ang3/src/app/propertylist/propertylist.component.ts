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

  private getDependency():PropertyService{
    if(!this.propertyService)
    {
      this.propertyService=this.injector.get(PropertyService);
    }
    return this.propertyService;
  }

  ngOnInit(): void {

    const myserviceInstance=this.getDependency();
    myserviceInstance.getProperties();
  }

  editProperty(id:number):void{
    this.router.navigate([`editprop/${id}`]);
  }

  deleteProperty(id:number):void{
    this.propertyService.DeleteProperty(id);
     this.properties=this.propertyService.getProperties();
  }


}
