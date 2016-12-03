import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { EntryViewModel } from '../../models/entry.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'entry-tile',
    templateUrl: 'entry-tile.html',
    styleUrls: ['entry-tile.css']
})
export class EntryTileComponent {

    @Input() public entry: EntryViewModel;

    @Output() public entryClicked = new EventEmitter<EntryViewModel>();

    private onTileClick(event: Event): void {
        event.preventDefault();
        this.entryClicked.emit(this.entry);
    }
}