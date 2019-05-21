import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	mobile = false;
	desktop = false
	ngOnInit() {

	

		
		let ww = window.innerWidth;
		if(ww<600){
			this.mobile = true;
		}else{
			this.desktop = true;
		}

	}


	

}
