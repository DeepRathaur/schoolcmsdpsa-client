import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonThingService } from '../../services/common-thing.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	constructor(private router: Router, private cmts: CommonThingService) { }
	mobile: boolean = false;
	desktop: boolean = false;
	ngOnInit() {
		if (window.innerWidth < 600) {
			this.mobile = true;
		} else {
			this.desktop = true;
		}
		this.cmts.footerLink.subscribe((v) => {
			// this.MenuIcon = !this.MenuIcon;
		})
	}






	//toggle menu icon 
	MenuIcon: boolean = false;
	toggleMenuIcon() {
		this.MenuIcon = !this.MenuIcon;
	}

	hideMenuBar() {
		this.MenuIcon = false;

	}


	//toggle about submenu
	abtToggleFlg: boolean = false;
	toggleAbtUsSubMenu() {
		this.abtToggleFlg = !this.abtToggleFlg;
	}

	//toggle downloads submenu
	abtToggleFlgdownloads: boolean = false;
	toggleDownloadsSubMenu() {
		this.abtToggleFlgdownloads = !this.abtToggleFlgdownloads;
	}


	abtDPS() {
		this.MenuIcon = !this.MenuIcon;
		this.router.navigate(['/about-us']);
		setTimeout(() => {
			let aboutDPS = document.getElementById('aboutUs').offsetTop;
			window.scrollTo(0, aboutDPS);
		}, 200)
	}


	milestone() {
		this.MenuIcon = !this.MenuIcon;
		this.router.navigate(['/about-us']);
		setTimeout(() => {
			let milestone = document.getElementById('milestone').offsetTop;
			window.scrollTo(0, milestone);
		}, 200)
	}


	prinMsg() {
		this.MenuIcon = !this.MenuIcon;
		this.router.navigate(['/about-us']);
		setTimeout(() => {
			let prinMsg = document.getElementById('msg').offsetTop;
			window.scrollTo(0, prinMsg);
		}, 200)
	}

	goToAchiver() {
		this.MenuIcon = !this.MenuIcon;
		this.router.navigate(['/home']);
		setTimeout(() => {
			let achiverSec = document.getElementById('achiverSec').offsetTop;
			window.scrollTo(0, achiverSec);
		}, 200)

	}




}
