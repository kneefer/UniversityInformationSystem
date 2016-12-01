import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../models/user.model';
import { TabletViewModel } from '../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'tablet-user-bind',
    templateUrl: 'tablet-user-bind.html',
    styleUrls: ['tablet-user-bind.css']
})
export class TabletUserBindComponent implements OnInit {

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
        this.cancelClicked.emit();
    }

    private onUserOptionClick(event: Event, selectedUser: UserViewModel) {
        event.preventDefault();
        this.selectedUserToBind = selectedUser;
    }

    public ngOnInit(): void {

    }
}