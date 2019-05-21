import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ==================================== Faciliteis ==========================================//
    one = true;
    two = false;
    three = false;
    four = false;
    five = false;
    six = false;
    seven = false;
    eight = false;
    nine = false;
  	disableAll(){
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.seven = false;
      this.eight = false;
      this.nine = false;
    }
    run(v){
      this.disableAll();
      if(v==1){this.one = true}
      else if(v==2){this.two = true}
      else if(v==3){this.three = true}
      else if(v==4){this.four = true}
      else if(v==5){this.five = true}
      else if(v==6){this.six = true}
      else if(v==7){this.seven = true}
      else if(v==8){this.eight = true}
      else if(v==9){this.nine = true}
     
    }

  moreContentOne:boolean = false;
  moreContentThree:boolean = false;
  readMoreOne(){
    this.moreContentOne = true;
  }
  readMorethree(){
    this.moreContentThree = true;
  }

  libMoreV:boolean = false;
  libMore(){
    this.libMoreV = true;
  }
  

  // ==================================== end Faciliteis  ==========================================//



}
