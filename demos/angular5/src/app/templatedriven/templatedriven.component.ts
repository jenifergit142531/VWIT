import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.css'
})
export class TemplatedrivenComponent {


  form={
    username:'',
    email:'',
    password:''
  };

  onSubmit():void{
    alert(JSON.stringify(this.form));
  }

  onReset(form:NgForm):void{
    form.reset();
  }

}
