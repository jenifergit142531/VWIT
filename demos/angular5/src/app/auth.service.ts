import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(username:string,password:string):boolean
  {
     if(username=='user' && password=='pwd')
     {
      localStorage.setItem('isLoggedIn','true');
      return true;
     }
     else{
      return false;
     }
  }

  logout():void
  {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn():boolean
  {
    return localStorage.getItem('isLoggedIn')==='true';
  }
}
