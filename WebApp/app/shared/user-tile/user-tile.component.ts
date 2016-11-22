import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'user-tile',
    templateUrl: 'user-tile.html',
    styleUrls: ['user-tile.css']
})
export class UserTileComponent {

    @Input() public user: User;

    @Output() public userClicked = new EventEmitter<User>();

    onClick(): void {
        this.userClicked.emit(this.user);
    }
}