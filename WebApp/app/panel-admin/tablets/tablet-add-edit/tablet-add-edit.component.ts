import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TabletViewModel } from '../../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'tablet-add-edit',
    templateUrl: 'tablet-add-edit.html',
    styleUrls: ['usertablet-add-edit.css']
})
export class TabletAddEditComponent implements OnInit {

    @Input() public tablet: TabletViewModel;

    @Output() public saveClicked = new EventEmitter<TabletViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public processedTablet: TabletViewModel;

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.saveClicked.emit(this.tablet);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }

    public ngOnInit(): void {
        this.processedTablet = this.tablet
            ? JSON.parse(JSON.stringify(this.tablet)) as TabletViewModel
            : new TabletViewModel();
    }
}