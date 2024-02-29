import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { House } from '../house';
import { Router } from '@angular/router';


@Component({
  selector: 'app-housecreate',
  templateUrl: './housecreate.component.html',
  styleUrl: './housecreate.component.css'
})
export class HousecreateComponent implements OnInit {

  addHouse:House={
  houseId:'',
  name:'',
  price:0,
  age:0,
  imageUrl:''
  };
  



  constructor(private houseService:HouseService,private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createHouse()
  {
    this.houseService.addHousing(this.addHouse)
    .subscribe({
      next:(house)=>
      {
        this.router.navigate(['hlist']);
        console.log(house);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }


}
