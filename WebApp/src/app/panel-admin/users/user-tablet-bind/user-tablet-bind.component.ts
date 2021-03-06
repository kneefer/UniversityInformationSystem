import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../../models/user.model';
import { TabletViewModel } from '../../../models/tablet.model';

@Component({
    selector: 'user-tablet-bind',
    templateUrl: 'user-tablet-bind.component.html',
    styleUrls: ['user-tablet-bind.component.css']
})
export class UserTabletBindComponent {

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
        this.cancelClicked.emit(event);
    }

    private onTabletOptionClick(event: string) {
        this.selectedTabletToBind = TabletViewModel.clone(JSON.parse(event));
    }
}