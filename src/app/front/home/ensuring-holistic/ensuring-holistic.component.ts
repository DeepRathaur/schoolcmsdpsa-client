import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensuring-holistic',
  templateUrl: './ensuring-holistic.component.html',
  styleUrls: ['./ensuring-holistic.component.css']
})
export class EnsuringHolisticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  more:boolean = false;
  readMore(){
  	this.more = true;
  }

}
