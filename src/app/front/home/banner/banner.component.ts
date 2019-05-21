import { Component, OnInit, DoCheck, HostListener} from '@angular/core';
import { DetectDeviceService } from  '../../../services/detect-device.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CommonThingService } from '../../../services/common-thing.service';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, DoCheck{
	constructor(private dd:DetectDeviceService, private CommonThingService:CommonThingService, private HttpClient:HttpClient) { }

	desktopDev:boolean = false;
	mobileDev:boolean = false;
	
	first:boolean = true;
	second:boolean = false;
	third:boolean = false;
	
	firstUrl:string = null;
	secondUrl:string = null;
	thirdUrl:string = null;


	//render banner height
	bannerHeight(){		
		if(window.innerWidth < 520){
			this.mobile = true
		}else{
			this.desktop = true;
		}
	}	
	ngDoCheck(){
		this.bannerHeight();		
	}
	
	disableAllImages(){
		this.first = false;
		this.second = false;
		this.third = false;
	}
	//banner
	  hightWindow = window.innerHeight + 'px';
	  desktop:boolean = false;
	  mobile:boolean = false;
	  bannerFlag:boolean = false;
	  setInterfal;

	ngOnInit() {
		this.get();
		if(this.dd.detectDevice() == 'desktop'){
		 	this.desktopDev = true
		}else if(this.dd.detectDevice() == 'mobile'){
		 	this.mobileDev = true		 			 	
		}
		this.setInterfal = setInterval(() => {
			if(this.first){
				this.disableAllImages();
				this.second = true;
			}else if(this.second){
				this.disableAllImages();
				this.third = true;
			}else if(this.third){
				this.disableAllImages();
				this.first = true;
			}
		},4000); 
		this.bannerHeight();		
	}


	overLay:boolean = false;
	more(){
		this.overLay = true;
	}
	close(){
		this.overLay = false;
	}



	
  

  //resize banner
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.hightWindow = window.innerHeight + 'px';
  }



  //marquee
  marqueeFlg = false;
  getArr = [];

  // get events
  get(){
    this.HttpClient.get<any>(this.CommonThingService.getIp()+'v1/morquee').subscribe(item => {
	  this.getArr = item.result.morquees;            
	  if(this.getArr.length > 0){
		  this.getArr.map(v=>{
			if(v.status){
				this.marqueeFlg = true;
			}
		  })		
	  }
    }, err =>{})
  }
  

  
  







}
