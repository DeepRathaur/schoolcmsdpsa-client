import { Injectable, OnInit } from '@angular/core';

Injectable()
export class DetectDeviceService {

  constructor() { }
    detectDevice(){
      if(window.innerWidth < 600){
        return 'mobile';
      }else{
        return 'desktop';
      }
    }
}
