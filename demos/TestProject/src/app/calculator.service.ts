import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }


  add(a:number,b:number):number{
    return a+b;
  }
  substract(a:number,b:number):number{
    return a-b;
  }
  multiply(a:number,b:number):number{
    return a*b;
  }
  divide(a:number,b:number):number{
    if(b==0)
    {
      throw new Error("Divide by zero not allowed");
    }
    return a/b;
  }
}
