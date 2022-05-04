import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit, OnInit, OnDestroy {

	public title = 'lucid';
	public isStopLoading: boolean = false;
	public showNotifMenu: boolean = false;
	public showToggleMenu: boolean = false;
	public navTab: string = "menu";
	public currentActiveMenu = "light";
	public currentActiveSubMenu;
    public smallScreenMenu = "";
    public darkClass: string = "";
    private ngUnsubscribe = new Subject();

	constructor(public sidebarService: SidebarService, private router: Router, private activatedRoute: ActivatedRoute, private themeService: ThemeService, private titleService: Title) {
		this.activatedRoute.url.pipe(takeUntil(this.ngUnsubscribe)).subscribe(url => {
			this.isStopLoading = false;
			this.getActiveRoutes();
		});

		this.themeService.smallScreenMenuShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(showMenuClass => {
			this.smallScreenMenu = showMenuClass;
        });
        
        this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
            this.darkClass = darkClass;
        });

		this.themeService.setThemeColor("#3eacff");
		this.themeService.setBgColor("#f4f7f6");
	}

	ngOnInit() {
		let that = this;

		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map((route) => {
				that.themeService.hideMenu();
				while (route.firstChild) route = route.firstChild;
				return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data)
        ).pipe(takeUntil(this.ngUnsubscribe))
		.subscribe((event) => this.titleService.setTitle(event['title']));
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	toggleNotificationDropMenu() {
		this.showNotifMenu = !this.showNotifMenu;
	}

	toggleSettingDropMenu() {
		this.showToggleMenu = !this.showToggleMenu;
	}

	ngAfterViewInit() {
		let that = this;
		setTimeout(function () {
			that.isStopLoading = true;
		}, 1000);

	}

	getActiveRoutes() {
		let segments: Array<string> = this.router.url.split('/');
		this.currentActiveMenu = segments[2];
		this.currentActiveSubMenu = segments[3];
	}

	activeInactiveMenu($event) {
		if ($event.item && $event.item == this.currentActiveMenu) {
			this.currentActiveMenu = "";
		} else {
			this.currentActiveMenu = $event.item;
		}
	}

}
