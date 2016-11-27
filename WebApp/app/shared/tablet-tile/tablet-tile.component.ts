import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TabletViewModel } from '../../models/tablet.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'tablet-tile',
    templateUrl: 'tablet-tile.html',
    styleUrls: ['tablet-tile.css']
})
export class TabletTileComponent {

    @Input() public tablet: TabletViewModel;

    @Output() public tabletClicked = new EventEmitter<TabletViewModel>();

    private onTabletClick(event: Event): void {
        event.preventDefault();
        this.tabletClicked.emit(this.tablet);
    }
}