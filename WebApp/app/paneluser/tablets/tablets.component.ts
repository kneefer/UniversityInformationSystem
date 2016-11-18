import { Component, OnInit } from '@angular/core';

import { IEntity } from '../../shared/models/entity';
import { PanelUserService } from '../paneluser.service';

@Component({
    templateUrl: 'app/paneluser/tablets/tablets.component.html'
})
export class PanelUserTabletsComponent implements OnInit {

    constructor(private _panelUser: PanelUserService) {

    }

    ngOnInit(): void {

    }
}