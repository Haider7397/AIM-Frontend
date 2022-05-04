import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	public themeColor: string = "#8950fc";
	public bgColor: string = "#f4f7f6";
    public darkClass:string = "";
	public smallScreenMenu = "";

	themeColorChange: Subject<string> = new Subject<string>();
	bgColorChange: Subject<string> = new Subject<string>();
    smallScreenMenuShow: Subject<string> = new Subject<string>();
    darkClassChange: Subject<string> = new Subject<string>();

	constructor() {
		this.themeColorChange.subscribe((value) => {
			this.themeColor = value
		});
		this.smallScreenMenuShow.subscribe((value) => {
			this.smallScreenMenu = value;
        });
        this.darkClassChange.subscribe((value) => {
            this.darkClass = value
        });
	}

	setThemeColor(themeColor:string) {
		document.documentElement.style.setProperty('--primary', themeColor);
		this.themeColorChange.next(themeColor);
	}

	setBgColor(bgColor:string) {
		document.documentElement.style.setProperty('--primary-bg-300', this.colorLuminance(bgColor,0.1));
		document.documentElement.style.setProperty('--primary-bg-400', this.colorLuminance(bgColor,0.05));
		document.documentElement.style.setProperty('--primary-bg-500', bgColor);
		document.documentElement.style.setProperty('--primary-bg-600', this.colorLuminance(bgColor,-0.1));
		document.documentElement.style.setProperty('--primary-bg-700', this.colorLuminance(bgColor,-0.2));
		this.bgColorChange.next(bgColor);
	}

	showHideMenu() {
		if (!this.smallScreenMenu){
			this.smallScreenMenuShow.next("offcanvas-active");
		} else {
			this.smallScreenMenuShow.next("");
		}
		
	}

	hideMenu() {
		this.smallScreenMenuShow.next("");
	}

    changeDarkMode(darkClass){
        this.darkClassChange.next(darkClass);
    }	

	colorLuminance(hex, lum) {

		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
	
		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
	
		return rgb;
	}
}
