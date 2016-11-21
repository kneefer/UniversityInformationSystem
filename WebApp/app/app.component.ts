import { Component, OnInit } from '@angular/core';

import { PageTitleService } from './core/pagetitle.service';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

    public title : string = "DEFAULT_TITLE";

    constructor(
        private pageTitleService: PageTitleService) { }

    ngOnInit(): void {
        this.pageTitleService.name.subscribe(newTitle => this.title = newTitle);
    }
}