import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  PropShop:any[]=[
    {pid:'p100',pname:'avisa',price:25000,availability:'yes',Updateddate:'2/26/2024'},
    {pid:'p200',pname:'ivory',price:15000,availability:'no',Updateddate:'2/25/2024'},
    {pid:'p300',pname:'laguna',price:20000,availability:'yes',Updateddate:'2/24/2024'},
    {pid:'p400',pname:'macarena',price:5000,availability:'no',Updateddate:'2/23/2024'}
  ];

  refresh():void{
    this.PropShop=[
      {pid:'p100',pname:'avisa',price:25000,availability:'yes',Updateddate:'2/26/2024'},
    {pid:'p200',pname:'ivory',price:15000,availability:'no',Updateddate:'2/25/2024'},
    {pid:'p300',pname:'laguna',price:20000,availability:'yes',Updateddate:'2/24/2024'},
    {pid:'p400',pname:'macarena',price:5000,availability:'no',Updateddate:'2/23/2024'},
    {pid:'p500',pname:'aaa',price:20000,availability:'yes',Updateddate:'2/24/2024'},
    {pid:'p600',pname:'bbb',price:5000,availability:'no',Updateddate:'2/23/2024'},
    ]
  }

  trackbyProdId(index:number,PropShop:any):string
{
  return PropShop.index;
}
}
