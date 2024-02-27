import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  PropShop:any[]=[
    {pid:'p100',pname:'avisa',ownername:'Jeni',ptype:'holidayhome',price:25000,availability:'yes',Updateddate:'2/26/2024'},
    {pid:'p200',pname:'ivory',ownername:'Amy',ptype:'coliving',price:15000,availability:'no',Updateddate:'2/25/2024'},
    {pid:'p300',pname:'laguna',ownername:'Aron',ptype:'holidayhome',price:20000,availability:'yes',Updateddate:'2/24/2024'},
    {pid:'p400',pname:'macarena',ownername:'Steve',ptype:'coliving',price:5000,availability:'no',Updateddate:'2/23/2024'}
  ];
}
