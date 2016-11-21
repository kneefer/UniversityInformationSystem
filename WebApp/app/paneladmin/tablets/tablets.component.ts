import { Component, OnInit } from '@angular/core';

import { PanelAdminService } from '../paneladmin.service';
import { PageTitleService } from '../../core/pagetitle.service';

@Component({
    templateUrl: 'app/paneladmin/tablets/tablets.component.html'
})
export class PanelAdminTabletsComponent implements OnInit {

    constructor(
        private panelAdmin: PanelAdminService,
        private pageTitleService: PageTitleService) { }

    ngOnInit(): void {
        this.pageTitleService.name.next("Panel Admin - Tablets")
    }
}