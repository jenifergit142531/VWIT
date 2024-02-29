import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { House } from '../house';import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-houseedit',
  templateUrl: './houseedit.component.html',
  styleUrl: './houseedit.component.css'
})
export class HouseeditComponent implements OnInit {

  editHouse:House={
    houseId:'',
    name:'',
    price:0,
    age:0,
    imageUrl:''
    };
    

  constructor(private houseService:HouseService,
    private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const houseId=params.get('houseId');
        if(houseId)
        {
          this.houseService.getHouseById(houseId)
        
        .subscribe({
          next:(housing)=>
          {
            this.editHouse=housing;
            console.log(housing);
          }
          
        
        })
      }
      }
    })

    
    
  }

  updateHousing()
  {
     this.houseService.updateHouse(this.editHouse.houseId,this.editHouse)
     .subscribe({
      next:(response)=>
      {
        this.router.navigate(['hlist']);
        console.log(response);
      },
      error:(response)=>
      {
        console.log(response);
      }
     });
  }

  deleteHousing(id:string)
  {
     this.houseService.deleteHouse(id)
     .subscribe({
      next:(response)=>
      {
        this.router.navigate(['hlist']);
      },
      error:(response)=>
      {
        console.log(response);
      }
     });
  }





}
