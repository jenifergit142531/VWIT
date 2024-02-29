import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string='';
  password:string='';

  constructor(private authService:AuthService,private router:Router){}

  onSubmit():void{
    this.authService.login(this.username,this.password)
    .subscribe({
      next:(user)=>
      {
        alert("Login successfully");
        this.router.navigate([`hlist`]);
      },
   
    

  error:(response)=>
  {
    alert('username or password is invalid');
    console.log(response);
  }

})
}
}
