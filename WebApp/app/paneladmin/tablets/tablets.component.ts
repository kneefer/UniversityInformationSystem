import { Component, OnInit } from '@angular/core';

import { PanelAdminService } from '../paneladmin.service';
import { PageTitleService } from '../../core/pagetitle.service';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'tablets.component.html'
})
export class PanelAdminTabletsComponent implements OnInit {

    constructor(
        private panelAdmin: PanelAdminService,
        private pageTitleService: PageTitleService) { }

    ngOnInit(): void {
        this.pageTitleService.name.next("Panel Admin - Tablets")
    }
}