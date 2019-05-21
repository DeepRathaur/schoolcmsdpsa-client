import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
	selector: '[appScroll]'
})
export class ScrollDirective {
	constructor(private elRef:ElementRef, private renderer:Renderer2) { }
	@HostListener('window:scroll', ['$event']) onScrollEvent($event){	
			if(window.scrollY > 300){
				this.renderer.setStyle(this.elRef.nativeElement, 'opacity', 0);

			}else{
				this.renderer.setStyle(this.elRef.nativeElement, 'opacity', 1);
			}
			
		
	} 

}







