import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dps-edge',
  templateUrl: './dps-edge.component.html',
  styleUrls: ['./dps-edge.component.css']
})
export class DpsEdgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 	DPS_Society:boolean = true;
 	Why_DPS:boolean = false;
 	Our_Offer:boolean = false;
 	Our_Curriculum:boolean = false;
 	Our_Pedagogy:boolean = false;
 	Beyond_Academia:boolean = false;
 	Evaluations:boolean = false;
 	mainActBtn:string = '';
 	disableAll(){
 		this.DPS_Society = false;
 		this.Why_DPS = false;
 		this.Our_Offer = false;
 		this.Our_Curriculum = false;
 		this.Our_Pedagogy = false;
 		this.Beyond_Academia = false;
 		this.Evaluations = false;
 	}


 	
 	run(v){

 		this.disableAll();
 		if(v=='DPS_Society'){
 			this.DPS_Society = true;
 			this.mainActBtn = 'DPS_Society'
 		}else if(v=='Why_DPS'){
 			this.Why_DPS = true;
 			this.mainActBtn = 'Why_DPS'
 		}else if(v=='our_offer'){
 			this.Our_Offer = true;
 			this.mainActBtn = 'our_offer'
 		}else if(v=='Our_Curriculum'){
 			this.Our_Curriculum = true;
 			this.mainActBtn = 'Our_Curriculum'
 		}else if(v=='Our_Pedagog'){
 			this.Our_Pedagogy = true;
 			this.mainActBtn = 'Our_Pedagog'
 		}else if(v=='Beyond_Academi'){
 			this.Beyond_Academia = true;
 			this.mainActBtn = 'Beyond_Academi'
 		}else if(v=='Evaluation'){
 			this.Evaluations = true;
 			this.mainActBtn = 'Evaluation'
 		}
 	}

 	
 	


}
