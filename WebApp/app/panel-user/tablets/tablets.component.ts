﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageTitleService } from '../../core/page-title.service';
import { PanelUserService } from '../panel-user.service';

import { UserViewModel } from '../../models/user.model';
import { TabletViewModel } from '../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    templateUrl: 'tablets.html',
    styleUrls: ['tablets.css']
})
export class PanelUserTabletsComponent implements OnInit {

    constructor(
        private pageTitleService: PageTitleService,
        private panelUser: PanelUserService,
        private router: Router) { }

    public ngOnInit(): void {
        this.pageTitleService.name.next('Panel user - tablets');
        this.refresh();
    }

    private refresh() {
    }
}