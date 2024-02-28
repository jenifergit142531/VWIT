import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproperty',
  templateUrl: './editproperty.component.html',
  styleUrl: './editproperty.component.css'
})
export class EditpropertyComponent implements OnInit {


  editedProperty:any={
      id:0,
      pname:'',
      ptype:'',
      price:0
  }

  constructor(private propertyService:PropertyService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    const propertyId=Number(this.route.snapshot.paramMap.get('id'));
    this.editedProperty=this.propertyService.getProprtyById(propertyId);
  }

  updateProperty():void{
    this.propertyService.updateProperty(this.editedProperty);
    this.router.navigate([`plist`]);
  }

}
