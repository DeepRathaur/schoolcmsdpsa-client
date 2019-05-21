import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-achiver',
  templateUrl: './student-achiver.component.html',
  styleUrls: ['./student-achiver.component.css']
})
export class StudentAchiverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 520){
      this.mobile = true;
    }
  }
  tenth = true;
  twelth = false;
  mobile = false;
  
  achiver(v){
  	this.tenth = false;
  	this.twelth = false;
  	if(v==10){
  		this.tenth = true;
  	}else if(v == 12){
  		this.twelth = true;
  	}    
  }

  all:boolean = false;
  showAll(){
   this.all = !this.all
  }

}
