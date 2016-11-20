import { Component, OnInit } from '@angular/core';

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