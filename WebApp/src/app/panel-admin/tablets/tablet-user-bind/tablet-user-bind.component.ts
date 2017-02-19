import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../../models/user.model';
import { TabletViewModel } from '../../../models/tablet.model';

@Component({
    selector: 'tablet-user-bind',
    templateUrl: 'tablet-user-bind.component.html',
    styleUrls: ['tablet-user-bind.component.css']
})
export class TabletUserBindComponent {

    @Input() public users : Array<UserViewModel>;
    @Input() public tablet : TabletViewModel;

    @Output() public addClicked = new EventEmitter<UserViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    private selectedUserToBind: UserViewModel;

    private onAddClick(event: Event): void {
        event.preventDefault();
        this.addClicked.emit(this.selectedUserToBind);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit(event);
    }

    private onUserOptionClick(event: string) {
        this.selectedUserToBind = UserViewModel.clone(JSON.parse(event));
    }
}