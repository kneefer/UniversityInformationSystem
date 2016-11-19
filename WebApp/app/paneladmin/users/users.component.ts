import { Component, OnInit } from '@angular/core';

import { IEntity } from '../../shared/models/entity';
import { PanelAdminService } from '../paneladmin.service';

@Component({
    templateUrl: 'app/paneladmin/users/users.component.html'
})
export class PanelAdminUsersComponent implements OnInit {

    constructor(private _panelAdmin: PanelAdminService) {

    }

    ngOnInit(): void {

    }
}