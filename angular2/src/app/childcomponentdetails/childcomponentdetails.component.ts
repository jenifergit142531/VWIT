import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-childcomponentdetails',
  templateUrl: './childcomponentdetails.component.html',
  styleUrl: './childcomponentdetails.component.css'
})
export class ChildcomponentdetailsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() customer:Customer=new Customer();

  @Output() customerChange:EventEmitter<Customer>=new EventEmitter<Customer>();

  update()
  {
    this.customerChange.emit(this.customer);
  }

}
