import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TabletViewModel } from '../../../models/tablet.model';
import { TemplateViewModel } from '../../../models/template.model';
import { TokenViewModel } from '../../../models/token.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'template-tablet-set',
    templateUrl: 'template-tablet-set.html',
    styleUrls: ['template-tablet-set.css']
})
export class TemplateTabletSetComponent implements OnInit {

    public ngOnInit(): void {
        
    }
}