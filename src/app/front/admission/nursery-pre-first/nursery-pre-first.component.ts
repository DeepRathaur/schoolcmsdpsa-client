import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nursery-pre-first',
  templateUrl: './nursery-pre-first.component.html',
  styleUrls: ['./nursery-pre-first.component.css']
})
export class NurseryPreFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  
    first =false;
    second =true;
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
