import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  first =true;
  second =false;
  third =false;
  fourth =false;
  fifth =false;
  disableAll(){
	this.first = false;  	
	this.second = false;  	
	this.third = false;  	
	this.fourth = false;  	
	this.fifth = false;  	
  }
  run(v){
  	this.disableAll();
  	if(v=='first'){
  		this.first = true;
  	}else if(v=='second'){
  		this.second = true;
  	}else if(v=='third'){
  		this.third = true  		
  	}else if(v=='fourth'){
  		this.fourth = true  		
  	}else if(v=='fifth'){
  		this.fifth = true  		
  	}
  }

}
