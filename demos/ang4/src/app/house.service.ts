import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from './house';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  baseApiUrl:string="https://localhost:7186/api/Houses";

  constructor(private http:HttpClient) { }

  getAllHouses():Observable<House[]>
  {
    return this.http.get<House[]>(this.baseApiUrl);
  }

  addHousing(addhouse:House):Observable<House[]>
  {
    addhouse.houseId='00000000-0000-0000-0000-000000000000';
    return this.http.post<House[]>(this.baseApiUrl,addhouse);

  }
}
