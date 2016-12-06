import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PageTitleService } from '../core/page-title.service';

import { PreviewService } from './preview.service';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'preview.html',
    styleUrls: ['preview.css']
})
export class PreviewComponent implements OnInit {

    constructor(
        private pageTitleService: PageTitleService,
        private previewService: PreviewService) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Preview');
    }
}