import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrl: './propertylist.component.css'
})
export class PropertylistComponent implements OnInit {

  properties:any[]=[];

  constructor(private propertyService:PropertyService,private router:Router){

    this.properties=this.propertyService.getProperties();

  }

  ngOnInit(): void {
    
  }

  editProperty(id:number):void{
    this.router.navigate([`editprop/${id}`]);
  }

  deleteProperty(id:number):void{
    this.propertyService.DeleteProperty(id);
     this.properties=this.propertyService.getProperties();
  }


}
