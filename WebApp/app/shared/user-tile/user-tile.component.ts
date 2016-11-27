import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserViewModel } from '../../models/user.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'user-tile',
    templateUrl: 'user-tile.html',
    styleUrls: ['user-tile.css']
})
export class UserTileComponent {

    @Input() public user: UserViewModel;

    @Output() public userClicked = new EventEmitter<UserViewModel>();

    private onTileClick(event: Event): void {
        event.preventDefault();
        this.userClicked.emit(this.user);
    }
}