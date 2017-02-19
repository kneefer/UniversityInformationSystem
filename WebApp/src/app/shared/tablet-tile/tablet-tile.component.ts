import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { TabletViewModel } from '../../models/tablet.model';

@Component({
    selector: 'tablet-tile',
    templateUrl: 'tablet-tile.component.html',
    styleUrls: ['tablet-tile.component.css']
})
export class TabletTileComponent {

    @Input() public tablet: TabletViewModel;

    @Output() public tabletClicked = new EventEmitter<TabletViewModel>();

    private onTabletClick(event: Event): void {
        event.preventDefault();
        this.tabletClicked.emit(this.tablet);
    }
}