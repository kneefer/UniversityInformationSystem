import { Component, OnInit } from '@angular/core';

import { PanelAdminService } from '../paneladmin.service';

@Component({
    templateUrl: 'app/paneladmin/users/users.component.html'
})
export class PanelAdminUsersComponent implements OnInit {

    constructor(private panelAdmin: PanelAdminService) {

    }

    ngOnInit(): void {

    }
}