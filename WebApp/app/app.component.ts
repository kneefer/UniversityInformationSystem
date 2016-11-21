import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PageTitleService } from './core/pagetitle.service';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

    public title : string = "";
    public currentYear: number = 0;

    constructor(
        private pageTitleService: PageTitleService,
        private titleService: Title) { }

    ngOnInit(): void {
        this.pageTitleService.name.subscribe(newTitle => {
            this.title = newTitle;
            this.titleService.setTitle(`University Information System - ${newTitle}`);
        });

        this.currentYear = new Date().getFullYear();
    }
}