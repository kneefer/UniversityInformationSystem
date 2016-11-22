import { Component } from '@angular/core';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    selector: 'user-tile',
    templateUrl: 'user-tile.html',
    styleUrls: ['user-tile.css']
})
export class UserTileComponent {


}