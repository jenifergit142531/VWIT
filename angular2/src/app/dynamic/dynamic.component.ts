import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

  constructor(private router:Router){}

  

  navigatePipe():void
  {
    this.router.navigate(['pipes']);
  }

  navigateAuthentication():void{
    this.router.navigate(['authenticate']);
  }

}
