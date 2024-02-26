import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
 // template:`<p>{{message}}</p>`,
  styleUrl: './hello.component.css'
// styles:`p{background-color:red}`
})
export class HelloComponent {

  message:string="Greetings User";
  public count:number=0;

  public userInput:string='';

  //methods

  showMessage():void{
    alert(this.message);
  }

  incrementCounter():void{
    this.count++;
  }

}
