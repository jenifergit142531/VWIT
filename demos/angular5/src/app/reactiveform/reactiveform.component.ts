import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  userform=new FormGroup({
    'username':new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    'email':new FormControl('',[Validators.email,Validators.required]),
    'password':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
  });

  save()
  {
    alert(JSON.stringify(this.userform.value));
  }

}
