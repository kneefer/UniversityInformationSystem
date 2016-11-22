import { Component, OnInit } from '@angular/core';

import { PanelAdminService } from '../panel-admin.service';
import { PageTitleService } from '../../core/page-title.service';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'tablets.html'
})
export class PanelAdminTabletsComponent implements OnInit {

    constructor(
        private panelAdmin: PanelAdminService,
        private pageTitleService: PageTitleService) { }

    ngOnInit(): void {
        this.pageTitleService.name.next('Panel Admin - Tablets');
    }
}