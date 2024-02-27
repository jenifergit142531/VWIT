import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent {
isAuthenticated:boolean=false;
isAdmin:boolean=false;
isSubscribed:boolean=false;
userAge:number=25;

  constructor()
  {
    const isLoggedIn=Math.random()<0.5;
    if(isLoggedIn){
       this.isAuthenticated=true;
       this.isAdmin=Math.random()<0.5;
       this.isSubscribed=Math.random()<0.5;
       this.userAge=Math.floor(Math.random()*60);
    }
  }

}
