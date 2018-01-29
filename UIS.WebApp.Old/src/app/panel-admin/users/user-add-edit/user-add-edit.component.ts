import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../../models/user.model';

@Component({
    selector: 'user-add-edit',
    templateUrl: 'user-add-edit.component.html',
    styleUrls: ['user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {

    @Input() public user: UserViewModel;

    @Output() public saveClicked = new EventEmitter<UserViewModel>();
    @Output() public cancelClicked = new EventEmitter();

    public processedUser: UserViewModel;

    public ngOnInit(): void {
        this.processedUser = this.user
            ? UserViewModel.clone(this.user)
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