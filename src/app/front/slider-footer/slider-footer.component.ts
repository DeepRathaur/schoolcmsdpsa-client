import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetectDeviceService } from  '../../services/detect-device.service';
import { CommonThingService } from  '../../services/common-thing.service';

@Component({
  selector: 'app-slider-footer',
  templateUrl: './slider-footer.component.html',
  styleUrls: ['./slider-footer.component.css']
})
export class SliderFooterComponent implements OnInit {

constructor(private dd:DetectDeviceService, private cts:CommonThingService) { }
  desktop:boolean = false;
  mobile:boolean = false;
 
 
  ngOnInit() {
  	if(this.dd.detectDevice() == 'desktop'){
  			this.desktop = true
  	}else if(this.dd.detectDevice() == 'mobile'){
  		this.mobile = true		 			 	
  	}
  }

  run(v){
    this.cts.listenSliderFooterClik(v);
  }



}

