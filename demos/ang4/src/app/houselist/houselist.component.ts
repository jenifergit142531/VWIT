import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { House } from '../house';

@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrl: './houselist.component.css'
})
export class HouselistComponent implements OnInit {

  house:House[]=[];

  constructor(private houseService:HouseService){}
  ngOnInit(): void {
    this.houseService.getAllHouses()
    .subscribe({
      next:(house)=>
      {
        this.house=house;
        console.log(house);
      }
      
    ,
    error:(response)=>
    {
      console.log(response);
    }
    })
  }


}
