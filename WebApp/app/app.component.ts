import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PageTitleService } from './core/page-title.service';

import { IsAdminGuard } from './core/isAdmin.guard';
import { IsUserGuard } from './core/isUser.guard';
import { IsAuthGuard } from './core/isAuth.guard';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'app-component',
    templateUrl: 'app.html',
    styleUrls: ['app.css']
})
export class AppComponent implements OnInit {

    public title = '';
    public currentYear = 0;

    constructor(
        private pageTitleService: PageTitleService,
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
}