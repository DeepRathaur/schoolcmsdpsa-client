import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-campus',
	templateUrl: './campus.component.html',
	styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	foundCamp:boolean = false;
	senCamp:boolean = false;
	shikshaKend:boolean = false;

  //read more
  foundCampFun(){
  	this.foundCamp = true;
  }
  senCampFun(){
  	this.senCamp = true;
  	
  }
  shikshaKendFun(){
  	this.shikshaKend = true;
  	
  }

  



	// ==================================== our campus==========================================//

	

	// sub buttons
	foundationCampus:boolean = true;
	seniorCampus:boolean = false;
	shikshaKendra:boolean = false;
	disableAllSubCampus(){
		this.foundationCampus = false;
		this.seniorCampus = false;
		this.shikshaKendra = false;
	}
	founcationCampusFun(){
		this.disableAllSubCampus();
		this.foundationCampus = true;
	}
	seniorCampusFun(){
		this.disableAllSubCampus();
		this.seniorCampus = true;
	}
	shikshaFun(){
		this.disableAllSubCampus();
		this.shikshaKendra = true;
	}

	// ==================================== end our campus==========================================//


}
