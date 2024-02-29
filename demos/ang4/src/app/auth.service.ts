import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrlAuth:string="https://localhost:7186/api/auth";

  constructor(private http:HttpClient) { }

  login(username:string,password:string)
  {
    return this.http.post<any>(`${this.baseUrlAuth}/login`,{username,password});
  }
}
