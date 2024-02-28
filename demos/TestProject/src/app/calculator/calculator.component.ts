import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  a!:number;
  b!:number;
  operator!:string;
  result!:number;
  errorMessage!:string;

  constructor(private calServive:CalculatorService){}

  calculate():void{

    switch(this.operator)
    {
      case 'add':
        this.result=this.calServive.add(this.a,this.b);
        break;
        case 'subtract':
          this.result=this.calServive.substract(this.a,this.b);
          break;
          case 'multiply':
            this.result=this.calServive.multiply(this.a,this.b);
            break;
            case 'divide':
              try{
                this.result=this.calServive.divide(this.a,this.b);
              }
              catch(error)
              {
                this.errorMessage=this.errorMessage;
              }
           
              break;

    }

  }

}