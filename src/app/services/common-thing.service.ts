import { Injectable,  Output, EventEmitter } from '@angular/core';

@Injectable()
export class CommonThingService {

  constructor() { }

  @Output() footerLink = new EventEmitter();  

  detectMsg = new EventEmitter();
  msgObj = { message: '', flag: false, type: '' };
  msgFun(msg, bool, type) {
    this.msgObj = { message: msg, flag: bool, type: type };
    this.detectMsg.emit(this.msgObj);
    setTimeout(() => { this.msgObj.flag = false }, 4000)
  }

  getIp(){
  	// staging
  	//  return 'http://dpsagra.ckmeout.com:50000/';

  	// live
	   return 'http://dps.ac.in:50005/';
	  
  	// local
  	  // return 'http://192.168.9.99:50000/';
  }

  listenSliderFooterClik(v){
  	this.footerLink.emit(v);
  }

}
