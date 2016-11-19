import { Component, OnInit } from '@angular/core';

import { IEntity } from '../../shared/models/entity';
import { PanelAdminService } from '../paneladmin.service';

@Component({
    templateUrl: 'app/paneladmin/tablets/tablets.component.html'
})
export class PanelAdminTabletsComponent implements OnInit {

    constructor(private panelAdmin: PanelAdminService) {
        
    }

    ngOnInit(): void {
        
    }
}