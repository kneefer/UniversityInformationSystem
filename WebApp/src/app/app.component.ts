import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PageTitleService } from './core/page-title.service';

import { IsAdminGuard } from './core/isAdmin.guard';
import { IsUserGuard } from './core/isUser.guard';
import { IsAuthGuard } from './core/isAuth.guard';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {

    public title = '';
	public currentYear = 0;
	public isFullScreenMode = false;

    constructor(
		private pageTitleService: PageTitleService,
		private router: Router,
        private titleService: Title,
        private isAdminGuard: IsAdminGuard,
        private isUserGuard: IsUserGuard,
        private authGuard: IsAuthGuard) { }

	public ngOnInit(): void {
		this.pageTitleService.name.subscribe(newTitle => {
			this.title = newTitle;
			this.titleService.setTitle(`University Information System - ${newTitle}`);
		});

		this.currentYear = new Date().getFullYear();
	}

	public ngAfterContentInit(): void {
		this.router.events.subscribe(s => {
			if (s instanceof NavigationEnd) {
				this.navigationChanged();
			}
		});
	}

	private navigationChanged(): void {
		const currentUrlTree = this.router.parseUrl(this.router.url);
		const children = currentUrlTree.root.children['primary'];
		this.isFullScreenMode = children.segments[0].path == "preview";
	}
}