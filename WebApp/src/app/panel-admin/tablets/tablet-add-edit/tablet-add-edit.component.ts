import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TabletViewModel } from '../../../models/tablet.model';

@Component({
    selector: 'tablet-add-edit',
    templateUrl: 'tablet-add-edit.component.html',
    styleUrls: ['tablet-add-edit.component.css']
})
export class TabletAddEditComponent implements OnInit {

    @Input() public tablet: TabletViewModel;

    @Output() public saveClicked = new EventEmitter<TabletViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public processedTablet: TabletViewModel;

    public ngOnInit(): void {
        this.processedTablet = this.tablet
            ? TabletViewModel.clone(this.tablet)
            : new TabletViewModel();
    }

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.saveClicked.emit(this.processedTablet);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}