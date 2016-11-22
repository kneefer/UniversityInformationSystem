import { Component, OnInit } from '@angular/core';

import { PanelUserService } from '../panel-user.service';
import { PageTitleService } from '../../core/page-title.service';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'tablets.html'
})
export class PanelUserTabletsComponent implements OnInit {

    constructor(
        private panelUser: PanelUserService,
        private pageTitleService: PageTitleService) {

    }

    ngOnInit(): void {
        this.pageTitleService.name.next('Panel user - tablets');
    }
}