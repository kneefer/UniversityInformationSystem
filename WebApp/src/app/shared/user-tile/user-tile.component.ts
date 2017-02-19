import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { UserViewModel } from '../../models/user.model';

@Component({
    selector: 'user-tile',
    templateUrl: 'user-tile.component.html',
    styleUrls: ['user-tile.component.css']
})
export class UserTileComponent {

    @Input() public user: UserViewModel;

    @Output() public userClicked = new EventEmitter<UserViewModel>();

    private onTileClick(event: Event): void {
        event.preventDefault();
        this.userClicked.emit(this.user);
    }
}