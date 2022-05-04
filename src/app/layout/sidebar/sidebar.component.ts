import { Component, Input, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy {

	@ViewChild('changeThemeSwal') private changeThemeSwal: SwalComponent;
	@Input() sidebarVisible: boolean = true;
	@Input() navTab: string = "menu";
	@Input() currentActiveMenu;
	@Input() currentActiveSubMenu;
	@Output() changeNavTabEvent = new EventEmitter();
	@Output() activeInactiveMenuEvent = new EventEmitter();
    public darkClass: string = "";
	public themeColor: string = "#8950fc";
	public themeColors = ["#a27ce6", "#3eacff", "#49c5b6", "#50d38a", "#ffce4b", "#e47297", "#8950fc", "#7e6990"];
	public bgColor: string = "#E4E0EC";
	public bgColors = ["#E5E0EC", "#E3ECEF", "#E1ECEB", "#DEEAE4", "#EDEBE2", "#ECE0E4", "#E4E0EC", "#E4DDEA"];
    private ngUnsubscribe = new Subject();
	private isModeChange = false;
	public lastName:string=""
	public firstName:string=""

	constructor(private themeService: ThemeService) {
		this.themeService.themeColorChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeColor => {
            this.themeColor = themeColor;
        });
		this.themeService.bgColorChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(bgColor => {
            this.bgColor = bgColor;
        });
        this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
            this.darkClass = darkClass;
			this.setBackground(true);
        });
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	ngOnInit(): void {
		this.firstName=localStorage.getItem("firstName")
		this.lastName=localStorage.getItem("lastName")
		
	}


	changeNavTab(tab: string) {
		this.navTab = tab;
	}

	activeInactiveMenu(menuItem: string) {
		this.activeInactiveMenuEvent.emit({ 'item': menuItem });
	}
    
    changeDarkMode(darkClass: string) {
        this.themeService.changeDarkMode(darkClass);
    }

	handleThemeColorChange($event) {
		this.themeService.setThemeColor($event.color.hex);
		this.setBackground();
	}

	handleBgColorChange($event) {
		this.themeService.setBgColor($event.color.hex);
	}

	setBackground(isModeChange = false) {
		let index = this.themeColors.indexOf(this.themeColor);
		this.isModeChange = isModeChange;
		if(this.darkClass == "full-dark") {
			this.bgColors = ["#1D1B1E", "#1F2123", "#1F2323", "#202523", "#21211E", "#272223", "#232125", "#25252A"];
		} else {
			this.bgColors = ["#E5E0EC", "#E3ECEF", "#E1ECEB", "#DEEAE4", "#EDEBE2", "#ECE0E4", "#E4E0EC", "#E4DDEA"];
		}
		if(index > -1) {
			this.changeThemeSwal.fire();
		} else if (isModeChange) {
			if(this.darkClass == "full-dark") {
				this.changeBgColor("#2b2b35");
			} else {
				this.changeBgColor("#f4f7f6");
			}
		}
	}

	changeMatchingBgColor() {
		let index = this.themeColors.indexOf(this.themeColor);
		this.changeBgColor(this.bgColors[index]);
	}

	cancelChangeMatchingColor() {
		if (this.isModeChange) {
			if(this.darkClass == "full-dark") {
				this.changeBgColor("#2B2B35");
			} else {
				this.changeBgColor("#F4F7F6");
			}
		}
	}

	changeBgColor(color:string){
		this.themeService.setBgColor(color);
		this.isModeChange = false;
	}
}


