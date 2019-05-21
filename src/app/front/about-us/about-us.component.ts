import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  }

  // (click)="more('1')"()
  first=false;
  second=false;
  third=false;
  disall(){
  	this.first = false;
  	this.second = false;
  	this.third = false;
  }
  more(v){
  	this.disall();
  	if(v=='1'){
  		this.first = true;	
  	}else if(v=='2'){
  		this.second = true;	
  	}else if(v=='3'){
  		this.third = true;	
  	}  	
  }

}
