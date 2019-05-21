import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-our-campus',
	templateUrl: './our-campus.component.html',
	styleUrls: ['./our-campus.component.css']
})
export class OurCampusComponent implements OnInit {
	
	constructor() { }
		desktop = false;
		mobile = false;

	ngOnInit() {

		if(window.innerWidth < 750){
			this.mobile = true;
		}else{
			this.desktop = true;
		}
	}




	
	// mover
		left = '9%';
		defaultColor = '#6cbd45'
		lineColor = '5px solid #6cbd45';
		colr =  'transparent transparent ' + this.defaultColor + ' transparent' ;

		changeMovr(left , colr){			
			this.left = left;
			this.colr = 'transparent transparent ' + colr + ' transparent'; 
			this.lineColor = '5px solid ' + colr; 
			console.log(this.lineColor)
		}
	// end mover



	// ====================================main button on home page==========================================//

	
	campus:boolean = true;
	curricular:boolean = false;	
	stagesOfStudy:boolean = false;
	Streams_Subjects:boolean = false;
	facility:boolean = false;	

	// for mobile
		mainActiveBtn:string = 'campus';
	// for mobile
	disableAllMainButton(){		
		this.campus = false;
		this.curricular = false;
		this.facility = false;
		this.stagesOfStudy = false;
		this.Streams_Subjects = false;
	}
	
	campusFun(){
		this.disableAllMainButton()
		this.campus = true;
		this.changeMovr('9%', '#6cbd45')
		this.mainActiveBtn = 'campus'	
	}
	facilityFun(){		
		this.disableAllMainButton();		
		this.facility = true;		
		this.changeMovr('28%', '#39ab77')
		this.mainActiveBtn = 'facility'	
	
	}
	curricularFun(){
		this.disableAllMainButton();
		this.curricular = true;		
		this.changeMovr('86%', '#515aa9')
		this.mainActiveBtn = 'activity'	

	}

	stagesOfStudyFun(){
		this.disableAllMainButton();		
		this.stagesOfStudy = true;
		this.changeMovr('47%', '#3fbc96')
		this.mainActiveBtn = 'stages'	
	}
	Streams_SubjectsFun(){
		this.changeMovr('66%', '#38a0c1')
		this.disableAllMainButton();	
		this.Streams_Subjects = true;
		this.mainActiveBtn = 'subject'	
		// alert(this.Streams_Subjects)	
	}

	// ==================================== end main button on home page==========================================//











	more = false;
	readMore(){
		this.more = true;
	}

	




}






