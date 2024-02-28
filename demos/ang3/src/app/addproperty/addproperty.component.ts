import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrl: './addproperty.component.css'
})
export class AddpropertyComponent {

  pname:string='';
  ptype:string='';
  price:number=0;

  constructor(private propertyService:PropertyService,private router:Router){}


  addProperty():void{

    if(this.pname&&this.ptype&&this.price >=0)
    {
      this.propertyService.addProperty({

        pname:this.pname,
        ptype:this.ptype,
        price:this.price
  
      });

      this.router.navigate([`plist`]);


    }
    
  }

}
