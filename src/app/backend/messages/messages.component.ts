import { Component, OnInit } from '@angular/core';
import { CommonThingService } from '../../services/common-thing.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private CommonThingService:CommonThingService) { 
    this.msgObj = this.CommonThingService.msgObj; 
    this.CommonThingService.detectMsg.subscribe((item)=>{
      this.msgObj = item;
    })
  }

  ngOnInit() {
  }

  msgObj =  {flag:<any>'', type:<any>''};
  flg = false;

 
}
