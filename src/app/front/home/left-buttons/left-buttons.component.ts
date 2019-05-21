import { Component, OnInit } from '@angular/core';
import { CommonThingService } from '../../../services/common-thing.service';

@Component({
	selector: 'app-left-buttons',
	templateUrl: './left-buttons.component.html',
	styleUrls: ['./left-buttons.component.css']
})
export class LeftButtonsComponent implements OnInit {
	constructor(private cs:CommonThingService) { }
	mobile =false;
	desktop =false;
	prospectus = null;

	ngOnInit() {

		this.prospectus = this.cs.getIp() + 'Final_Prospectus_2019_2020.pdf';
		if (window.innerWidth < 600) {
			this.mobile = true;
		}else{
			this.desktop = true;
		}
	}

}
