import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-parentcomponent-list',
  templateUrl: './parentcomponent-list.component.html',
  styleUrl: './parentcomponent-list.component.css'
})
export class ParentcomponentListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  customers:Customer[]=[
    {cusno:100,name:'amy',city:'chennai'},
    {cusno:200,name:'aron',city:'pune'},
    {cusno:300,name:'steve',city:'bengaluru'}
  ]

  selectedCustomer:Customer=new Customer();

  showDetails(customer:Customer)
  {
    this.selectedCustomer=Object.assign({},customer);
  }

  update(customer:Customer)
  {
    console.log(customer);
    var cust=this.customers.find(a=>a.cusno==customer.cusno);
    Object.assign(cust!,customer);
    alert("customer saved");
  }



}
