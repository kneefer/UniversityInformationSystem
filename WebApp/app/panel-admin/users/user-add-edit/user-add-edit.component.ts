import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../../models/user.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'user-add-edit',
    templateUrl: 'user-add-edit.html',
    styleUrls: ['user-add-edit.css']
})
export class UserAddEditComponent implements OnInit {

    @Input() public user: UserViewModel;

    @Output() public saveClicked = new EventEmitter<UserViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public processedUser: UserViewModel;

    public ngOnInit(): void {
        this.processedUser = this.user
            ? JSON.parse(JSON.stringify(this.user)) as UserViewModel
            : new UserViewModel();
    }

    private onSaveClick(event: Event): void {
        event.preventDefault();
        this.saveClicked.emit(this.processedUser);
    }

    private onCancelClick(event: Event): void {
        event.preventDefault();
        this.cancelClicked.emit();
    }
}