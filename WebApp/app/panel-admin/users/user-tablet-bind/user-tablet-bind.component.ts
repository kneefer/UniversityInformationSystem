import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../../models/user.model';
import { TabletViewModel } from '../../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'user-tablet-bind',
    templateUrl: 'user-tablet-bind.html',
    styleUrls: ['user-tablet-bind.css']
})
export class UserTabletBindComponent implements OnInit {

    @Input() public tablets : Array<TabletViewModel>;
    @Input() public user : UserViewModel;

    @Output() public addClicked = new EventEmitter<TabletViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    private selectedTabletToBind: TabletViewModel;

    private onAddClick(event: Event): void {
        event.preventDefault();
        this.addClicked.emit(this.selectedTabletToBind);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }

    private onTabletOptionClick(event: Event, selectedTablet: TabletViewModel) {
        event.preventDefault();
        this.selectedTabletToBind = selectedTablet;
    }

    public ngOnInit(): void {

    }
}