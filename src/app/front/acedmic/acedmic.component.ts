import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-acedmic',
	templateUrl: './acedmic.component.html',
	styleUrls: ['./acedmic.component.css']
})
export class AcedmicComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

// read more top theree para
      first =false;
      second =false;
      third =false;
      
    disAll(){
      this.first = false;
      this.second = false;
      this.third = false;
    }
    more(v){
        this.disAll()
          if(v == 'first'){
            this.first  = true;
          } else if( v == 'second'){
            this.second = true;
          }   else if(v == 'third'){
            this.third = true;
          }
    }
// end

//main tabs click
    main_first:boolean = true;
    main_second:boolean = false;
    main_third:boolean = false;
    main_fourth:boolean = false;
    main_fifth:boolean = false;
    main_seventh:boolean = false;
    main_sixth:boolean = false;

    borderColor = '#ccc';

    
    mainTabDisableAll(){
      this.main_first = false;
      this.main_second = false;
      this.main_third = false;
      this.main_fourth = false;
      this.main_fifth = false;
      this.main_seventh = false;
      this.main_sixth = false;

    }
    main(v){ 
      this.mainTabDisableAll();   
      if(v=='main_first'){        
        this.main_first = true;
      }else if(v=='main_second'){
        this.main_second = true;
        this.borderColor = '#ff7b0d'
      }else if(v=='main_third'){
        this.main_third = true;
        this.borderColor = '#8fc400'
      }else if(v=='main_fourth'){
        this.main_fourth = true;
        this.borderColor = '#e5e696'        
      }else if(v=='main_fifth'){
        this.main_fifth = true;
        this.borderColor = '#ffd65e' 
      }else if(v=='main_seventh'){
        this.main_seventh = true;
        this.borderColor = '#ffd65e' 
      }
      else if(v=='main_sixth'){
        this.main_sixth = true;
        this.borderColor = '#ffd65e' 
      }
      
    }
// end
}
