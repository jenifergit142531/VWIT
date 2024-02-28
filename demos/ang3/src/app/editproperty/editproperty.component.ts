import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproperty',
  templateUrl: './editproperty.component.html',
  styleUrl: './editproperty.component.css'
})
export class EditpropertyComponent {


  editedProperty:any={
      id:0,
      pname:'',
      ptype:'',
      price:0
  }

  constructor(private propertyService:PropertyService,private router:Router){}

  updateProperty():void{
    this.propertyService.updateProperty(this.editedProperty);
    this.router.navigate([`plist`]);
  }

}
