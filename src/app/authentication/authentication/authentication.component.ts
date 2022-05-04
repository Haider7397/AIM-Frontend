import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

    private ngUnsubscribe = new Subject();

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) { }

	ngOnInit() {
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map((route) => {
				while (route.firstChild) route = route.firstChild;
				return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data)
        ).pipe(takeUntil(this.ngUnsubscribe))
		.subscribe((event) => this.titleService.setTitle(event['title']));

		// this.router.events
		// 	.filter((event) => event instanceof NavigationEnd)
		// 	.map(() => this.activatedRoute)
		// 	.map((route) => {
		// 		while (route.firstChild) route = route.firstChild;
		// 		return route;
		// 	})
		// 	.filter((route) => route.outlet === 'primary')
        //     .mergeMap((route) => route.data)
        //     .pipe(takeUntil(this.ngUnsubscribe))
		// 	.subscribe((event) => this.titleService.setTitle(event['title']));
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
