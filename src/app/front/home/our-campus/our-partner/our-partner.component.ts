import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html',
  styleUrls: ['./our-partner.component.css']
})
export class OurPartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    one = true;
    two = false;
    three = false;
    four = false;
    
  
  	disableAll(){
      this.one = false;
      this.two = false;
      this.three = false;    
      this.four = false;
    }
    run(v){
      this.disableAll();
      if(v==1){this.one = true}
      else if(v==2){this.two = true}
      else if(v==3){this.three = true}     
      else if(v==4){this.four = true}     
    }
}
