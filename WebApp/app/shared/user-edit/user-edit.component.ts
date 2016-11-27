import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../models/user.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: 'user-edit.html',
    styleUrls: ['user-edit.css']
})
export class UserEditComponent {

    @Input() public user: UserViewModel;

    @Output() public saveClicked = new EventEmitter<UserViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.saveClicked.emit(this.user);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}