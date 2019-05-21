import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stageofstudy',
  templateUrl: './stageofstudy.component.html',
  styleUrls: ['./stageofstudy.component.css']
})
export class StageofstudyComponent implements OnInit {

  constructor() { }

  svgwidth = null;
  ngOnInit() {
    this.svgwidth = window.innerWidth/2 + 'px';
  }

    one = true;
    two = false;
    three = false;
    four = false;
    five = false;
 
  	disableAll(){
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;

    }
    run(v){
      this.disableAll();
      if(v==1){this.one = true}
      else if(v==2){this.two = true}
      else if(v==3){this.three = true}
      else if(v==4){this.four = true}
      else if(v==5){this.five = true}
     
    }

  moreContentOne:boolean = false;


  readMoreOne(){
    this.moreContentOne = true;
  }

  efirst = false;
  esecond = false;

  runEmp(v){
    if(v=='efirst'){
         this.efirst = true
    }else if(v=='esecond'){
         this.esecond = true
    }

  }



}
