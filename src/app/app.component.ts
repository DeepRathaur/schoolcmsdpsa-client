import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  
  constructor(private httpClient:HttpClient) { }


  ngDoCheck(){}
  ngOnInit(){}


}
