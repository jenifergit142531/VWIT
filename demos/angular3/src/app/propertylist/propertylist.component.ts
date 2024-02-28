import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrl: './propertylist.component.css'
})
export class PropertylistComponent implements OnInit {

properties:any[]=[];

  constructor(private propertyService:PropertyService){}
  
  ngOnInit(): void {
    this.properties=this.propertyService.getProperties();
  }

}
