import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.css']
})
export class CurrentSessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  first =true;
    second =false;
    third =false;
    fourth =false;
    fifth =false;
    fsdf

    
    sixth =false;
    seventh =false;
    disableAll(){
  	this.first = false;  	
  	this.second = false;  	
  	this.third = false;  	
  	this.fourth = false;  	
  	this.fifth = false;  	
    this.sixth = false;    
    this.seventh = false;    
    }
    run(v){
    	this.disableAll();
    	if(v=='1'){
    		this.first = true;
    	}else if(v=='2'){
    		this.second = true;
    	}else if(v=='3'){
    		this.third = true  		
    	}else if(v=='4'){
    		this.fourth = true  		
    	}else if(v=='5'){
    		this.fifth = true  		
    	}else if(v=='6'){
        this.sixth = true      
      }else if(v == '7'){
        this.seventh = true
      }

    }
}


