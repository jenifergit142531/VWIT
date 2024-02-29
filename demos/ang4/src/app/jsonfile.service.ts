import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class JsonfileService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>('assets/data.json');
  }
}
