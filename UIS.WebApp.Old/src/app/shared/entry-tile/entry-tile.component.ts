import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { EntryViewModel } from '../../models/entry.model';

@Component({
    selector: 'entry-tile',
    templateUrl: 'entry-tile.component.html',
    styleUrls: ['entry-tile.component.css']
})
export class EntryTileComponent {

    @Input() public entry: EntryViewModel;

    @Output() public entryClicked = new EventEmitter<EntryViewModel>();

    private onTileClick(event: Event): void {
        event.preventDefault();
        this.entryClicked.emit(this.entry);
    }
}