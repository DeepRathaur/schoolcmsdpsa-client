import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    one = true;
    two = false;
    three = false;
    four = false;
    five = false;
    six = false;
    seven = false;
    eight = false;
  
  	disableAll(){
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.seven = false;
      this.eight = false;


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
     
    }
}
