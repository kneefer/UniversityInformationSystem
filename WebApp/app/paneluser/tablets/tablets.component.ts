import { Component, OnInit } from '@angular/core';

import { PanelUserService } from '../paneluser.service';
import { PageTitleService } from '../../core/pagetitle.service';

@Component({
    templateUrl: 'app/paneluser/tablets/tablets.component.html'
})
export class PanelUserTabletsComponent implements OnInit {

    constructor(
        private panelUser: PanelUserService,
        private pageTitleService: PageTitleService) {

    }

    ngOnInit(): void {
        this.pageTitleService.name.next("Panel user - tablets");
    }
}