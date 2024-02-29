import { Component, OnInit } from '@angular/core';
import { JsonfileService } from '../jsonfile.service';

@Component({
  selector: 'app-jsonfilereader',
  templateUrl: './jsonfilereader.component.html',
  styleUrl: './jsonfilereader.component.css'
})
export class JsonfilereaderComponent implements OnInit {

  jsonData:any;


  constructor(private jsonService:JsonfileService){}
  ngOnInit(): void {
    this.jsonService.getData().subscribe(data=>
      {
        this.jsonData=data;
        console.log('Json Data',this.jsonData);
      })
  }



}
